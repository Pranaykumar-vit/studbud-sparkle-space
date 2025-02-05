import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChartBar, BookOpen, Clock, Award, Flame, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // Dummy data for demonstration
  const userData = {
    name: "John Doe",
    stats: {
      coursesEnrolled: 5,
      completionPercentage: 68,
      completedCourses: 3,
      expiredCourses: 1,
      streak: 7,
      totalPoints: 1250,
      rank: 15,
    },
    badges: [
      { id: 1, name: "Quick Learner", icon: "🚀", earned: true },
      { id: 2, name: "Knowledge Seeker", icon: "📚", earned: true },
      { id: 3, name: "Perfect Score", icon: "🎯", earned: false },
      { id: 4, name: "Team Player", icon: "🤝", earned: false },
    ],
    enrolledCourses: [
      {
        id: 1,
        title: "Introduction to React",
        progress: 75,
        image: "/placeholder.svg",
        instructor: "Sarah Johnson",
        lastAccessed: "2024-02-20",
      },
      {
        id: 2,
        title: "Advanced JavaScript",
        progress: 45,
        image: "/placeholder.svg",
        instructor: "Mike Smith",
        lastAccessed: "2024-02-19",
      },
      {
        id: 3,
        title: "UI/UX Design Fundamentals",
        progress: 90,
        image: "/placeholder.svg",
        instructor: "Emily Chen",
        lastAccessed: "2024-02-18",
      },
    ],
    timeSpent: [
      { name: "Mon", hours: 2 },
      { name: "Tue", hours: 3 },
      { name: "Wed", hours: 1.5 },
      { name: "Thu", hours: 4 },
      { name: "Fri", hours: 2.5 },
      { name: "Sat", hours: 1 },
      { name: "Sun", hours: 3 },
    ],
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
              <Flame className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Daily Streak</p>
              <h3 className="text-2xl font-bold">{userData.stats.streak} days</h3>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-3">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Rank</p>
              <h3 className="text-2xl font-bold">#{userData.stats.rank}</h3>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 col-span-2">
          <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
          <div className="space-y-4">
            {userData.enrolledCourses.map((course) => (
              <div key={course.id} className="border rounded-lg p-4">
                <div className="flex gap-4">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Instructor: {course.instructor}
                    </p>
                    <Progress value={course.progress} className="mb-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {course.progress}% Complete
                      </span>
                      <Button size="sm">Continue Learning</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Badges & Achievements</h2>
          <div className="grid grid-cols-2 gap-4">
            {userData.badges.map((badge) => (
              <div
                key={badge.id}
                className={`p-4 border rounded-lg text-center ${
                  !badge.earned && "opacity-50"
                }`}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <h3 className="font-medium text-sm">{badge.name}</h3>
                {!badge.earned && (
                  <span className="text-xs text-muted-foreground">Locked</span>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Time Spent Learning</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userData.timeSpent}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              Total time this week: {userData.timeSpent.reduce((acc, day) => acc + day.hours, 0)} hours
            </p>
          </div>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((position) => (
              <div
                key={position}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  position === 3 ? "bg-primary/10" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-bold w-6">{position}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <Star className="h-4 w-4" />
                    </div>
                    <span className="font-medium">User {position}</span>
                  </div>
                </div>
                <span className="font-semibold">{1500 - position * 50} pts</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;