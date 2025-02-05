import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChartBar, BookOpen, Clock, Award, Flame, Trophy, Star, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Avatar } from "@/components/ui/avatar";

const Dashboard = () => {
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

  const COLORS = ['#9b87f5', '#7E69AB', '#6E59A5', '#D6BCFA', '#FFDEE2'];

  return (
    <div className="p-6 bg-background">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Welcome back, {userData.name}!
        </h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full text-[10px] flex items-center justify-center text-white">
              3
            </span>
          </Button>
          <Avatar className="h-10 w-10">
            <div className="bg-primary/10 h-full w-full flex items-center justify-center">
              <span className="text-primary font-medium">JD</span>
            </div>
          </Avatar>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-4 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
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
        
        <Card className="p-4 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
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
        
        <Card className="p-4 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
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
        
        <Card className="p-4 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
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
        <Card className="p-6 col-span-2 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Enrolled Courses
          </h2>
          <div className="space-y-4">
            {userData.enrolledCourses.map((course) => (
              <div key={course.id} className="border rounded-lg p-4 hover:border-primary/50 transition-colors bg-white/30">
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
                      <Button size="sm" className="hover:scale-105 transition-transform">
                        Continue Learning
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="p-6 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Badges & Achievements
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {userData.badges.map((badge) => (
              <div
                key={badge.id}
                className={`p-4 border rounded-lg text-center hover:border-primary/50 transition-colors bg-white/30 ${
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
        <Card className="p-6 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Time Spent Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userData.timeSpent}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="hours" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={userData.enrolledCourses.map(course => ({
                      name: course.title,
                      hours: Math.floor(Math.random() * 20) + 5
                    }))}
                    dataKey="hours"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {userData.enrolledCourses.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              Total time this week: {userData.timeSpent.reduce((acc, day) => acc + day.hours, 0)} hours
            </p>
            <div className="mt-2 space-y-2">
              {userData.enrolledCourses.map((course, index) => (
                <div key={course.title} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }} 
                  />
                  <span className="text-sm">{course.title}: {Math.floor(Math.random() * 20) + 5} hours</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
        
        <Card className="p-6 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            Leaderboard
          </h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((position) => (
              <div
                key={position}
                className={`flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 transition-colors ${
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