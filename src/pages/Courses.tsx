import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Courses = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Courses</h1>
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search courses..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-muted animate-pulse" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Course Title {i}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">4.5 ★★★★☆</span>
                <span className="text-sm text-muted-foreground">120 students</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;