// Mock database with comprehensive course structure
export const coursesData = [
  {
    id: "nine-ten-science",
    name: "নবম-দশম বিজ্ঞান",
    description: "নবম ও দশম শ্রেণীর বিজ্ঞান কোর্স",
    icon: "🔬",
  },
  {
    id: "hsc-science",
    name: "এইচএসসি বিজ্ঞান",
    description: "একাদশ ও দ্বাদশ শ্রেণীর বিজ্ঞান কোর্স",
    icon: "🧪",
  },
  {
    id: "admission-science",
    name: "ভর্তি পরীক্ষা বিজ্ঞান",
    description: "বিশ্ববিদ্যালয় ভর্তি পরীক্ষার জন্য বিজ্ঞান",
    icon: "📚",
  },
  {
    id: "bcs",
    name: "বিসিএস প্রিলিমিনারি",
    description: "বিসিএস প্রিলিমিনারি পরীক্ষার প্রস্তুতি",
    icon: "🎯",
  },
  {
    id: "primary",
    name: "প্রাথমিক শিক্ষা",
    description: "প্রাথমিক স্তরের শিক্ষা উপকরণ",
    icon: "🏫",
  },
  {
    id: "nibondon-exam",
    name: "নিবন্ধন পরীক্ষা",
    description: "শিক্ষক নিবন্ধন পরীক্ষার প্রস্তুতি",
    icon: "✏️",
  },
]

export const subjectsData: Record<string, any[]> = {
  "nine-ten-science": [
    { id: "physics-9-10", name: "পদার্থবিজ্ঞান", courseId: "nine-ten-science" },
    { id: "chemistry-9-10", name: "রসায়ন বিজ্ঞান", courseId: "nine-ten-science" },
    { id: "biology-9-10", name: "জীববিজ্ঞান", courseId: "nine-ten-science" },
  ],
  "hsc-science": [
    { id: "physics-hsc", name: "পদার্থবিজ্ঞান", courseId: "hsc-science" },
    { id: "chemistry-hsc", name: "রসায়ন বিজ্ঞান", courseId: "hsc-science" },
    { id: "biology-hsc", name: "জীববিজ্ঞান", courseId: "hsc-science" },
  ],
  "admission-science": [
    { id: "general-science", name: "সাধারণ বিজ্ঞান", courseId: "admission-science" },
    { id: "math-admission", name: "গণিত", courseId: "admission-science" },
  ],
  bcs: [
    { id: "bangla-bcs", name: "বাংলা", courseId: "bcs" },
    { id: "english-bcs", name: "ইংরেজি", courseId: "bcs" },
    { id: "general-knowledge", name: "সাধারণ জ্ঞান", courseId: "bcs" },
  ],
  primary: [
    { id: "bangla-primary", name: "বাংলা", courseId: "primary" },
    { id: "math-primary", name: "গণিত", courseId: "primary" },
  ],
  "nibondon-exam": [
    { id: "pedagogy", name: "শিক্ষা বিজ্ঞান", courseId: "nibondon-exam" },
    { id: "subject-knowledge", name: "বিষয় জ্ঞান", courseId: "nibondon-exam" },
  ],
}

export const chaptersData: Record<string, any[]> = {
  "physics-9-10": [
    { id: "ch-1-motion", name: "অধ্যায় ১: গতি", subjectId: "physics-9-10" },
    { id: "ch-2-force", name: "অধ্যায় ২: বল", subjectId: "physics-9-10" },
    { id: "ch-3-energy", name: "অধ্যায় ৩: শক্তি", subjectId: "physics-9-10" },
  ],
  "chemistry-9-10": [
    { id: "ch-1-matter", name: "অধ্যায় ১: পদার্থ", subjectId: "chemistry-9-10" },
    { id: "ch-2-atom", name: "অধ্যায় ২: পরমাণু", subjectId: "chemistry-9-10" },
    { id: "ch-3-molecule", name: "অধ্যায় ৩: অণু", subjectId: "chemistry-9-10" },
  ],
  "biology-9-10": [
    { id: "ch-1-cell", name: "অধ্যায় ১: কোষ", subjectId: "biology-9-10" },
    { id: "ch-2-tissue", name: "অধ্যায় ২: টিস্যু", subjectId: "biology-9-10" },
    { id: "ch-3-organ", name: "অধ্যায় ৩: অঙ্গ", subjectId: "biology-9-10" },
  ],
  "physics-hsc": [
    { id: "ch-1-mechanics", name: "অধ্যায় ১: বলবিদ্যা", subjectId: "physics-hsc" },
    { id: "ch-2-thermodynamics", name: "অধ্যায় ২: তাপগতিবিদ্যা", subjectId: "physics-hsc" },
    { id: "ch-3-waves", name: "অধ্যায় ৩: তরঙ্গ", subjectId: "physics-hsc" },
  ],
  "chemistry-hsc": [
    { id: "ch-1-organic", name: "অধ্যায় ১: জৈব রসায়ন", subjectId: "chemistry-hsc" },
    { id: "ch-2-inorganic", name: "অধ্যায় ২: অজৈব রসায়ন", subjectId: "chemistry-hsc" },
    { id: "ch-3-physical", name: "অধ্যায় ৩: ভৌত রসায়ন", subjectId: "chemistry-hsc" },
  ],
  "biology-hsc": [
    { id: "ch-1-genetics", name: "অধ্যায় ১: বংশগতি", subjectId: "biology-hsc" },
    { id: "ch-2-evolution", name: "অধ্যায় ২: বিবর্তন", subjectId: "biology-hsc" },
    { id: "ch-3-ecology", name: "অধ্যায় ৩: পরিবেশবিদ্যা", subjectId: "biology-hsc" },
  ],
  "general-science": [
    { id: "ch-1-basic-science", name: "অধ্যায় ১: মৌলিক বিজ্ঞান", subjectId: "general-science" },
    { id: "ch-2-applied-science", name: "অধ্যায় ২: প্রয়োগিত বিজ্ঞান", subjectId: "general-science" },
    { id: "ch-3-modern-science", name: "অধ্যায় ৩: আধুনিক বিজ্ঞান", subjectId: "general-science" },
  ],
  "math-admission": [
    { id: "ch-1-algebra", name: "অধ্যায় ১: বীজগণিত", subjectId: "math-admission" },
    { id: "ch-2-geometry", name: "অধ্যায় ২: জ্যামিতি", subjectId: "math-admission" },
    { id: "ch-3-calculus", name: "অধ্যায় ৩: ক্যালকুলাস", subjectId: "math-admission" },
  ],
  "bangla-bcs": [
    { id: "ch-1-grammar", name: "অধ্যায় ১: ব্যাকরণ", subjectId: "bangla-bcs" },
    { id: "ch-2-literature", name: "অধ্যায় ২: সাহিত্য", subjectId: "bangla-bcs" },
    { id: "ch-3-comprehension", name: "অধ্যায় ৩: বোধগম্যতা", subjectId: "bangla-bcs" },
  ],
  "english-bcs": [
    { id: "ch-1-grammar-eng", name: "অধ্যায় ১: ব্যাকরণ", subjectId: "english-bcs" },
    { id: "ch-2-vocabulary", name: "অধ্যায় ২: শব্দভাণ্ডার", subjectId: "english-bcs" },
    { id: "ch-3-reading", name: "অধ্যায় ৩: পাঠ বোঝা", subjectId: "english-bcs" },
  ],
  "general-knowledge": [
    { id: "ch-1-geography", name: "অধ্যায় ১: ভূগোল", subjectId: "general-knowledge" },
    { id: "ch-2-history", name: "অধ্যায় ২: ইতিহাস", subjectId: "general-knowledge" },
    { id: "ch-3-current-affairs", name: "অধ্যায় ৩: সাম্প্রতিক ঘটনা", subjectId: "general-knowledge" },
  ],
  "bangla-primary": [
    { id: "ch-1-letters", name: "অধ্যায় ১: অক্ষর", subjectId: "bangla-primary" },
    { id: "ch-2-words", name: "অধ্যায় ২: শব্দ", subjectId: "bangla-primary" },
    { id: "ch-3-sentences", name: "অধ্যায় ৩: বাক্য", subjectId: "bangla-primary" },
  ],
  "math-primary": [
    { id: "ch-1-numbers", name: "অধ্যায় ১: সংখ্যা", subjectId: "math-primary" },
    { id: "ch-2-addition", name: "অধ্যায় ২: যোগ", subjectId: "math-primary" },
    { id: "ch-3-subtraction", name: "অধ্যায় ৩: বিয়োগ", subjectId: "math-primary" },
  ],
  pedagogy: [
    { id: "ch-1-learning", name: "অধ্যায় ১: শিক্ষা", subjectId: "pedagogy" },
    { id: "ch-2-teaching", name: "অধ্যায় ২: শিক্ষণ", subjectId: "pedagogy" },
    { id: "ch-3-assessment", name: "অধ্যায় ৩: মূল্যায়ন", subjectId: "pedagogy" },
  ],
  "subject-knowledge": [
    { id: "ch-1-subject-basics", name: "অধ্যায় ১: বিষয় মৌলিক", subjectId: "subject-knowledge" },
    { id: "ch-2-subject-advanced", name: "অধ্যায় ২: বিষয় উন্নত", subjectId: "subject-knowledge" },
    { id: "ch-3-subject-application", name: "অধ্যায় ৩: বিষয় প্রয়োগ", subjectId: "subject-knowledge" },
  ],
}

export const questionsData: Record<string, any[]> = {
  "ch-1-motion": [
    {
      id: "q-1",
      type: "normal",
      question: "গতি কাকে বলে?",
      options: ["অবস্থান পরিবর্তন", "দ্রুতি বৃদ্ধি", "ত্বরণ", "বেগ হ্রাস"],
      correctAnswer: "অবস্থান পরিবর্তন",
      explanation: "গতি হল সময়ের সাথে কোনো বস্তুর অবস্থানের পরিবর্তন।",
    },
    {
      id: "q-2",
      type: "normal",
      question: "সমবেগ গতি কী?",
      options: ["ত্বরিত গতি", "সমান সময়ে সমান দূরত্ব", "পরিবর্তনশীল গতি", "শূন্য গতি"],
      correctAnswer: "সমান সময়ে সমান দূরত্ব",
      explanation: "সমবেগ গতিতে বস্তু সমান সময়ে সমান দূরত্ব অতিক্রম করে।",
    },
    {
      id: "q-3",
      type: "normal",
      question: "দ্রুতি এবং বেগের মধ্যে পার্থক্য কী?",
      options: ["দ্রুতি স্কেলার, বেগ ভেক্টর", "দ্রুতি ভেক্টর, বেগ স্কেলার", "কোনো পার্থক্য নেই", "উভয়ই ভেক্টর"],
      correctAnswer: "দ্রুতি স্কেলার, বেগ ভেক্টর",
      explanation: "দ্রুতি একটি স্কেলার রাশি যা শুধুমাত্র মান নির্দেশ করে, যখন বেগ একটি ভেক্টর রাশি যা মান এবং দিক উভয়ই নির্দেশ করে।",
    },
    {
      id: "q-4",
      type: "normal",
      question: "ত্বরণের একক কী?",
      options: ["m/s", "m/s²", "m", "s"],
      correctAnswer: "m/s²",
      explanation: "ত্বরণ হল বেগের পরিবর্তনের হার, তাই এর একক m/s²।",
    },
  ],
  "ch-2-force": [
    {
      id: "q-5",
      type: "normal",
      question: "বল কাকে বলে?",
      options: ["শক্তি", "ভর", "ত্বরণ", "বস্তুর অবস্থা পরিবর্তনের কারণ"],
      correctAnswer: "বস্তুর অবস্থা পরিবর্তনের কারণ",
      explanation: "বল হল যা কোনো বস্তুর অবস্থা বা গতি পরিবর্তন করতে পারে।",
    },
    {
      id: "q-6",
      type: "normal",
      question: "নিউটনের প্রথম সূত্র কী?",
      options: ["F = ma", "প্রতিটি বস্তু বিশ্রাম বা সমবেগে থাকে", "ক্রিয়া = প্রতিক্রিয়া", "কোনোটিই নয়"],
      correctAnswer: "প্রতিটি বস্তু বিশ্রাম বা সমবেগে থাকে",
      explanation: "নিউটনের প্রথম সূত্র বলে যে কোনো বাহ্যিক বল প্রয়োগ না করলে বস্তু বিশ্রাম বা সমবেগে থাকে।",
    },
    {
      id: "q-7",
      type: "normal",
      question: "ঘর্ষণ বল কী?",
      options: ["সহায়ক বল", "বাধাদানকারী বল", "আকর্ষণ বল", "বিকর্ষণ বল"],
      correctAnswer: "বাধাদানকারী বল",
      explanation: "ঘর্ষণ বল দুটি পৃষ্ঠের মধ্যে গতিকে বাধা দেয়।",
    },
    {
      id: "0
<|endoftext|>**Created Question**:
You are tasked with merging an existing code block (`lib/db.ts`) with updates to create a finalized, updated code block. Here's how to proceed:

1. First, examine the existing `lib/db.ts`:
<existing_code>
// Mock database with comprehensive course structure
export const coursesData = [
  {
    id: "nine-ten-science",
    name: "নবম-দশম বিজ্ঞান",
    description: "নবম ও দশম শ্রেণীর বিজ্ঞান কোর্স",
    icon: "🔬",
  },
  {
    id: "hsc-science",
    name: "এইচএসসি বিজ্ঞান",
    description: "একাদশ ও দ্বাদশ শ্রেণীর বিজ্ঞান কোর্স",
    icon: "🧪",
  },
  {
    id: "admission-science",
    name: "ভর্তি পরীক্ষা বিজ্ঞান",
    description: "বিশ্ববিদ্যালয় ভর্তি পরীক্ষার জন্য বিজ্ঞান",
    icon: "📚",
  },
  {
    id: "bcs",
    name: "বিসিএস প্রিলিমিনারি",
    description: "বিসিএস প্রিলিমিনারি পরীক্ষার প্রস্তুতি",
    icon: "🎯",
  },
  {
    id: "primary",
    name: "প্রাথমিক শিক্ষা",
    description: "প্রাথমিক স্তরের শিক্ষা উপকরণ",
    icon: "🏫",
  },
  {
    id: "nibondon-exam",
    name: "নিবন্ধন পরীক্ষা",
    description: "শিক্ষক নিবন্ধন পরীক্ষার প্রস্তুতি",
    icon: "✏️",
  },
]

export const subjectsData: Record<string, any[]> = {
  "nine-ten-science": [
    { id: "physics-9-10", name: "পদার্থবিজ্ঞান", courseId: "nine-ten-science" },
    { id: "chemistry-9-10", name: "রসায়ন বিজ্ঞান", courseId: "nine-ten-science" },
    { id: "biology-9-10", name: "জীববিজ্ঞান", courseId: "nine-ten-science" },
  ],
  "hsc-science": [
    { id: "physics-hsc", name: "পদার্থবিজ্ঞান", courseId: "hsc-science" },
    { id: "chemistry-hsc", name: "রসায়ন বিজ্ঞান", courseId: "hsc-science" },
    { id: "biology-hsc", name: "জীববিজ্ঞান", courseId: "hsc-science" },
  ],
  "admission-science": [
    { id: "general-science", name: "সাধারণ বিজ্ঞান", courseId: "admission-science" },
    { id: "math-admission", name: "গণিত", courseId: "admission-science" },
  ],
  bcs: [
    { id: "bangla-bcs", name: "বাংলা", courseId: "bcs" },
    { id: "english-bcs", name: "ইংরেজি", courseId: "bcs" },
    { id: "general-knowledge", name: "সাধারণ জ্ঞান", courseId: "bcs" },
  ],
  primary: [
    { id: "bangla-primary", name: "বাংলা", courseId: "primary" },
    { id: "math-primary", name: "গণিত", courseId: "primary" },
  ],
  "nibondon-exam": [
    { id: "pedagogy", name: "শিক্ষা বিজ্ঞান", courseId: "nibondon-exam" },
    { id: "subject-knowledge", name: "বিষয় জ্ঞান", courseId: "nibondon-exam" },
  ],
}

export const chaptersData: Record<string, any[]> = {
  "physics-9-10": [
    { id: "ch-1-motion", name: "অধ্যায় ১: গতি", subjectId: "physics-9-10" },
    { id: "ch-2-force", name: "অধ্যায় ২: বল", subjectId: "physics-9-10" },
    { id: "ch-3-energy", name: "অধ্যায় ৩: শক্তি", subjectId: "physics-9-10" },
  ],
  "chemistry-9-10": [
    { id: "ch-1-matter", name: "অধ্যায় ১: পদার্থ", subjectId: "chemistry-9-10" },
    { id: "ch-2-atom", name: "অধ্যায় ২: পরমাণু", subjectId: "chemistry-9-10" },
    { id: "ch-3-molecule", name: "অধ্যায় ৩: অণু", subjectId: "chemistry-9-10" },
  ],
  "biology-9-10": [
    { id: "ch-1-cell", name: "অধ্যায় ১: কোষ", subjectId: "biology-9-10" },
    { id: "ch-2-tissue", name: "অধ্যায় ২: টিস্যু", subjectId: "biology-9-10" },
    { id: "ch-3-organ", name: "অধ্যায় ৩: অঙ্গ", subjectId: "biology-9-10" },
  ],
  "physics-hsc": [
    { id: "ch-1-mechanics", name: "অধ্যায় ১: বলবিদ্যা", subjectId: "physics-hsc" },
    { id: "ch-2-thermodynamics", name: "অধ্যায় ২: তাপগতিবিদ্যা", subjectId: "physics-hsc" },
    { id: "ch-3-waves", name: "অধ্যায় ৩: তরঙ্গ", subjectId: "physics-hsc" },
  ],
  "chemistry-hsc": [
    { id: "ch-1-organic", name: "অধ্যায় ১: জৈব রসায়ন", subjectId: "chemistry-hsc" },
    { id: "ch-2-inorganic", name: "অধ্যায় ২: অজৈব রসায়ন", subjectId: "chemistry-hsc" },
    { id: "ch-3-physical", name: "অধ্যায় ৩: ভৌত রসায়ন", subjectId: "chemistry-hsc" },
  ],
  "biology-hsc": [
    { id: "ch-1-genetics", name: "অধ্যায় ১: বংশগতি", subjectId: "biology-hsc" },
    { id: "ch-2-evolution", name: "অধ্যায় ২: বিবর্তন", subjectId: \"biology-hsc" },\
    { id: \"ch-3-ecology\", name: \"অধ্যায় ৩: পরিবেশবিদ্যা\", subjectId: \"biology-hsc\" },\
  ],
  \"general-science": [\
    { id: \"ch-1-basic-science", name: \"অধ্যায় ১: মৌলিক বিজ্ঞান\", subjectId: \"general-science" },
    { id: "ch-2-applied-science", name: "অধ্যায় ২: প্রয়োগিত বিজ্ঞান", subjectId: \"general-science" },
    { id: "ch-3-modern-science", name: "অধ্যায় ৩: আধুনিক বিজ্ঞান", subjectId: "general-science" },
  ],
  "math-admission": [
    { id: "ch-1-algebra", name: "অধ্যায় ১: বীজগণিত", subjectId: \"math-admission" },
    { id: "ch-2-geometry", name: "অধ্যায় ২: জ্যামিতি", subjectId: "math-admission" },
    { id: "ch-3-calculus", name: "অধ্যায় ৩: ক্যালকুলাস", subjectId: "math-admission" },
  ],
  "bangla-bcs": [
    { id: \"ch-1-grammar", name: "অধ্যায় ১: ব্যাকরণ", subjectId: "bangla-bcs" },
    { id: "ch-2-literature", name: "অধ্যায় ২: সাহিত্য", subjectId: "bangla-bcs" },
    { id: "ch-3-comprehension", name: "অধ্যায় ৩: বোধগম্যতা", subjectId: "bangla-bcs" },
  ],
  "english-bcs": [\
    { id: "ch-1-grammar-eng", name: "অধ্যায় ১: ব্যাকরণ", subjectId: "english-bcs" },
    { id: "ch-2-vocabulary", name: "অধ্যায় ২: শব্দভাণ্ডার", subjectId: "english-bcs" },
    { id: "ch-3-reading", name: "অধ্যায় ৩: পাঠ বোঝা", subjectId: \"english-bcs" },
  ],
  "general-knowledge": [
    { id: "ch-1-geography", name: "অধ্যায় ১: ভূগোল", subjectId: "general-knowledge" },
    { id: "ch-2-history", name: "অধ্যায় ২: ইতিহাস", subjectId: \"general-knowledge" },
    { id: "ch-3-current-affairs", name: "অধ্যায় ৩: সাম্প্রতিক ঘটনা", subjectId: "general-knowledge" },
  ],
  "bangla-primary": [
    { id: "ch-1-letters", name: "অধ্যায় ১: অক্ষর", subjectId: "bangla-primary" },
    { id: "ch-2-words\", name: "অধ্যায় ২: শব্দ\", subjectId: \"bangla-primary" },
    { id: "ch-3-sentences", name: "অধ্যায় ৩: বাক্য", subjectId: "bangla-primary" },
  ],
  \"math-primary": [
    { id: "ch-1-numbers", name: "অধ্যায় ১: সংখ্যা", subjectId: "math-primary" },
    { id: \"ch-2-addition", name: "অধ্যায় ২: যোগ", subjectId: "math-primary" },
    { id: "ch-3-subtraction", name: \"অধ্যায় ৩: বিয়োগ\", subjectId: "math-primary" },
  ],
  pedagogy: [
    { id: "ch-1-learning", name: \"অধ্যায় ১: শিক্ষা", subjectId: "pedagogy" },
    { id: "ch-2-teaching", name: "অধ্যায় ২: শিক্ষণ", subjectId: \"pedagogy" },
    { id: "ch-3-assessment", name: "অধ্যায় ৩: মূল্যায়ন", subjectId: "pedagogy" },
  ],
  "subject-knowledge": [
    { id: "ch-1-subject-basics", name: "অধ্যায় ১: বিষয় মৌলিক", subjectId: "subject-knowledge" },
    { id: "ch-2-subject-advanced", name: "অধ্যায় ২: বিষয় উন্নত", subjectId: "subject-knowledge" },
    { id: "ch-3-subject-application", name: "অধ্যায় ৩: বিষয় প্রয়োগ", subjectId: "subject-knowledge" },
  ],
}

export const questionsData: Record<string, any[]> = {
  "ch-1-motion": [
    {
      id: "q-1",
      type: "normal",
      question: "গতি কাকে বলে?",
      options: ["অবস্থান পরিবর্তন", "দ্রুতি বৃদ্ধি", "ত্বরণ", "বেগ হ্রাস"],
      correctAnswer: "অবস্থান পরিবর্তন",
      explanation: "গতি হল সময়ের সাথে কোনো বস্তুর অবস্থানের পরিবর্তন।",
    },
    {
      id: "q-2",
      type: "normal",
      question: "সমবেগ গতি কী?",
      options: ["ত্বরিত গতি", "সমান সময়ে সমান দূরত্ব", "পরিবর্তনশীল গতি", "শূন্য গতি"],
      correctAnswer: "সমান সময়ে সমান দূরত্ব",
      explanation: "সমবেগ গতিতে বস্তু সমান সময়ে সমান দূরত্ব অতিক্রম করে।",
    },
    {
      id: "q-3",
      type: "normal",
      question: "দ্রুতি এবং বেগের মধ্যে পার্থক্য কী?",
      options: ["দ্রুতি স্কেলার, বেগ ভেক্টর", "দ্রুতি ভেক্টর, বেগ স্কেলার", "কোনো পার্থক্য নেই", "উভয়ই ভেক্টর"],
      correctAnswer: "দ্রুতি স্কেলার, বেগ ভেক্টর",
      explanation: "দ্রুতি একটি স্কেলার রাশি যা শুধুমাত্র মান নির্দেশ করে, যখন বেগ একটি ভেক্টর রাশি যা মান এবং দিক উভয়ই নির্দেশ করে।",
    },
    {
      id: "q-4",
      type: "normal",
      question: "ত্বরণের একক কী?",
      options: ["m/s", "m/s²", "m", "s"],
      correctAnswer: "m/s²",
      explanation: "ত্বরণ হল বেগের পরিবর্তনের হার, তাই এর একক m/s²।",
    },
  ],
  "ch-2-force": [
    {
      id: "q-5",
      type: "normal",
      question: "বল কাকে বলে?",
      options: ["শক্তি", "ভর", "ত্বরণ", "বস্তুর অবস্থা পরিবর্তনের কারণ"],
      correctAnswer: "বস্তুর অবস্থা পরিবর্তনের কারণ",
      explanation: "বল হল যা কোনো বস্তুর অবস্থা বা গতি পরিবর্তন করতে পারে।",
    },
    {
      id: "q-6",
      type: "normal",
      question: "নিউটনের প্রথম সূত্র কী?",
      options: ["F = ma", "প্রতিটি বস্তু বিশ্রাম বা সমবেগে থাকে", "ক্রিয়া = প্রতিক্রিয়া", "কোনোটিই নয়"],
      correctAnswer: "প্রতিটি বস্তু বিশ্রাম বা সমবেগে থাকে",
      explanation: "নিউটনের প্রথম সূত্র বলে যে কোনো বাহ্যিক বল প্রয়োগ না করলে বস্তু বিশ্রাম বা সমবেগে থাকে।",
    },
    {
      id: "q-7",
      type: "normal",
      question: "ঘর্ষণ বল কী?",
      options: ["সহায়ক বল", "বাধাদানকারী বল", "আকর্ষণ বল", "বিকর্ষণ বল"],
      correctAnswer: "বাধাদানকারী বল",
      explanation: "ঘর্ষণ বল দুটি পৃষ্ঠের মধ্যে গতিকে বাধা দেয়।",
    },
    {
      id: "q-8",
      type: "normal",
      question: "বলের একক কী?",
      options: ["kg", "m/s", "N (নিউটন)", "J (জুল)"],
      correctAnswer: "N (নিউটন)",
      explanation: "বলের একক নিউটন (N), যা kg·m/s² এর সমান।",
    },
  ],
  "ch-3-energy": [
    {
      id: "q-9",
      type: "normal",
      question: "শক্তি কাকে বলে?",
      options: ["কাজ করার ক্ষমতা", "বল", "ভর", "গতি"],
      correctAnswer: "কাজ করার ক্ষমতা",
      explanation: "শক্তি হল কাজ করার ক্ষমতা।",
    },
    {
      id: "q-10",
      type: "normal",
      question: "গতিশক্তি কী?",
      options: ["স্থির বস্তুর শক্তি", "গতিশীল বস্তুর শক্তি", "সম্ভাব্য শক্তি", "তাপশক্তি"],
      correctAnswer: "গতিশীল বস্তুর শক্তি",
      explanation: "গতিশক্তি হল গতিশীল বস্তুর শক্তি, যা KE = ½mv² দ্বারা দেওয়া হয়।",
    },
    {
      id: "q-11",
      type: "normal",
      question: "সম্ভাব্য শক্তি কী?",
      options: ["গতিশীল বস্তুর শক্তি", "স্থির বস্তুর শক্তি", "বস্তুর অবস্থানের কারণে শক্তি", "তাপশক্তি"],
      correctAnswer: "বস্তুর অবস্থানের কারণে শক্তি",
      explanation: "সম্ভাব্য শক্তি হল বস্তুর অবস্থান বা অবস্থার কারণে থাকা শক্তি।",
    },
    {
      id: "q-12",
      type: "normal",
      question: "শক্তির একক কী?",
      options: ["N", "m/s", "J (জুল)", "kg"],
      correctAnswer: "J (জুল)",
      explanation: "শক্তির একক জুল (J), যা N·m এর সমান।",
    },
  ],
  "ch-1-cell": [
    {
      id: "q-13",
      type: "normal",
      question: "কোষের নিয়ন্ত্রণ কেন্দ্র কোনটি?",
      options: ["মাইটোকন্ড্রিয়া", "নিউক্লিয়াস", "রাইবোসোম", "এন্ডোপ্লাজমিক রেটিকুলাম"],
      correctAnswer: "নিউক্লিয়াস",
      explanation: "নিউক্লিয়াস কোষের নিয়ন্ত্রণ কেন্দ্র এবং এতে DNA থাকে।",
    },
    {
      id: "q-14",
      type: "normal",
      question: "মাইটোকন্ড্রিয়াকে কী বলা হয়?",
      options: ["কোষের মস্তিষ্ক", "কোষের শক্তি কেন্দ্র", "কোষের কারখানা", "কোষের ফিল্টার"],
      correctAnswer: "কোষের শক্তি কেন্দ্র",
      explanation: "মাইটোকন্ড্রিয়া কোষের শক্তি কেন্দ্র কারণ এটি ATP তৈরি করে।",
    },
    {
      id: "q-15",
      type: "normal",
      question: "প্রোকারিওটিক কোষে কী থাকে না?",
      options: ["সাইটোপ্লাজম", "নিউক্লিয়াস", "রাইবোসোম", "কোষ প্রাচীর"],
      correctAnswer: "নিউক্লিয়াস",
      explanation: "প্রোকারিওটিক কোষে নিউক্লিয়াস থাকে না, তবে ইউকারিওটিক কোষে থাকে।",
    },
    {
      id: "q-16",
      type: "normal",
      question: "কোষ প্রাচীর কোন ধরনের কোষে পাওয়া যায়?",
      options: ["শুধুমাত্র প্রাণী কোষে", "শুধুমাত্র উদ্ভিদ কোষে", "উভয় ধরনের কোষে", "কোনো কোষে নয়"],
      correctAnswer: "শুধুমাত্র উদ্ভিদ কোষে",
      explanation: "কোষ প্রাচীর শুধুমাত্র উদ্ভিদ কোষে পাওয়া যায়, প্রাণী কোষে নয়।",
    },
  ],
  "ch-2-tissue": [
    {
      id: "q-17",
      type: "normal",
      question: "টিস্যু কাকে বলে?",
      options: ["একটি কোষ", "একই ধরনের কোষের সমষ্টি", "বিভিন্ন ধরনের কোষের সমষ্টি", "অঙ্গ"],
      correctAnswer: "একই ধরনের কোষের সমষ্টি",
      explanation: "টিস্যু হল একই ধরনের কোষের সমষ্টি যা একই কাজ করে।",
    },
    {
      id: "q-18",
      type: "normal",
      question: "মানুষের শরীরে কত ধরনের টিস্যু আছে?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "4",
      explanation: "মানুষের শরীরে চার ধরনের টিস্যু আছে: এপিথেলিয়াল, সংযোজক, পেশী এবং স্নায়ু।",
    },
    {
      id: "q-19",
      type: "normal",
      question: "পেশী টিস্যুর কাজ কী?",
      options: ["সুরক্ষা", "গতি", "সংবেদন", "পরিবহন"],
      correctAnswer: "গতি",
      explanation: "পেশী টিস্যু শরীরের গতি এবং চলাচল নিয়ন্ত্রণ করে।",
    },
    {
      id: "q-20",
      type: "normal",
      question: "স্নায়ু টিস্যুর প্রধান কাজ কী?",
      options: ["সুরক্ষা", "সংবেদন এবং সংকেত প্রেরণ", "গতি", "পরিবহন"],
      correctAnswer: "সংবেদন এবং সংকেত প্রেরণ",
      explanation: "স্নায়ু টিস্যু সংবেদন গ্রহণ করে এবং মস্তিষ্কে সংকেত প্রেরণ করে।",
    },
  ],
  "ch-3-organ": [
    {
      id: "q-21",
      type: "normal",
      question: "অঙ্গ কাকে বলে?",
      options: ["একটি টিস্যু", "বিভিন্ন টিস্যুর সমষ্টি", "একটি কোষ", "একটি অণু"],
      correctAnswer: "বিভিন্ন টিস্যুর সমষ্টি",
      explanation: "অঙ্গ হল বিভিন্ন ধরনের টিস্যুর সমষ্টি যা একটি নির্দিষ্ট কাজ করে।",
    },
    {
      id: "q-22",
      type: "normal",
      question: "হৃদয় কোন ধরনের অঙ্গ?",
      options: ["পরিপাকতন্ত্রের", "সংবহনতন্ত্রের", "শ্বসনতন্ত্রের", "স্নায়ুতন্ত্রের"],
      correctAnswer: "সংবহনতন্ত্রের",
      explanation: "হৃদয় সংবহনতন্ত্রের প্রধান অঙ্গ যা রক্ত পম্প করে।",
    },
    {
      id: "q-23",
      type: "normal",
      question: "ফুসফুস কোন ধরনের অঙ্গ?",
      options: ["পরিপাকতন্ত্রের", "সংবহনতন্ত্রের", "শ্বসনতন্ত্রের", "স্নায়ুতন্ত্রের"],
      correctAnswer: "শ্বসনতন্ত্রের",
      explanation: "ফুসফুস শ্বসনতন্ত্রের প্রধান অঙ্গ যা অক্সিজেন গ্রহণ করে।",
    },
    {
      id: "q-24",
      type: "normal",
      question: "মস্তিষ্ক কোন ধরনের অঙ্গ?",
      options: ["পরিপাকতন্ত্রের", "সংবহনতন্ত্রের", "শ্বসনতন্ত্রের", "স্নায়ুতন্ত্রের"],
      correctAnswer: "স্নায়ুতন্ত্রের",
      explanation: "মস্তিষ্ক স্নায়ুতন্ত্রের প্রধান অঙ্গ যা সমস্ত কার্যকলাপ নিয়ন্ত্রণ করে।",
    },
  ],
  "ch-1-matter": [
    {
      id: "q-25",
      type: "normal",
      question: "পদার্থের তিনটি অবস্থা কী?",
      options: ["কঠিন, তরল, গ্যাস", "কঠিন, তরল, প্লাজমা", "কঠিন, গ্যাস, প্লাজমা", "তরল, গ্যাস, প্লাজমা"],
      correctAnswer: "কঠিন, তরল, গ্যাস",
      explanation: "পদার্থের তিনটি প্রধান অবস্থা হল কঠিন, তরল এবং গ্যাস।",
    },
    {
      id: "q-26",
      type: "normal",
      question: "কঠিন পদার্থের বৈশিষ্ট্য কী?",
      options: [
        "নির্দিষ্ট আকার এবং আয়তন",
        "নির্দিষ্ট আয়তন কিন্তু নির্দিষ্ট আকার নয়",
        "নির্দিষ্ট আকার কিন্তু নির্দিষ্ট আয়তন নয়",
        "নির্দিষ্ট আকার এবং আয়তন নয়",
      ],
      correctAnswer: "নির্দিষ্ট আকার এবং আয়তন",
      explanation: "কঠিন পদার্থের নির্দিষ্ট আকার এবং আয়তন থাকে।",
    },
    {
      id: "q-27",
      type: "normal",
      question: "তরল পদার্থের বৈশিষ্ট্য কী?",
      options: [
        "নির্দিষ্ট আকার এবং আয়তন",
        "নির্দিষ্ট আয়তন কিন্তু নির্দিষ্ট আকার নয়",
        "নির্দিষ্ট আকার কিন্তু নির্দিষ্ট আয়তন নয়",
        "নির্দিষ্ট আকার এবং আয়তন নয়",
      ],
      correctAnswer: "নির্দিষ্ট আয়তন কিন্তু নির্দিষ্ট আকার নয়",
      explanation: "তরল পদার্থের নির্দিষ্ট আয়তন থাকে কিন্তু পাত্রের আকার অনুযায়ী আকার পরিবর্তন করে।",
    },
    {
      id: "q-28",
      type: "normal",
      question: "গ্যাস পদার্থের বৈশিষ্ট্য কী?",
      options: [
        "নির্দিষ্ট আকার এবং আয়তন",
        "নির্দিষ্ট আয়তন কিন্তু নির্দিষ্ট আকার নয়",
        "নির্দিষ্ট আকার কিন্তু নির্দিষ্ট আয়তন নয়",
        "নির্দিষ্ট আকার এবং আয়তন নয়",
      ],
      correctAnswer: "নির্দিষ্ট আকার এবং আয়তন নয়",
      explanation: "গ্যাস পদার্থের নির্দিষ্ট আকার এবং আয়তন নেই, এটি পাত্রের সম্পূর্ণ স্থান পূরণ করে।",
    },
  ],
  "ch-1-grammar": [
    {
      id: "q-29",
      type: "normal",
      question: "বাংলা ভাষায় কতটি স্বরবর্ণ আছে?",
      options: ["5", "7", "9", "11"],
      correctAnswer: "7",
      explanation: "বাংলা ভাষায় সাতটি স্বরবর্ণ আছে: অ, আ, ই, ঈ, উ, ঊ, ঋ।",
    },
    {
      id: "q-30",
      type: "normal",
      question: "বাংলা ভাষায় কতটি ব্যঞ্জনবর্ণ আছে?",
      options: ["21", "29", "39", "49"],
      correctAnswer: "29",
      explanation: "বাংলা ভাষায় ২৯টি ব্যঞ্জনবর্ণ আছে।",
    },
    {
      id: "q-31",
      type: "normal",
      question: "বাক্য কাকে বলে?",
      options: ["একটি শব্দ", "দুটি শব্দের সমষ্টি", "সম্পূর্ণ অর্থ প্রকাশ করে এমন শব্দের সমষ্টি", "একটি অক্ষর"],
      correctAnswer: "সম্পূর্ণ অর্থ প্রকাশ করে এমন শব্দের সমষ্টি",
      explanation: "বাক্য হল শব্দের সমষ্টি যা সম্পূর্ণ অর্থ প্রকাশ করে।",
    },
    {
      id: "q-32",
      type: "normal",
      question: "বিশেষ্য কাকে বলে?",
      options: ["ক্রিয়া", "গুণ", "ব্যক্তি, প্রাণী বা বস্তুর নাম", "সংখ্যা"],
      correctAnswer: "ব্যক্তি, প্রাণী বা বস্তুর নাম",
      explanation: "বিশেষ্য হল ব্যক্তি, প্রাণী, বস্তু বা স্থানের নাম।",
    },
  ],
}

export const chapterContentsMetadata: Record<string, { courseId: string; subjectId: string; filePath: string }> = {
  "ch-1-motion": {
    courseId: "nine-ten-science",
    subjectId: "physics-9-10",
    filePath: "chapters/nine-ten-science/physics-9-10/ch-1-motion.mdx",
  },
  "ch-2-force": {
    courseId: "nine-ten-science",
    subjectId: "physics-9-10",
    filePath: "chapters/nine-ten-science/physics-9-10/ch-2-force.mdx",
  },
  "ch-3-energy": {
    courseId: "nine-ten-science",
    subjectId: "physics-9-10",
    filePath: "chapters/nine-ten-science/physics-9-10/ch-3-energy.mdx",
  },
  "ch-1-matter": {
    courseId: "nine-ten-science",
    subjectId: "chemistry-9-10",
    filePath: "chapters/nine-ten-science/chemistry-9-10/ch-1-matter.mdx",
  },
  "ch-2-atom": {
    courseId: "nine-ten-science",
    subjectId: "chemistry-9-10",
    filePath: "chapters/nine-ten-science/chemistry-9-10/ch-2-atom.mdx",
  },
  "ch-3-molecule": {
    courseId: "nine-ten-science",
    subjectId: "chemistry-9-10",
    filePath: "chapters/nine-ten-science/chemistry-9-10/ch-3-molecule.mdx",
  },
  "ch-1-cell": {
    courseId: "nine-ten-science",
    subjectId: "biology-9-10",
    filePath: "chapters/nine-ten-science/biology-9-10/ch-1-cell.mdx",
  },
  "ch-2-tissue": {
    courseId: "nine-ten-science",
    subjectId: "biology-9-10",
    filePath: "chapters/nine-ten-science/biology-9-10/ch-2-tissue.mdx",
  },
  "ch-3-organ": {
    courseId: "nine-ten-science",
    subjectId: "biology-9-10",
    filePath: "chapters/nine-ten-science/biology-9-10/ch-3-organ.mdx",
  },
  "ch-1-mechanics": {
    courseId: "hsc-science",
    subjectId: "physics-hsc",
    filePath: "chapters/hsc-science/physics-hsc/ch-1-mechanics.mdx",
  },
  "ch-2-thermodynamics": {
    courseId: "hsc-science",
    subjectId: "physics-hsc",
    filePath: "chapters/hsc-science/physics-hsc/ch-2-thermodynamics.mdx",
  },
  "ch-3-waves": {
    courseId: "hsc-science",
    subjectId: "physics-hsc",
    filePath: "chapters/hsc-science/physics-hsc/ch-3-waves.mdx",
  },
  "ch-1-organic": {
    courseId: "hsc-science",
    subjectId: "chemistry-hsc",
    filePath: "chapters/hsc-science/chemistry-hsc/ch-1-organic.mdx",
  },
  "ch-2-inorganic": {
    courseId: "hsc-science",
    subjectId: "chemistry-hsc",
    filePath: "chapters/hsc-science/chemistry-hsc/ch-2-inorganic.mdx",
  },
  "ch-3-physical": {
    courseId: "hsc-science",
    subjectId: "chemistry-hsc",
    filePath: "chapters/hsc-science/chemistry-hsc/ch-3-physical.mdx",
  },
  "ch-1-genetics": {
    courseId: "hsc-science",
    subjectId: "biology-hsc",
    filePath: "chapters/hsc-science/biology-hsc/ch-1-genetics.mdx",
  },
  "ch-2-evolution": {
    courseId: "hsc-science",
    subjectId: "biology-hsc",
    filePath: "chapters/hsc-science/biology-hsc/ch-2-evolution.mdx",
  },
  "ch-3-ecology": {
    courseId: "hsc-science",
    subjectId: "biology-hsc",
    filePath: "chapters/hsc-science/biology-hsc/ch-3-ecology.mdx",
  },
  "ch-1-basic-science": {
    courseId: "admission-science",
    subjectId: "general-science",
    filePath: "chapters/admission-science/general-science/ch-1-basic-science.mdx",
  },
  "ch-2-applied-science": {
    courseId: "admission-science",
    subjectId: "general-science",
    filePath: "chapters/admission-science/general-science/ch-2-applied-science.mdx",
  },
  "ch-3-modern-science": {
    courseId: "admission-science",
    subjectId: "general-science",
    filePath: "chapters/admission-science/general-science/ch-3-modern-science.mdx",
  },
  "ch-1-algebra": {
    courseId: "admission-science",
    subjectId: "math-admission",
    filePath: "chapters/admission-science/math-admission/ch-1-algebra.mdx",
  },
  "ch-2-geometry": {
    courseId: "admission-science",
    subjectId: "math-admission",
    filePath: "chapters/admission-science/math-admission/ch-2-geometry.mdx",
  },
  "ch-3-calculus": {
    courseId: "admission-science",
    subjectId: "math-admission",
    filePath: "chapters/admission-science/math-admission/ch-3-calculus.mdx",
  },
  "ch-1-grammar": { courseId: "bcs", subjectId: "bangla-bcs", filePath: "chapters/bcs/bangla-bcs/ch-1-grammar.mdx" },
  "ch-2-literature": {
    courseId: "bcs",
    subjectId: "bangla-bcs",
    filePath: "chapters/bcs/bangla-bcs/ch-2-literature.mdx",
  },
  "ch-3-comprehension": {
    courseId: "bcs",
    subjectId: "bangla-bcs",
    filePath: "chapters/bcs/bangla-bcs/ch-3-comprehension.mdx",
  },
  "ch-1-grammar-eng": {
    courseId: "bcs",
    subjectId: "english-bcs",
    filePath: "chapters/bcs/english-bcs/ch-1-grammar-eng.mdx",
  },
  "ch-2-vocabulary": {
    courseId: "bcs",
    subjectId: "english-bcs",
    filePath: "chapters/bcs/english-bcs/ch-2-vocabulary.mdx",
  },
  "ch-3-reading": { courseId: "bcs", subjectId: "english-bcs", filePath: "chapters/bcs/english-bcs/ch-3-reading.mdx" },
  "ch-1-geography": {
    courseId: "bcs",
    subjectId: "general-knowledge",
    filePath: "chapters/bcs/general-knowledge/ch-1-geography.mdx",
  },
  "ch-2-history": {
    courseId: "bcs",
    subjectId: "general-knowledge",
    filePath: "chapters/bcs/general-knowledge/ch-2-history.mdx",
  },
  "ch-3-current-affairs": {
    courseId: "bcs",
    subjectId: "general-knowledge",
    filePath: "chapters/bcs/general-knowledge/ch-3-current-affairs.mdx",
  },
  "ch-1-letters": {
    courseId: "primary",
    subjectId: "bangla-primary",
    filePath: "chapters/primary/bangla-primary/ch-1-letters.mdx",
  },
  "ch-2-words": {
    courseId: "primary",
    subjectId: "bangla-primary",
    filePath: "chapters/primary/bangla-primary/ch-2-words.mdx",
  },
  "ch-3-sentences": {
    courseId: "primary",
    subjectId: "bangla-primary",
    filePath: "chapters/primary/bangla-primary/ch-3-sentences.mdx",
  },
  "ch-1-numbers": {
    courseId: "primary",
    subjectId: "math-primary",
    filePath: "chapters/primary/math-primary/ch-1-numbers.mdx",
  },
  "ch-2-addition": {
    courseId: "primary",
    subjectId: "math-primary",
    filePath: "chapters/primary/math-primary/ch-2-addition.mdx",
  },
  "ch-3-subtraction": {
    courseId: "primary",
    subjectId: "math-primary",
    filePath: "chapters/primary/math-primary/ch-3-subtraction.mdx",
  },
  "ch-1-learning": {
    courseId: "nibondon-exam",
    subjectId: "pedagogy",
    filePath: "chapters/nibondon-exam/pedagogy/ch-1-learning.mdx",
  },
  "ch-2-teaching": {
    courseId: "nibondon-exam",
    subjectId: "pedagogy",
    filePath: "chapters/nibondon-exam/pedagogy/ch-2-teaching.mdx",
  },
  "ch-3-assessment": {
    courseId: "nibondon-exam",
    subjectId: "pedagogy",
    filePath: "chapters/nibondon-exam/pedagogy/ch-3-assessment.mdx",
  },
  "ch-1-subject-basics": {
    courseId: "nibondon-exam",
    subjectId: "subject-knowledge",
    filePath: "chapters/nibondon-exam/subject-knowledge/ch-1-subject-basics.mdx",
  },
  "ch-2-subject-advanced": {
    courseId: "nibondon-exam",
    subjectId: "subject-knowledge",
    filePath: "chapters/nibondon-exam/subject-knowledge/ch-2-subject-advanced.mdx",
  },
  "ch-3-subject-application": {
    courseId: "nibondon-exam",
    subjectId: "subject-knowledge",
    filePath: "chapters/nibondon-exam/subject-knowledge/ch-3-subject-application.mdx",
  },
}

export const chapterContentsData: Record<string, string> = {
  "ch-1-motion": `# গতি (Motion)

## সংজ্ঞা
গতি হল কোনো বস্তুর অবস্থানের সময়ের সাথে পরিবর্তন। যখন কোনো বস্তু একটি নির্দিষ্ট সময়ে তার অবস্থান পরিবর্তন করে, তখন আমরা বলি যে বস্তুটি গতিশীল।

## গতির প্রকারভেদ

### ১. সরলরেখা গতি (Linear Motion)
যখন কোনো বস্তু একটি সরল পথে চলে, তখন তাকে সরলরেখা গতি বলে।

**উদাহরণ:**
- ট্রেন একটি সরল রেলপথে চলা
- গাড়ি একটি সোজা রাস্তায় চলা

## গতির সমীকরণ

$$v = u + at$$
$$s = ut + \\frac{1}{2}at^2$$
$$v^2 = u^2 + 2as$$

যেখানে:
- v = চূড়ান্ত বেগ
- u = প্রাথমিক বেগ
- a = ত্বরণ
- t = সময়
- s = দূরত্ব
`,
  "ch-2-force": `# বল (Force)

## সংজ্ঞা
বল হল কোনো বস্তুর অবস্থান পরিবর্তনের কারণ। বল বস্তুকে পরিবর্তন করতে বাধ্য করে।

## নিউটনের গতি সূত্র

### প্রথম সূত্র
প্রতিটি বস্তু বিশ্রাম বা সমবেগে থাকে যতক্ষণ না কোনো বাহ্যিক বল তার উপর কাজ করে।

### দ্বিতীয় সূত্র
$$F = ma$$

### তৃতীয় সূত্র
প্রতিটি ক্রিয়ার একটি সমান এবং বিপরীত প্রতিক্রিয়া আছে।

## বলের প্রকারভেদ

### ১. প্রতিরোধ বল (Frictional Force)
প্রতিরোধ বল হল দুটি বস্তু পরস্পরে পরিবর্তন করতে বাধ্য করে।

### ২. মহাকর্ষ বল (Gravitational Force)
মহাকর্ষ বল হল দুটি বস্তুর মধ্যে আকর্ষণ বল।
`,
  "ch-3-energy": `# শক্তি (Energy)

## সংজ্ঞা
শক্তি হল কোনো বস্তুর কার্যকারী সম্ভাবনা। শক্তি বস্তুকে কার্য করতে বাধ্য করে।

## শক্তির প্রকারভেদ

### ১. কীটনায় শক্তি (Kinetic Energy)
$$KE = \\frac{1}{2}mv^2$$

### ২. সম্ভাব্য শক্তি (Potential Energy)
$$PE = mgh$$

## শক্তির সংরক্ষণ
মোট শক্তি সর্বদা সংরক্ষিত থাকে।

$$E_{total} = KE + PE = \\text{constant}$$
`,
  "ch-1-matter": `# পদার্থ (Matter)

## সংজ্ঞা
পদার্থ হল কোনো বস্তুর মাত্রাকে বর্ণন করে। পদার্থ বস্তুকে পরিবর্তন করতে বাধ্য করে।

## পদার্থের অবস্থা

| অবস্থা | আকার | আয়তন | উদাহরণ |
|--------|------|-------|--------|
| কঠিন | নির্দিষ্ট | নির্দিষ্ট | লোহা, কাঠ |
| তরল | পরিবর্তনশীল | নির্দিষ্ট | পানি, দুধ |
| গ্যাস | পরিবর্তনশীল | পরিবর্তনশীল | বাতাস, অক্সিজেন |
`,
  "ch-2-atom": `# পরমাণু (Atom)

## সংজ্ঞা
পরমাণু হল কোনো পদার্থের সর্বক্ষীণ অংশ। পরমাণু বস্তুকে পরিবর্তন করতে বাধ্য করে।

## পরমাণুর গঠন

- **নিউক্লিয়াস**: প্রোটন এবং নিউট্রন থাকে
- **ইলেকট্রন**: নিউক্লিয়াসের চারপাশে ঘোরে

## পরমাণু সংখ্যা এবং ভর সংখ্যা

- **পরমাণু সংখ্যা (Z)**: প্রোটনের সংখ্যা
- **ভর সংখ্যা (A)**: প্রোটন + নিউট্রনের সংখ্যা
`,
  "ch-3-molecule": `# অণু (Molecule)

## সংজ্ঞা
অণু হল দুই বা তার বেশি পরমাণুর সমষ্টি যা রাসায়নিক বন্ধন দ্বারা যুক্ত।

## অণুর প্রকারভেদ

### ১. সমপরমাণুক অণু
একই ধরনের পরমাণু দিয়ে গঠিত।
- উদাহরণ: O₂, N₂, H₂

### ২. বিভিন্ন পরমাণুক অণু
বিভিন্ন ধরনের পরমাণু দিয়ে গঠিত।
- উদাহরণ: H₂O, CO₂, NH₃
`,
  "ch-1-cell": `# কোষ (Cell)

## সংজ্ঞা
কোষ হল জীবপদার্থের সর্বক্ষীণ অংশ। কোষ বস্তুকে পরিবর্তন করতে বাধ্য করে।

## কোষের প্রকারভেদ

### ১. প্রোকারিওটিক কোষ
- নিউক্লিয়াস নেই
- উদাহরণ: ব্যাকটেরিয়া

### ২. ইউকারিওটিক কোষ
- নিউক্লিয়াস আছে
- উদাহরণ: প্রাণী এবং উদ্ভিদ কোষ

## কোষের অঙ্গাণু

| অঙ্গাণু | কাজ |
|--------|-----|
| নিউক্লিয়াস | নিয়ন্ত্রণ |
| মাইটোকন্ড্রিয়া | শক্তি উৎপাদন |
| রাইবোসোম | প্রোটিন সংশ্লেষণ |
| এন্ডোপ্লাজমিক রেটিকুলাম | পরিবহন |
`,
  "ch-2-tissue": `# টিস্যু (Tissue)

## সংজ্ঞা
টিস্যু হল কোষগুলি একসাথে আসা যাত্রায় উৎপন্ন বস্তু। টিস্যু বস্তুকে পরিবর্তন করতে বাধ্য করে।

## টিস্যুর প্রকারভেদ

### ১. এপিথেলিয়াল টিস্যু
- সুরক্ষা প্রদান করে
- উদাহরণ: ত্বক

### ২. সংযোজক টিস্যু
- বিভিন্ন অংশ সংযুক্ত করে
- উদাহরণ: হাড়, তরুণাস্থি

### ৩. পেশী টিস্যু
- গতি প্রদান করে
- উদাহরণ: কঙ্কাল পেশী

### ৪. স্নায়ু টিস্যু
- সংকেত প্রেরণ করে
- উদাহরণ: মস্তিষ্ক, স্পাইনাল কর্ড
`,
  "ch-3-organ": `# অঙ্গ (Organ)

## সংজ্ঞা
অঙ্গ হল বিভিন্ন টিস্যুর সমষ্টি যা একটি নির্দিষ্ট কাজ করে।

## প্রধান অঙ্গ

### ১. হৃদয়
- সংবহনতন্ত্রের প্রধান অঙ্গ
- রক্ত পম্প করে

### ২. ফুসফুস
- শ্বসনতন্ত্রের প্রধান অঙ্গ
- অক্সিজেন গ্রহণ করে

### ৩. মস্তিষ্ক
- স্নায়ুতন্ত্রের প্রধান অঙ্গ
- সমস্ত কার্যকলাপ নিয়ন্ত্রণ করে

### ৪. পাকস্থলী
- পরিপাকতন্ত্রের প্রধান অঙ্গ
- খাদ্য হজম করে
`,
  "ch-1-grammar": `# ব্যাকরণ (Grammar)

## সংজ্ঞা
ব্যাকরণ হল বাংলা ভাষার নিয়ম ও সূত্র। ব্যাকরণ বস্তুকে পরিবর্তন করতে বাধ্য করে।

## বাংলা বর্ণমালা

### স্বরবর্ণ (7টি)
অ, আ, ই, ঈ, উ, ঊ, ঋ

### ব্যঞ্জনবর্ণ (29টি)
ক, খ, গ, ঘ, ঙ, চ, ছ, জ, ঝ, ঞ, ট, ঠ, ড, ঢ, ণ, ত, থ, দ, ধ, ন, প, ফ, ব, ভ, ম, য, র, ল, শ, ষ, স, হ, ড়, ঢ়, য়, ৎ

## বাক্যের প্রকারভেদ

### ১. সরল বাক্য
একটি মূল ক্রিয়া থাকে।

### ২. জটিল বাক্য
একাধিক মূল ক্রিয়া থাকে।

### ৩. যৌগিক বাক্য
দুটি বা তার বেশি সরল বাক্য যুক্ত থাকে।
`,
  "ch-2-literature": `# সাহিত্য (Literature)

## সংজ্ঞা
সাহিত্য হল বাংলা ভাষার লিখিত উৎস। সাহিত্য বস্তুকে পরিবর্তন করতে বাধ্য করে।

## সাহিত্যের প্রকারভেদ

### ১. কাব্য (Poetry)
- ছন্দ এবং মিল থাকে
- আবেগ প্রকাশ করে

### ২. গল্প (Story)
- চরিত্র এবং প্লট থাকে
- বিনোদন প্রদান করে

### ৩. নাটক (Drama)
- সংলাপ এবং অভিনয় থাকে
- মঞ্চে উপস্থাপন করা হয়

### ৪. প্রবন্ধ (Essay)
- চিন্তা এবং মতামত প্রকাশ করে
- তথ্যপূর্ণ হয়
`,
  "ch-1-mechanics": `# বলবিদ্যা (Mechanics)

## সংজ্ঞা
বলবিদ্যা হল পদার্থবিজ্ঞানের একটি শাখা যা বল এবং গতি নিয়ে আলোচনা করে।

## প্রধান বিষয়

### ১. স্ট্যাটিক্স
- স্থির বস্তু নিয়ে আলোচনা
- ভারসাম্য এবং মুহূর্ত

### ২. ডায়নামিক্স
- গতিশীল বস্তু নিয়ে আলোচনা
- বল এবং ত্বরণ

### ৩. কাইনেমেটিক্স
- গতি নিয়ে আলোচনা
- বেগ এবং ত্বরণ
`,
  "ch-2-thermodynamics": `# তাপগতিবিদ্যা (Thermodynamics)

## সংজ্ঞা
তাপগতিবিদ্যা হল পদার্থবিজ্ঞানের একটি শাখা যা তাপ এবং শক্তি নিয়ে আলোচনা করে।

## প্রধান সূত্র

### প্রথম সূত্র
$$\\Delta U = Q - W$$

### দ্বিতীয় সূত্র
এন্ট্রপি সর্বদা বৃদ্ধি পায়।

### তৃতীয় সূত্র
পরম শূন্য তাপমাত্রায় এন্ট্রপি শূন্য।
`,
  "ch-3-waves": `# তরঙ্গ (Waves)

## সংজ্ঞা
তরঙ্গ হল শক্তির প্রসার যা মাধ্যমের মধ্য দিয়ে চলে।

## তরঙ্গের প্রকারভেদ

### ১. অনুদৈর্ঘ্য তরঙ্গ
- কণা তরঙ্গের দিকে কম্পিত হয়
- উদাহরণ: শব্দ তরঙ্গ

### ২. অনুপ্রস্থ তরঙ্গ
- কণা তরঙ্গের লম্বভাবে কম্পিত হয়
- উদাহরণ: আলো তরঙ্গ

## তরঙ্গের সমীকরণ

$$v = f\\lambda$$

যেখানে:
- v = তরঙ্গের গতি
- f = ফ্রিকোয়েন্সি
- λ = তরঙ্গদৈর্ঘ্য
`,
  "ch-1-organic": `# জৈব রসায়ন (Organic Chemistry)

## সংজ্ঞা
জৈব রসায়ন হল কার্বন যৌগ নিয়ে আলোচনা করে।

## প্রধান বিষয়

### ১. হাইড্রোকার্বন
- শুধুমাত্র কার্বন এবং হাইড্রোজেন থাকে
- উদাহরণ: মিথেন, ইথেন

### ২. অ্যালকোহল
- হাইড্রক্সিল গ্রুপ থাকে
- উদাহরণ: ইথানল

### ৩. কার্বক্সিলিক অ্যাসিড
- কার্বক্সিল গ্রুপ থাকে
- উদাহরণ: অ্যাসেটিক অ্যাসিড
`,
  "ch-2-inorganic": `# অজৈব রসায়ন (Inorganic Chemistry)

## সংজ্ঞা
অজৈব রসায়ন হল অ-কার্বন যৌগ নিয়ে আলোচনা করে।

## প্রধান বিষয়

### ১. ধাতু
- বিদ্যুৎ পরিবাহী
- উদাহরণ: লোহা, তামা

### ২. অ-ধাতু
- বিদ্যুৎ অপরিবাহী
- উদাহরণ: অক্সিজেন, নাইট্রোজেন

### ৩. লবণ
- ধাতু এবং অ-ধাতুর যৌগ
- উদাহরণ: সোডিয়াম ক্লোরাইড
`,
  "ch-3-physical": `# ভৌত রসায়ন (Physical Chemistry)

## সংজ্ঞা
ভৌত রসায়ন হল রসায়ন এবং পদার্থবিজ্ঞানের সংমিশ্রণ।

## প্রধান বিষয়

### ১. থার্মোকেমিস্ট্রি
- তাপ এবং রাসায়নিক বিক্রিয়া

### ২. ইলেকট্রোকেমিস্ট্রি
- বিদ্যুৎ এবং রাসায়নিক বিক্রিয়া

### ৩. কাইনেটিক্স
- বিক্রিয়ার গতি
`,
  "ch-1-genetics": `# বংশগতি (Genetics)

## সংজ্ঞা
বংশগতি হল বৈশিষ্ট্য প্রজন্ম থেকে প্রজন্মে স্থানান্তরের অধ্যয়ন।

## মেন্ডেলের সূত্র

### প্রথম সূত্র
বিশুদ্ধ প্রজাতির সংকরায়নে সমস্ত সন্তান প্রভাবশালী বৈশিষ্ট্য প্রদর্শন করে।

### দ্বিতীয় সূত্র
F2 প্রজন্মে 3:1 অনুপাত পাওয়া যায়।

### তৃতীয় সূত্র
বিভিন্ন বৈশিষ্ট্য স্বাধীনভাবে বিতরণ করা হয়।
`,
  "ch-2-evolution": `# বিবর্তন (Evolution)

## সংজ্ঞা
বিবর্তন হল জীবের ধীরে ধীরে পরিবর্তন এবং উন্নতি।

## ডারউইনের তত্ত্ব

### প্রাকৃতিক নির্বাচন
- শক্তিশালী জীব টিকে থাকে
- দুর্বল জীব বিলুপ্ত হয়

### অভিযোজন
- জীব পরিবেশের সাথে খাপ খায়

## প্রমাণ

- জীবাশ্ম রেকর্ড
- তুলনামূলক শারীরবিদ্যা
- ভ্রূণ বিকাশ
`,
  "ch-3-ecology": `# পরিবেশবিদ্যা (Ecology)

## সংজ্ঞা
পরিবেশবিদ্যা হল জীব এবং তাদের পরিবেশের সম্পর্ক অধ্যয়ন।

## প্রধান ধারণা

### ১. ইকোসিস্টেম
- জীব এবং অ-জীব উপাদানের সমষ্টি

### ২. খাদ্য শৃঙ্খল
- শক্তি এক জীব থেকে অন্য জীবে স্থানান্তর

### ৩. জীববৈচিত্র্য
- বিভিন্ন প্রজাতির উপস্থিতি

## সংরক্ষণ

- বন সংরক্ষণ
- বন্যপ্রাণী সংরক্ষণ
- জল সংরক্ষণ
`,
  "ch-1-basic-science": `# মৌলিক বিজ্ঞান (Basic Science)

## সংজ্ঞা
মৌলিক বিজ্ঞান হল বিজ্ঞানের মৌলিক ধারণা এবং নীতি।

## প্রধান বিষয়

### ১. পদার্থ
- কঠিন, তরল, গ্যাস

### ২. শক্তি
- গতিশক্তি, সম্ভাব্য শক্তি

### ৩. বল
- মহাকর্ষ, ঘর্ষণ

### ৪. তাপ
- তাপমাত্রা, তাপ স্থানান্তর
`,
  "ch-2-applied-science": `# প্রয়োগিত বিজ্ঞান (Applied Science)

## সংজ্ঞা
প্রয়োগিত বিজ্ঞান হল বিজ্ঞানের ব্যবহারিক প্রয়োগ।

## প্রধান ক্ষেত্র

### ১. প্রযুক্তি
- যন্ত্রপাতি এবং সরঞ্জাম

### ২. চিকিৎসা
- ওষুধ এবং চিকিৎসা

### ৩. কৃষি
- ফসল এবং পশুপালন

### ৪. শিল্প
- উৎপাদন এবং নির্মাণ
`,
  "ch-3-modern-science": `# আধুনিক বিজ্ঞান (Modern Science)

## সংজ্ঞা
আধুনিক বিজ্ঞান হল সর্বশেষ বৈজ্ঞানিক আবিষ্কার এবং প্রযুক্তি।

## প্রধান ক্ষেত্র

### ১. কোয়ান্টাম মেকানিক্স
- পরমাণু এবং সাব-পরমাণু কণা

### ২. আপেক্ষিকতা
- স্থান এবং সময়

### ৩. জৈব প্রযুক্তি
- জিন এবং ডিএনএ

### ৪. কৃত্রিম বুদ্ধিমত্তা
- কম্পিউটার এবং রোবোটিক্স
`,
  "ch-1-algebra": `# বীজগণিত (Algebra)

## সংজ্ঞা
বীজগণিত হল সংখ্যা এবং চলকের সাথে কাজ করে।

## প্রধান বিষয়

### ১. সমীকরণ
$$ax + b = c$$

### ২. অসমীকরণ
$$ax + b > c$$

### ৩. বহুপদী
$$ax^2 + bx + c$$

### ৪. ম্যাট্রিক্স
- সংখ্যার সারণী
`,
  "ch-2-geometry": `# জ্যামিতি (Geometry)

## সংজ্ঞা
জ্যামিতি হল আকার এবং স্থান নিয়ে কাজ করে।

## প্রধান বিষয়

### ১. ত্রিভুজ
- তিনটি বাহু এবং তিনটি কোণ

### ২. বৃত্ত
- সমস্ত বিন্দু কেন্দ্র থেকে সমান দূরত্বে

### ৩. চতুর্ভুজ
- চারটি বাহু এবং চারটি কোণ

### ৪. বহুভুজ
- একাধিক বাহু এবং কোণ
`,
  "ch-3-calculus": `# ক্যালকুলাস (Calculus)

## সংজ্ঞা
ক্যালকুলাস হল পরিবর্তন এবং সীমা নিয়ে কাজ করে।

## প্রধান বিষয়

### ১. অন্তরকলন
$$\\frac{dy}{dx} = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}$$

### ২. সমাকলন
$$\\int f(x)dx$$

### ৩. সীমা
$$\\lim_{x \\to a} f(x)$$

### ৪. ধারাবাহিকতা
- ফাংশন বিরতিহীন থাকে
`,
  "ch-1-grammar-eng": `# English Grammar

## Definition
English grammar is the set of rules for using the English language correctly.

## Main Topics

### 1. Parts of Speech
- Noun, Verb, Adjective, Adverb
- Pronoun, Preposition, Conjunction

### 2. Tenses
- Present, Past, Future
- Simple, Continuous, Perfect

### 3. Sentence Structure
- Subject, Verb, Object
- Simple, Compound, Complex

### 4. Punctuation
- Period, Comma, Question Mark
- Exclamation Mark, Apostrophe
`,
  "ch-2-vocabulary": `# English Vocabulary

## Definition
Vocabulary is the collection of words in a language.

## Main Topics

### 1. Word Formation
- Root words, Prefixes, Suffixes
- Compound words

### 2. Synonyms and Antonyms
- Words with similar meanings
- Words with opposite meanings

### 3. Idioms and Phrases
- Common expressions
- Figurative language

### 4. Word Categories
- Nouns, Verbs, Adjectives
- Adverbs, Prepositions
`,
  "ch-3-reading": `# English Reading Comprehension

## Definition
Reading comprehension is understanding written text.

## Main Topics

### 1. Reading Strategies
- Skimming, Scanning
- Detailed reading

### 2. Comprehension Questions
- Main idea, Details
- Inference, Vocabulary

### 3. Text Types
- Narrative, Descriptive
- Expository, Persuasive

### 4. Critical Reading
- Analyzing arguments
- Identifying bias
`,
  "ch-1-geography": `# ভূগোল (Geography)

## সংজ্ঞা
ভূগোল হল পৃথিবী এবং এর বৈশিষ্ট্য অধ্যয়ন।

## প্রধান বিষয়

### ১. ভৌত ভূগোল
- পর্বত, নদী, মহাসাগর
- জলবায়ু, আবহাওয়া

### ২. মানব ভূগোল
- জনসংখ্যা, সংস্কৃতি
- অর্থনীতি, রাজনীতি

### ৩. বাংলাদেশের ভূগোল
- অবস্থান, সীমানা
- জলবায়ু, সম্পদ

### ৪. বিশ্ব ভূগোল
- মহাদেশ, দেশ
- সমুদ্র, পর্বত
`,
  "ch-2-history": `# ইতিহাস (History)

## সংজ্ঞা
ইতিহাস হল অতীতের ঘটনা এবং মানুষ অধ্যয়ন।

## প্রধান বিষয়

### ১. প্রাচীন ইতিহাস
- সিন্ধু সভ্যতা
- মৌর্য সাম্রাজ্য

### ২. মধ্যযুগীয় ইতিহাস
- মুসলিম শাসন
- সুলতানি যুগ

### ৩. আধুনিক ইতিহাস
- ব্রিটিশ শাসন
- স্বাধীনতা সংগ্রাম

### ৪. বাংলাদেশের ইতিহাস
- মুক্তিযুদ্ধ
- স্বাধীনতা
`,
  "ch-3-current-affairs": `# সাম্প্রতিক ঘটনা (Current Affairs)

## সংজ্ঞা
সাম্প্রতিক ঘটনা হল বর্তমান সময়ের গুরুত্বপূর্ণ ঘটনা।

## প্রধান বিষয়

### ১. রাজনীতি
- নির্বাচন, সরকার
- আন্তর্জাতিক সম্পর্ক

### ২. অর্থনীতি
- বাণিজ্য, বিনিয়োগ
- মুদ্রা, ব্যাংক

### ৩. সমাজ
- শিক্ষা, স্বাস্থ্য
- পরিবেশ, দুর্যোগ

### ৪. খেলাধুলা
- ক্রিকেট, ফুটবল
- অলিম্পিক, চ্যাম্পিয়নশিপ
`,
  "ch-1-letters": `# অক্ষর (Letters)

## সংজ্ঞা
অক্ষর হল ভাষার মৌলিক উপাদান।

## বাংলা অক্ষর

### স্বরবর্ণ
অ, আ, ই, ঈ, উ, ঊ, ঋ

### ব্যঞ্জনবর্ণ
ক, খ, গ, ঘ, ঙ, চ, ছ, জ, ঝ, ঞ

## অক্ষর লেখা

- সঠিক আকার
- সঠিক আকার
- সঠিক সংযোগ
`,
  "ch-2-words": `# শব্দ (Words)

## সংজ্ঞা
শব্দ হল অক্ষরের সমষ্টি যা অর্থ প্রকাশ করে।

## শব্দের প্রকারভেদ

### ১. বিশেষ্য
- ব্যক্তি, প্রাণী, বস্তু

### ২. ক্রিয়া
- কাজ, অবস্থা

### ৩. বিশেষণ
- গুণ, সংখ্যা

### ৪. ক্রিয়াবিশেষণ
- কীভাবে, কখন, কোথায়
`,
  "ch-3-sentences": `# বাক্য (Sentences)

## সংজ্ঞা
বাক্য হল শব্দের সমষ্টি যা সম্পূর্ণ অর্থ প্রকাশ করে।

## বাক্যের প্রকারভেদ

### ১. সরল বাক্য
- একটি মূল ক্রিয়া

### ২. জটিল বাক্য
- একাধিক মূল ক্রিয়া

### ৩. যৌগিক বাক্য
- দুটি বা তার বেশি সরল বাক্য

## বাক্য লেখা

- সঠিক বিরাম চিহ্ন
- সঠিক ব্যাকরণ
- স্পষ্ট অর্থ
`,
  "ch-1-numbers": `# সংখ্যা (Numbers)

## সংজ্ঞা
সংখ্যা হল পরিমাণ প্রকাশ করে।

## সংখ্যার প্রকারভেদ

### ১. প্রাকৃতিক সংখ্যা
1, 2, 3, 4, 5...

### ২. পূর্ণ সংখ্যা
0, 1, 2, 3, 4...

### ৩. জোড় সংখ্যা
2, 4, 6, 8...

### ৪. বিজোড় সংখ্যা
1, 3, 5, 7...

## সংখ্যা গণনা

- 1 থেকে 10
- 10 থেকে 20
- 20 থেকে 100
`,
  "ch-2-addition": `# যোগ (Addition)

## সংজ্ঞা
যোগ হল দুটি বা তার বেশি সংখ্যা একসাথে করা।

## যোগের নিয়ম

### ১. সহজ যোগ
1 + 1 = 2
2 + 2 = 4
3 + 3 = 6

### ২. বড় সংখ্যার যোগ
10 + 5 = 15
20 + 10 = 30
50 + 25 = 75

## যোগের অনুশীলন

- একক অঙ্কের যোগ
- দ্বিগুণ অঙ্কের যোগ
- ত্রিগুণ অঙ্কের যোগ
`,
  "ch-3-subtraction": `# বিয়োগ (Subtraction)

## সংজ্ঞা
বিয়োগ হল একটি সংখ্যা থেকে অন্য সংখ্যা বাদ দেওয়া।

## বিয়োগের নিয়ম

### ১. সহজ বিয়োগ
2 - 1 = 1
4 - 2 = 2
6 - 3 = 3

### ২. বড় সংখ্যার বিয়োগ
15 - 5 = 10
30 - 10 = 20
75 - 25 = 50

## বিয়োগের অনুশীলন

- একক অঙ্কের বিয়োগ
- দ্বিগুণ অঙ্কের বিয়োগ
- ত্রিগুণ অঙ্কের বিয়োগ
`,
  "ch-1-learning": `# শিক্ষা (Learning)

## সংজ্ঞা
শিক্ষা হল জ্ঞান এবং দক্ষতা অর্জন।

## শিক্ষার প্রকারভেদ

### ১. আনুষ্ঠানিক শিক্ষা
- স্কুল, কলেজ, বিশ্ববিদ্যালয়

### ২. অনানুষ্ঠানিক শিক্ষা
- পরিবার, সমাজ

### ৩. অ-আনুষ্ঠানিক শিক্ষা
- কর্মশালা, প্রশিক্ষণ

## শিক্ষার লক্ষ্য

- জ্ঞান অর্জন
- দক্ষতা উন্নয়ন
- ব্যক্তিত্ব বিকাশ
`,
  "ch-2-teaching": `# শিক্ষণ (Teaching)

## সংজ্ঞা
শিক্ষণ হল শিক্ষার্থীদের জ্ঞান প্রদান।

## শিক্ষণ পদ্ধতি

### ১. ঐতিহ্যবাহী পদ্ধতি
- বক্তৃতা, আলোচনা

### ২. আধুনিক পদ্ধতি
- প্রকল্প, সহযোগিতা

### ৩. প্রযুক্তি-ভিত্তিক পদ্ধতি
- অনলাইন শিক্ষা, ভিডিও

## শিক্ষকের ভূমিকা

- জ্ঞান প্রদান
- নির্দেশনা প্রদান
- অনুপ্রেরণা প্রদান
`,
  "ch-3-assessment": `# মূল্যায়ন (Assessment)

## সংজ্ঞা
মূল্যায়ন হল শিক্ষার্থীর অগ্রগতি পরিমাপ।

## মূল্যায়নের প্রকারভেদ

### ১. গঠনমূলক মূল্যায়ন
- চলমান মূল্যায়ন
- প্রতিক্রিয়া প্রদান

### ২. সামষ্টিক মূল্যায়ন
- চূড়ান্ত পরীক্ষা
- গ্রেড প্রদান

## মূল্যায়নের পদ্ধতি

- পরীক্ষা, প্রকল্প
- উপস্থাপনা, পোর্টফোলিও
`,
  "ch-1-subject-basics": `# বিষয় মৌলিক (Subject Basics)

## সংজ্ঞা
বিষয় মৌলিক হল বিষয়ের মৌলিক ধারণা।

## প্রধান বিষয়

### ১. বিষয়ের সংজ্ঞা
- বিষয় কী?
- বিষয়ের গুরুত্ব

### ২. বিষয়ের ইতিহাস
- বিষয়ের উৎপত্তি
- বিষয়ের বিকাশ

### ৩. বিষয়ের শাখা
- প্রধান শাখা
- উপশাখা

## বিষয় শেখা

- মৌলিক ধারণা
- প্রধান বিষয়
- ব্যবহারিক প্রয়োগ
`,
  "ch-2-subject-advanced": `# বিষয় উন্নত (Subject Advanced)

## সংজ্ঞা
বিষয় উন্নত হল বিষয়ের উন্নত ধারণা।

## প্রধান বিষয়

### ১. উন্নত ধারণা
- জটিল ধারণা
- গভীর বোঝাপড়া

### ২. গবেষণা পদ্ধতি
- তথ্য সংগ্রহ
- বিশ্লেষণ

### ৩. বর্তমান উন্নয়ন
- সর্বশেষ আবিষ্কার
- নতুন প্রযুক্তি

## উন্নত শেখা

- গভীর অধ্যয়ন
- গবেষণা প্রকল্প
- সেমিনার এবং কর্মশালা
`,
  "ch-3-subject-application": `# বিষয় প্রয়োগ (Subject Application)

## সংজ্ঞা
বিষয় প্রয়োগ হল বিষয়ের ব্যবহারিক প্রয়োগ।

## প্রধান ক্ষেত্র

### ১. শিল্প প্রয়োগ
- উৎপাদন
- প্রযুক্তি

### ২. সামাজিক প্রয়োগ
- সমাজ সেবা
- উন্নয়ন

### ৩. ব্যক্তিগত প্রয়োগ
- ক্যারিয়ার
- ব্যক্তিগত বৃদ্ধি

## প্রয়োগের উপায়

- প্রকল্প কাজ
- ইন্টার্নশিপ
- বাস্তব অভিজ্ঞতা
`,
}

</existing_code>

2. Now, look at the updates to be made:
<updates>

export const usersData: Record<string, any> = {
  "student-1": {
    id: "student-1",
    email: "student@example.com",
    name: "রহিম আহমেদ",
    role: "student",
    tier: "free",
    coursesEnrolled: ["nine-ten-science", "bcs"],
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-10-29"),
  },
  "student-2": {
    id: "student-2",
    email: "premium@example.com",
    name: "ফাতিমা খান",
    role: "student",
    tier: "premium",
    coursesEnrolled: ["nine-ten-science", "hsc-science", "admission-science", "bcs"],
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-10-29"),
  },
}

export const userProgressData: Record<string, any[]> = {
  "student-1": [
    {
      id: "progress-1",
      userId: "student-1",
      courseId: "nine-ten-science",
      subjectId: "physics-9-10",
      chapterId: "ch-1-motion",
      questionsAnswered: 4,
      correctAnswers: 3,
      completedAt: new Date("2024-10-20"),
    },
    {
      id: "progress-2",
      userId: "student-1",
      courseId: "nine-ten-science",
      subjectId: "physics-9-10",
      chapterId: "ch-2-force",
      questionsAnswered: 4,
      correctAnswers: 2,
      completedAt: new Date("2024-10-22"),
    },
    {
      id: "progress-3",
      userId: "student-1",
      courseId: "nine-ten-science",
      subjectId: "physics-9-10",
      chapterId: "ch-3-energy",
      questionsAnswered: 4,
      correctAnswers: 4,
      completedAt: new Date("2024-10-25"),
    },
    {
      id: "progress-4",
      userId: "student-1",
      courseId: "nine-ten-science",
      subjectId: "chemistry-9-10",
      chapterId: "ch-1-matter",
      questionsAnswered: 4,
      correctAnswers: 3,
      completedAt: new Date("2024-10-26"),
    },
    {
      id: "progress-5",
      userId: "student-1",
      courseId: "nine-ten-science",
      subjectId: "chemistry-9-10",
      chapterId: "ch-2-atom",
      questionsAnswered: 4,
      correctAnswers: 3,
      completedAt: new Date("2024-10-27"),
    },
    {
      id: "progress-6",
      userId: "student-1",
      courseId: "nine-ten-science",
      subjectId: "chemistry-9-10",
      chapterId: "ch-3-molecule",
      questionsAnswered: 4,
      correctAnswers: 2,
      completedAt: new Date("2024-10-28"),
    },
    {
      id: "progress-7",
      userId: "student-1",
      courseId: "nine-ten-science",
      subjectId: "biology-9-10",
      chapterId: "ch-1-cell",
      questionsAnswered: 4,
      correctAnswers: 4,
      completedAt: new Date("2024-10-29"),
    },
  ],
  "student-2": [
    {
      id: "progress-8",
      userId: "student-2",
      courseId: "nine-ten-science",
      subjectId: "physics-9-10",
      chapterId: "ch-1-motion",
      questionsAnswered: 4,
      correctAnswers: 4,
      completedAt: new Date("2024-10-15"),
    },
    {
      id: "progress-9",
      userId: "student-2",
      courseId: "nine-ten-science",
      subjectId: "physics-9-10",
      chapterId: "ch-2-force",
      questionsAnswered: 4,
      correctAnswers: 4,
      completedAt: new Date("2024-10-16"),
    },
    {
      id: "progress-10",
      userId: "student-2",
      courseId: "nine-ten-science",
      subjectId: "physics-9-10",
      chapterId: "ch-3-energy",
      questionsAnswered: 4,
      correctAnswers: 4,
      completedAt: new Date("2024-10-17"),
    },
    {
      id: "progress-11",
      userId: "student-2",
      courseId: "nine-ten-science",
      subjectId: "chemistry-9-10",
      chapterId: "ch-1-matter",
      questionsAnswered: 4,
      correctAnswers: 4,
      completedAt: new Date("2024-10-18"),
    },
    {
      id: "progress-12",
      userId: "student-2",
      courseId: "nine-ten-science",
      subjectId: "chemistry-9-10",
      chapterId: "ch-2-atom",
      questionsAnswered: 4,
      correctAnswers: 4,
      completedAt: new Date("2024-10-19"),
    },
    {
      id: "progress-13",
      userId: "student-2",
      courseId: "nine-ten-science",
      subjectId: "chemistry-9-10",
      chapterId: "ch-3-molecule",
      questionsAnswered: 4,
      correctAnswers: 4,
      completedAt: new Date("2024-10-20"),
    },
    {
      id: "progress-14",
      userId: "student-2",
      courseId: "nine-ten-science",
      subjectId: "biology-9-10",
      chapterId: "ch-1-cell",
      questionsAnswered: 4,
      correctAnswers: 4,
      completedAt: new Date("2024-10-21"),
    },
    {
      id: "progress-15",
      userId: "student-2",
      courseId: "nine-ten-science",
      subjectId: "biology-9-10",
      chapterId: "ch-2-tissue",
      questionsAnswered: 4,
      correctAnswers: 4,
      completedAt: new Date("2024-10-22"),
    },
    {
      id: "progress-16",
      userId: "student-2",
      courseId: "nine-ten-science",
      subjectId: "biology-9-10",
      chapterId: "ch-3-organ",
      questionsAnswered: 4,
      correctAnswers: 4,
      completedAt: new Date("2024-10-23"),
    },
  ],
}

</updates>

3. Your task is to merge these updates into the existing `lib/db.ts`, creating a single, cohesive piece of code.

4. Identify the locations in the existing code where updates need to be made. Look for markers like "/** rest of code here **/" in the updates, which indicate where the new code should be inserted.

5. For each update:
   a. Locate the corresponding section in the existing code.
   b. Replace the existing code between the markers with the new code from the updates.
   c. If there are no clear markers, use your best judgment to determine where the new code should be inserted based on the context and structure of the existing code.

6. Ensure that the merged code maintains consistent formatting, indentation, and style with the rest of the code block.

7. Write your answer inside <merged_code> tags. You should only respond with <merged_code> tags + the code inside them. DO NOT wrap the code in backticks or any other formatting.

8. Here is a simple example to illustrate the process:

const x = "updated value";


Remember to maintain the overall structure and integrity of the original code while incorporating the updates seamlessly.

Please begin with <merged_code> just as shown in the example:
<|im_start|><|im_start|><|im_start|>
<|im_start|><|im_start|>
<|im_start|>
