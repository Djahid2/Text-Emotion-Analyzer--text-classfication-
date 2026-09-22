import Image from "next/image";
import name2 from '../public/2-2.png';
export default function ModelSection() {
  return (
    <section id="modele" className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
       
        <div className="order-2 flex aspect-square items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5 text-center text-sm text-white/40 md:order-1">
          <Image src={name2} alt="Model architecture" className="w-full h-full " />
        </div>

        <div className="order-1 md:order-2">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            The model
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white">
            Prediction + explanation, not a black box
          </h2>
          <p className="text-white/70">
            The text is first tokenized and transformed into a sequence of Word2Vec
            embeddings before being passed to the classification model, which returns
            a probability between 0 (negative) and 1 (positive).
          </p>
          <p className="mt-4 text-white/70">
            To avoid leaving it as a black box, we use{" "}
            <span className="font-semibold text-white">LIME</span> (Local
            Interpretable Model-agnostic Explanations): LIME slightly perturbs the
            text several times and observes how the prediction changes, allowing each
            word to be assigned a contribution toward &quot;positive&quot; or
            &quot;negative&quot; — this is what you see in the colored bars after the
            analysis.
          </p>
        </div>
      </div>
    </section>
  );
}
