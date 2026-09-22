import FloatingLines from "./FloatingLines";

export default function Hero() {
  return (
    <>
    <section id="home" className="relative flex w-full items-center justify-center overflow-hidden" style={{ height: "100vh" }}>
      {/* Animated Three.js background — stays interactive with the mouse */}
      <div style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        <FloatingLines
          
          interactive
          parallax
        />
      </div>

      {/*
        Dark overlay to keep text readable.
        pointer-events-none is REQUIRED here: without it, this absolute div
        captures the pointermove before the canvas below can react, and the
        interactive effect never triggers.
      */}
      <div className="pointer-events-none absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 text-sm uppercase tracking-widest text-violet-300">
          NLP · Word2Vec · Deep Learning
        </p>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Understand the sentiment of any text
        </h1>
        <p className="mt-4 text-lg text-white/70">
          A model trained on Word2Vec embeddings, with a word-by-word explanation
          of every prediction thanks to LIME.
        </p>
        <a
          href="#analyse"
          className="mt-8 inline-block rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
        >
          Try it now ↓
        </a>
      </div>
    </section>
  
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[#0b0b12] blur-2xl" /></>
  );
}
