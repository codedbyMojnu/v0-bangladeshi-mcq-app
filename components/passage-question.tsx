import MultiStatementQuestion from "./multi-statement-question";
import NormalQuestion from "./normal-question";

interface PassageChildQuestion {
  type: string;
  question: string;
  options: string[];
  correctAnswer: string;
  statements?: string[];
  questionEnd?: string;
}

interface PassageQuestionProps {
  question: {
    passage: string;
    questions: PassageChildQuestion[];
  };
  questionNumber: number;
}

export default function PassageQuestion({
  question,
  questionNumber,
}: PassageQuestionProps) {
  return (
    <div className="border border-muted-foreground/30 rounded-lg p-4 bg-muted/30 mb-4">
      <div className="mb-4">
        <p className="text-sm font-semibold text-primary mb-2">উদ্দীপক:</p>
        <p className="text-sm leading-relaxed text-foreground">
          {question.passage}
        </p>
      </div>
      <div className="space-y-3">
        {question.questions.map((q, idx) => {
          // Sequential numbering for passage children
          const childNumber = questionNumber + idx;
          if (q.type === "normal") {
            return (
              <NormalQuestion
                key={idx}
                question={q}
                questionNumber={childNumber}
              />
            );
          }
          if (q.type === "multiStatement") {
            return (
              <MultiStatementQuestion
                key={idx}
                question={q}
                questionNumber={childNumber}
              />
            );
          }
          // fallback for unknown type
          return (
            <div key={idx} className="text-red-500">
              Unknown question type: {q.type}
            </div>
          );
        })}
      </div>
    </div>
  );
}
