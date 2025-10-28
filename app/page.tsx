"use client";
import QuestionPaper from "@/components/question-paper";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

const rawQuestions = [
  // Normal Questions
  {
    type: "normal",
    question: "বাংলাদেশের রাজধানী কোথায়?",
    options: ["চট্টগ্রাম", "রাজশাহী", "ঢাকা", "সিলেট"],
    correctAnswer: "ঢাকা",
  },
  {
    type: "normal",
    question: "বাংলাদেশের জাতীয় ফুল কোনটি?",
    options: ["গোলাপ", "শাপলা", "সূর্যমুখী", "জবা"],
    correctAnswer: "শাপলা",
  },
  {
    type: "normal",
    question: "বাংলাদেশের স্বাধীনতা দিবস কোন তারিখে?",
    options: ["১৬ ডিসেম্বর", "২৬ মার্চ", "১৪ এপ্রিল", "২১ ফেব্রুয়ারি"],
    correctAnswer: "২৬ মার্চ",
  },
  {
    type: "normal",
    question: "বাংলাদেশের প্রথম রাষ্ট্রপতি কে ছিলেন?",
    options: [
      "শেখ মুজিবুর রহমান",
      "সৈয়দ নজরুল ইসলাম",
      "আবু সাঈদ চৌধুরী",
      "জিল্লুর রহমান",
    ],
    correctAnswer: "আবু সাঈদ চৌধুরী",
  },
  {
    type: "normal",
    question: "বাংলাদেশের সর্বোচ্চ পর্বত শিখর কোনটি?",
    options: ["কেওক্রাডং", "তাজিংডং", "লালমাই", "মাধবপুর"],
    correctAnswer: "তাজিংডং",
  },
  {
    type: "passage",
    passage:
      "বাংলাদেশ দক্ষিণ এশিয়ার একটি গুরুত্বপূর্ণ দেশ। এটি তিনটি বড় নদী দ্বারা গঠিত - পদ্মা, মেঘনা এবং ব্রহ্মপুত্র। এই নদীগুলি বাংলাদেশের অর্থনীতি এবং কৃষিতে গুরুত্বপূর্ণ ভূমিকা পালন করে। বাংলাদেশের মোট জনসংখ্যা প্রায় ১৭ কোটি।",
    questions: [
      {
        type: "multiStatement",
        question: "বাংলাদেশের বড় নদী কোনটি?",
        statements: ["i. পদ্মা", "ii. মেঘনা", "iii. সুরমিলা"],
        questionEnd: "নিচের কোনটি সঠিক?",
        options: ["A. i & ii", "B. i & iii", "C. ii & iii", "D. শুধুমাত্র iii"],
        correctAnswer: "A. i & ii",
      },
      {
        type: "normal",
        question:
          "নদীগুলি বাংলাদেশের কোন ক্ষেত্রে গুরুত্বপূর্ণ ভূমিকা পালন করে?",
        options: [
          "শুধুমাত্র পরিবহনে",
          "শুধুমাত্র মৎস্য শিল্পে",
          "অর্থনীতি এবং কৃষিতে",
          "শুধুমাত্র পর্যটনে",
        ],
        correctAnswer: "অর্থনীতি এবং কৃষিতে",
      },
      {
        question: "বাংলাদেশের মোট জনসংখ্যা প্রায় কত?",
        options: ["১০ কোটি", "১৫ কোটি", "১৭ কোটি", "২০ কোটি"],
        correctAnswer: "১৭ কোটি",
      },
    ],
  },
  {
    type: "normal",
    question: "বাংলাদেশের জাতীয় সংগীত কে রচনা করেছেন?",
    options: [
      "রবীন্দ্রনাথ ঠাকুর",
      "কাজী নজরুল ইসলাম",
      "দ্বিজেন্দ্রলাল রায়",
      "সালিল চৌধুরী",
    ],
    correctAnswer: "রবীন্দ্রনাথ ঠাকুর",
  },
  {
    type: "normal",
    question: "বাংলাদেশের জাতীয় মুদ্রা কোনটি?",
    options: ["টাকা", "রুপি", "ডলার", "পাউন্ড"],
    correctAnswer: "টাকা",
  },
  {
    type: "multiStatement",
    question: "বাংলাদেশের ভৌগোলিক বৈশিষ্ট্য সম্পর্কে কোনটি সঠিক?",
    statements: [
      "i. বাংলাদেশ একটি নদীমাতৃক দেশ",
      "ii. বাংলাদেশের বেশিরভাগ অঞ্চল সমতল",
      "iii. বাংলাদেশ সম্পূর্ণভাবে পর্বতময়",
    ],
    questionEnd: "নিচের কোনটি সঠিক?",
    options: ["A. i & ii", "B. i & iii", "C. ii & iii", "D. শুধুমাত্র iii"],
    correctAnswer: "A. i & ii",
  },
  {
    type: "normal",
    question: "বাংলাদেশের বৃহত্তম শহর কোনটি?",
    options: ["চট্টগ্রাম", "খুলনা", "ঢাকা", "রাজশাহী"],
    correctAnswer: "ঢাকা",
  },
  {
    type: "passage",
    passage:
      "বাংলা ভাষা আন্দোলন ১৯৫২ সালে সংঘটিত হয়েছিল। এই আন্দোলনে অনেক শিক্ষার্থী তাদের প্রাণ দিয়েছিলেন। ২১ ফেব্রুয়ারি এই আন্দোলনের সবচেয়ে গুরুত্বপূর্ণ দিন। এই দিনটি এখন আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে পরিচিত। এছাড়াও ১৯৬৯, ১৯৭১ সাল বাংলাদেশের গুরুত্বপূর্ণ বছর",
    questions: [
      {
        type: "multiStatement",
        question: "বাংলাদেশের গুরুত্বপূর্ণ সাল?",
        statements: ["i. ১৯৫২", "ii. ১৯৬৯", "iii. ১৯৭১"],
        questionEnd: "নিচের কোনটি সঠিক?",
        options: ["A. i & ii", "B. i & iii", "C. ii & iii", "D. i, ii, & iii"],
        correctAnswer: "D. i, ii & iii",
      },
      {
        type: "normal",
        question: "২১ ফেব্রুয়ারি এখন কোন দিবস হিসেবে পরিচিত?",
        options: [
          "জাতীয় দিবস",
          "আন্তর্জাতিক মাতৃভাষা দিবস",
          "স্বাধীনতা দিবস",
          "বিজয় দিবস",
        ],
        correctAnswer: "আন্তর্জাতিক মাতৃভাষা দিবস",
      },
    ],
  },
  {
    type: "normal",
    question: "বাংলাদেশের সংবিধান কত সালে গৃহীত হয়েছিল?",
    options: ["১৯৭০", "১৯৭১", "১৯৭২", "১৯৭৩"],
    correctAnswer: "১৯৭২",
  },
  {
    type: "normal",
    question: "বাংলাদেশের প্রথম প্রধানমন্ত্রী কে ছিলেন?",
    options: ["জিয়াউর রহমান", "শেখ মুজিবুর রহমান", "এরশাদ", "খালেদা জিয়া"],
    correctAnswer: "শেখ মুজিবুর রহমান",
  },
  {
    type: "multiStatement",
    question: "বাংলাদেশের শিল্প ও সংস্কৃতি সম্পর্কে কোনটি সঠিক?",
    statements: [
      "i. বাংলাদেশের ঐতিহ্যবাহী সংগীত বৈচিত্র্যময়",
      "ii. বাংলাদেশে শিল্পকলার কোনো ঐতিহ্য নেই",
      "iii. বাংলাদেশের নৃত্য ও নাটক বিশ্বখ্যাত",
    ],
    questionEnd: "নিচের কোনটি সঠিক?",
    options: ["A. i & ii", "B. i & iii", "C. শুধুমাত্র ii", "D. শুধুমাত্র iii"],
    correctAnswer: "B. i & iii",
  },
  {
    type: "normal",
    question: "বাংলাদেশের সবচেয়ে বড় নদী কোনটি?",
    options: ["মেঘনা", "পদ্মা", "ব্রহ্মপুত্র", "যমুনা"],
    correctAnswer: "পদ্মা",
  },
  {
    type: "normal",
    question: "বাংলাদেশের জাতীয় খেলা কোনটি?",
    options: ["ফুটবল", "ক্রিকেট", "হাডুডু", "ব্যাডমিন্টন"],
    correctAnswer: "হাডুডু",
  },
  {
    type: "normal",
    question: "বাংলাদেশের সর্ববৃহৎ বাজার কোনটি?",
    options: ["নিউমার্কেট", "শাঁখারীবাজার", "চাঁদনী চক", "সদরঘাট"],
    correctAnswer: "নিউমার্কেট",
  },
  {
    type: "normal",
    question: "বাংলাদেশের প্রথম বিশ্ববিদ্যালয় কোনটি?",
    options: [
      "ঢাকা বিশ্ববিদ্যালয়",
      "চট্টগ্রাম বিশ্ববিদ্যালয়",
      "রাজশাহী বিশ্ববিদ্যালয়",
      "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
    ],
    correctAnswer: "ঢাকা বিশ্ববিদ্যালয়",
  },
  {
    type: "multiStatement",
    question: "বাংলাদেশের অর্থনীতি সম্পর্কে কোনটি সঠিক?",
    statements: [
      "i. বাংলাদেশের প্রধান শিল্প পোশাক শিল্প",
      "ii. বাংলাদেশ কৃষিপ্রধান দেশ",
      "iii. বাংলাদেশের কোনো রপ্তানি নেই",
    ],
    questionEnd: "নিচের কোনটি সঠিক?",
    options: ["A. i & ii", "B. i & iii", "C. ii & iii", "D. শুধুমাত্র iii"],
    correctAnswer: "A. i & ii",
  },
  {
    type: "normal",
    question: "বাংলাদেশের জাতীয় দিবস কোনটি?",
    options: ["১৬ ডিসেম্বর", "২৬ মার্চ", "২১ ফেব্রুয়ারি", "১৪ এপ্রিল"],
    correctAnswer: "১৬ ডিসেম্বর",
  },
  {
    type: "normal",
    question: "বাংলাদেশের সবচেয়ে দীর্ঘ সেতু কোনটি?",
    options: ["পদ্মা সেতু", "যমুনা সেতু", "মেঘনা সেতু", "ব্রহ্মপুত্র সেতু"],
    correctAnswer: "পদ্মা সেতু",
  },
  {
    type: "passage",
    passage:
      "বাংলাদেশের মুক্তিযুদ্ধ ১৯৭১ সালে সংঘটিত হয়েছিল। এই যুদ্ধে লক্ষ লক্ষ মানুষ প্রাণ হারিয়েছিলেন। ১৬ ডিসেম্বর বাংলাদেশ চূড়ান্ত বিজয় অর্জন করেছিল। এই দিনটি এখন বিজয় দিবস হিসেবে পালিত হয়।",
    questions: [
      {
        type: "normal",
        question: "বাংলাদেশের মুক্তিযুদ্ধ কোন সালে সংঘটিত হয়েছিল?",
        options: ["১৯৬৯", "১৯৭০", "১৯৭১", "১৯৭২"],
        correctAnswer: "১৯৭১",
      },
    ],
  },
  {
    type: "normal",
    question: "বাংলাদেশের সবচেয়ে বড় দ্বীপ কোনটি?",
    options: ["ভোলা", "সন্দ্বীপ", "হাতিয়া", "নোয়াখালী"],
    correctAnswer: "ভোলা",
  },
  {
    type: "normal",
    question: "বাংলাদেশের প্রথম মহিলা প্রধানমন্ত্রী কে ছিলেন?",
    options: ["শেখ হাসিনা", "খালেদা জিয়া", "জাহানারা ইমাম", "বেগম রোকেয়া"],
    correctAnswer: "খালেদা জিয়া",
  },
  {
    type: "multiStatement",
    question: "বাংলাদেশের শিক্ষা ব্যবস্থা সম্পর্কে কোনটি সঠিক?",
    statements: [
      "i. বাংলাদেশে প্রাথমিক শিক্ষা বাধ্যতামূলক",
      "ii. বাংলাদেশে কোনো বিশ্ববিদ্যালয় নেই",
      "iii. বাংলাদেশে শিক্ষার হার ক্রমাগত বৃদ্ধি পাচ্ছে",
    ],
    questionEnd: "নিচের কোনটি সঠিক?",
    options: ["A. i & ii", "B. i & iii", "C. ii & iii", "D. শুধুমাত্র ii"],
    correctAnswer: "B. i & iii",
  },
  {
    type: "normal",
    question: "বাংলাদেশের সবচেয়ে বড় পোর্ট কোনটি?",
    options: ["চট্টগ্রাম পোর্ট", "খুলনা পোর্ট", "ঢাকা পোর্ট", "সিলেট পোর্ট"],
    correctAnswer: "চট্টগ্রাম পোর্ট",
  },
  {
    type: "normal",
    question: "বাংলাদেশের জাতীয় পাখি কোনটি?",
    options: ["ময়না", "দোয়েল", "বাজ", "কাক"],
    correctAnswer: "দোয়েল",
  },
  {
    type: "passage",
    passage:
      "বাংলাদেশের পর্যটন শিল্প অত্যন্ত সমৃদ্ধ। সুন্দরবন বিশ্বের বৃহত্তম ম্যানগ্রোভ বন। কক্সবাজার বিশ্বের দীর্ঘতম সমুদ্র সৈকত। সিলেটের চা বাগান বিশ্বখ্যাত।",
    questions: [
      {
        type: "normal",
        question: "সুন্দরবন কী ধরনের বন?",
        options: ["পাইন বন", "ম্যানগ্রোভ বন", "শাল বন", "সেগুন বন"],
        correctAnswer: "ম্যানগ্রোভ বন",
      },
      {
        type: "multiStatement",
        question: "বাংলাদেশের শিক্ষা ব্যবস্থা সম্পর্কে কোনটি সঠিক?",
        statements: [
          "i. বাংলাদেশে প্রাথমিক শিক্ষা বাধ্যতামূলক",
          "ii. বাংলাদেশে কোনো বিশ্ববিদ্যালয় নেই",
          "iii. বাংলাদেশে শিক্ষার হার ক্রমাগত বৃদ্ধি পাচ্ছে",
        ],
        questionEnd: "নিচের কোনটি সঠিক?",
        options: ["A. i & ii", "B. i & iii", "C. ii & iii", "D. শুধুমাত্র ii"],
        correctAnswer: "B. i & iii",
      },
    ],
  },
  {
    type: "normal",
    question: "বাংলাদেশের জাতীয় পশু কোনটি?",
    options: ["বাঘ", "সিংহ", "বেঙ্গল টাইগার", "হাতি"],
    correctAnswer: "বেঙ্গল টাইগার",
  },
  {
    type: "normal",
    question: "বাংলাদেশের সবচেয়ে বড় হ্রদ কোনটি?",
    options: [
      "কাপ্তাই হ্রদ",
      "নয়াগাঁও হ্রদ",
      "টাঙ্গুয়ার হাওর",
      "হাকালুকি হাওর",
    ],
    correctAnswer: "কাপ্তাই হ্রদ",
  },
];

const questions = rawQuestions.flatMap((q, idx) => {
  if (q.type === "passage") {
    return q.questions.map((pq, pidx) => ({
      type: "passage",
      passage: pidx === 0 ? q.passage : null,
      question: pq.question,
      options: pq.options,
      correctAnswer: pq.correctAnswer,
    }));
  }
  return [q];
});

export default function Home() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8 no-print">
          <h1 className="text-3xl font-bold text-primary">
            MCQ Question Paper
          </h1>
          <Button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90"
          >
            <Printer className="w-4 h-4" />
            Print Question Paper
          </Button>
        </div>

        <QuestionPaper questions={questions} />
      </div>
    </main>
  );
}
