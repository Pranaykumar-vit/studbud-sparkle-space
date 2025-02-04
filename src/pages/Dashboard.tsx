import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChartBar, BookOpen, Clock, Award } from "lucide-react";

const Dashboard = () => {
  // Dummy data for demonstration
  const userData = {
    name: "John Doe",
    stats: {
      coursesEnrolled: 5,
      completionPercentage: 68,
      completedCourses: 3,
      expiredCourses: 1,
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">
        Welcome back, {userData.name}!
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-3">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Courses Enrolled</p>
              <h3 className="text-2xl font-bold">{userData.stats.coursesEnrolled}</h3>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-3">
              <ChartBar className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Completion Rate</p>
              <h3 className="text-2xl font-bold">{userData.stats.completionPercentage}%</h3>
            </div>
          </div>
          <Progress value={userData.stats.completionPercentage} className="mt-3" />
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-3">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Completed</p>
              <h3 className="text-2xl font-bold">{userData.stats.completedCourses}</h3>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-3">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Expired</p>
              <h3 className="text-2xl font-bold">{userData.stats.expiredCourses}</h3>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
          <div className="space-y-4">
            {/* Placeholder for enrolled courses */}
            <div className="h-32 bg-muted rounded-lg animate-pulse" />
            <div className="h-32 bg-muted rounded-lg animate-pulse" />
          </div>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Time Spent</h2>
          <div className="h-64 bg-muted rounded-lg animate-pulse" />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;