import { FileText, ChartBar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ExamPrep = () => {
  return (
    <div className="container px-4 py-24 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ace Your Exams with AI-Powered Prep
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Upload your study materials and let our AI create a personalized learning experience
            tailored just for you.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                icon: <FileText className="h-5 w-5" />,
                title: "Smart Flashcards",
                description: "AI-generated flashcards from your study materials"
              },
              {
                icon: <ChartBar className="h-5 w-5" />,
                title: "Practice Tests",
                description: "Custom mock tests based on your learning progress"
              },
              {
                icon: <CheckCircle className="h-5 w-5" />,
                title: "Progress Tracking",
                description: "Monitor your improvement with detailed analytics"
              }
            ].map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-8 bg-primary hover:bg-primary/90">
            Try Exam Prep Now
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
          <div className="relative bg-white p-8 rounded-3xl shadow-xl">
            <div className="space-y-4">
              <div className="h-2 bg-gray-200 rounded w-3/4" />
              <div className="h-2 bg-gray-200 rounded w-1/2" />
              <div className="h-2 bg-gray-200 rounded w-5/6" />
              <div className="h-2 bg-gray-200 rounded w-2/3" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="h-20 bg-gray-200 rounded mb-2" />
                <div className="h-2 bg-gray-300 rounded w-1/2" />
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="h-20 bg-gray-200 rounded mb-2" />
                <div className="h-2 bg-gray-300 rounded w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};