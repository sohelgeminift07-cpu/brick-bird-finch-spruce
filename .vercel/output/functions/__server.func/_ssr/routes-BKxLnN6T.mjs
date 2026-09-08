import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Pause, c as ChevronLeft, i as Play, n as Volume2, o as List, s as ChevronRight, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BKxLnN6T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var BN_DIGITS = "০১২৩৪৫৬৭৮৯";
function toBn(value) {
	return String(value).replace(/\d/g, (d) => BN_DIGITS[Number(d)] ?? d);
}
function EightPointStar({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 64 64",
		className: cn("text-gold", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M32 2.5 36.8 22.2 56 18.5 41.8 32 56 45.5 36.8 41.8 32 61.5 27.2 41.8 8 45.5 22.2 32 8 18.5 27.2 22.2Z"
		})
	});
}
function CornerFrame({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("pointer-events-none absolute inset-3 md:inset-5", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-0 left-0 h-10 w-10 border-t border-l border-gold/50 md:h-14 md:w-14" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-0 right-0 h-10 w-10 border-t border-r border-gold/50 md:h-14 md:w-14" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-0 h-10 w-10 border-b border-l border-gold/50 md:h-14 md:w-14" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-0 bottom-0 h-10 w-10 border-b border-r border-gold/50 md:h-14 md:w-14" })
		]
	});
}
function GoldDivider() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-center gap-3",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EightPointStar, { className: "size-3 opacity-90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" })
		]
	});
}
var YOUTUBE_ID = "rDBt_kK8iRI";
var YOUTUBE_URL = `https://youtu.be/${YOUTUBE_ID}`;
var RECITER = "Voice of Sarsina";
/** First-pass and refrain map of the original recitation (rDBt_kK8iRI, 7:50). */
var CUES = [
	{
		start: 26,
		end: 35,
		slideId: "v1",
		line: 1
	},
	{
		start: 35,
		end: 49,
		slideId: "v1",
		line: 2
	},
	{
		start: 49,
		end: 79,
		slideId: "v2",
		line: 1
	},
	{
		start: 79,
		end: 96,
		slideId: "v2",
		line: 2
	},
	{
		start: 96,
		end: 103,
		slideId: "v1",
		line: 1
	},
	{
		start: 103,
		end: 110,
		slideId: "v3",
		line: 1
	},
	{
		start: 110,
		end: 134,
		slideId: "v3",
		line: 2
	},
	{
		start: 134,
		end: 144,
		slideId: "v1",
		line: 2
	},
	{
		start: 144,
		end: 164,
		slideId: "v4",
		line: 1
	},
	{
		start: 164,
		end: 175,
		slideId: "v4",
		line: 2
	},
	{
		start: 175,
		end: 192,
		slideId: "v1",
		line: 1
	},
	{
		start: 192,
		end: 210,
		slideId: "v10",
		line: 1
	},
	{
		start: 210,
		end: 229,
		slideId: "v10",
		line: 2
	},
	{
		start: 229,
		end: 254,
		slideId: "v1",
		line: 2
	},
	{
		start: 254,
		end: 272,
		slideId: "v1",
		line: 1
	},
	{
		start: 272,
		end: 287,
		slideId: "v1",
		line: 2
	},
	{
		start: 287,
		end: 302,
		slideId: "v2",
		line: 1
	},
	{
		start: 302,
		end: 320,
		slideId: "v2",
		line: 2
	},
	{
		start: 320,
		end: 331,
		slideId: "v1",
		line: 1
	},
	{
		start: 331,
		end: 345,
		slideId: "v3",
		line: 1
	},
	{
		start: 345,
		end: 359,
		slideId: "v3",
		line: 2
	},
	{
		start: 359,
		end: 378,
		slideId: "v4",
		line: 1
	},
	{
		start: 378,
		end: 406,
		slideId: "v4",
		line: 2
	},
	{
		start: 406,
		end: 422,
		slideId: "v1",
		line: 1
	},
	{
		start: 422,
		end: 430,
		slideId: "v10",
		line: 1
	},
	{
		start: 430,
		end: 445,
		slideId: "v10",
		line: 2
	},
	{
		start: 445,
		end: 470,
		slideId: "v1",
		line: 2
	}
];
var FIRST = {
	v1: {
		start: 26,
		line2: 35,
		end: 49
	},
	v2: {
		start: 49,
		line2: 79,
		end: 96
	},
	v3: {
		start: 103,
		line2: 110,
		end: 134
	},
	v4: {
		start: 144,
		line2: 164,
		end: 175
	},
	v10: {
		start: 192,
		line2: 210,
		end: 229
	}
};
function verseClip(slideId) {
	return FIRST[slideId];
}
function cueAt(t) {
	for (const cue of CUES) if (t >= cue.start && t < cue.end) return cue;
	return null;
}
function clipForLine(slideId, line) {
	const clip = FIRST[slideId];
	if (!clip) return void 0;
	return line === 1 ? {
		start: clip.start,
		end: clip.line2
	} : {
		start: clip.line2,
		end: clip.end
	};
}
function formatTime(seconds) {
	const s = Math.max(0, Math.floor(seconds));
	return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
}
var PLAYING = 1;
var ENDED = 0;
function loadYouTubeApi() {
	if (typeof window === "undefined") return Promise.reject(/* @__PURE__ */ new Error("no window"));
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
		if (!document.querySelector("script[src=\"https://www.youtube.com/iframe_api\"]")) {
			const s = document.createElement("script");
			s.src = "https://www.youtube.com/iframe_api";
			s.async = true;
			s.onerror = () => reject(/* @__PURE__ */ new Error("YouTube API load failed"));
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
			if (!window.YT?.Player) reject(/* @__PURE__ */ new Error("YouTube API timeout"));
		}, 12e3);
	});
}
function useOriginalAudio() {
	const boxRef = (0, import_react.useRef)(null);
	const playerRef = (0, import_react.useRef)(null);
	const clipEndRef = (0, import_react.useRef)(null);
	const onClipEndRef = (0, import_react.useRef)(null);
	const modeRef = (0, import_react.useRef)("idle");
	const [ready, setReady] = (0, import_react.useState)(false);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [time, setTime] = (0, import_react.useState)(0);
	const [mode, setMode] = (0, import_react.useState)("idle");
	const [cue, setCue] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		modeRef.current = mode;
	}, [mode]);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		let player = null;
		let tries = 0;
		const start = () => {
			const box = boxRef.current;
			if (!box) {
				if (!cancelled && tries++ < 30) requestAnimationFrame(start);
				return;
			}
			loadYouTubeApi().then((YT) => {
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
						origin: window.location.origin
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
						}
					}
				});
				playerRef.current = player;
			}).catch(() => {
				if (!cancelled) setError("অরিজিনাল অডিও লোড হয়নি");
			});
		};
		start();
		return () => {
			cancelled = true;
			try {
				player?.destroy();
			} catch {}
			playerRef.current = null;
			if (boxRef.current) boxRef.current.innerHTML = "";
		};
	}, []);
	(0, import_react.useEffect)(() => {
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
			if (modeRef.current === "clip" && end != null && t >= end - .12) {
				try {
					player.pauseVideo();
				} catch {}
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
	return {
		boxRef,
		ready,
		playing,
		time,
		mode,
		cue,
		error,
		playClip: (0, import_react.useCallback)((start, end, onEnd) => {
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
		}, []),
		playAlong: (0, import_react.useCallback)((from = 26) => {
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
		}, []),
		pause: (0, import_react.useCallback)(() => {
			clipEndRef.current = null;
			onClipEndRef.current = null;
			setMode("idle");
			modeRef.current = "idle";
			try {
				playerRef.current?.pauseVideo();
			} catch {}
		}, [])
	};
}
function AudioDock({ boxRef, ready, playing, time, cue, error, onToggle, onAlong }) {
	const progress = Math.min(1, time / 470);
	const verseNo = cue ? Number(cue.slideId.replace("v", "")) : 0;
	const label = cue ? `শের ${toBn(verseNo)} · লাইন ${toBn(cue.line)}` : playing ? "অরিজিনাল কণ্ঠ" : "প্রতিটি লাইনে অরিজিনাল অডিও";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-chrome": true,
		className: "audio-dock pointer-events-auto flex w-full max-w-lg items-center gap-3 rounded-lg px-2 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "relative h-12 w-20 shrink-0 overflow-hidden rounded-md bg-surface shadow-gold",
				onClick: onAlong,
				"aria-label": "পুরো কালাম শুনুন",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: boxRef,
					className: "yt-host pointer-events-none absolute inset-0 overflow-hidden"
				}), !ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/slides/video-thumb.jpg",
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs text-gold",
						children: RECITER
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm text-cream",
						children: error ?? label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-1.5 block h-1.5 w-full rounded-full bg-border",
						"aria-label": "অডিও অগ্রগতি",
						onClick: onAlong,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block h-full rounded-full bg-gold-bright",
							style: { width: `${progress * 100}%` }
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-col items-end gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted tabular-nums",
					children: formatTime(time)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "nav-btn size-10 min-h-10 min-w-10",
					onClick: onToggle,
					disabled: !ready && !error,
					"aria-label": playing ? "বিরতি" : "অরিজিনাল অডিও চালু",
					children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-px size-4" })
				})]
			})
		]
	});
}
var SLIDES = [
	{
		id: "hero",
		kind: "hero",
		outline: "সূচনা",
		kicker: "কালামে ইকবাল",
		title: "ইয়া রব",
		bangla: "দিল-এ-মুসলিম কো ওহ জিন্দা তামান্না দে",
		body: ["আল্লামা মুহাম্মদ ইকবাল রহ.", "Voice of Sarsina · অরিজিনাল কণ্ঠে, শেরে শেরে"],
		image: "/slides/cover.jpg"
	},
	{
		id: "title",
		kind: "title",
		outline: "কালামের নাম",
		kicker: "বাং-ই-দারা · ১৯২৪ · দোয়া",
		title: "ইয়া রব দিল-এ-মুসলিম কো",
		urdu: "یا رب! دلِ مسلم کو وہ زندہ تمنّا دے",
		urdu2: "جو قلب کو گرما دے، جو رُوح کو تڑپا دے",
		bangla: "হে রব! মুসলিমের হৃদয়ে সে জীবন্ত আকাঙ্ক্ষা দাও",
		bangla2: "যা হৃদয়কে উত্তপ্ত করে, যা রূহকে ব্যাকুল করে তোলে।",
		image: "/slides/cover.jpg"
	},
	{
		id: "bio",
		kind: "bio",
		outline: "আল্লামা ইকবাল",
		kicker: "শায়েরে মাশরেক · হাকীমুল উম্মত",
		title: "আল্লামা মুহাম্মদ ইকবাল",
		body: ["প্রাচ্যের কবি, দার্শনিক, ব্যারিস্টার। খুদি — আত্মশক্তির দর্শনে তিনি উম্মাহকে ঘুম থেকে তুলতে চেয়েছিলেন। এই দোয়া সেই জাগরণের প্রার্থনা।"],
		facts: [
			{
				label: "জন্ম",
				value: "৯ নভেম্বর ১৮৭৭, শিয়ালকোট"
			},
			{
				label: "ইন্তেকাল",
				value: "২১ এপ্রিল ১৯৩৮, লাহোর"
			},
			{
				label: "শিক্ষা",
				value: "লাহোর · কেমব্রিজ · লিংকনস ইন · মিউনিখ"
			},
			{
				label: "খ্যাতি",
				value: "আসরার-ই-খুদি · বাং-ই-দারা · বাল-ই-জিব্রিল"
			}
		],
		image: "/slides/cover.jpg"
	},
	{
		id: "intro",
		kind: "intro",
		outline: "এই দোয়া",
		kicker: "কেন এই কালাম",
		title: "ঘুমন্ত হৃদয়ের জন্য একটি দোয়া",
		body: [
			"ইকবাল উম্মাহকে শুধু উপদেশ দেননি — তিনি আল্লাহর দরবারে দাঁড়িয়ে প্রার্থনা করেছেন। এই কবিতা সেই মুনাজাত।",
			"ফারানের উপত্যকা থেকে হারাম, লায়লার প্রেম থেকে সুরাইয়ার উচ্চতা — প্রতিটি শের একটি করে চাওয়া। মৃত আচার নয়, জীবন্ত তামান্না।",
			"প্রতিটি শেরে ট্যাপ করুন — অরিজিনাল কণ্ঠে সেই লাইনটি বাজবে। প্লে চাপলে কালামটি শেরে শেরে চলবে।"
		],
		image: "/slides/faran.jpg"
	},
	{
		id: "v1",
		kind: "verse",
		outline: "শের ১ · জীবন্ত আকাঙ্ক্ষা",
		kicker: "প্রথম শের",
		title: "জীবন্ত আকাঙ্ক্ষা",
		urdu: "یا رب! دلِ مسلم کو وہ زندہ تمنّا دے",
		urdu2: "جو قلب کو گرما دے، جو رُوح کو تڑپا دے",
		bangla: "হে রব! মুসলিমের হৃদয়ে সে জীবন্ত আকাঙ্ক্ষা দাও",
		bangla2: "যা হৃদয়কে উত্তপ্ত করে, যা রূহকে ব্যাকুল করে তোলে।",
		meaning: "ইকবাল মৃত রীতি চান না। চান এমন তামান্না যা বুক গরম করে, রূহকে অস্থির করে — যে আগুন ছাড়া ঈমান শুধু অভ্যাস।",
		image: "/slides/cover.jpg",
		verseNo: 1
	},
	{
		id: "v2",
		kind: "verse",
		outline: "শের ২ · ফারানের নূর",
		kicker: "দ্বিতীয় শের",
		title: "ফারানের প্রতিটি কণা",
		urdu: "پھر وادیِ فاراں کے ہر ذرّے کو چمکا دے",
		urdu2: "پھر شوقِ تماشا دے، پھر ذوقِ تقاضا دے",
		bangla: "ফারান উপত্যকার প্রতিটি ধূলিকণাকে আবার জ্বালিয়ে দাও",
		bangla2: "আবার দর্শনের তৃষ্ণা দাও, আবার প্রার্থনার স্বাদ দাও।",
		meaning: "ওয়াদি-এ-ফারান হিজাজের উপত্যকা — ইসমাঈল আ. ও হারামের স্মৃতি। ইকবাল চান উৎসভূমির নূর আবার জ্বলুক, আর উম্মাহ আবার চাইতে শিখুক।",
		image: "/slides/faran.jpg",
		verseNo: 2
	},
	{
		id: "v3",
		kind: "verse",
		outline: "শের ৩ · দৃষ্টি",
		kicker: "তৃতীয় শের",
		title: "দর্শনহীনকে দৃষ্টি দাও",
		urdu: "محرومِ تماشا کو پھر دیدۂ بِینا دے",
		urdu2: "دیکھا ہے جو کچھ میں نے اَوروں کو بھی دِکھلا دے",
		bangla: "দর্শন থেকে বঞ্চিতকে আবার দৃষ্টিমান চোখ দাও",
		bangla2: "আমি যা দেখেছি, অন্যদেরও তা দেখাও।",
		meaning: "কবি যা দেখেছেন — উম্মাহর সম্ভাবনা, তওহিদের জ্যোতি — তা যেন সবার চোখে খুলে যায়। আধ্যাত্মিক অন্ধত্বের বিপরীতে বাসিরাহ।",
		image: "/slides/faran.jpg",
		verseNo: 3
	},
	{
		id: "v4",
		kind: "verse",
		outline: "শের ৪ · হারামে ফেরা",
		kicker: "চতুর্থ শের",
		title: "পথহারা হরিণ",
		urdu: "بھٹکے ہوئے آہُو کو پھر سُوئے حرم لے چل",
		urdu2: "اس شہر کے خُوگر کو پھر وسعتِ صحرا دے",
		bangla: "পথহারা হরিণকে আবার হারামের দিকে নিয়ে চলো",
		bangla2: "নগরের অভ্যস্তকে আবার মরুপ্রান্তরের প্রশস্ততা দাও।",
		meaning: "উম্মাহ পথ হারিয়েছে। শহরের সংকীর্ণ ভোগে অভ্যস্ত হরিণকে কাবার দিকে ফেরাও — মরুভূমির প্রশস্ততা মানে স্বাধীনতা ও তওয়াক্কুল।",
		image: "/slides/gazelle.jpg",
		verseNo: 4
	},
	{
		id: "v5",
		kind: "verse",
		outline: "শের ৫ · কিয়ামতের কলরব",
		kicker: "পঞ্চম শের",
		title: "বিরান হৃদয়ে মহশর",
		urdu: "پیدا دلِ ویراں میں پھر شورشِ محشر کر",
		urdu2: "اس محملِ خالی کو پھر شاہدِ لیلا دے",
		bangla: "বিরান হৃদয়ে আবার কিয়ামতের কলরব জাগাও",
		bangla2: "এই শূন্য পালকিতে আবার লায়লার সাক্ষী বসাও।",
		meaning: "হৃদয় খালি পালকি। লায়লা এখানে ঐশী প্রেমের প্রতীক। ইকবাল চান শূন্য বুকে আবার সেই প্রেম বসুক — কিয়ামতের মতো কম্পন নিয়ে।",
		image: "/slides/cover.jpg",
		verseNo: 5
	},
	{
		id: "v6",
		kind: "verse",
		outline: "শের ৬ · প্রেমের দাগ",
		kicker: "ষষ্ঠ শের",
		title: "চাঁদকে লজ্জা দেয় যে প্রেম",
		urdu: "اس دور کی ظُلمت میں ہر قلبِ پریشاں کو",
		urdu2: "وہ داغِ محبّت دے جو چاند کو شرما دے",
		bangla: "এই যুগের অন্ধকারে প্রতিটি উদ্বিগ্ন হৃদয়ে",
		bangla2: "সেই প্রেমের দাগ দাও, যা চাঁদকেও লজ্জা দেয়।",
		meaning: "যুগ অন্ধকার, হৃদয় উদ্বিগ্ন। ইকবাল চান এমন ইশক যা চাঁদের দাগকেও হার মানায় — আল্লাহর প্রেমে জ্বলতে থাকা চিহ্ন।",
		image: "/slides/cover.jpg",
		verseNo: 6
	},
	{
		id: "v7",
		kind: "verse",
		outline: "শের ৭ · সুরাইয়ার উচ্চতা",
		kicker: "সপ্তম শের",
		title: "তীরের মর্যাদা, নদীর স্বাধীনতা",
		urdu: "رفعت میں مقاصد کو ہمدوشِ ثریّا کر",
		urdu2: "خودداریِ ساحل دے، آزادیِ دریا دے",
		bangla: "লক্ষ্যকে সুরাইয়া তারকার সমউচ্চতায় তোলো",
		bangla2: "তীরের আত্মমর্যাদা দাও, নদীর স্বাধীনতা দাও।",
		meaning: "সুরাইয়া — সাত তারকার গুচ্ছ, আকাশের উচ্চতা। ইকবাল চান স্থির মর্যাদা (তীর) আর অবাধ গতি (নদী) একসাথে — খুদির ভারসাম্য।",
		image: "/slides/shore.jpg",
		verseNo: 7
	},
	{
		id: "v8",
		kind: "verse",
		outline: "শের ৮ · নিষ্কলুষ ভালোবাসা",
		kicker: "অষ্টম শের",
		title: "নির্ভীক সত্য",
		urdu: "بے لَوث محبّت ہو، بے باک صداقت ہو",
		urdu2: "سینوں میں اُجالا کر، دل صورتِ مینا دے",
		bangla: "ভালোবাসা হোক নিষ্কলুষ, সত্য হোক নির্ভীক",
		bangla2: "বক্ষে আলো জ্বালাও, হৃদয়কে স্ফটিকপাত্রের মতো স্বচ্ছ করো।",
		meaning: "মীনা — স্বচ্ছ মদের পাত্র। ইকবাল চান বুক আলোকিত হোক, হৃদয় স্বচ্ছ হোক — স্বার্থহীন মহব্বত, ভয়হীন সত্য।",
		image: "/slides/shore.jpg",
		verseNo: 8
	},
	{
		id: "v9",
		kind: "verse",
		outline: "শের ৯ · আগামীর চিন্তা",
		kicker: "নবম শের",
		title: "আজকের শোর, আগামীর ভয়",
		urdu: "احساسِ عنایت کر آثارِ مصیبت کا",
		urdu2: "امروز کی شورش میں اندیشۂ فردا دے",
		bangla: "বিপদের আলামত চেনার অনুভূতি দাও",
		bangla2: "আজকের কোলাহলে আগামীর চিন্তা দাও।",
		meaning: "উম্মাহ আজকের শোরগোলে হারিয়ে যায়। ইকবাল চান ফারাসাত — বিপদ আসার আগেই তার চিহ্ন চেনা, আর কালকের দায়িত্ব নেওয়া।",
		image: "/slides/faran.jpg",
		verseNo: 9
	},
	{
		id: "v10",
		kind: "verse",
		outline: "শের ১০ · উজাড় বাগান",
		kicker: "শেষ শের",
		title: "বিলাপী বুলবুল",
		urdu: "مَیں بُلبلِ نالاں ہوں اِک اُجڑے گُلستاں کا",
		urdu2: "تاثیر کا سائل ہوں، محتاج کو، داتا دے!",
		bangla: "আমি এক উজাড় বাগানের বিলাপী বুলবুল",
		bangla2: "প্রভাবের প্রার্থী আমি — এই অভাবিকে, হে দাতা, দান করো।",
		meaning: "কবি নিজেকে ধ্বংসপ্রাপ্ত বাগানের বুলবুল বলেন। গান আছে, বাগান নেই। তিনি প্রার্থনা করেন — এই ফরিয়াদ যেন নিষ্ফল না হয়, দাতা যেন তাসির দান করেন।",
		image: "/slides/nightingale.jpg",
		verseNo: 10
	},
	{
		id: "themes",
		kind: "themes",
		outline: "সারকথা",
		kicker: "দোয়ার মর্ম",
		title: "চারটি আগুন",
		themes: [
			{
				title: "জীবন্ত তামান্না",
				text: "অভ্যাসের ঈমান নয় — এমন আকাঙ্ক্ষা যা রূহকে ব্যাকুল করে।"
			},
			{
				title: "হারামে প্রত্যাবর্তন",
				text: "পথহারা হরিণকে কাবার দিকে, নগর থেকে মরুপ্রান্তরের প্রশস্ততায়।"
			},
			{
				title: "সুরাইয়ার লক্ষ্য",
				text: "তীরের আত্মমর্যাদা আর নদীর স্বাধীনতা — উচ্চ লক্ষ্য, স্বচ্ছ হৃদয়।"
			},
			{
				title: "উজাড় বাগানের গান",
				text: "কবি বুলবুল, উম্মাহ উজাড় বাগান — তবু দাতার কাছে তাসির চান।"
			}
		],
		image: "/slides/nightingale.jpg"
	},
	{
		id: "listen",
		kind: "listen",
		outline: "শ্রবণ",
		kicker: "Voice of Sarsina",
		title: "কালামটি শুনুন",
		bangla: "ইয়া রব দিল মুসলিম কো · আল্লামা ইকবাল রহ.",
		body: ["অরিজিনাল কণ্ঠ এখানেই চলবে — পুরো কালাম, লাইনে লাইনে আলোকিত।"],
		image: "/slides/video-thumb.jpg"
	},
	{
		id: "close",
		kind: "close",
		outline: "আমীন",
		kicker: "সমাপ্তি",
		title: "আমীন",
		urdu: "یا رب! دلِ مسلم کو وہ زندہ تمنّا دے",
		bangla: "হে রব, মুসলিমের হৃদয়ে সে জীবন্ত আকাঙ্ক্ষা দাও।",
		body: ["আল্লামা মুহাম্মদ ইকবাল রহ. এর দোয়া কবুল হোক।"],
		image: "/slides/cover.jpg"
	}
];
var DWELL_MS = 9e3;
function Presentation() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [dir, setDir] = (0, import_react.useState)("next");
	const [follow, setFollow] = (0, import_react.useState)(false);
	const [outline, setOutline] = (0, import_react.useState)(false);
	const [activeLine, setActiveLine] = (0, import_react.useState)(null);
	const touch = (0, import_react.useRef)(null);
	const followRef = (0, import_react.useRef)(false);
	const slideIdRef = (0, import_react.useRef)("hero");
	const { playClip, playAlong, pause, mode, cue, playing, ready, time, error, boxRef } = useOriginalAudio();
	const last = SLIDES.length - 1;
	const slide = SLIDES[index];
	(0, import_react.useEffect)(() => {
		followRef.current = follow;
	}, [follow]);
	(0, import_react.useEffect)(() => {
		slideIdRef.current = slide.id;
	}, [slide.id]);
	const go = (0, import_react.useCallback)((nextIndex, direction) => {
		const clamped = Math.max(0, Math.min(last, nextIndex));
		if (clamped === index) return;
		setDir(direction);
		setIndex(clamped);
		setOutline(false);
		setActiveLine(null);
	}, [index, last]);
	const next = (0, import_react.useCallback)(() => go(index + 1, "next"), [go, index]);
	const prev = (0, import_react.useCallback)(() => go(index - 1, "prev"), [go, index]);
	(0, import_react.useEffect)(() => {
		const hash = window.location.hash.replace("#", "");
		const n = Number.parseInt(hash, 10);
		if (Number.isFinite(n) && n >= 1 && n <= SLIDES.length) setIndex(n - 1);
	}, []);
	(0, import_react.useEffect)(() => {
		window.history.replaceState(null, "", `#${index + 1}`);
	}, [index]);
	(0, import_react.useEffect)(() => {
		if (mode === "along" && cue) {
			const i = SLIDES.findIndex((s) => s.id === cue.slideId);
			if (i >= 0 && i !== index) {
				setDir(i > index ? "next" : "prev");
				setIndex(i);
			}
			setActiveLine(cue.line);
			return;
		}
		if (mode === "clip" && cue && cue.slideId === slide.id) setActiveLine(cue.line);
	}, [
		mode,
		cue,
		index,
		slide.id
	]);
	const playLine = (0, import_react.useCallback)((id, line) => {
		const clip = clipForLine(id, line);
		if (!clip) return;
		setFollow(false);
		setActiveLine(line);
		playClip(clip.start, clip.end, () => {
			if (slideIdRef.current === id) setActiveLine(null);
		});
	}, [playClip]);
	const playVerse = (0, import_react.useCallback)((id) => {
		const clip = verseClip(id);
		if (!clip) return;
		setFollow(false);
		setActiveLine(1);
		playClip(clip.start, clip.end, () => {
			if (slideIdRef.current === id) setActiveLine(null);
		});
	}, [playClip]);
	(0, import_react.useEffect)(() => {
		if (!follow || outline) return;
		if (slide.kind === "listen") {
			setFollow(false);
			return;
		}
		const clip = verseClip(slide.id) ?? (slide.id === "title" || slide.id === "close" ? verseClip("v1") : void 0);
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
	}, [
		follow,
		outline,
		slide.id,
		slide.kind,
		index,
		last,
		go,
		playClip,
		ready
	]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
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
			} else if (e.key === "Escape") setOutline(false);
			else if (e.key === "o" || e.key === "O") setOutline((v) => !v);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		next,
		prev,
		go,
		last
	]);
	const onPointerDown = (e) => {
		if (e.target.closest("[data-chrome]")) return;
		touch.current = {
			x: e.clientX,
			y: e.clientY
		};
	};
	const onPointerUp = (e) => {
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
			pause();
			setFollow(false);
			return;
		}
		if (verseClip(slide.id) ?? (slide.id === "title" || slide.id === "close" ? verseClip("v1") : void 0)) setFollow(true);
		else playAlong(26);
	};
	const startAlong = () => {
		setFollow(false);
		playAlong(26);
	};
	const autoActive = (follow || mode === "along") && slide.kind !== "listen" && !outline;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-dvh w-full overflow-hidden bg-ink text-cream",
		onPointerDown,
		onPointerUp,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "starfield pointer-events-none absolute inset-0 opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 top-0 z-30 h-0.5 origin-left bg-border",
				"aria-hidden": "true",
				children: autoActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "progress-run h-full w-full origin-left bg-gold-bright" }, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full w-full origin-left bg-gold",
					style: { transform: `scaleX(${(index + 1) / SLIDES.length})` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideCanvas, {
				slide,
				dir,
				activeLine,
				onPlayLine: playLine,
				onPlayVerse: playVerse,
				onStartAlong: startAlong,
				playing
			}),
			outline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outline, {
				current: index,
				onClose: () => setOutline(false),
				onPick: (i) => go(i, i > index ? "next" : "prev")
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-chrome": true,
				className: "absolute inset-x-0 bottom-0 z-40 flex flex-col items-center gap-2 px-3 pb-6 md:px-6 md:pb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioDock, {
					boxRef,
					ready,
					playing,
					time,
					cue,
					error,
					onToggle: togglePlay,
					onAlong: startAlong
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex w-full items-center justify-between gap-2",
					"aria-label": "স্লাইড চলাচল",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "nav-btn",
							onClick: prev,
							disabled: index === 0,
							"aria-label": "আগের স্লাইড",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-full bg-ink/70 px-2 py-1 shadow-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "nav-btn size-10 min-h-10 min-w-10",
									onClick: togglePlay,
									"aria-label": playing || follow ? "বিরতি" : "শেরে শেরে শুনুন",
									children: playing || follow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-px size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "min-w-16 px-1 text-center text-sm text-gold-bright tabular-nums",
									children: [
										toBn(index + 1),
										" / ",
										toBn(SLIDES.length)
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "nav-btn size-10 min-h-10 min-w-10",
									onClick: () => setOutline((v) => !v),
									"aria-label": "সূচিপত্র",
									children: outline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-4" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "nav-btn",
							onClick: next,
							disabled: index === last,
							"aria-label": "পরের স্লাইড",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
						})
					]
				})]
			})
		]
	});
}
function SlideCanvas({ slide, dir, activeLine, onPlayLine, onPlayVerse, onStartAlong, playing }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0",
		children: [
			slide.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: slide.image,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover outline outline-1 -outline-offset-1 outline-cream/10"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerFrame, { className: "z-10 hidden sm:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("relative z-20 flex h-full w-full items-center justify-center px-5 pb-40 pt-10 md:px-16 md:pb-36 md:pt-14", dir === "prev" ? "slide-enter-prev" : "slide-enter"),
				children: [
					slide.kind === "hero" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlide, {
						slide,
						onStart: onStartAlong
					}) : null,
					slide.kind === "title" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleSlide, {
						slide,
						activeLine,
						onPlayLine: (line) => onPlayLine("v1", line)
					}) : null,
					slide.kind === "bio" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BioSlide, { slide }) : null,
					slide.kind === "intro" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroSlide, { slide }) : null,
					slide.kind === "verse" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerseSlide, {
						slide,
						activeLine,
						onPlayLine: (line) => onPlayLine(slide.id, line),
						onPlayVerse: () => onPlayVerse(slide.id)
					}) : null,
					slide.kind === "themes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemesSlide, { slide }) : null,
					slide.kind === "listen" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListenSlide, {
						slide,
						onStart: onStartAlong,
						playing
					}) : null,
					slide.kind === "close" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseSlide, {
						slide,
						onPlay: () => onPlayLine("v1", 1)
					}) : null
				]
			}, slide.id)
		]
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs tracking-wide text-gold md:text-sm",
		children
	});
}
function HeroSlide({ slide, onStart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger mx-auto flex max-w-3xl flex-col items-center text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EightPointStar, { className: "mb-4 size-5 text-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-ur text-lg text-gold-bright md:text-xl",
				dir: "rtl",
				children: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldDivider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-gold md:text-base",
				children: slide.kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-bn text-5xl font-semibold leading-tight text-cream md:text-7xl",
				children: slide.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-lg leading-relaxed text-gold-bright md:text-2xl",
				children: slide.bangla
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-col items-center gap-1 text-sm text-muted md:text-base",
				children: slide.body?.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"data-chrome": true,
				onClick: onStart,
				className: "mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-6 text-sm font-medium text-ink shadow-gold transition-transform duration-150 hover:bg-gold-bright active:scale-[0.97]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 fill-current" }), "অরিজিনাল কণ্ঠে শুনুন"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs text-muted",
				children: "প্রতিটি লাইনে ট্যাপ করুন · তীরচিহ্ন দিয়ে চলুন"
			})
		]
	});
}
function TitleSlide({ slide, activeLine, onPlayLine }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger mx-auto flex max-w-4xl flex-col items-center text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: slide.kicker ?? "" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-2xl font-semibold text-cream md:text-4xl",
				children: slide.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldDivider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineButton, {
				dir: "rtl",
				live: activeLine === 1,
				onPlay: () => onPlayLine(1),
				className: "font-ur mt-5 text-xl leading-loose md:text-3xl",
				children: slide.urdu
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineButton, {
				dir: "rtl",
				live: activeLine === 2,
				onPlay: () => onPlayLine(2),
				className: "font-ur mt-1 text-lg leading-loose md:text-2xl",
				children: slide.urdu2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 max-w-2xl space-y-1 text-base leading-relaxed md:text-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineButton, {
					live: activeLine === 1,
					onPlay: () => onPlayLine(1),
					children: slide.bangla
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineButton, {
					live: activeLine === 2,
					onPlay: () => onPlayLine(2),
					className: "text-gold-bright",
					children: slide.bangla2
				})]
			})
		]
	});
}
function BioSlide({ slide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger mx-auto grid w-full max-w-5xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: slide.kicker ?? "" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl font-semibold leading-tight text-cream md:text-5xl",
				children: slide.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldDivider, {})
			}),
			slide.body?.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base leading-relaxed text-gold-bright md:text-lg",
				children: p
			}, p))
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3",
			children: slide.facts?.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-lg bg-surface/70 px-4 py-3 shadow-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-gold",
					children: f.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-cream md:text-base",
					children: f.value
				})]
			}, f.label))
		})]
	});
}
function IntroSlide({ slide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger mx-auto max-w-3xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: slide.kicker ?? "" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl font-semibold text-cream md:text-5xl",
				children: slide.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldDivider, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4 text-left text-base leading-relaxed text-gold-bright md:text-lg",
				children: slide.body?.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
			})
		]
	});
}
function VerseSlide({ slide, activeLine, onPlayLine, onPlayVerse }) {
	const hasAudio = Boolean(verseClip(slide.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger mx-auto flex w-full max-w-4xl flex-col items-center text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"data-chrome": true,
				onClick: onPlayVerse,
				className: "mb-4 flex size-12 items-center justify-center rounded-full shadow-gold md:size-14",
				"aria-label": hasAudio ? "এই শেরের অরিজিনাল অডিও" : "শের",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg text-gold-bright md:text-xl",
					children: toBn(slide.verseNo ?? 0)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: slide.kicker ?? "" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-2xl font-semibold text-cream md:text-4xl",
				children: slide.title
			}),
			hasAudio ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineButton, {
				dir: "rtl",
				live: activeLine === 1,
				onPlay: () => onPlayLine(1),
				className: "font-ur mt-5 max-w-3xl text-xl leading-loose md:text-3xl",
				children: slide.urdu
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineButton, {
				dir: "rtl",
				live: activeLine === 2,
				onPlay: () => onPlayLine(2),
				className: "font-ur mt-1 max-w-3xl text-lg leading-loose md:text-2xl",
				children: slide.urdu2
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-ur mt-5 max-w-3xl text-xl leading-loose text-gold-bright md:text-3xl",
				dir: "rtl",
				children: slide.urdu
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-ur mt-1 max-w-3xl text-lg leading-loose text-gold md:text-2xl",
				dir: "rtl",
				children: slide.urdu2
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldDivider, {})
			}),
			hasAudio ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineButton, {
				live: activeLine === 1,
				onPlay: () => onPlayLine(1),
				className: "max-w-2xl text-base md:text-xl",
				children: slide.bangla
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineButton, {
				live: activeLine === 2,
				onPlay: () => onPlayLine(2),
				className: "mt-1 max-w-2xl text-sm text-gold-bright md:text-lg",
				children: slide.bangla2
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-base leading-relaxed text-cream md:text-xl",
				children: slide.bangla
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-2xl text-sm leading-relaxed text-gold-bright md:text-lg",
				children: slide.bangla2
			})] }),
			slide.meaning ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl rounded-lg bg-ink/50 px-4 py-3 text-sm leading-relaxed text-muted shadow-gold md:text-base",
				children: slide.meaning
			}) : null,
			hasAudio ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 flex items-center gap-1.5 text-xs text-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-3.5" }), "লাইনে ট্যাপ করলে অরিজিনাল কণ্ঠ বাজবে"]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted",
				children: "এই শেরটি এই কণ্ঠে গাওয়া হয়নি — পড়ে শুনুন"
			})
		]
	});
}
function ThemesSlide({ slide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger mx-auto w-full max-w-5xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: slide.kicker ?? "" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-3xl font-semibold text-cream md:text-5xl",
				children: slide.title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: slide.themes?.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-lg bg-ink/55 p-5 shadow-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EightPointStar, { className: "size-3 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg text-gold-bright md:text-xl",
						children: t.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-cream md:text-base",
					children: t.text
				})]
			}, t.title))
		})]
	});
}
function ListenSlide({ slide, onStart, playing }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger mx-auto flex w-full max-w-4xl flex-col items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: slide.kicker ?? "" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-center text-3xl font-semibold text-cream md:text-5xl",
				children: slide.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 mb-5 text-center text-sm text-gold-bright md:text-base",
				children: slide.bangla
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"data-chrome": true,
				onClick: onStart,
				className: "group relative aspect-video w-full overflow-hidden rounded-lg bg-surface shadow-gold",
				"aria-label": "অরিজিনাল কালাম শুনুন",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/slides/video-thumb.jpg",
						alt: "",
						className: "h-full w-full object-cover outline outline-1 -outline-offset-1 outline-cream/10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-ink/35" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-150 group-hover:scale-105 group-active:scale-[0.96] md:size-20",
						children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-8 fill-current" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-1 size-8 fill-current" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted",
				children: [
					"এখানেই বাজবে ·",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						"data-chrome": true,
						href: YOUTUBE_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "text-gold-bright underline-offset-4 hover:underline",
						children: "ইউটিউবে খুলুন"
					})
				]
			})
		]
	});
}
function CloseSlide({ slide, onPlay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger mx-auto flex max-w-3xl flex-col items-center text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EightPointStar, { className: "mb-5 size-6 text-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-5xl font-semibold text-gold-bright md:text-7xl",
				children: slide.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineButton, {
				dir: "rtl",
				live: false,
				onPlay,
				className: "font-ur mt-8 text-2xl leading-loose md:text-4xl",
				children: slide.urdu
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldDivider, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineButton, {
				live: false,
				onPlay,
				className: "text-lg text-gold-bright md:text-2xl",
				children: slide.bangla
			}),
			slide.body?.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted md:text-base",
				children: p
			}, p))
		]
	});
}
function LineButton({ children, onPlay, live, className, dir }) {
	if (!children) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"data-chrome": true,
		dir,
		onClick: onPlay,
		className: cn("verse-line", live && "line-live", className),
		children
	});
}
function Outline({ current, onClose, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-chrome": true,
		className: "absolute inset-0 z-50 flex items-end justify-center bg-ink/70 p-3 md:items-center md:p-8",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "outline-card max-h-[80dvh] w-full max-w-lg overflow-y-auto rounded-lg p-4 md:p-6",
			role: "dialog",
			"aria-label": "সূচিপত্র",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg text-gold-bright",
					children: "সূচিপত্র"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "nav-btn size-10 min-h-10 min-w-10",
					onClick: onClose,
					"aria-label": "বন্ধ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-1",
				children: SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onPick(i),
					className: cn("flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-start transition-colors duration-150", i === current ? "bg-gold/15 text-gold-bright" : "text-cream hover:bg-gold/10"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-8 text-sm text-gold tabular-nums",
							children: toBn(i + 1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 text-sm md:text-base",
							children: s.outline
						}),
						verseClip(s.id) || s.id === "title" || s.id === "listen" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-3.5 text-gold" }) : null
					]
				}) }, s.id))
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presentation, {});
}
//#endregion
export { Home as component };
