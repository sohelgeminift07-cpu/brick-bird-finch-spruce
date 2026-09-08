import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, List, Pause, Play, Volume2, X } from "lucide-react";
import { CornerFrame, EightPointStar, GoldDivider } from "@/components/ornaments";
import { AudioDock, useOriginalAudio } from "@/components/youtube-audio";
import { clipForLine, verseClip, YOUTUBE_URL } from "@/lib/audio";
import { SLIDES, type Slide } from "@/lib/slides";
import { cn, toBn } from "@/lib/utils";

const DWELL_MS = 9000;

export function Presentation() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [follow, setFollow] = useState(false);
  const [outline, setOutline] = useState(false);
  const [activeLine, setActiveLine] = useState<1 | 2 | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const navigationAudioRef = useRef(false);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const followRef = useRef(false);
  const slideIdRef = useRef("hero");
  const audio = useOriginalAudio();
  const { playClip, playAlong, pause, mode, cue, playing, ready, time, error, boxRef } =
    audio;

  const last = SLIDES.length - 1;
  const slide = SLIDES[index]!;

  useEffect(() => {
    followRef.current = follow;
  }, [follow]);
  useEffect(() => {
    slideIdRef.current = slide.id;
  }, [slide.id]);

  const go = useCallback(
    (nextIndex: number, direction: "next" | "prev") => {
      const clamped = Math.max(0, Math.min(last, nextIndex));
      if (clamped === index) return;
      navigationAudioRef.current = true;
      window.speechSynthesis.cancel();
      speechRef.current = null;
      pause();
      setFollow(false);
      setDir(direction);
      setIndex(clamped);
      setOutline(false);
      setActiveLine(null);
    },
    [index, last, pause],
  );

  const next = useCallback(() => go(index + 1, "next"), [go, index]);
  const prev = useCallback(() => go(index - 1, "prev"), [go, index]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const n = Number.parseInt(hash, 10);
    if (Number.isFinite(n) && n >= 1 && n <= SLIDES.length) {
      setIndex(n - 1);
    }
  }, []);

  useEffect(() => {
    window.history.replaceState(null, "", `#${index + 1}`);
  }, [index]);

  useEffect(() => {
    if (mode === "along" && cue) {
      const i = SLIDES.findIndex((s) => s.id === cue.slideId);
      if (i >= 0 && i !== index) {
        setDir(i > index ? "next" : "prev");
        setIndex(i);
      }
      setActiveLine(cue.line);
      return;
    }
    if (mode === "clip" && cue && cue.slideId === slide.id) {
      setActiveLine(cue.line);
    }
  }, [mode, cue, index, slide.id]);

  const playLine = useCallback(
    (id: string, line: 1 | 2) => {
      const clip = clipForLine(id, line);
      setFollow(false);
      setActiveLine(line);

      window.speechSynthesis.cancel();
      speechRef.current = null;

      if (clip) {
        playClip(clip.start, clip.end, () => {
          if (slideIdRef.current === id) setActiveLine(null);
        });
        return;
      }

      const source = SLIDES.find((item) => item.id === id);
      const text = line === 1 ? source?.urdu : source?.urdu2;
      if (!text || !window.speechSynthesis) {
        setActiveLine(null);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ur-PK";
      utterance.rate = 0.82;
      utterance.onend = () => {
        speechRef.current = null;
        if (slideIdRef.current === id) setActiveLine(null);
      };
      utterance.onerror = () => {
        speechRef.current = null;
        if (slideIdRef.current === id) setActiveLine(null);
      };
      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [playClip],
  );

  useEffect(() => {
    if (!navigationAudioRef.current) return;
    navigationAudioRef.current = false;

    if (slide.kind === "verse") {
      playLine(slide.id, 1);
    } else if (slide.id === "title" || slide.id === "close") {
      playLine("v1", 1);
    }
  }, [index, playLine, slide.id, slide.kind]);

  const playVerse = useCallback(
    (id: string) => {
      const clip = verseClip(id);
      if (!clip) return;
      setFollow(false);
      setActiveLine(1);
      playClip(clip.start, clip.end, () => {
        if (slideIdRef.current === id) setActiveLine(null);
      });
    },
    [playClip],
  );

  useEffect(() => {
    if (!follow || outline) return;
    if (slide.kind === "listen") {
      setFollow(false);
      return;
    }
    const clip =
      verseClip(slide.id) ??
      (slide.id === "title" || slide.id === "close" ? verseClip("v1") : undefined);
    if (clip) {
      const playingId = slide.id;
      setActiveLine(1);
      playClip(clip.start, clip.end, () => {
        if (!followRef.current) return;
        if (slideIdRef.current !== playingId) return;
        setActiveLine(null);
        if (index < last) go(index + 1, "next");
        else setFollow(false);
      });
      return;
    }
    const t = window.setTimeout(() => {
      if (!followRef.current) return;
      if (index < last) go(index + 1, "next");
      else setFollow(false);
    }, DWELL_MS);
    return () => window.clearTimeout(t);
  }, [follow, outline, slide.id, slide.kind, index, last, go, playClip, ready]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0, "prev");
      } else if (e.key === "End") {
        e.preventDefault();
        go(last, "next");
      } else if (e.key === "Escape") {
        setOutline(false);
      } else if (e.key === "o" || e.key === "O") {
        setOutline((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go, last]);

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("[data-chrome]")) return;
    touch.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!touch.current) return;
    const dx = e.clientX - touch.current.x;
    const dy = e.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next();
    else prev();
  };

  const togglePlay = () => {
    if (playing || follow) {
      window.speechSynthesis.cancel();
      speechRef.current = null;
      pause();
      setFollow(false);
      return;
    }
    const clip =
      verseClip(slide.id) ??
      (slide.id === "title" || slide.id === "close" ? verseClip("v1") : undefined);
    if (clip) setFollow(true);
    else playAlong(26);
  };

  const startAlong = () => {
    window.speechSynthesis.cancel();
    speechRef.current = null;
    setFollow(false);
    playAlong(26);
  };

  const autoActive = (follow || mode === "along") && slide.kind !== "listen" && !outline;

  return (
    <div
      className="relative h-dvh w-full overflow-hidden bg-ink text-cream"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <div className="starfield pointer-events-none absolute inset-0 opacity-70" />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-30 h-0.5 origin-left bg-border"
        aria-hidden="true"
      >
        {autoActive ? (
          <div key={index} className="progress-run h-full w-full origin-left bg-gold-bright" />
        ) : (
          <div
            className="h-full w-full origin-left bg-gold"
            style={{ transform: `scaleX(${(index + 1) / SLIDES.length})` }}
          />
        )}
      </div>

      <SlideCanvas
        slide={slide}
        dir={dir}
        activeLine={activeLine}
        onPlayLine={playLine}
        onPlayVerse={playVerse}
        onStartAlong={startAlong}
        playing={playing}
      />

      {outline ? (
        <Outline
          current={index}
          onClose={() => setOutline(false)}
          onPick={(i) => go(i, i > index ? "next" : "prev")}
        />
      ) : null}

      <div
        data-chrome
        className="absolute inset-x-0 bottom-0 z-40 flex flex-col items-center gap-2 px-3 pb-6 md:px-6 md:pb-5"
      >
        <AudioDock
          boxRef={boxRef}
          ready={ready}
          playing={playing}
          time={time}
          cue={cue}
          error={error}
          onToggle={togglePlay}
          onAlong={startAlong}
        />

        <nav className="flex w-full items-center justify-between gap-2" aria-label="স্লাইড চলাচল">
          <button type="button" className="nav-btn" onClick={prev} disabled={index === 0} aria-label="আগের স্লাইড">
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex items-center gap-2 rounded-full bg-ink/70 px-2 py-1 shadow-gold">
            <button
              type="button"
              className="nav-btn size-10 min-h-10 min-w-10"
              onClick={togglePlay}
              aria-label={playing || follow ? "বিরতি" : "শেরে শেরে শুনুন"}
            >
              {playing || follow ? <Pause className="size-4" /> : <Play className="ml-px size-4" />}
            </button>
            <p className="min-w-16 px-1 text-center text-sm text-gold-bright tabular-nums">
              {toBn(index + 1)} / {toBn(SLIDES.length)}
            </p>
            <button
              type="button"
              className="nav-btn size-10 min-h-10 min-w-10"
              onClick={() => setOutline((v) => !v)}
              aria-label="সূচিপত্র"
            >
              {outline ? <X className="size-4" /> : <List className="size-4" />}
            </button>
          </div>

          <button type="button" className="nav-btn" onClick={next} disabled={index === last} aria-label="পরের স্লাইড">
            <ChevronRight className="size-5" />
          </button>
        </nav>
      </div>
    </div>
  );
}

function SlideCanvas({
  slide,
  dir,
  activeLine,
  onPlayLine,
  onPlayVerse,
  onStartAlong,
  playing,
}: {
  slide: Slide;
  dir: "next" | "prev";
  activeLine: 1 | 2 | null;
  onPlayLine: (id: string, line: 1 | 2) => void;
  onPlayVerse: (id: string) => void;
  onStartAlong: () => void;
  playing: boolean;
}) {
  return (
    <div className="absolute inset-0">
      {slide.image ? (
        <img
          src={slide.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover outline outline-1 -outline-offset-1 outline-cream/10"
        />
      ) : null}
      <div className="vignette absolute inset-0" />
      <CornerFrame className="z-10 hidden sm:block" />

      <div
        key={slide.id}
        className={cn(
          "relative z-20 flex h-full w-full items-center justify-center overflow-y-auto px-5 pb-44 pt-10 md:px-16 md:pb-40 md:pt-14",
          dir === "prev" ? "slide-enter-prev" : "slide-enter",
        )}
      >
        {slide.kind === "hero" ? <HeroSlide slide={slide} onStart={onStartAlong} /> : null}
        {slide.kind === "title" ? (
          <TitleSlide slide={slide} activeLine={activeLine} onPlayLine={(line) => onPlayLine("v1", line)} />
        ) : null}
        {slide.kind === "bio" ? <BioSlide slide={slide} /> : null}
        {slide.kind === "intro" ? <IntroSlide slide={slide} /> : null}
        {slide.kind === "verse" ? (
          <VerseSlide
            slide={slide}
            activeLine={activeLine}
            onPlayLine={(line) => onPlayLine(slide.id, line)}
            onPlayVerse={() => onPlayVerse(slide.id)}
          />
        ) : null}
        {slide.kind === "themes" ? <ThemesSlide slide={slide} /> : null}
        {slide.kind === "listen" ? (
          <ListenSlide slide={slide} onStart={onStartAlong} playing={playing} />
        ) : null}
        {slide.kind === "close" ? (
          <CloseSlide slide={slide} onPlay={() => onPlayLine("v1", 1)} />
        ) : null}
      </div>
    </div>
  );
}

function Kicker({ children }: { children: string }) {
  return <p className="text-xs tracking-wide text-gold md:text-sm">{children}</p>;
}

function HeroSlide({ slide, onStart }: { slide: Slide; onStart: () => void }) {
  return (
    <div className="stagger mx-auto flex max-w-3xl flex-col items-center text-center">
      <EightPointStar className="mb-4 size-5 text-gold" />
      <p className="font-ur text-lg text-gold-bright md:text-xl" dir="rtl">
        بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
      </p>
      <GoldDivider />
      <p className="mt-6 text-sm text-gold md:text-base">{slide.kicker}</p>
      <h1 className="mt-2 font-bn text-5xl font-semibold leading-tight text-cream md:text-7xl">
        {slide.title}
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-gold-bright md:text-2xl">
        {slide.bangla}
      </p>
      <div className="mt-8 flex flex-col items-center gap-1 text-sm text-muted md:text-base">
        {slide.body?.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <button
        type="button"
        data-chrome
        onClick={onStart}
        className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-6 text-sm font-medium text-ink shadow-gold transition-transform duration-150 hover:bg-gold-bright active:scale-[0.97]"
      >
        <Play className="size-4 fill-current" />
        অরিজিনাল কণ্ঠে শুনুন
      </button>
      <p className="mt-4 text-xs text-muted">প্রতিটি লাইনে ট্যাপ করুন · তীরচিহ্ন দিয়ে চলুন</p>
    </div>
  );
}

function TitleSlide({
  slide,
  activeLine,
  onPlayLine,
}: {
  slide: Slide;
  activeLine: 1 | 2 | null;
  onPlayLine: (line: 1 | 2) => void;
}) {
  return (
    <div className="stagger mx-auto flex max-w-4xl flex-col items-center text-center">
      <Kicker>{slide.kicker ?? ""}</Kicker>
      <h2 className="mt-3 text-2xl font-semibold text-cream md:text-4xl">{slide.title}</h2>
      <GoldDivider />
      <LineButton dir="rtl" live={activeLine === 1} onPlay={() => onPlayLine(1)} className="font-ur mt-5 text-xl leading-loose md:text-3xl">
        {slide.urdu}
      </LineButton>
      <LineButton dir="rtl" live={activeLine === 2} onPlay={() => onPlayLine(2)} className="font-ur mt-1 text-lg leading-loose md:text-2xl">
        {slide.urdu2}
      </LineButton>
      <div className="mt-5 max-w-2xl space-y-1 text-base leading-relaxed md:text-lg">
        <LineButton live={activeLine === 1} onPlay={() => onPlayLine(1)}>
          {slide.bangla}
        </LineButton>
        <LineButton live={activeLine === 2} onPlay={() => onPlayLine(2)} className="text-gold-bright">
          {slide.bangla2}
        </LineButton>
      </div>
    </div>
  );
}

function BioSlide({ slide }: { slide: Slide }) {
  return (
    <div className="stagger mx-auto grid w-full max-w-5xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
      <div>
        <Kicker>{slide.kicker ?? ""}</Kicker>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-cream md:text-5xl">
          {slide.title}
        </h2>
        <div className="my-5">
          <GoldDivider />
        </div>
        {slide.body?.map((p) => (
          <p key={p} className="text-base leading-relaxed text-gold-bright md:text-lg">
            {p}
          </p>
        ))}
      </div>
      <ul className="grid gap-3">
        {slide.facts?.map((f) => (
          <li key={f.label} className="rounded-lg bg-surface/70 px-4 py-3 shadow-gold">
            <p className="text-xs text-gold">{f.label}</p>
            <p className="mt-1 text-sm text-cream md:text-base">{f.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IntroSlide({ slide }: { slide: Slide }) {
  return (
    <div className="stagger mx-auto max-w-3xl text-center">
      <Kicker>{slide.kicker ?? ""}</Kicker>
      <h2 className="mt-3 text-3xl font-semibold text-cream md:text-5xl">{slide.title}</h2>
      <div className="my-6">
        <GoldDivider />
      </div>
      <div className="space-y-4 text-left text-base leading-relaxed text-gold-bright md:text-lg">
        {slide.body?.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
}

function VerseSlide({
  slide,
  activeLine,
  onPlayLine,
  onPlayVerse,
}: {
  slide: Slide;
  activeLine: 1 | 2 | null;
  onPlayLine: (line: 1 | 2) => void;
  onPlayVerse: () => void;
}) {
  const hasAudio = Boolean(verseClip(slide.id));
  return (
    <div className="stagger mx-auto flex w-full max-w-4xl flex-col items-center text-center">
      <button
        type="button"
        data-chrome
        onClick={onPlayVerse}
        className="mb-4 flex size-12 items-center justify-center rounded-full shadow-gold md:size-14"
        aria-label={hasAudio ? "এই শেরের অরিজিনাল অডিও" : "শের"}
      >
        <span className="text-lg text-gold-bright md:text-xl">{toBn(slide.verseNo ?? 0)}</span>
      </button>
      <Kicker>{slide.kicker ?? ""}</Kicker>
      <h2 className="mt-2 text-2xl font-semibold text-cream md:text-4xl">{slide.title}</h2>
      <LineButton
        dir="rtl"
        live={activeLine === 1}
        onPlay={() => onPlayLine(1)}
        className="font-ur mt-5 max-w-3xl text-xl leading-loose md:text-3xl"
      >
        {slide.urdu}
      </LineButton>
      <LineButton
        dir="rtl"
        live={activeLine === 2}
        onPlay={() => onPlayLine(2)}
        className="font-ur mt-1 max-w-3xl text-lg leading-loose md:text-2xl"
      >
        {slide.urdu2}
      </LineButton>
      <div className="my-5">
        <GoldDivider />
      </div>
      <LineButton live={activeLine === 1} onPlay={() => onPlayLine(1)} className="max-w-2xl text-base md:text-xl">
        {slide.bangla}
      </LineButton>
      <LineButton
        live={activeLine === 2}
        onPlay={() => onPlayLine(2)}
        className="mt-1 max-w-2xl text-sm text-gold-bright md:text-lg"
      >
        {slide.bangla2}
      </LineButton>
      {slide.meaning ? (
        <p className="mt-4 max-w-2xl rounded-lg bg-ink/50 px-4 py-3 text-sm leading-relaxed text-muted shadow-gold md:text-base">
          {slide.meaning}
        </p>
      ) : null}
      <p className="mt-3 flex items-center gap-1.5 text-xs text-gold">
          <Volume2 className="size-3.5" />
          লাইনে ট্যাপ করলে অডিও বাজবে
        </p>
    </div>
  );
}

function ThemesSlide({ slide }: { slide: Slide }) {
  return (
    <div className="stagger mx-auto w-full max-w-5xl">
      <div className="mb-6 text-center">
        <Kicker>{slide.kicker ?? ""}</Kicker>
        <h2 className="mt-2 text-3xl font-semibold text-cream md:text-5xl">{slide.title}</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {slide.themes?.map((t) => (
          <article key={t.title} className="rounded-lg bg-ink/55 p-5 shadow-gold">
            <div className="mb-3 flex items-center gap-2">
              <EightPointStar className="size-3 text-gold" />
              <h3 className="text-lg text-gold-bright md:text-xl">{t.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-cream md:text-base">{t.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function ListenSlide({
  slide,
  onStart,
  playing,
}: {
  slide: Slide;
  onStart: () => void;
  playing: boolean;
}) {
  return (
    <div className="stagger mx-auto flex w-full max-w-4xl flex-col items-center">
      <Kicker>{slide.kicker ?? ""}</Kicker>
      <h2 className="mt-2 text-center text-3xl font-semibold text-cream md:text-5xl">{slide.title}</h2>
      <p className="mt-2 mb-5 text-center text-sm text-gold-bright md:text-base">{slide.bangla}</p>
      <button
        type="button"
        data-chrome
        onClick={onStart}
        className="group relative aspect-video w-full overflow-hidden rounded-lg bg-surface shadow-gold"
        aria-label="অরিজিনাল কালাম শুনুন"
      >
        <img
          src="/slides/video-thumb.jpg"
          alt=""
          className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-cream/10"
        />
        <span className="absolute inset-0 bg-ink/35" />
        <span className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-150 group-hover:scale-105 group-active:scale-[0.96] md:size-20">
          {playing ? <Pause className="size-8 fill-current" /> : <Play className="ml-1 size-8 fill-current" />}
        </span>
      </button>
      <p className="mt-4 text-sm text-muted">
        এখানেই বাজবে ·{" "}
        <a data-chrome href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="text-gold-bright underline-offset-4 hover:underline">
          ইউটিউবে খুলুন
        </a>
      </p>
    </div>
  );
}

function CloseSlide({ slide, onPlay }: { slide: Slide; onPlay: () => void }) {
  return (
    <div className="stagger mx-auto flex max-w-3xl flex-col items-center text-center">
      <EightPointStar className="mb-5 size-6 text-gold" />
      <h2 className="text-5xl font-semibold text-gold-bright md:text-7xl">{slide.title}</h2>
      <LineButton
        dir="rtl"
        live={false}
        onPlay={onPlay}
        className="font-ur mt-8 text-2xl leading-loose md:text-4xl"
      >
        {slide.urdu}
      </LineButton>
      <div className="my-6">
        <GoldDivider />
      </div>
      <LineButton live={false} onPlay={onPlay} className="text-lg text-gold-bright md:text-2xl">
        {slide.bangla}
      </LineButton>
      {slide.body?.map((p) => (
        <p key={p} className="mt-6 text-sm text-muted md:text-base">
          {p}
        </p>
      ))}
    </div>
  );
}

function LineButton({
  children,
  onPlay,
  live,
  className,
  dir,
}: {
  children?: string;
  onPlay: () => void;
  live: boolean;
  className?: string;
  dir?: "rtl" | "ltr";
}) {
  if (!children) return null;
  return (
    <button
      type="button"
      data-chrome
      dir={dir}
      onClick={onPlay}
      className={cn("verse-line", live && "line-live", className)}
    >
      {children}
    </button>
  );
}

function Outline({
  current,
  onClose,
  onPick,
}: {
  current: number;
  onClose: () => void;
  onPick: (i: number) => void;
}) {
  return (
    <div
      data-chrome
      className="absolute inset-0 z-50 flex items-end justify-center bg-ink/70 p-3 md:items-center md:p-8"
      onClick={onClose}
    >
      <div
        className="outline-card max-h-[80dvh] w-full max-w-lg overflow-y-auto rounded-lg p-4 md:p-6"
        role="dialog"
        aria-label="সূচিপত্র"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg text-gold-bright">সূচিপত্র</h2>
          <button type="button" className="nav-btn size-10 min-h-10 min-w-10" onClick={onClose} aria-label="বন্ধ">
            <X className="size-4" />
          </button>
        </div>
        <ol className="grid gap-1">
          {SLIDES.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onPick(i)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-start transition-colors duration-150",
                  i === current ? "bg-gold/15 text-gold-bright" : "text-cream hover:bg-gold/10",
                )}
              >
                <span className="w-8 text-sm text-gold tabular-nums">{toBn(i + 1)}</span>
                <span className="flex-1 text-sm md:text-base">{s.outline}</span>
                {s.kind === "verse" || s.id === "title" || s.id === "listen" ? (
                  <Volume2 className="size-3.5 text-gold" />
                ) : null}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
