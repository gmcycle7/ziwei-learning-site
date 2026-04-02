import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Callout from '@/components/ui/Callout';
import LessonNav from '@/components/ui/LessonNav';
import PalaceGrid from '@/components/diagrams/PalaceGrid';
import SanFangDiagram from '@/components/diagrams/SanFangDiagram';

export const metadata: Metadata = {
  title: '十二宮概述',
  description:
    '紫微斗數十二宮位總覽：認識命盤中十二個宮位各自代表的人生領域，以及宮位之間的相互關係。',
};

const palaces = [
  {
    slug: 'ming',
    name: '命宮',
    brief: '個人特質、性格傾向、行為模式的核心宮位。是解讀命盤的起點。',
  },
  {
    slug: 'siblings',
    name: '兄弟宮',
    brief: '手足關係、同輩互動，也延伸反映與平輩之間的合作模式。',
  },
  {
    slug: 'spouse',
    name: '夫妻宮',
    brief: '婚姻與親密關係的狀態，反映對伴侶的期望和互動模式。',
  },
  {
    slug: 'children',
    name: '子女宮',
    brief: '與子女的關係、生育狀況，也延伸到創造力和桃花。',
  },
  {
    slug: 'wealth',
    name: '財帛宮',
    brief: '財務狀況、理財態度、金錢的獲得方式與花費習慣。',
  },
  {
    slug: 'health',
    name: '疾厄宮',
    brief: '身體健康狀況、體質傾向、容易注意的健康面向。',
  },
  {
    slug: 'travel',
    name: '遷移宮',
    brief: '外出運勢、對外的社交能力、在外的表現，也與旅行、搬遷有關。',
  },
  {
    slug: 'friends',
    name: '交友宮',
    brief: '人際關係、朋友品質、與部屬或同事的互動，舊稱奴僕宮。',
  },
  {
    slug: 'career',
    name: '官祿宮',
    brief: '事業方向、工作態度、適合的職業類型和成就模式。',
  },
  {
    slug: 'property',
    name: '田宅宮',
    brief: '不動產、居住環境、家庭狀況，也反映內心的安全感。',
  },
  {
    slug: 'fortune',
    name: '福德宮',
    brief: '精神世界、內心滿足感、思考模式，反映人生的快樂程度。',
  },
  {
    slug: 'parents',
    name: '父母宮',
    brief: '與父母的關係、長輩緣分、受教育的狀況，也看上司關係。',
  },
];

export default function PalacesOverviewPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: '入門指引', href: '/getting-started' },
          { label: '十二宮' },
        ]}
      />

      <h1 className="text-3xl font-bold mb-2">十二宮概述</h1>
      <p className="text-muted text-lg mb-8">
        認識命盤中的十二個宮位，理解人生各面向如何被系統化地描述。
      </p>

      {/* --- 什麼是十二宮 --- */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">什麼是十二宮？</h2>
        <p className="mb-4 leading-relaxed">
          紫微斗數的命盤由<strong>十二個宮位</strong>組成，每個宮位對應人生中的一個面向。
          這十二個宮位圍繞命盤排列，形成一個完整的圓形結構。
          星曜落入不同的宮位，就像演員站上不同的舞台——同一顆星在不同的宮位，
          表現的面向和意義也會不同。
        </p>
        <p className="mb-4 leading-relaxed">
          十二宮並不是十二個獨立的格子。它們彼此之間有明確的結構關係，
          例如「對宮」互為表裡，「三方四正」構成一組影響系統。
          初學者不需要一開始就掌握所有關係，但了解宮位之間有連結，
          是正確解讀命盤的重要基礎。
        </p>

        <Callout type="tip" title="初學建議">
          <p>
            先從「命宮」開始認識，再依序了解與日常生活最相關的宮位（如財帛宮、官祿宮、夫妻宮）。
            不要急著同時記住所有宮位的意涵，循序漸進才能建立穩固的理解。
          </p>
        </Callout>
      </section>

      {/* --- 命盤宮位圖 --- */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">命盤宮位排列</h2>
        <p className="mb-4 leading-relaxed">
          下方是十二宮的標準排列方式。命盤採用正方形格式，
          十二個宮位分布在四邊，中間為空白區域。
          點擊任一宮位可查看詳細說明。
        </p>
        <PalaceGrid interactive={true} />
        <p className="text-sm text-muted text-center">
          提示：實際命盤中，每個宮位的位置（地支）會因出生時間不同而改變。
          此處顯示的是宮位名稱的相對排列關係。
        </p>
      </section>

      {/* --- 十二宮簡介列表 --- */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">十二宮一覽</h2>
        <p className="mb-6 leading-relaxed">
          以下是每個宮位的簡要說明。點擊宮位名稱可以進入該宮位的詳細教學頁面。
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {palaces.map((palace) => (
            <Link
              key={palace.slug}
              href={`/palaces/${palace.slug}`}
              className="block border border-border rounded-lg p-4 hover:border-primary/40 hover:bg-primary/5 transition-all group"
            >
              <h3 className="font-semibold text-primary-dark group-hover:text-primary transition-colors mb-1">
                {palace.name}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {palace.brief}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* --- 宮位之間的關係 --- */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">宮位之間的關係</h2>
        <p className="mb-4 leading-relaxed">
          十二宮之間存在幾種重要的結構關係，理解這些關係是進階解盤的基礎。
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">對宮關係</h3>
        <p className="mb-4 leading-relaxed">
          每個宮位在命盤上正對面的宮位稱為「對宮」。
          對宮的宮位互為表裡——本宮代表你主動展現的一面，
          對宮代表被動或外在回饋的一面。解讀時，本宮和對宮通常需要一起觀察。
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold">本宮</th>
                <th className="text-left py-2 px-3 font-semibold">對宮</th>
                <th className="text-left py-2 px-3 font-semibold">關係說明</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="py-2 px-3">命宮</td><td className="py-2 px-3">遷移宮</td><td className="py-2 px-3">自我 vs 外在表現</td></tr>
              <tr><td className="py-2 px-3">兄弟宮</td><td className="py-2 px-3">交友宮</td><td className="py-2 px-3">親近同輩 vs 一般人際</td></tr>
              <tr><td className="py-2 px-3">夫妻宮</td><td className="py-2 px-3">官祿宮</td><td className="py-2 px-3">感情 vs 事業</td></tr>
              <tr><td className="py-2 px-3">子女宮</td><td className="py-2 px-3">田宅宮</td><td className="py-2 px-3">子嗣 vs 家庭環境</td></tr>
              <tr><td className="py-2 px-3">財帛宮</td><td className="py-2 px-3">福德宮</td><td className="py-2 px-3">物質財富 vs 精神滿足</td></tr>
              <tr><td className="py-2 px-3">疾厄宮</td><td className="py-2 px-3">父母宮</td><td className="py-2 px-3">自身健康 vs 先天體質、長輩</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-8">三方四正</h3>
        <p className="mb-4 leading-relaxed">
          「三方四正」是紫微斗數中最重要的宮位組合觀念之一。
          以任一宮位為「本宮」，加上它的對宮，再加上與本宮相隔四個位置的兩個宮位，
          就構成該宮位的「三方四正」。
        </p>
        <p className="mb-4 leading-relaxed">
          三方四正中的星曜都會對本宮產生影響。
          這也是為什麼不能只看一個宮位就下結論——你需要把三方四正的星曜一起納入考量。
        </p>

        <SanFangDiagram />

        <Callout type="info" title="三方四正的實際意義">
          <p>
            例如看一個人的事業發展，不能只看官祿宮。
            官祿宮的三方四正包括命宮、財帛宮和夫妻宮（對宮），
            這四個宮位的星曜組合，才能更完整地評估事業格局。
          </p>
        </Callout>

        <h3 className="text-xl font-semibold mb-3 mt-8">命宮三方四正（範例）</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold">本宮</th>
                <th className="text-left py-2 px-3 font-semibold">對宮</th>
                <th className="text-left py-2 px-3 font-semibold">三方（左）</th>
                <th className="text-left py-2 px-3 font-semibold">三方（右）</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="py-2 px-3 font-medium">命宮</td><td className="py-2 px-3">遷移宮</td><td className="py-2 px-3">財帛宮</td><td className="py-2 px-3">官祿宮</td></tr>
              <tr><td className="py-2 px-3 font-medium">財帛宮</td><td className="py-2 px-3">福德宮</td><td className="py-2 px-3">官祿宮</td><td className="py-2 px-3">命宮</td></tr>
              <tr><td className="py-2 px-3 font-medium">官祿宮</td><td className="py-2 px-3">夫妻宮</td><td className="py-2 px-3">命宮</td><td className="py-2 px-3">財帛宮</td></tr>
              <tr><td className="py-2 px-3 font-medium">夫妻宮</td><td className="py-2 px-3">官祿宮</td><td className="py-2 px-3">遷移宮</td><td className="py-2 px-3">福德宮</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- 學習順序建議 --- */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">建議學習順序</h2>
        <p className="mb-4 leading-relaxed">
          十二宮沒有唯一的「正確」學習順序，但以下的漸進式安排適合大多數初學者：
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li className="leading-relaxed">
            <strong>命宮</strong> — 所有解讀的起點，先理解命宮的功能。
          </li>
          <li className="leading-relaxed">
            <strong>遷移宮</strong> — 命宮的對宮，了解「對宮」的觀念。
          </li>
          <li className="leading-relaxed">
            <strong>官祿宮、財帛宮</strong> — 與命宮形成三方，且與日常生活密切相關。
          </li>
          <li className="leading-relaxed">
            <strong>夫妻宮</strong> — 感情是多數人關心的話題，且連結官祿宮（對宮）。
          </li>
          <li className="leading-relaxed">
            <strong>福德宮</strong> — 內在精神世界，許多人忽略但非常重要的宮位。
          </li>
          <li className="leading-relaxed">
            <strong>其餘宮位</strong> — 依個人興趣和需求逐步了解。
          </li>
        </ol>

        <Callout type="warning" title="常見學習陷阱">
          <p>
            不要試圖一次記住所有宮位的所有意涵。
            更不要在還沒理解宮位基本功能時，就去背「某星在某宮代表什麼」。
            先建立宮位的架構理解，再逐步填入星曜的意義。
          </p>
        </Callout>
      </section>

      {/* --- 宮位不是格子 --- */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">重要觀念：宮位不是獨立的格子</h2>
        <p className="mb-4 leading-relaxed">
          初學者最常犯的錯誤之一，就是把十二宮當作十二個獨立的格子來看。
          看到財帛宮有某顆星，就直接下結論「有錢」或「沒錢」；
          看到夫妻宮有某顆星，就判定「婚姻好」或「婚姻差」。
        </p>
        <p className="mb-4 leading-relaxed">
          實際上，任何一個宮位的解讀都需要考慮：
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>本宮中的主星和輔星組合</li>
          <li>對宮的星曜配置</li>
          <li>三方四正的整體格局</li>
          <li>四化（化祿、化權、化科、化忌）的影響</li>
          <li>大限和流年的時間維度</li>
        </ul>
        <p className="leading-relaxed">
          紫微斗數是一個系統，不是一本查字典。建立這個觀念，
          才能避免過度簡化的錯誤解讀。
        </p>
      </section>

      <LessonNav currentPath="/palaces" />
    </>
  );
}
