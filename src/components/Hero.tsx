import { GraduationCap, Rocket, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0" />
      <div className="container relative z-10 px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Unlock Your Learning Potential</span>
            <span className="block gradient-text mt-2">with StudBud's AI Tutor</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-xl text-gray-600 sm:max-w-3xl">
            Your personal AI tutor available 24/7. Get instant help, personalized learning paths,
            and engage with a community of learners.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Join for Free
            </Button>
            <Button size="lg" variant="outline">
              Sign In
            </Button>
          </div>
          <div className="mt-16 flex justify-center gap-8 sm:gap-16">
            <div className="animate-float flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-3">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <p className="mt-2 text-sm font-medium">Fast Learning</p>
            </div>
            <div className="animate-float flex flex-col items-center" style={{ animationDelay: "0.2s" }}>
              <div className="rounded-full bg-accent/10 p-3">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <p className="mt-2 text-sm font-medium">AI-Powered</p>
            </div>
            <div className="animate-float flex flex-col items-center" style={{ animationDelay: "0.4s" }}>
              <div className="rounded-full bg-secondary/50 p-3">
                <GraduationCap className="h-6 w-6 text-secondary-foreground" />
              </div>
              <p className="mt-2 text-sm font-medium">Expert Guidance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};