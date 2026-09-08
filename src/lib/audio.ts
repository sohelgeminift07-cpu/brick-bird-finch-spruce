export const YOUTUBE_ID = "rDBt_kK8iRI";
export const YOUTUBE_URL = `https://youtu.be/${YOUTUBE_ID}`;
export const RECITER = "Voice of Sarsina";
export const AUDIO_DURATION = 470;

export type Cue = {
  start: number;
  end: number;
  slideId: string;
  line: 1 | 2;
};

/** First-pass and refrain map of the original recitation (rDBt_kK8iRI, 7:50). */
export const CUES: Cue[] = [
  { start: 26, end: 35, slideId: "v1", line: 1 },
  { start: 35, end: 49, slideId: "v1", line: 2 },
  { start: 49, end: 79, slideId: "v2", line: 1 },
  { start: 79, end: 96, slideId: "v2", line: 2 },
  { start: 96, end: 103, slideId: "v1", line: 1 },
  { start: 103, end: 110, slideId: "v3", line: 1 },
  { start: 110, end: 134, slideId: "v3", line: 2 },
  { start: 134, end: 144, slideId: "v1", line: 2 },
  { start: 144, end: 164, slideId: "v4", line: 1 },
  { start: 164, end: 175, slideId: "v4", line: 2 },
  { start: 175, end: 192, slideId: "v1", line: 1 },
  { start: 192, end: 210, slideId: "v10", line: 1 },
  { start: 210, end: 229, slideId: "v10", line: 2 },
  { start: 229, end: 254, slideId: "v1", line: 2 },
  { start: 254, end: 272, slideId: "v1", line: 1 },
  { start: 272, end: 287, slideId: "v1", line: 2 },
  { start: 287, end: 302, slideId: "v2", line: 1 },
  { start: 302, end: 320, slideId: "v2", line: 2 },
  { start: 320, end: 331, slideId: "v1", line: 1 },
  { start: 331, end: 345, slideId: "v3", line: 1 },
  { start: 345, end: 359, slideId: "v3", line: 2 },
  { start: 359, end: 378, slideId: "v4", line: 1 },
  { start: 378, end: 406, slideId: "v4", line: 2 },
  { start: 406, end: 422, slideId: "v1", line: 1 },
  { start: 422, end: 430, slideId: "v10", line: 1 },
  { start: 430, end: 445, slideId: "v10", line: 2 },
  { start: 445, end: 470, slideId: "v1", line: 2 },
];

export type VerseClip = {
  start: number;
  line2: number;
  end: number;
};

const FIRST: Record<string, VerseClip> = {
  v1: { start: 26, line2: 35, end: 49 },
  v2: { start: 49, line2: 79, end: 96 },
  v3: { start: 103, line2: 110, end: 134 },
  v4: { start: 144, line2: 164, end: 175 },
  v10: { start: 192, line2: 210, end: 229 },
};

export function verseClip(slideId: string): VerseClip | undefined {
  return FIRST[slideId];
}

export function cueAt(t: number): Cue | null {
  for (const cue of CUES) {
    if (t >= cue.start && t < cue.end) return cue;
  }
  return null;
}

export function clipForLine(slideId: string, line: 1 | 2): { start: number; end: number } | undefined {
  const clip = FIRST[slideId];
  if (!clip) return undefined;
  return line === 1
    ? { start: clip.start, end: clip.line2 }
    : { start: clip.line2, end: clip.end };
}

export function formatTime(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}
