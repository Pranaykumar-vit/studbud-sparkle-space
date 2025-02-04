import { BookOpen, UserRound, Gamepad, MessageSquare, MessageCircle } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "AI-Powered 24/7 Doubt Solver",
    description: "Get instant answers to your questions anytime, anywhere."
  },
  {
    icon: <UserRound className="h-6 w-6 text-primary" />,
    title: "Teacher in Your Pocket",
    description: "Personalized learning at your fingertips."
  },
  {
    icon: <Gamepad className="h-6 w-6 text-primary" />,
    title: "Gamified Experience",
    description: "Learn and have fun with interactive challenges and rewards."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: "Discussion Forums",
    description: "Connect with peers, share ideas, and learn collaboratively."
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
    title: "Chatrooms",
    description: "Engage in discussions on topics that interest you."
  }
];

export const Features = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Excel
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful features designed to enhance your learning experience
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};