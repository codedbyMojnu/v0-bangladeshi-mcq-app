"use client"

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Simple markdown to HTML converter
  const html = content
    // Bold
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    // Code
    .replace(/`(.*?)`/g, "<code>$1</code>")
    // Math (LaTeX)
    .replace(/\$(.*?)\$/g, '<span class="math">$1</span>')

  return <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
}
