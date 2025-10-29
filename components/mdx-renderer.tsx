"use client"

import type React from "react"
import { Info, AlertTriangle } from "lucide-react"

interface MDXRendererProps {
  content: string
}

export default function MDXRenderer({ content }: MDXRendererProps) {
  // Parse markdown content and render it
  const renderMarkdown = (md: string) => {
    const lines = md.split("\n")
    const elements: React.ReactNode[] = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i]

      // Headings
      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={i} className="text-4xl font-bold mt-8 mb-4 text-foreground">
            {renderInlineMarkdown(line.substring(2))}
          </h1>,
        )
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="text-3xl font-bold mt-6 mb-3 text-foreground">
            {renderInlineMarkdown(line.substring(3))}
          </h2>,
        )
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="text-2xl font-bold mt-5 mb-2 text-foreground">
            {renderInlineMarkdown(line.substring(4))}
          </h3>,
        )
      }
      // Blockquote (callout)
      else if (line.startsWith("> ")) {
        const calloutContent = line.substring(2)
        const isWarning = calloutContent.includes("গুরুত্বপূর্ণ")
        elements.push(
          <div
            key={i}
            className={`my-4 p-4 rounded-lg border-l-4 flex gap-3 ${
              isWarning ? "bg-amber-50 border-amber-500" : "bg-blue-50 border-blue-500"
            }`}
          >
            {isWarning ? (
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            ) : (
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            )}
            <p className={isWarning ? "text-amber-900" : "text-blue-900"}>{renderInlineMarkdown(calloutContent)}</p>
          </div>,
        )
      }
      // Horizontal rule
      else if (line === "---") {
        elements.push(<hr key={i} className="my-6 border-border" />)
      }
      // Unordered list
      else if (line.startsWith("- ")) {
        const listItems = []
        while (i < lines.length && lines[i].startsWith("- ")) {
          listItems.push(
            <li key={i} className="ml-6 mb-2 text-foreground">
              {renderInlineMarkdown(lines[i].substring(2))}
            </li>,
          )
          i++
        }
        elements.push(
          <ul key={`list-${i}`} className="my-4 list-disc">
            {listItems}
          </ul>,
        )
        i--
      }
      // Numbered list
      else if (line.match(/^\d+\. /)) {
        const listItems = []
        const listNum = 1
        while (i < lines.length && lines[i].match(/^\d+\. /)) {
          listItems.push(
            <li key={i} className="ml-6 mb-2 text-foreground">
              {renderInlineMarkdown(lines[i].replace(/^\d+\. /, ""))}
            </li>,
          )
          i++
        }
        elements.push(
          <ol key={`list-${i}`} className="my-4 list-decimal">
            {listItems}
          </ol>,
        )
        i--
      }
      // Table
      else if (line.includes("|")) {
        const tableLines = []
        while (i < lines.length && lines[i].includes("|")) {
          tableLines.push(lines[i])
          i++
        }
        if (tableLines.length > 1) {
          const headers = tableLines[0]
            .split("|")
            .map((h) => h.trim())
            .filter((h) => h)
          const rows = tableLines.slice(2).map((row) =>
            row
              .split("|")
              .map((cell) => cell.trim())
              .filter((cell) => cell),
          )

          elements.push(
            <div key={`table-${i}`} className="my-4 overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    {headers.map((header, idx) => (
                      <th key={idx} className="border border-border p-3 text-left font-bold text-foreground">
                        {renderInlineMarkdown(header)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-muted/50">
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className="border border-border p-3 text-foreground">
                          {renderInlineMarkdown(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>,
          )
          i--
        }
      }
      // Paragraph
      else if (line.trim()) {
        elements.push(
          <p key={i} className="my-3 text-foreground leading-relaxed">
            {renderInlineMarkdown(line)}
          </p>,
        )
      }

      i++
    }

    return elements
  }

  // Render inline markdown (bold, italic, code, math)
  const renderInlineMarkdown = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = []
    const lastIndex = 0

    // Math expressions ($$...$$)
    const mathRegex = /\$\$(.*?)\$\$/g
    let mathMatch
    const mathMatches: Array<{ index: number; length: number; content: string }> = []

    while ((mathMatch = mathRegex.exec(text)) !== null) {
      mathMatches.push({
        index: mathMatch.index,
        length: mathMatch[0].length,
        content: mathMatch[1],
      })
    }

    // Process text with math and formatting
    let processedText = text
    mathMatches.forEach((match, idx) => {
      const placeholder = `__MATH_${idx}__`
      processedText = processedText.replace(match.content, placeholder)
    })

    // Bold
    processedText = processedText.replace(/\*\*(.*?)\*\*/g, "__BOLD__$1__BOLD__")
    // Italic
    processedText = processedText.replace(/\*(.*?)\*/g, "__ITALIC__$1__ITALIC__")
    // Code
    processedText = processedText.replace(/`(.*?)`/g, "__CODE__$1__CODE__")

    const tokens = processedText.split(/(__BOLD__|__ITALIC__|__CODE__|__MATH_\d+__)/g)

    tokens.forEach((token, idx) => {
      if (token.startsWith("__BOLD__")) {
        parts.push(
          <strong key={idx} className="font-bold">
            {token.substring(8)}
          </strong>,
        )
      } else if (token.startsWith("__ITALIC__")) {
        parts.push(
          <em key={idx} className="italic">
            {token.substring(10)}
          </em>,
        )
      } else if (token.startsWith("__CODE__")) {
        parts.push(
          <code key={idx} className="bg-muted px-2 py-1 rounded font-mono text-sm text-foreground">
            {token.substring(8)}
          </code>,
        )
      } else if (token.match(/^__MATH_\d+__$/)) {
        const mathIdx = Number.parseInt(token.match(/\d+/)![0])
        parts.push(
          <span key={idx} className="inline-block mx-1 font-mono text-primary" title="Math expression">
            {mathMatches[mathIdx].content}
          </span>,
        )
      } else if (token) {
        parts.push(token)
      }
    })

    return parts
  }

  return (
    <div className="prose prose-sm max-w-none">
      <div className="bg-card border border-border rounded-lg p-6 text-foreground">{renderMarkdown(content)}</div>
    </div>
  )
}
