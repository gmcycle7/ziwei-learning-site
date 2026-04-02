import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Callout from '@/components/ui/Callout';
import Expandable from '@/components/ui/Expandable';
import LessonNav from '@/components/ui/LessonNav';

export const metadata: Metadata = {
  title: '入門指引',
  description:
    '從零開始認識紫微斗數——它是什麼、能看什麼、不能看什麼，以及如何正確地開始學習。',
};

export default function GettingStartedPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '入門指引' }]} />

      <h1 className="text-3xl font-bold mb-2">入門指引</h1>
      <p className="text-muted text-lg mb-10">
        從零開始認識紫微斗數——它是什麼、在看什麼、該用什麼心態學習。
      </p>

      {/* ────────────────────────── 第一節 ────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">紫微斗數是什麼？</h2>

        <p className="mb-4 leading-relaxed">
          紫微斗數是中國傳統命理學中一套以「星曜」為核心的分析系統。它根據一個人的出生年、月、日、時，將天上的虛擬星曜排列在十二個宮位之中，藉此描繪出一個人在性格傾向、人際模式、價值觀、行為風格等面向上的結構特徵。
        </p>

        <p className="mb-4 leading-relaxed">
          你可以把它想像成一種「人格結構的座標系統」。就像心理學中的 MBTI 或大五人格模型嘗試用幾個維度來描述人的傾向一樣，紫微斗數用的是「宮位」和「星曜」的組合來達成類似的目的——只不過它的維度更多、結構更複雜，而且有數百年的經驗累積。
        </p>

        <p className="mb-4 leading-relaxed">
          這套系統起源於宋代（一般認為由陳摶所創），經過歷代發展，逐漸形成一套完整的架構。現今廣泛流傳的版本主要分為「三合派」與「飛星派」兩大系統，各有側重，但都共享同一套基本的命盤結構。
        </p>

        <Callout type="info" title="關鍵觀念">
          <p>
            紫微斗數的「斗數」指的是用「北斗」「南斗」等星群來計算命盤結構，「紫微」則是其中最重要的一顆主星。整套系統的核心是：根據你的出生時間，推算各星曜落入哪個宮位，再據此分析各個生命面向的傾向。
          </p>
        </Callout>
      </section>

      {/* ────────────────────────── 第二節 ────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          學這套系統前，要先知道什麼？
        </h2>

        <p className="mb-4 leading-relaxed">
          學習紫微斗數不需要任何特殊的知識背景，但有幾件事如果能先建立正確認知，學習過程會順暢很多。
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">一、你不需要先學八字</h3>
        <p className="mb-4 leading-relaxed">
          紫微斗數和八字（四柱命理）是兩套獨立的系統。雖然都使用出生時間作為起點，但排盤方式、分析邏輯、術語體系完全不同。你可以直接從紫微斗數開始，不需要先懂八字。
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">二、你需要農曆的出生時間</h3>
        <p className="mb-4 leading-relaxed">
          紫微斗數的排盤依據是農曆（陰曆）的出生年月日與時辰。如果你只知道國曆（陽曆）生日，可以透過萬年曆或線上工具換算。時辰方面，紫微斗數使用傳統的十二時辰制（子、丑、寅……），每個時辰對應兩個小時。
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">
          三、建立「傾向性」而非「決定論」的思維
        </h3>
        <p className="mb-4 leading-relaxed">
          這一點極為重要。紫微斗數描述的是一種「結構性的傾向」，而不是鐵板釘釘的命運。就好比說一個人性格內向，不代表他不能當業務，而是說他在社交上可能需要花更多能量。命盤呈現的是你的「出廠設定」，但人生怎麼走，還是取決於你如何運用這些特質。
        </p>

        <Callout type="tip" title="學習心態">
          <p>
            把紫微斗數當作一面鏡子，而不是一本劇本。它幫助你看清自己的傾向和模式，但不會告訴你「你的人生一定會怎樣」。帶著好奇心和分析精神來學，會比帶著恐懼或貪求來學，效果好非常多。
          </p>
        </Callout>

        <h3 className="text-lg font-semibold mt-6 mb-3">四、接受模糊性</h3>
        <p className="mb-4 leading-relaxed">
          和數學不同，命理分析沒有「標準答案」。同一個命盤，不同程度的分析者可能會有不同的解讀重點。初學者要先學會基本規則，再慢慢培養判讀的直覺。不要急著想「這顆星到底是好還是壞」——這種二元思維是學習最大的障礙。
        </p>
      </section>

      {/* ────────────────────────── 第三節 ────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          這套系統在看什麼？
        </h2>

        <p className="mb-4 leading-relaxed">
          簡單來說，紫微斗數在看一個人的「先天結構」。這個結構涵蓋以下幾個層面：
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-semibold">分析面向</th>
                <th className="text-left py-3 px-4 font-semibold">具體內容</th>
                <th className="text-left py-3 px-4 font-semibold">對應宮位（舉例）</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">性格傾向</td>
                <td className="py-3 px-4">核心個性、行為風格、思考模式</td>
                <td className="py-3 px-4">命宮</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">情感模式</td>
                <td className="py-3 px-4">對感情的態度、擇偶傾向、相處方式</td>
                <td className="py-3 px-4">夫妻宮</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">事業方向</td>
                <td className="py-3 px-4">適合的工作型態、職場風格、成就模式</td>
                <td className="py-3 px-4">官祿宮</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">財務傾向</td>
                <td className="py-3 px-4">賺錢方式、理財態度、對金錢的價值觀</td>
                <td className="py-3 px-4">財帛宮</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">人際關係</td>
                <td className="py-3 px-4">社交風格、與朋友/同事的互動模式</td>
                <td className="py-3 px-4">交友宮</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">身心狀態</td>
                <td className="py-3 px-4">身體較容易出狀況的面向、心理壓力源</td>
                <td className="py-3 px-4">疾厄宮</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">內在世界</td>
                <td className="py-3 px-4">精神生活、興趣偏好、快樂的來源</td>
                <td className="py-3 px-4">福德宮</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-4 leading-relaxed">
          除了上述的「先天結構」，紫微斗數還有一套「大限」和「流年」的系統，用來描述人在不同年齡階段的運勢變化。但這屬於進階內容，初學者先把先天盤（本命盤）弄懂比較重要。
        </p>

        <Callout type="info" title="它不看什麼">
          <p>
            紫微斗數<strong>不是</strong>用來預測彩券號碼、精確預知某天會發生什麼事、或判斷某人「命好不好」的工具。它描述的是傾向與模式，不是具體事件。把它當成一種自我認識的工具，而非算命的水晶球。
          </p>
        </Callout>
      </section>

      {/* ────────────────────────── 第四節 ────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">常見誤解</h2>

        <p className="mb-4 leading-relaxed">
          很多人對紫微斗數的第一印象來自市場上的算命文化，因此帶著不少誤解。以下逐一澄清：
        </p>

        <Expandable title="誤解一：紫微斗數就是算命，是迷信">
          <p className="mb-3">
            這是最常見的誤解。紫微斗數確實屬於傳統命理學的範疇，但「命理學」和「迷信」是兩回事。命理學是一套有內在邏輯、有系統規則的分析架構；迷信則是不經思考地相信某些說法。
          </p>
          <p className="mb-3">
            打個比方：佛洛伊德的精神分析在現代心理學看來有很多不夠嚴謹的地方，但你不會說「心理學是迷信」。紫微斗數也是一樣——它是一套有結構的分析工具，你可以用批判性思維去學習它、檢驗它，而不需要盲目相信。
          </p>
          <p>
            關鍵在於你的態度：是把它當成一種分析框架來理解人的傾向，還是當成神諭來照單全收。前者是學習，後者才是迷信。
          </p>
        </Expandable>

        <Expandable title="誤解二：命盤決定一切，學了就知道未來">
          <p className="mb-3">
            命盤呈現的是「先天的結構傾向」，不是「固定的劇本」。一個命宮有破軍星的人，傾向於喜歡變化、不安於現狀，但這不代表他一定會頻繁換工作——也許他把這種能量用在不斷學習新技能上。
          </p>
          <p>
            紫微斗數描述的是你的「預設設定」，但你有選擇權。了解自己的傾向，反而能做出更好的選擇。
          </p>
        </Expandable>

        <Expandable title="誤解三：某顆星就是「好星」或「壞星」">
          <p className="mb-3">
            這是初學者最容易踩的坑。沒有任何一顆星是絕對好或絕對壞的。每顆星都有它的正面表現和負面表現，具體怎麼呈現取決於它所在的宮位、搭配的其他星曜、以及是否受到四化的影響。
          </p>
          <p className="mb-3">
            舉例：貪狼星常被貼上「桃花星」的標籤，好像坐在命宮就一定風流。但貪狼的核心特質是「慾望」和「學習力」——它可以表現為對知識的渴求、對多元體驗的追求，也可以表現為對感官享受的偏好。單看一顆星就下結論，是非常粗糙的做法。
          </p>
          <p>
            學習紫微斗數最重要的觀念之一，就是放棄「好壞」的二元思維，改用「特質在什麼情境下會怎麼呈現」的方式來理解。
          </p>
        </Expandable>

        <Expandable title="誤解四：命盤一樣的人，人生就一樣">
          <p className="mb-3">
            紫微斗數的命盤組合雖然數量有限（基本盤約有數十萬種變化），但人生的變數遠遠超過命盤所能涵蓋的範圍。同一個時辰出生的人，可能在不同的家庭環境、文化背景、教育條件下長大，人生軌跡自然不同。
          </p>
          <p>
            命盤提供的是一個「基礎結構」，就像兩棟用同一張藍圖蓋的房子，因為建材、工法、裝潢的不同，最終呈現也會不同。
          </p>
        </Expandable>

        <Expandable title="誤解五：學紫微斗數需要有「天賦」或「師承」">
          <p className="mb-3">
            傳統上確實講究師徒傳承，但在知識開放的時代，只要有系統化的教材和正確的學習方法，任何人都可以學會紫微斗數的基礎。所謂的「天賦」其實是「願意花時間理解邏輯、反覆練習判讀」的能力——這不是天賦，是態度。
          </p>
          <p>
            當然，要達到能為人解盤的水準，需要大量的練習和經驗累積，但這跟任何專業技能都一樣。
          </p>
        </Expandable>

        <Callout type="warning">
          <p>
            如果你在網路上看到有人用紫微斗數來「預測大事件」、「鐵口直斷」某年某月會怎樣，請保持高度懷疑。這種做法已經超出了合理的分析範疇，更接近於譁眾取寵。真正有深度的紫微斗數分析，談的是傾向與結構，不是預言。
          </p>
        </Callout>
      </section>

      {/* ────────────────────────── 第五節 ────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">如何有效學習？</h2>

        <p className="mb-4 leading-relaxed">
          紫微斗數的知識體系龐大，如果沒有好的學習策略，很容易迷失在細節裡。以下是幾個經過驗證的學習建議：
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">
          1. 先掌握結構，再記細節
        </h3>
        <p className="mb-4 leading-relaxed">
          很多初學者一開始就急著背每顆星的意義，結果背了一堆片段卻拼不成完整的圖像。正確的順序是：先理解命盤的整體結構（十二宮的意義和關係）、再認識主星的核心特質、最後再進入星曜組合和四化的細節。
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">
          2. 用自己的命盤作為學習教材
        </h3>
        <p className="mb-4 leading-relaxed">
          排出自己的命盤，對照書上的描述和自己的實際經驗，是最有效的學習方式。因為你最了解自己，所以最容易判斷命盤描述的是否符合。當你覺得某段描述很準，想想是哪個星曜、哪個宮位在起作用；當你覺得不準，也去思考可能的原因。
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">
          3. 不要只看命宮
        </h3>
        <p className="mb-4 leading-relaxed">
          很多初學者拿到命盤，眼睛只盯著命宮看。但命宮只是十二宮之一，它呈現的是你的「核心自我」，並不代表你的全部。要理解一個人的完整面貌，至少需要看命宮、福德宮、官祿宮、財帛宮、夫妻宮這幾個重要宮位的星曜組合。
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">
          4. 避免對號入座的陷阱
        </h3>
        <p className="mb-4 leading-relaxed">
          人類天生有「確認偏誤」——看到符合自己的描述就覺得「好準」，看到不符合的就自動忽略。學習命理更容易掉進這個陷阱。請刻意訓練自己去注意「不符合」的部分，思考為什麼不符合，這比一味地驚嘆「好準」更有學習價值。
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">
          5. 記筆記、畫圖、做比較
        </h3>
        <p className="mb-4 leading-relaxed">
          紫微斗數的星曜和宮位關係錯綜複雜，光靠閱讀很難完全消化。建議你準備一本筆記，把每顆星的核心特質用自己的話寫下來，畫出宮位之間的關係圖，把不同星曜做比較（例如：紫微和天府有什麼異同？太陽和太陰的對比是什麼？）。主動加工資訊的效果遠勝於被動閱讀。
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">
          6. 循序漸進，不要跳級
        </h3>
        <p className="mb-4 leading-relaxed">
          本站的內容是按照學習順序編排的。建議你按順序閱讀，不要因為對某個主題特別好奇就跳到後面。紫微斗數的概念是層層堆疊的——如果你不懂宮位，就沒辦法理解星曜在不同宮位的意義；如果你不懂星曜，就沒辦法理解四化的影響。
        </p>

        <Callout type="tip" title="建議的學習路線">
          <ol className="list-decimal list-inside space-y-1">
            <li>先讀完本頁（入門指引），建立正確的學習心態</li>
            <li>接著學基礎觀念，理解命盤的整體結構</li>
            <li>然後逐一認識十二宮的意義</li>
            <li>再學習十四主星的核心特質</li>
            <li>最後進入四化和進階解盤的階段</li>
          </ol>
        </Callout>
      </section>

      {/* ────────────────────────── 本頁小結 ────────────────────────── */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">本頁小結</h2>

        <div className="bg-surface border border-border rounded-xl p-6">
          <ul className="space-y-3 text-sm leading-relaxed">
            <li className="flex gap-2">
              <span className="text-primary font-bold shrink-0">1.</span>
              <span>
                紫微斗數是一套以星曜和宮位為基礎的人格與生命結構分析系統，起源於宋代，有完整的內在邏輯。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold shrink-0">2.</span>
              <span>
                它分析的是性格傾向、行為模式、價值觀等「結構性特徵」，而非預測具體事件或固定命運。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold shrink-0">3.</span>
              <span>
                學習時應避免「好壞二元論」和「決定論」的思維，把命盤當成自我理解的工具。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold shrink-0">4.</span>
              <span>
                正確的學習順序是：結構 → 宮位 → 主星 → 四化 → 解盤。先建立全局觀，再深入細節。
              </span>
            </li>
          </ul>
        </div>
      </section>

      <LessonNav currentPath="/getting-started" />
    </>
  );
}
