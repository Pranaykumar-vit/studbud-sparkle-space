import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users } from "lucide-react";

const Community = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Community</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Discussion Forums</h2>
              <Button>New Thread</Button>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-4">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">Discussion Title {i}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>5 replies</span>
                        <span>2 hours ago</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Active Chatrooms</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary cursor-pointer">
                  <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
                  <div>
                    <h3 className="font-medium">Chatroom {i}</h3>
                    <p className="text-sm text-muted-foreground">12 active users</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Online Users</h2>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
                    <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm">User {i}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;