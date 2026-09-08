import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import {
  AUDIO_DURATION,
  RECITER,
  YOUTUBE_ID,
  cueAt,
  formatTime,
  type Cue,
} from "@/lib/audio";
import { toBn } from "@/lib/utils";

type YTPlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  getPlayerState: () => number;
  getDuration: () => number;
  destroy: () => void;
};

type YTNamespace = {
  Player: new (
    el: HTMLElement | string,
    opts: {
      videoId: string;
      width?: string | number;
      height?: string | number;
      playerVars?: Record<string, string | number>;
      events?: {
        onReady?: () => void;
        onStateChange?: (e: { data: number }) => void;
        onError?: (e: { data: number }) => void;
      };
    },
  ) => YTPlayer;
};

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const PLAYING = 1;
const ENDED = 0;

function loadYouTubeApi(): Promise<YTNamespace> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("no window"));
  }
  if (window.YT?.Player) return Promise.resolve(window.YT);
  return new Promise((resolve, reject) => {
    const done = () => {
      if (window.YT?.Player) resolve(window.YT);
    };
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      done();
    };
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const s = document.createElement("script");
      s.src = "https://www.youtube.com/iframe_api";
      s.async = true;
      s.onerror = () => reject(new Error("YouTube API load failed"));
      document.head.appendChild(s);
    }
    const poll = window.setInterval(() => {
      if (window.YT?.Player) {
        window.clearInterval(poll);
        done();
      }
    }, 120);
    window.setTimeout(() => {
      window.clearInterval(poll);
      if (!window.YT?.Player) reject(new Error("YouTube API timeout"));
    }, 12000);
  });
}

export type AudioMode = "idle" | "clip" | "along";

export function useOriginalAudio() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const clipEndRef = useRef<number | null>(null);
  const onClipEndRef = useRef<(() => void) | null>(null);
  const modeRef = useRef<AudioMode>("idle");

  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [mode, setMode] = useState<AudioMode>("idle");
  const [cue, setCue] = useState<Cue | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    let cancelled = false;
    let player: YTPlayer | null = null;
    let tries = 0;

    const start = () => {
      const box = boxRef.current;
      if (!box) {
        if (!cancelled && tries++ < 30) requestAnimationFrame(start);
        return;
      }

      loadYouTubeApi()
        .then((YT) => {
          if (cancelled) return;
          const target = document.createElement("div");
          target.style.width = "100%";
          target.style.height = "100%";
          box.appendChild(target);
          player = new YT.Player(target, {
            videoId: YOUTUBE_ID,
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 0,
              controls: 0,
              disablekb: 1,
              fs: 0,
              modestbranding: 1,
              rel: 0,
              playsinline: 1,
              cc_load_policy: 0,
              iv_load_policy: 3,
              origin: window.location.origin,
            },
            events: {
              onReady: () => {
                if (!cancelled) setReady(true);
              },
              onStateChange: (e) => {
                if (cancelled) return;
                setPlaying(e.data === PLAYING);
                if (e.data === ENDED) {
                  setMode("idle");
                  modeRef.current = "idle";
                  clipEndRef.current = null;
                  onClipEndRef.current?.();
                  onClipEndRef.current = null;
                }
              },
              onError: () => {
                if (!cancelled) setError("অডিও লোড হয়নি");
              },
            },
          });
          playerRef.current = player;
        })
        .catch(() => {
          if (!cancelled) setError("অরিজিনাল অডিও লোড হয়নি");
        });
    };

    start();

    return () => {
      cancelled = true;
      try {
        player?.destroy();
      } catch {
        /* ignore */
      }
      playerRef.current = null;
      if (boxRef.current) boxRef.current.innerHTML = "";
    };
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      const player = playerRef.current;
      if (!player) return;
      let t = 0;
      try {
        t = player.getCurrentTime() ?? 0;
      } catch {
        return;
      }
      setTime(t);
      setCue(cueAt(t));
      const end = clipEndRef.current;
      if (modeRef.current === "clip" && end != null && t >= end - 0.12) {
        try {
          player.pauseVideo();
        } catch {
          /* ignore */
        }
        clipEndRef.current = null;
        setMode("idle");
        modeRef.current = "idle";
        const cb = onClipEndRef.current;
        onClipEndRef.current = null;
        cb?.();
      }
    }, 200);
    return () => window.clearInterval(id);
  }, []);

  const playClip = useCallback((start: number, end: number, onEnd?: () => void) => {
    const player = playerRef.current;
    if (!player) return false;
    clipEndRef.current = end;
    onClipEndRef.current = onEnd ?? null;
    setMode("clip");
    modeRef.current = "clip";
    try {
      player.seekTo(start, true);
      player.playVideo();
      return true;
    } catch {
      return false;
    }
  }, []);

  const playAlong = useCallback((from = 26) => {
    const player = playerRef.current;
    if (!player) return false;
    clipEndRef.current = null;
    onClipEndRef.current = null;
    setMode("along");
    modeRef.current = "along";
    try {
      player.seekTo(from, true);
      player.playVideo();
      return true;
    } catch {
      return false;
    }
  }, []);

  const pause = useCallback(() => {
    clipEndRef.current = null;
    onClipEndRef.current = null;
    setMode("idle");
    modeRef.current = "idle";
    try {
      playerRef.current?.pauseVideo();
    } catch {
      /* ignore */
    }
  }, []);

  return {
    boxRef,
    ready,
    playing,
    time,
    mode,
    cue,
    error,
    playClip,
    playAlong,
    pause,
  };
}

export function AudioDock({
  boxRef,
  ready,
  playing,
  time,
  cue,
  error,
  onToggle,
  onAlong,
}: {
  boxRef: React.RefObject<HTMLDivElement | null>;
  ready: boolean;
  playing: boolean;
  time: number;
  cue: Cue | null;
  error: string | null;
  onToggle: () => void;
  onAlong: () => void;
}) {
  const progress = Math.min(1, time / AUDIO_DURATION);
  const verseNo = cue ? Number(cue.slideId.replace("v", "")) : 0;
  const label = cue
    ? `শের ${toBn(verseNo)} · লাইন ${toBn(cue.line)}`
    : playing
      ? "অরিজিনাল কণ্ঠ"
      : "প্রতিটি লাইনে অরিজিনাল অডিও";

  return (
    <div
      data-chrome
      className="audio-dock pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-lg px-2 py-2"
    >
      <button
        type="button"
        className="relative h-12 w-20 shrink-0 overflow-hidden rounded-md bg-surface shadow-gold"
        onClick={onAlong}
        aria-label="পুরো কালাম শুনুন"
      >
        <div
          ref={boxRef}
          className="yt-host pointer-events-none absolute inset-0 overflow-hidden"
        />
        {!ready ? (
          <img
            src="/slides/video-thumb.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
      </button>

      <div className="min-w-0 flex-1">
        <p className="truncate text-xs text-gold">{RECITER}</p>
        <p className="truncate text-sm text-cream">{error ?? label}</p>
        <button
          type="button"
          className="mt-1.5 block h-1.5 w-full rounded-full bg-border"
          aria-label="অডিও অগ্রগতি"
          onClick={onAlong}
        >
          <span
            className="block h-full rounded-full bg-gold-bright"
            style={{ width: `${progress * 100}%` }}
          />
        </button>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-1">
        <p className="text-xs text-muted tabular-nums">{formatTime(time)}</p>
        <button
          type="button"
          className="nav-btn size-10 min-h-10 min-w-10"
          onClick={onToggle}
          disabled={!ready && !error}
          aria-label={playing ? "বিরতি" : "অরিজিনাল অডিও চালু"}
        >
          {playing ? <Pause className="size-4" /> : <Play className="ml-px size-4" />}
        </button>
      </div>
    </div>
  );
}
