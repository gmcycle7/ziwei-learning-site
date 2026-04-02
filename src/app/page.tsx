import Link from 'next/link';
import {
  BookOpen,
  Star,
  Layout,
  Compass,
  Shuffle,
  FileText,
  GraduationCap,
  Target,
  Shield,
  ArrowRight,
} from 'lucide-react';
import Expandable from '@/components/ui/Expandable';

const modules = [
  {
    title: '入門指引',
    description: '從零開始認識紫微斗數，了解學習方向與基本框架。',
    href: '/getting-started',
    icon: Compass,
  },
  {
    title: '基礎觀念',
    description: '陰陽五行、天干地支等核心基礎，為後續學習打底。',
    href: '/foundations',
    icon: BookOpen,
  },
  {
    title: '十二宮',
    description: '命盤的十二個宮位，每個宮位代表的人生面向與意義。',
    href: '/palaces',
    icon: Layout,
  },
  {
    title: '十四主星',
    description: '紫微、天機、太陽等十四顆主星的性質與特色。',
    href: '/stars',
    icon: Star,
  },
  {
    title: '四化',
    description: '化祿、化權、化科、化忌——命盤動態變化的關鍵。',
    href: '/four-transformations',
    icon: Shuffle,
  },
  {
    title: '解盤教學',
    description: '整合所學，學習如何有系統地解讀一張完整命盤。',
    href: '/chart-reading',
    icon: FileText,
  },
];

const roadmapSteps = [
  { number: 1, label: '認識紫微斗數' },
  { number: 2, label: '基礎觀念' },
  { number: 3, label: '十二宮' },
  { number: 4, label: '主星' },
  { number: 5, label: '四化' },
  { number: 6, label: '解盤實戰' },
];

const benefits = [
  {
    icon: GraduationCap,
    title: '結構化學習',
    description:
      '循序漸進的課程設計，從基礎到進階，每一步都有明確的學習目標與路徑，避免在龐雜的資訊中迷失方向。',
  },
  {
    icon: Shield,
    title: '觀念清晰',
    description:
      '以邏輯與系統為基礎，建立正確的理解框架。不談迷信、不誇大神秘，讓你真正理解紫微斗數的思維方式。',
  },
  {
    icon: Target,
    title: '實戰導向',
    description:
      '不只學理論，更強調如何將所學應用在實際解盤中。透過範例與練習，培養獨立分析命盤的能力。',
  },
];

const faqs = [
  {
    question: '完全沒有基礎，可以學嗎？',
    answer:
      '當然可以。本平台就是為零基礎的初學者設計的。我們從最基本的概念開始，一步步建立你的知識體系。只要按照學習路線循序漸進，不需要任何預備知識。',
  },
  {
    question: '紫微斗數和星座有什麼不同？',
    answer:
      '紫微斗數是中國傳統的命理系統，以農曆出生時間排出命盤，涉及十二宮、十四主星、四化等完整架構。相較於西洋星座僅以出生月份區分十二類型，紫微斗數的分析維度更為精細，每個人的命盤都是獨一無二的。',
  },
  {
    question: '學習紫微斗數需要多長時間？',
    answer:
      '入門基礎概念大約需要數週到一個月的時間。但要能夠熟練解盤，則需要持續的學習與練習。本平台的結構化設計能幫助你更有效率地學習，但深度理解與實戰經驗仍需要時間累積。',
  },
  {
    question: '這個網站是免費的嗎？',
    answer:
      '是的，目前所有學習內容皆免費開放。我們的目標是提供高品質、結構化的紫微斗數學習資源，讓有興趣的人都能輕鬆入門。',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ===== Hero Section ===== */}
      <section className="hero-gradient relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
          <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-white/5" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm mb-8">
            <span>系統化</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span>結構化</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span>初學者友善</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            紫微斗數學習平台
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            從零開始，系統化學習紫微斗數。
            <br className="hidden sm:block" />
            以清晰的架構與邏輯，帶你一步步掌握命盤解讀的核心能力。
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/getting-started"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-white text-primary-dark font-semibold text-base shadow-lg hover:bg-white/90 transition-colors"
            >
              開始學習
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/foundations"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-white/30 text-white font-medium text-base hover:bg-white/10 transition-colors"
            >
              瀏覽課程
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Learning Roadmap ===== */}
      <section className="py-16 sm:py-20 bg-surface-alt grid-pattern">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary-dark mb-4">
            學習路線
          </h2>
          <p className="text-center text-muted mb-12 max-w-xl mx-auto">
            按照以下順序學習，循序漸進地建立完整的紫微斗數知識體系
          </p>

          {/* Desktop roadmap (horizontal) */}
          <div className="hidden md:flex items-center justify-between">
            {roadmapSteps.map((step, i) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-md">
                    {step.number}
                  </div>
                  <span className="mt-3 text-sm font-medium text-foreground text-center whitespace-nowrap">
                    {step.label}
                  </span>
                </div>
                {i < roadmapSteps.length - 1 && (
                  <div className="flex-1 mx-3 mt-[-1.25rem]">
                    <div className="h-0.5 bg-primary/30 relative">
                      <ArrowRight className="w-4 h-4 text-primary/50 absolute -right-2 -top-[7px]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile roadmap (vertical) */}
          <div className="flex md:hidden flex-col items-start pl-6">
            {roadmapSteps.map((step, i) => (
              <div key={step.number} className="flex items-start gap-4">
                {/* Vertical line + circle */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-base shadow-md shrink-0">
                    {step.number}
                  </div>
                  {i < roadmapSteps.length - 1 && (
                    <div className="w-0.5 h-10 bg-primary/30" />
                  )}
                </div>
                <span className="pt-2 text-sm font-medium text-foreground">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Featured Modules ===== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary-dark mb-4">
            課程模組
          </h2>
          <p className="text-center text-muted mb-12 max-w-xl mx-auto">
            六大學習模組，涵蓋紫微斗數入門到實戰的完整內容
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <Link key={mod.title} href={mod.href} className="group">
                  <div className="bg-surface border border-border rounded-xl p-6 h-full transition-all duration-200 hover:shadow-md hover:border-primary/30 group-hover:-translate-y-0.5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {mod.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {mod.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      開始學習
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Key Benefits ===== */}
      <section className="py-16 sm:py-20 bg-surface-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary-dark mb-4">
            為什麼選擇這個平台
          </h2>
          <p className="text-center text-muted mb-12 max-w-xl mx-auto">
            我們致力於提供最清晰、最有系統的紫微斗數學習體驗
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-surface rounded-xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-dark" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FAQ Preview ===== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary-dark mb-4">
            常見問題
          </h2>
          <p className="text-center text-muted mb-10">
            初學者最常問的幾個問題
          </p>

          <div className="space-y-1">
            {faqs.map((faq) => (
              <Expandable key={faq.question} title={faq.question}>
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </Expandable>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
            >
              查看更多常見問題
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-border bg-surface-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo + tagline */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xs">紫</span>
                </div>
                <span className="font-bold text-sm text-foreground">
                  紫微斗數學習平台
                </span>
              </div>
              <p className="text-xs text-muted">
                結構化的入門學習資源
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
              <Link
                href="/getting-started"
                className="hover:text-foreground transition-colors"
              >
                入門指引
              </Link>
              <Link
                href="/foundations"
                className="hover:text-foreground transition-colors"
              >
                基礎觀念
              </Link>
              <Link
                href="/palaces"
                className="hover:text-foreground transition-colors"
              >
                十二宮
              </Link>
              <Link
                href="/faq"
                className="hover:text-foreground transition-colors"
              >
                常見問題
              </Link>
              <Link
                href="/glossary"
                className="hover:text-foreground transition-colors"
              >
                詞彙表
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted leading-relaxed">
              本站內容僅供學習參考，不作為命理諮詢依據。紫微斗數是一套思考與分析的工具，並非預測未來的絕對方法。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
