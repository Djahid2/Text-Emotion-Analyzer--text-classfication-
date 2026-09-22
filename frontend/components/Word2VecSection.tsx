import Image from "next/image";
import name from '../public/1.png';

export default function Word2VecSection() {
  return (
    <section id="word2vec" className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            Under the hood
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white">What is Word2Vec?</h2>
          <p className="text-white/70">
            A computer does not understand words, only numbers. Word2Vec turns each
            word into a numerical vector (for example, 100 numbers) so that words with
            similar meanings — like &quot;excellent&quot; and &quot;amazing&quot; — end up close in
            this vector space, while opposite words — like &quot;excellent&quot; and
            &quot;terrible&quot; — are far apart.
          </p>
          <p className="mt-4 text-white/70">
            This vector representation is then used as input to the neural network
            responsible for predicting sentiment.
          </p>
        </div>

      
        <div className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5 text-center text-sm text-white/40">
            <Image src={name} alt="Word2Vec illustration"  className="w-full h-full " />
        </div>
      </div>
    </section>
  );
}
