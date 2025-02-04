import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ExamPrep } from "@/components/ExamPrep";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ExamPrep />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;