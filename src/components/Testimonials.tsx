import { Smile } from "lucide-react";

const testimonials = [
  {
    content: "StudBud helped me ace my exams! The AI tutor is like having a personal teacher 24/7.",
    author: "Sarah J.",
    role: "Computer Science Student"
  },
  {
    content: "The gamified learning experience makes studying fun. I've never been more engaged!",
    author: "Michael R.",
    role: "High School Student"
  },
  {
    content: "The exam prep feature is a game-changer. It saved me hours of preparation time.",
    author: "Emily L.",
    role: "Medical Student"
  }
];

export const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center">
          <Smile className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Students Say
          </h2>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="feature-card text-center"
            >
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
              <div className="mt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};