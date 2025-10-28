interface MultiStatementQuestionProps {
  question: {
    id: number
    question: string
    statements: string[]
    questionEnd: string
    options: string[]
    correctAnswer: string
  }
  questionNumber: number
}

export default function MultiStatementQuestion({ question, questionNumber }: MultiStatementQuestionProps) {
  return (
    <div className="pb-4 border-b border-border">
      <div className="flex gap-3">
        <span className="font-bold text-primary min-w-fit text-lg">{questionNumber}.</span>
        <div className="flex-1">
          <p className="text-sm font-semibold mb-2 text-foreground">{question.question}</p>

          <div className="space-y-1 ml-2 mb-2">
            {question.statements.map((statement, idx) => (
              <p key={idx} className="text-xs text-foreground">
                {statement}
              </p>
            ))}
          </div>

          <p className="text-sm font-semibold mb-2 text-foreground">{question.questionEnd}</p>

          <div className="space-y-1 ml-2">
            {question.options.map((option, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="font-semibold text-primary min-w-fit text-xs">{option.split(".")[0]}.</span>
                <span className="text-xs text-foreground">{option.split(".").slice(1).join(".")}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
