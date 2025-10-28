"use client";

import MultiStatementQuestion from "./multi-statement-question";
import NormalQuestion from "./normal-question";
import PassageQuestion from "./passage-question";

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
              {(() => {
                let runningNumber = pageIdx * questionsPerColumn * 2 + 1;
                const elements = [];
                for (let idx = 0; idx < page.col1.length; idx++) {
                  const question = page.col1[idx];
                  if (
                    question.type === "passage" &&
                    question.passage &&
                    question.questions
                  ) {
                    for (let c = 0; c < question.questions.length; c++) {
                      elements.push(
                        <PassageQuestion
                          key={`passage-${idx}`}
                          question={question}
                          questionNumber={runningNumber}
                        />
                      );
                      runningNumber += question.questions.length;
                      break;
                    }
                  } else {
                    elements.push(
                      <div key={idx}>
                        {question.type === "normal" && (
                          <NormalQuestion
                            question={question}
                            questionNumber={runningNumber}
                          />
                        )}
                        {question.type === "multiStatement" && (
                          <MultiStatementQuestion
                            question={question}
                            questionNumber={runningNumber}
                          />
                        )}
                      </div>
                    );
                    runningNumber++;
                  }
                }
                return elements;
              })()}
            </div>

            {/* Column 2 */}
            <div className="space-y-1.5">
              {(() => {
                let runningNumber =
                  pageIdx * questionsPerColumn * 2 + questionsPerColumn + 1;
                const elements = [];
                for (let idx = 0; idx < page.col2.length; idx++) {
                  const question = page.col2[idx];
                  if (
                    question.type === "passage" &&
                    question.passage &&
                    question.questions
                  ) {
                    for (let c = 0; c < question.questions.length; c++) {
                      elements.push(
                        <PassageQuestion
                          key={`passage2-${idx}`}
                          question={question}
                          questionNumber={runningNumber}
                        />
                      );
                      runningNumber += question.questions.length;
                      break;
                    }
                  } else {
                    elements.push(
                      <div key={idx}>
                        {question.type === "normal" && (
                          <NormalQuestion
                            question={question}
                            questionNumber={runningNumber}
                          />
                        )}
                        {question.type === "multiStatement" && (
                          <MultiStatementQuestion
                            question={question}
                            questionNumber={runningNumber}
                          />
                        )}
                      </div>
                    );
                    runningNumber++;
                  }
                }
                return elements;
              })()}
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
