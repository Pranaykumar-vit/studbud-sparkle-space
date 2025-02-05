import { FileText, ChartBar, CheckCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExamPrep = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Exam Preparation</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Upload Study Materials</h2>
          <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="font-medium mb-2">Drop your files here</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Support for PDF, PPTX, and DOCX files
            </p>
            <Button>
              Choose Files
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">AI-Generated Resources</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Flashcards</h3>
                <p className="text-sm text-muted-foreground">
                  Review key concepts with AI-generated flashcards
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Mock Tests</h3>
                <p className="text-sm text-muted-foreground">
                  Practice with personalized mock tests
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Progress Tracking</h2>
        <div className="h-64 bg-muted rounded-lg animate-pulse" />
      </Card>
    </div>
  );
};

export default ExamPrep;
