import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TextAnalyzer from "@/components/TextAnalyzer";
import Word2VecSection from "@/components/Word2VecSection";
import ModelSection from "@/components/ModelSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b12]">
      <Navbar />
      <Hero />
      <TextAnalyzer />
      <Word2VecSection />
      <ModelSection />
      <Footer />
    </main>
  );
}
