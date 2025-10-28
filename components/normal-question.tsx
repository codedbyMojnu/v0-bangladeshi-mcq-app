interface NormalQuestionProps {
  question: {
    id: number
    question: string
    options: string[]
    correctAnswer: string
  }
  questionNumber: number
}

export default function NormalQuestion({ question, questionNumber }: NormalQuestionProps) {
  return (
    <div className="pb-4 border-b border-border">
      <div className="flex gap-3">
        <span className="font-bold text-primary min-w-fit text-lg">{questionNumber}.</span>
        <div className="flex-1">
          <p className="text-sm font-semibold mb-2 text-foreground">{question.question}</p>

          <div className="space-y-1 ml-2">
            {question.options.map((option, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="font-semibold text-primary min-w-fit text-xs">{String.fromCharCode(65 + idx)}.</span>
                <span className="text-xs text-foreground">{option}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
