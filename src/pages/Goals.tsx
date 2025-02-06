import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, FileText, FileIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Goals = () => {
  const [goal, setGoal] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [learningPath, setLearningPath] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal || !timeframe) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // We'll implement the API call securely later
      const prompt = `Generate a detailed learning path for the following goal: ${goal}, to be achieved within ${timeframe}. Include specific steps, resources, and time estimates.`;
      
      // Temporary mock response for demonstration
      const mockResponse = `Learning Path for: ${goal}\n\n1. Week 1-2: Foundation\n- Study basic concepts\n- Complete introductory courses\n\n2. Week 3-4: Advanced Topics\n- Practice exercises\n- Build small projects`;
      
      setLearningPath(mockResponse);
      toast({
        title: "Learning path generated successfully!",
        description: "You can now download it in your preferred format.",
      });
    } catch (error) {
      toast({
        title: "Error generating learning path",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const downloadTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([learningPath], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "learning-path.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const downloadPdf = async () => {
    // For now, we'll just use txt download
    // In a full implementation, we'd use a PDF library
    downloadTxt();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Learning Goals</h1>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="goal">What do you want to learn?</Label>
              <Input
                id="goal"
                placeholder="Enter your learning goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timeframe">Desired timeframe</Label>
              <Input
                id="timeframe"
                placeholder="e.g., 3 months, 6 weeks"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
              />
            </div>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Generating..." : "Generate Learning Path"}
            </Button>
          </form>
        </Card>

        {learningPath && (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Your Learning Path</h2>
            <pre className="whitespace-pre-wrap bg-muted p-4 rounded-lg mb-4">
              {learningPath}
            </pre>
            <div className="flex gap-4">
              <Button onClick={downloadTxt} variant="outline" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Download as TXT
              </Button>
              <Button onClick={downloadPdf} variant="outline" className="flex items-center gap-2">
                <FileIcon className="w-4 h-4" />
                Download as PDF
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Goals;