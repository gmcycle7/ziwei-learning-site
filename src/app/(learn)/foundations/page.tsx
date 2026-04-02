import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Callout from '@/components/ui/Callout';
import Expandable from '@/components/ui/Expandable';
import LessonNav from '@/components/ui/LessonNav';
import PalaceGrid from '@/components/diagrams/PalaceGrid';
import SanFangDiagram from '@/components/diagrams/SanFangDiagram';

export const metadata: Metadata = {
  title: '基礎觀念',
  description:
    '認識紫微斗數命盤的基本結構——十二宮、主星與輔星、四化、以及宮位之間的關鍵關係。',
};

export default function FoundationsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '基礎觀念' }]} />

      <h1 className="text-3xl font-bold mb-2">基礎觀念</h1>
      <p className="text-muted text-lg mb-10">
        命盤是紫微斗數的核心載體。這一章帶你認識命盤的結構、宮位的意義、星曜的分類，以及它們之間的關係。
      </p>

      {/* ────────────────────────── 第一節 ────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">命盤基本概念</h2>

        <p className="mb-4 leading-relaxed">
          紫微斗數的「命盤」（又稱「紫微盤」或「星盤」）是整套分析系統的核心工具。它是一張由十二個格子組成的方形圖表，每個格子代表人生的一個面向（稱為「宮位」），而各種星曜則分布在這些宮位之中。
        </p>

        <p className="mb-4 leading-relaxed">
          排盤的過程是根據一個人的農曆出生年、月、日、時，透過固定的演算法，將一百多顆星曜安置到對應的宮位上。這個過程在過去需要手動查表計算，現在有許多免費的線上排盤工具可以自動完成。
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">命盤的視覺結構</h3>
        <p className="mb-4 leading-relaxed">
          命盤的外觀是一個 4 x 4 的方格，中間四格合為一體（稱為「天盤」或「中宮」，通常記載命主資料），外圍十二格則分別對應十二個宮位。宮位的排列依照地支順序（子、丑、寅、卯……）固定不變，但每個地支對應到哪個宮位名稱，則因人而異。
        </p>

        <PalaceGrid interactive={false} />

        <p className="mb-4 leading-relaxed text-sm text-muted text-center -mt-4">
          上圖為命盤基本結構示意。實際命盤中，每個宮位內還會標示落入的星曜。
        </p>

        <Callout type="info" title="排盤的關鍵要素">
          <p>排出一張完整的命盤需要四個資訊：</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>農曆出生年</strong>——決定天干地支年柱，影響四化的分布</li>
            <li><strong>農曆出生月</strong>——決定命宮和身宮的位置</li>
            <li><strong>農曆出生日</strong>——影響部分輔星的安置</li>
            <li><strong>出生時辰</strong>——與出生月一起決定命宮位置，也影響部分星曜</li>
          </ul>
        </Callout>
      </section>

      {/* ────────────────────────── 第二節 ────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">十二宮的意義</h2>

        <p className="mb-4 leading-relaxed">
          十二宮是命盤的骨架。每個宮位代表人生中一個特定的面向，就像一棟房子有不同的房間——客廳、臥室、書房各有功能。了解每個宮位「在問什麼問題」，是正確解盤的第一步。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-semibold w-24">宮位</th>
                <th className="text-left py-3 px-4 font-semibold">核心問題</th>
                <th className="text-left py-3 px-4 font-semibold">涵蓋範圍</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border bg-primary/5">
                <td className="py-3 px-4 font-medium text-primary-dark">命宮</td>
                <td className="py-3 px-4">我是什麼樣的人？</td>
                <td className="py-3 px-4">核心性格、行為風格、自我認知、人生態度</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">兄弟宮</td>
                <td className="py-3 px-4">我和同輩的關係如何？</td>
                <td className="py-3 px-4">手足關係、同儕互動、合作模式</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">夫妻宮</td>
                <td className="py-3 px-4">我的感情模式是什麼？</td>
                <td className="py-3 px-4">戀愛態度、婚姻關係、伴侶特質傾向</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">子女宮</td>
                <td className="py-3 px-4">我的創造力和下一代？</td>
                <td className="py-3 px-4">與子女的關係、創造能力、桃花（部分流派）</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">財帛宮</td>
                <td className="py-3 px-4">我怎麼賺錢和用錢？</td>
                <td className="py-3 px-4">收入模式、理財態度、對金錢的價值觀</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">疾厄宮</td>
                <td className="py-3 px-4">我的身心健康傾向？</td>
                <td className="py-3 px-4">體質傾向、容易出狀況的部位、身心壓力源</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">遷移宮</td>
                <td className="py-3 px-4">我在外面的表現如何？</td>
                <td className="py-3 px-4">外在形象、出外運、社會上的際遇</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">交友宮</td>
                <td className="py-3 px-4">我的人際圈如何？</td>
                <td className="py-3 px-4">朋友品質、部屬緣分、人際互動模式</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">官祿宮</td>
                <td className="py-3 px-4">我的事業走向？</td>
                <td className="py-3 px-4">適合的工作類型、職場表現、事業成就模式</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">田宅宮</td>
                <td className="py-3 px-4">我的家庭和居住環境？</td>
                <td className="py-3 px-4">家庭氣氛、不動產緣分、生活環境</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">福德宮</td>
                <td className="py-3 px-4">我的內在世界如何？</td>
                <td className="py-3 px-4">精神狀態、興趣偏好、幸福感來源、思維模式</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">父母宮</td>
                <td className="py-3 px-4">我和長輩的關係？</td>
                <td className="py-3 px-4">與父母的關係、師長緣分、受教育的方式</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="記憶訣竅">
          <p>
            不需要硬背十二宮的名稱和意義。建議你先記住最核心的四個宮位：<strong>命宮</strong>（自我）、<strong>官祿宮</strong>（事業）、<strong>財帛宮</strong>（金錢）、<strong>夫妻宮</strong>（感情），因為這是多數人最在意的面向。其他宮位在後續的學習中會自然熟悉。
          </p>
        </Callout>

        <Callout type="warning">
          <p>
            十二宮的名稱容易讓人望文生義。例如「子女宮」不只看子女，在某些分析中也涉及創造力和桃花；「疾厄宮」不是說你一定會生病，而是指出你在身心方面比較需要注意的面向。不要被宮位名稱侷限了理解。
          </p>
        </Callout>
      </section>

      {/* ────────────────────────── 第三節 ────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">主星與輔星的差別</h2>

        <p className="mb-4 leading-relaxed">
          紫微斗數中的星曜可以大致分為兩大類：<strong>主星</strong>和<strong>輔助星曜</strong>（包含輔星、煞星、雜曜等）。理解這兩者的差別，對正確解盤至關重要。
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">十四主星</h3>
        <p className="mb-4 leading-relaxed">
          主星是命盤中最重要的星曜，共有十四顆。它們決定了一個宮位的「基本調性」——就像一首曲子的主旋律。十四主星各自代表一種鮮明的性格原型和行為傾向。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-semibold">星系</th>
                <th className="text-left py-3 px-4 font-semibold">包含主星</th>
                <th className="text-left py-3 px-4 font-semibold">整體特色</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">紫微星系（北斗）</td>
                <td className="py-3 px-4">紫微、天機、太陽、武曲、天同、廉貞</td>
                <td className="py-3 px-4">偏向主動、陽性、外顯的能量</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">天府星系（南斗）</td>
                <td className="py-3 px-4">天府、太陰、貪狼、巨門、天相、天梁</td>
                <td className="py-3 px-4">偏向守成、陰性、內斂的能量</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">獨立星</td>
                <td className="py-3 px-4">七殺、破軍</td>
                <td className="py-3 px-4">變動性強、衝勁大、改革的能量</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-4 leading-relaxed">
          在實際的命盤中，一個宮位可能有一顆主星、兩顆主星、或沒有主星（稱為「空宮」）。有兩顆主星時，它們的特質會互相調和或拉扯，產生更複雜的性格面貌。空宮的情況下，需要看對宮的星曜來借光。
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">輔助星曜</h3>
        <p className="mb-4 leading-relaxed">
          輔助星曜包括六吉星（文昌、文曲、左輔、右弼、天魁、天鉞）、六煞星（擎羊、陀羅、火星、鈴星、地空、地劫）以及其他雜曜。它們的作用是修飾、強化或干擾主星的表現。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-semibold w-32">比較項目</th>
                <th className="text-left py-3 px-4 font-semibold">主星</th>
                <th className="text-left py-3 px-4 font-semibold">輔助星曜</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">數量</td>
                <td className="py-3 px-4">14 顆</td>
                <td className="py-3 px-4">數十顆（各流派取用數量不同）</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">角色</td>
                <td className="py-3 px-4">定調——決定宮位的基本性質</td>
                <td className="py-3 px-4">修飾——強化、削弱或改變主星的表現</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">比喻</td>
                <td className="py-3 px-4">一道菜的主食材（牛肉、魚、豆腐）</td>
                <td className="py-3 px-4">調味料和配菜（鹽、辣椒、蔥花）</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">獨立性</td>
                <td className="py-3 px-4">可以獨立呈現意義</td>
                <td className="py-3 px-4">通常需要搭配主星一起判讀</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">學習優先順序</td>
                <td className="py-3 px-4">先學</td>
                <td className="py-3 px-4">後學</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="info">
          <p>
            初學者最重要的事是先把十四主星的核心特質搞清楚。輔助星曜的數量多、規則雜，如果在還沒掌握主星之前就急著學煞星，很容易被嚇到（例如看到自己命宮有擎羊就以為很慘），反而阻礙學習。
          </p>
        </Callout>
      </section>

      {/* ────────────────────────── 第四節 ────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">四化的概念</h2>

        <p className="mb-4 leading-relaxed">
          「四化」是紫微斗數中最具動態性的機制，也是許多流派認為最重要的分析工具。所謂四化，是指四種「轉化」的力量，它們會附加在特定的星曜上，改變該星曜的表現方式。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-semibold w-24">四化</th>
                <th className="text-left py-3 px-4 font-semibold">核心意涵</th>
                <th className="text-left py-3 px-4 font-semibold">效果簡述</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-green-600">化祿</td>
                <td className="py-3 px-4">增加、順遂、豐富</td>
                <td className="py-3 px-4">讓星曜的正面能量增強，帶來資源和機會的流入</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-blue-600">化權</td>
                <td className="py-3 px-4">掌控、強勢、堅持</td>
                <td className="py-3 px-4">讓星曜的主導性增強，帶來掌控力但也可能帶來爭執</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-purple-600">化科</td>
                <td className="py-3 px-4">聲譽、表現、被看見</td>
                <td className="py-3 px-4">讓星曜的表現得到認可，帶來名聲和貴人</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-red-600">化忌</td>
                <td className="py-3 px-4">執著、糾結、不順</td>
                <td className="py-3 px-4">讓星曜的能量受阻或過度，帶來挑戰和需要面對的課題</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-4 leading-relaxed">
          四化是由出生年的天干決定的。每個天干對應固定的四顆星分別化祿、化權、化科、化忌。例如甲年出生的人，廉貞化祿、破軍化權、武曲化科、太陽化忌。
        </p>

        <p className="mb-4 leading-relaxed">
          你可以把四化想像成「能量的調節器」：化祿是把音量轉大（正面能量放大）、化權是把方向盤握緊（掌控力增強）、化科是把聚光燈打上（被關注）、化忌是把路卡住（遇到阻礙需要繞路或突破）。
        </p>

        <Callout type="warning">
          <p>
            <strong>化忌不等於「壞」。</strong>化忌表示的是「在這個面向上需要花比較多心力去面對和處理」，它往往也是一個人最在意、最會去鑽研的領域。很多在某個領域有卓越成就的人，命盤中化忌恰好就落在那個領域——因為夠在意，所以夠努力。
          </p>
        </Callout>

        <Callout type="tip">
          <p>
            四化是紫微斗數的進階核心。現階段你只需要知道它的基本概念即可，在學完十二宮和十四主星之後，再深入學習四化的運用會更有效率。
          </p>
        </Callout>
      </section>

      {/* ────────────────────────── 第五節 ────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          宮位之間的關鍵關係
        </h2>

        <p className="mb-4 leading-relaxed">
          紫微斗數的命盤不是十二個獨立的格子——宮位之間存在著重要的結構關係。理解這些關係，是從「看單一宮位」進階到「看整張盤」的關鍵。
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">對宮</h3>
        <p className="mb-4 leading-relaxed">
          每個宮位正對面的那個宮位，就是它的「對宮」。對宮的星曜會直接影響本宮的判讀——特別是當本宮沒有主星（空宮）時，對宮的主星就成了最重要的參考。即使本宮有星曜，對宮的力量也不能忽略，它代表一種「外來的、對照的、互補的」影響。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-semibold">本宮</th>
                <th className="text-left py-3 px-4 font-semibold">對宮</th>
                <th className="text-left py-3 px-4 font-semibold">對照關係的意涵</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4">命宮（自我）</td>
                <td className="py-3 px-4">遷移宮（外在）</td>
                <td className="py-3 px-4">內在性格 vs 外在表現</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4">夫妻宮（感情）</td>
                <td className="py-3 px-4">官祿宮（事業）</td>
                <td className="py-3 px-4">私領域 vs 公領域的投入</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4">財帛宮（金錢）</td>
                <td className="py-3 px-4">福德宮（精神）</td>
                <td className="py-3 px-4">物質追求 vs 精神滿足</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4">子女宮（下一代）</td>
                <td className="py-3 px-4">田宅宮（家庭）</td>
                <td className="py-3 px-4">創造與傳承</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4">兄弟宮（同輩）</td>
                <td className="py-3 px-4">交友宮（人際）</td>
                <td className="py-3 px-4">親近的人 vs 社會的人</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4">疾厄宮（身體）</td>
                <td className="py-3 px-4">父母宮（長輩）</td>
                <td className="py-3 px-4">自身狀態 vs 先天給予</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">三方四正</h3>
        <p className="mb-4 leading-relaxed">
          「三方四正」是紫微斗數中最重要的宮位關係概念。它指的是：以某個宮位為起點，加上它的對宮，以及與它相隔四個位置的兩個宮位，這四個宮位合在一起就是「三方四正」。
        </p>

        <SanFangDiagram />

        <p className="mb-4 leading-relaxed">
          為什麼三方四正重要？因為紫微斗數認為，一個宮位的星曜不是孤立運作的——三方四正中所有的星曜都會對這個宮位產生影響。看一個宮位時，只看它自己的星曜是不夠的，必須把三方四正的星曜全部納入考量，才能做出較完整的判斷。
        </p>

        <Expandable title="舉例：命宮的三方四正">
          <p className="mb-3">
            假設你的命宮在子位（地支位置），那麼：
          </p>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li><strong>本宮</strong>：命宮（子位）</li>
            <li><strong>對宮</strong>：遷移宮（午位，正對面）</li>
            <li><strong>三方之一</strong>：隔四位的財帛宮（辰位）</li>
            <li><strong>三方之二</strong>：另一邊隔四位的官祿宮（申位）</li>
          </ul>
          <p>
            這意味著，要完整分析你的命宮（核心性格），不能只看命宮裡的星曜，還要看遷移宮、財帛宮、官祿宮裡有什麼星曜。這四個宮位的星曜會共同塑造你的性格面貌。
          </p>
        </Expandable>

        <Callout type="info" title="三方四正的實用意義">
          <p>
            三方四正的存在告訴我們一件事：<strong>人生的各個面向是互相關聯的</strong>。你的事業表現（官祿宮）和財務狀況（財帛宮）會影響你的自我認知（命宮），你在外面的形象（遷移宮）也會反過來影響你對自己的看法。命盤的結構本身就反映了這種關聯性。
          </p>
        </Callout>
      </section>

      {/* ────────────────────────── 第六節 ────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">重要名詞定義</h2>

        <p className="mb-4 leading-relaxed">
          以下是學習紫微斗數時會反覆遇到的核心術語。不需要一次全部背下來，但建議你在後續學習中遇到不確定的詞彙時，回來查閱這份清單。
        </p>

        <div className="space-y-3">
          <Expandable title="本命盤（先天盤）" defaultOpen>
            <p>
              根據出生時間排出的命盤，反映一個人的先天結構和基本傾向。這是學習紫微斗數時最先接觸、也最重要的基礎。相對於「大限盤」和「流年盤」（分析不同年齡段的運勢），本命盤呈現的是一個人不隨時間改變的核心結構。
            </p>
          </Expandable>

          <Expandable title="命宮">
            <p>
              十二宮中最核心的宮位，代表一個人的本質性格、自我意識、行為傾向。命宮的星曜組合是解盤的起點。但注意：命宮不是全部，它只是你性格中最核心的那一面。
            </p>
          </Expandable>

          <Expandable title="身宮">
            <p>
              和命宮一起被稱為「命身」，代表後天的行為傾向和外在表現。身宮永遠與另一個宮位重疊（可能是命宮、夫妻宮、財帛宮、遷移宮、官祿宮或福德宮），重疊的宮位反映了一個人後天最關注、最投入的生活面向。
            </p>
          </Expandable>

          <Expandable title="天干與地支">
            <p>
              天干有十個（甲乙丙丁戊己庚辛壬癸），地支有十二個（子丑寅卯辰巳午未申酉戌亥）。天干地支的組合構成了中國傳統曆法的基礎。在紫微斗數中，出生年的天干決定四化的分布，地支則是命盤上十二個宮位的固定座標。
            </p>
          </Expandable>

          <Expandable title="星曜">
            <p>
              命盤中各種星星的統稱。紫微斗數使用的星曜是「虛擬星」——它們不對應天空中的實際天體，而是根據數學演算法推算出的符號。星曜是命盤中承載意義的核心單位。
            </p>
          </Expandable>

          <Expandable title="廟旺利陷（亮度）">
            <p>
              描述星曜在不同宮位（地支位置）時的強弱程度。同一顆星在不同位置會有「廟」（最強）、「旺」（次強）、「利」（平和）、「陷」（最弱）等不同狀態。這會影響該星曜正面特質和負面特質的呈現比例。廟旺時正面特質較明顯，陷落時負面特質較容易浮現。
            </p>
          </Expandable>

          <Expandable title="空宮">
            <p>
              一個宮位中沒有任何主星的情況。空宮不代表這個生命面向是空白的，而是需要借用對宮的主星來判讀。空宮的特性是比較容易受到環境和他人的影響。
            </p>
          </Expandable>

          <Expandable title="坐（入）">
            <p>
              描述星曜位於某個宮位中的用語。例如「紫微坐命」意思是紫微星位於命宮中；「太陽入財帛」意思是太陽星位於財帛宮中。
            </p>
          </Expandable>

          <Expandable title="大限">
            <p>
              紫微斗數中十年為一個「大限」，代表人生不同階段的運勢主題。大限是進階分析的重要工具，初學者先以本命盤為主。
            </p>
          </Expandable>

          <Expandable title="流年">
            <p>
              以單一年份為單位的運勢分析。比大限更細緻，用來看某一年的特定影響。同樣是進階內容。
            </p>
          </Expandable>
        </div>
      </section>

      {/* ────────────────────────── 本頁小結 ────────────────────────── */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">本頁小結</h2>

        <div className="bg-surface border border-border rounded-xl p-6">
          <ul className="space-y-3 text-sm leading-relaxed">
            <li className="flex gap-2">
              <span className="text-primary font-bold shrink-0">1.</span>
              <span>
                命盤由十二個宮位組成，每個宮位代表人生的一個面向。星曜根據出生時間被排入各宮位中。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold shrink-0">2.</span>
              <span>
                十四主星是命盤的核心，決定宮位的基本調性。輔助星曜則負責修飾和調整主星的表現。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold shrink-0">3.</span>
              <span>
                四化（化祿、化權、化科、化忌）是動態的能量調節機制，由出生年天干決定。化忌不等於壞，而是代表需要更多關注的領域。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold shrink-0">4.</span>
              <span>
                對宮和三方四正是宮位之間最重要的結構關係。看任何一個宮位時，都必須把三方四正的星曜一起考慮。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold shrink-0">5.</span>
              <span>
                掌握基礎名詞（本命盤、空宮、廟旺利陷、坐入、大限、流年等）能讓後續的學習更順暢。
              </span>
            </li>
          </ul>
        </div>
      </section>

      <LessonNav currentPath="/foundations" />
    </>
  );
}
