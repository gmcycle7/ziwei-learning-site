import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Callout from '@/components/ui/Callout';
import LessonNav from '@/components/ui/LessonNav';
import Expandable from '@/components/ui/Expandable';
import FlashCard from '@/components/ui/FlashCard';

export const metadata: Metadata = {
  title: '四化概論 — 紫微斗數學習',
  description: '了解紫微斗數中四化系統的核心觀念：化祿、化權、化科、化忌如何由天干決定，以及它們與宮位的互動。',
};

export default function FourTransformationsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '四化' }]} />

      <h1 className="text-3xl font-bold mb-2">四化概論</h1>
      <p className="text-muted text-lg mb-8">
        四化是紫微斗數中最具動態性的系統，它讓靜態的命盤活了起來。
      </p>

      {/* ===== 什麼是四化 ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">什麼是四化？</h2>
        <p className="mb-4 leading-relaxed">
          「四化」全名為「四化飛星」，是紫微斗數中一套用來描述星曜能量轉化的系統。所謂的「四化」，指的是四種不同的轉化方式：<strong>化祿、化權、化科、化忌</strong>。
        </p>
        <p className="mb-4 leading-relaxed">
          如果說十四主星是命盤的「骨架」，十二宮位是人生的「舞台」，那麼四化就是命盤的「劇本」——它告訴我們在哪些舞台上會有好戲上演，又在哪些舞台上需要面對考驗。
        </p>
        <p className="mb-4 leading-relaxed">
          四化的存在，讓紫微斗數不只是一張靜態的性格描述圖，而成為一個可以動態分析人生發展的工具。同樣是紫微坐命的人，因為四化飛入不同的宮位，人生的重心和際遇可以完全不同。
        </p>

        <Callout type="info" title="為什麼四化如此重要">
          <p>
            許多紫微斗數的流派，尤其是「飛星派」，將四化視為論命的核心工具。有些老師甚至認為：「不懂四化，就不算真正懂紫微斗數。」雖然各派對四化的運用深度不同，但它的重要性是所有流派公認的。
          </p>
        </Callout>
      </section>

      {/* ===== 四化如何產生 ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">四化如何產生？</h2>
        <p className="mb-4 leading-relaxed">
          四化是由「天干」決定的。在紫微斗數中，每個人的出生年份對應一個天干（甲、乙、丙、丁、戊、己、庚、辛、壬、癸），不同的天干會使不同的星曜產生不同的轉化。
        </p>
        <p className="mb-4 leading-relaxed">
          以下是十天干對應的四化表：
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-surface-alt">
                <th className="px-4 py-3 text-left font-semibold border-b border-border">天干</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">化祿</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">化權</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">化科</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">化忌</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">甲</td>
                <td className="px-4 py-3">廉貞</td>
                <td className="px-4 py-3">破軍</td>
                <td className="px-4 py-3">武曲</td>
                <td className="px-4 py-3">太陽</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">乙</td>
                <td className="px-4 py-3">天機</td>
                <td className="px-4 py-3">天梁</td>
                <td className="px-4 py-3">紫微</td>
                <td className="px-4 py-3">太陰</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">丙</td>
                <td className="px-4 py-3">天同</td>
                <td className="px-4 py-3">天機</td>
                <td className="px-4 py-3">文昌</td>
                <td className="px-4 py-3">廉貞</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">丁</td>
                <td className="px-4 py-3">太陰</td>
                <td className="px-4 py-3">天同</td>
                <td className="px-4 py-3">天機</td>
                <td className="px-4 py-3">巨門</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">戊</td>
                <td className="px-4 py-3">貪狼</td>
                <td className="px-4 py-3">太陰</td>
                <td className="px-4 py-3">右弼</td>
                <td className="px-4 py-3">天機</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">己</td>
                <td className="px-4 py-3">武曲</td>
                <td className="px-4 py-3">貪狼</td>
                <td className="px-4 py-3">天梁</td>
                <td className="px-4 py-3">文曲</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">庚</td>
                <td className="px-4 py-3">太陽</td>
                <td className="px-4 py-3">武曲</td>
                <td className="px-4 py-3">太陰</td>
                <td className="px-4 py-3">天同</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">辛</td>
                <td className="px-4 py-3">巨門</td>
                <td className="px-4 py-3">太陽</td>
                <td className="px-4 py-3">文曲</td>
                <td className="px-4 py-3">文昌</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">壬</td>
                <td className="px-4 py-3">天梁</td>
                <td className="px-4 py-3">紫微</td>
                <td className="px-4 py-3">左輔</td>
                <td className="px-4 py-3">武曲</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">癸</td>
                <td className="px-4 py-3">破軍</td>
                <td className="px-4 py-3">巨門</td>
                <td className="px-4 py-3">太陰</td>
                <td className="px-4 py-3">貪狼</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="如何使用這張表">
          <p>
            初學者不需要背誦這張表。重要的是理解「四化由天干決定」這個原則。實務上排命盤時，軟體會自動幫你標出四化落在哪裡。你要學的是「看到四化後如何解讀」，而不是「如何計算四化」。
          </p>
        </Callout>

        <Expandable title="生年四化 vs 大限四化 vs 流年四化">
          <p className="mb-2">
            四化不只有「生年四化」一種。在紫微斗數中，有三個層次的四化：
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>生年四化（本命四化）</strong>：由出生年的天干決定，代表一生的基本傾向和格局。影響力最深遠，是最核心的四化。</li>
            <li><strong>大限四化</strong>：由大限宮位的天干決定，代表該十年大運的運勢傾向。影響力次之，但在特定十年內很重要。</li>
            <li><strong>流年四化</strong>：由流年的天干決定，代表該年的運勢方向。影響力最短，但最即時。</li>
          </ul>
          <p className="mt-2">
            初學者建議先專注理解「生年四化」，等觀念穩固後再進入大限和流年四化的學習。
          </p>
        </Expandable>
      </section>

      {/* ===== 四化概覽 ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">四化總覽</h2>
        <p className="mb-6 leading-relaxed">
          四種轉化各有其獨特的能量方向，以下是它們的核心概念對照：
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-surface-alt">
                <th className="px-4 py-3 text-left font-semibold border-b border-border">四化</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">核心概念</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">直覺比喻</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">能量方向</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">深入學習</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">化祿</td>
                <td className="px-4 py-3">增加、豐盛、好運</td>
                <td className="px-4 py-3">像是打開了一道水龍頭，好的能量源源不絕流入</td>
                <td className="px-4 py-3">向外擴展</td>
                <td className="px-4 py-3">
                  <Link href="/four-transformations/hua-lu" className="text-primary hover:underline">詳細了解 →</Link>
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">化權</td>
                <td className="px-4 py-3">掌控、權力、堅持</td>
                <td className="px-4 py-3">像是握住了方向盤，有能力也有意願去主導</td>
                <td className="px-4 py-3">向內掌握</td>
                <td className="px-4 py-3">
                  <Link href="/four-transformations/hua-quan" className="text-primary hover:underline">詳細了解 →</Link>
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">化科</td>
                <td className="px-4 py-3">名聲、聲譽、貴人</td>
                <td className="px-4 py-3">像是聚光燈照在身上，被看見、被認可</td>
                <td className="px-4 py-3">向上提升</td>
                <td className="px-4 py-3">
                  <Link href="/four-transformations/hua-ke" className="text-primary hover:underline">詳細了解 →</Link>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">化忌</td>
                <td className="px-4 py-3">執著、糾結、阻礙</td>
                <td className="px-4 py-3">像是一個心結，總是讓你牽掛、放不下</td>
                <td className="px-4 py-3">向內收縮</td>
                <td className="px-4 py-3">
                  <Link href="/four-transformations/hua-ji" className="text-primary hover:underline">詳細了解 →</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="info" title="化祿化權化科化忌並非簡單的好壞">
          <p>
            初學者常把化祿、化權、化科看作「好的」，化忌看作「壞的」。事實上，化祿過度可能導致貪心、化權過度可能導致霸道、化科過度可能導致虛榮。而化忌雖然代表執著，但也代表「在意」——一個人對某件事情在意，才會投入心力去經營。完全不在意的人生，反而可能缺乏方向。
          </p>
        </Callout>
      </section>

      {/* ===== 四化與宮位的互動 ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">四化與宮位的互動</h2>
        <p className="mb-4 leading-relaxed">
          四化的力量不是在真空中運作的——它們必然「落入」某個宮位，而落入的宮位決定了四化的能量會作用在人生的哪個面向。
        </p>

        <h3 className="text-lg font-semibold mb-3">理解的框架</h3>
        <p className="mb-4 leading-relaxed">
          你可以用這個簡單的框架來理解四化與宮位的互動：
        </p>
        <p className="mb-6 leading-relaxed font-medium text-center text-lg">
          四化的效果 = 哪顆星被轉化 + 轉化的方式（祿權科忌） + 落在哪個宮位
        </p>

        <Expandable title="舉例說明">
          <div className="space-y-4">
            <div>
              <p className="font-medium mb-1">例一：太陽化祿在官祿宮</p>
              <p>太陽（光明、付出、男性長輩）+ 化祿（增加、豐盛）+ 官祿宮（事業、工作）= 事業上容易發光發熱、得到注目，工作中樂於付出且能獲得回報。</p>
            </div>
            <div>
              <p className="font-medium mb-1">例二：太陰化忌在夫妻宮</p>
              <p>太陰（柔美、情感、女性）+ 化忌（執著、糾結）+ 夫妻宮（伴侶、感情）= 感情上容易過度在意、對伴侶要求過高或情感上反覆不安。</p>
            </div>
            <div>
              <p className="font-medium mb-1">例三：武曲化權在財帛宮</p>
              <p>武曲（財星、果斷）+ 化權（掌控、堅持）+ 財帛宮（金錢、財務）= 在理財方面有強烈的掌控欲和決斷力，善於管理和增長財富。</p>
            </div>
          </div>
        </Expandable>

        <h3 className="text-lg font-semibold mb-3 mt-6">四化飛入不同宮位的通則</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-surface-alt">
                <th className="px-4 py-3 text-left font-semibold border-b border-border">四化落入</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">化祿效果</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">化忌效果</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">命宮</td>
                <td className="px-4 py-3">樂觀開朗、人緣好、容易有好運</td>
                <td className="px-4 py-3">自我要求高、容易鑽牛角尖、對自己不滿</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">財帛宮</td>
                <td className="px-4 py-3">財運佳、賺錢機會多、願意花錢</td>
                <td className="px-4 py-3">錢財上容易有糾結、破財或入不敷出</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">官祿宮</td>
                <td className="px-4 py-3">事業順遂、工作帶來成就感</td>
                <td className="px-4 py-3">工作壓力大、事業上遇到阻礙或糾紛</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">夫妻宮</td>
                <td className="px-4 py-3">感情順利、伴侶帶來好運</td>
                <td className="px-4 py-3">感情上容易牽掛、不順或爭執</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">福德宮</td>
                <td className="px-4 py-3">心境平和、精神生活充實</td>
                <td className="px-4 py-3">內心不安、精神壓力大、想太多</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="記住這個原則">
          <p>
            四化落入的宮位，代表你人生中「能量集中」的領域。化祿讓那個領域變得豐盛而順遂，化忌讓那個領域變得重要但也充滿糾結。不論是祿還是忌，都代表你的注意力和精力會被導向那個方向。
          </p>
        </Callout>
      </section>

      {/* ===== 常見初學者錯誤 ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">初學者常犯的錯誤</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">錯誤一：化忌 = 不好</h3>
            <p className="leading-relaxed">
              化忌確實帶來挑戰和執著，但「執著」本身不一定是壞事。化忌落在官祿宮的人可能對工作非常在意、全力以赴，反而在事業上取得很大的成就（雖然過程辛苦）。化忌代表「在乎」，而在乎某件事是投入的前提。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">錯誤二：只看化祿在哪裡就下結論</h3>
            <p className="leading-relaxed">
              四化是一個完整的系統，必須四個一起看才有意義。只看化祿不看化忌，就像只看天氣預報的最高溫而不看最低溫——你可能知道某天會很暖和，但忘了夜裡可能會結冰。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">錯誤三：忽略「哪顆星」被轉化</h3>
            <p className="leading-relaxed">
              很多初學者只關注「化祿在命宮」，卻不注意是「哪顆星」化祿在命宮。太陽化祿在命宮和天機化祿在命宮，雖然都是化祿落命宮，但含義完全不同——因為太陽和天機本身的特質就不一樣。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">錯誤四：把四化當作算命公式</h3>
            <p className="leading-relaxed">
              四化是一種「傾向」而非「定局」。化祿在財帛宮不代表一定會發財，化忌在夫妻宮不代表一定會離婚。它們描述的是能量的方向和重心，實際的結果還取決於個人的選擇和環境的配合。
            </p>
          </div>
        </div>

        <Callout type="warning">
          <p>
            學習四化最重要的心態是「理解」而非「預測」。四化幫助我們理解一個人的人生重心和內在動力，而不是用來預測某年某月會發生什麼事。
          </p>
        </Callout>
      </section>

      {/* ===== 各化詳細頁面入口 ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">深入了解每一化</h2>
        <p className="mb-6 leading-relaxed">
          點擊以下連結，深入學習每一種轉化的詳細含義和應用：
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/four-transformations/hua-lu"
            className="block p-6 rounded-xl border border-border hover:border-primary/30 hover:bg-surface transition-all group"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">化祿</h3>
            <p className="text-sm text-muted">增加、豐盛、好運。了解化祿如何為命盤帶來正面的增幅能量。</p>
          </Link>
          <Link
            href="/four-transformations/hua-quan"
            className="block p-6 rounded-xl border border-border hover:border-primary/30 hover:bg-surface transition-all group"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">化權</h3>
            <p className="text-sm text-muted">掌控、權力、堅持。了解化權如何帶來主導力和決斷力。</p>
          </Link>
          <Link
            href="/four-transformations/hua-ke"
            className="block p-6 rounded-xl border border-border hover:border-primary/30 hover:bg-surface transition-all group"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">化科</h3>
            <p className="text-sm text-muted">名聲、聲譽、貴人。了解化科如何帶來被認可和支持的機會。</p>
          </Link>
          <Link
            href="/four-transformations/hua-ji"
            className="block p-6 rounded-xl border border-border hover:border-primary/30 hover:bg-surface transition-all group"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">化忌</h3>
            <p className="text-sm text-muted">執著、糾結、阻礙。了解化忌如何揭示人生的課題與成長方向。</p>
          </Link>
        </div>
      </section>

      {/* ===== FlashCards ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">快速記憶卡</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FlashCard
            front="四化由什麼決定？"
            back="四化由天干決定。生年四化由出生年的天干決定，大限四化由大限宮的天干決定，流年四化由流年的天干決定。"
          />
          <FlashCard
            front="四化分別代表什麼能量方向？"
            back="化祿 = 向外擴展（增加）、化權 = 向內掌握（掌控）、化科 = 向上提升（名聲）、化忌 = 向內收縮（執著）。"
          />
          <FlashCard
            front="化忌一定是壞的嗎？"
            back="不是。化忌代表「在意」和「執著」，對某領域越在意，越可能投入心力。許多成功者命盤中化忌落在事業宮，正因為在意所以全力以赴。"
          />
          <FlashCard
            front="解讀四化需要考慮哪三個要素？"
            back="1. 哪顆星被轉化（星曜本質）；2. 轉化的方式（祿、權、科、忌）；3. 落在哪個宮位（作用領域）。三者缺一不可。"
          />
        </div>
      </section>

      <LessonNav currentPath="/four-transformations" />
    </>
  );
}
