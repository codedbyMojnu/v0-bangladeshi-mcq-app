"use client";

import MultiStatementQuestion from "./multi-statement-question";
import NormalQuestion from "./normal-question";

interface Question {
  type: string;
  [key: string]: any;
}

interface QuestionPaperProps {
  questions: Question[];
}

export default function QuestionPaper({ questions }: QuestionPaperProps) {
  const questionsPerColumn = 6;
  const pages = [];

  for (let i = 0; i < questions.length; i += questionsPerColumn * 2) {
    pages.push({
      col1: questions.slice(i, i + questionsPerColumn),
      col2: questions.slice(i + questionsPerColumn, i + questionsPerColumn * 2),
    });
  }

  return (
    <div className="print-container bg-white">
      {pages.map((page, pageIdx) => (
        <div key={pageIdx} className="page-break mb-8">
          {/* Header Section */}
          {pageIdx === 0 && (
            <div className="border-b-2 border-primary pb-3 mb-4 text-center">
              <h2 className="text-xl font-bold text-primary mb-1">
                রসায়ন সাজেসন্স
              </h2>
              <h3 className="text-base font-semibold text-foreground mb-0.5">
                বহুনির্বাচনি প্রশ্ন
              </h3>
              <p className="text-xs text-muted-foreground mb-2">
                অধ্যায় ৩ - পরমাণুর গঠন
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            {/* Column 1 */}
            <div className="space-y-1.5">
              {page.col1.map((question, idx) => {
                const questionNumber =
                  pageIdx * questionsPerColumn * 2 + idx + 1;
                return (
                  <div key={idx}>
                    {question.type === "normal" && (
                      <NormalQuestion
                        question={question}
                        questionNumber={questionNumber}
                      />
                    )}
                    {question.type === "multiStatement" && (
                      <MultiStatementQuestion
                        question={question}
                        questionNumber={questionNumber}
                      />
                    )}
                    {question.type === "passage" && (
                      <div>
                        {question.passage && (
                          <div className="border border-muted-foreground/30 rounded-sm p-2 bg-gray-100 mb-1.5">
                            <p className="text-xs font-semibold text-primary mb-1">
                              উদ্দীপক:
                            </p>
                            <p className="text-xs leading-tight text-foreground">
                              {question.passage}
                            </p>
                          </div>
                        )}
                        <p className="text-xs font-medium text-foreground mb-1">
                          {questionNumber}. {question.question}
                        </p>
                        <div className="space-y-0.5 ml-3">
                          {question.options.map((option, optIdx) => (
                            <label
                              key={optIdx}
                              className="flex items-center gap-1.5 text-xs cursor-pointer"
                            >
                              <input
                                type="radio"
                                name={`q${questionNumber}`}
                                className="w-3 h-3"
                              />
                              <span>{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="space-y-1.5">
              {page.col2.map((question, idx) => {
                const questionNumber =
                  pageIdx * questionsPerColumn * 2 +
                  questionsPerColumn +
                  idx +
                  1;
                return (
                  <div key={idx}>
                    {question.type === "normal" && (
                      <NormalQuestion
                        question={question}
                        questionNumber={questionNumber}
                      />
                    )}
                    {question.type === "multiStatement" && (
                      <MultiStatementQuestion
                        question={question}
                        questionNumber={questionNumber}
                      />
                    )}
                    {question.type === "passage" && (
                      <div>
                        {question.passage && (
                          <div className="border border-muted-foreground/30 rounded-sm p-2 bg-gray-100 mb-1.5">
                            <p className="text-xs font-semibold text-primary mb-1">
                              উদ্দীপক:
                            </p>
                            <p className="text-xs leading-tight text-foreground">
                              {question.passage}
                            </p>
                          </div>
                        )}
                        {question.questions.map((question, idx) => (
                          <div>
                            {question.type === "normal" && (
                              <NormalQuestion
                                question={question}
                                questionNumber={questionNumber}
                              />
                            )}
                            {question.type === "multiStatement" && (
                              <MultiStatementQuestion
                                question={question}
                                questionNumber={questionNumber}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}

          <div className="text-xs text-muted-foreground mt-6 text-center">
            <p>প্রস্তুতকারক: মজনু মিয়া</p>
            কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং বিভাগ, পাবনা বিজ্ঞান ও
            প্রযুক্তি বিশ্ববিদ্যালয়
            <br />
            <p className="text-xs text-muted-foreground">
              Phone: 01788262433 | Email: mojnu.cse@pust.ac.bd
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
