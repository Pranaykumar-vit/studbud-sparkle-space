import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Goals = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">My Learning Goals</h1>
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Set New Goal</h2>
          {/* Goal setting form will be implemented later */}
          <Button>Add Goal</Button>
        </Card>
      </div>
    </div>
  );
};

export default Goals;