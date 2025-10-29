interface PassageQuestion {
  id: number
  passage: string
  questions: Array<{
    question: string
    options: string[]
    correctAnswer: string
  }>
}

interface PassageQuestionProps {
  question: PassageQuestion
  questionNumber: number
}

export default function PassageQuestion({ question, questionNumber }: PassageQuestionProps) {
  return (
    <div className="border border-muted-foreground/30 rounded-lg p-4 bg-muted/30">
      <div className="mb-4">
        <p className="text-sm font-semibold text-primary mb-2">উদ্দীপক:</p>
        <p className="text-sm leading-relaxed text-foreground">{question.passage}</p>
      </div>

      <div className="space-y-3">
        {question.questions.map((q, idx) => (
          <div key={idx}>
            <p className="text-sm font-medium text-foreground mb-2">
              {questionNumber}.{String.fromCharCode(97 + idx)}. {q.question}
            </p>
            <div className="space-y-1 ml-4">
              {q.options.map((option, optIdx) => (
                <label key={optIdx} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" name={`q${questionNumber}-${idx}`} className="w-4 h-4" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
