import Breadcrumb from '@/components/ui/Breadcrumb';
import Callout from '@/components/ui/Callout';
import LessonNav from '@/components/ui/LessonNav';
import Expandable from '@/components/ui/Expandable';

export const metadata = {
  title: '解盤教學 — 紫微斗數學習平台',
  description: '步驟化的命盤解讀方法，從看命宮到整合敘述，帶你建立系統化的解盤思維。',
};

export default function ChartReadingPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '解盤教學' }]} />

      <h1 className="text-3xl font-bold mb-3">解盤教學</h1>
      <p className="text-muted text-lg mb-8 leading-relaxed">
        學會排盤之後，最重要的就是「如何讀懂一張命盤」。解盤不是死記硬背，而是有系統地觀察、推理、整合。
        本頁將帶你走過七個步驟，建立起結構化的解盤流程。
      </p>

      <Callout type="info" title="學習前提">
        <p>
          開始學習解盤之前，建議你已經熟悉十二宮的基本含義、十四主星的核心特質，以及四化的基本概念。
          如果還不熟悉，可以先回到前面的章節複習。
        </p>
      </Callout>

      {/* ===== Step 1 ===== */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" id="step-1">
          步驟一：看命宮
        </h2>
        <p className="mb-4 leading-relaxed">
          命宮是整張命盤的核心，代表一個人的基本性格傾向、人生態度，以及面對世界的方式。
          解盤的第一步，永遠從命宮開始。
        </p>

        <h3 className="text-lg font-semibold mb-3">觀察要點</h3>
        <ul className="list-disc list-inside space-y-2 mb-4 text-sm leading-relaxed">
          <li>
            <strong>命宮的主星是什麼？</strong>
            — 主星決定了這個人的核心氣質。例如紫微在命宮的人可能傾向於有領導特質、自尊心強；
            天同在命宮的人可能傾向於溫和、享受安逸。
          </li>
          <li>
            <strong>命宮有沒有主星？</strong>
            — 如果命宮沒有十四主星（稱為「空宮」），則需要借對宮（遷移宮）的主星來判斷，
            但力量和表現方式會有所不同。
          </li>
          <li>
            <strong>命宮的輔星與煞星</strong>
            — 左輔、右弼、文昌、文曲等輔星會增加能力表現；
            擎羊、陀羅、火星、鈴星等煞星則可能帶來挑戰或激烈的特質。
          </li>
          <li>
            <strong>命宮有沒有四化？</strong>
            — 生年四化落入命宮，會對人生基調產生明顯影響。
            例如化祿入命宮，可能傾向於較樂觀、機會較多；化忌入命宮，則可能需要面對較多的內心掙扎。
          </li>
        </ul>

        <Callout type="tip" title="初學者建議">
          <p>
            不要急著下結論。看命宮時，先記下你觀察到的元素（主星、輔星、煞星、四化），
            等到後面步驟再把它們串聯起來。解盤是「先收集，再整合」的過程。
          </p>
        </Callout>
      </section>

      {/* ===== Step 2 ===== */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" id="step-2">
          步驟二：看主星
        </h2>
        <p className="mb-4 leading-relaxed">
          十四主星分佈在十二宮中，每顆主星在不同宮位會展現不同的面向。
          在這個步驟，你需要快速掃描各宮的主星配置，建立對整體命盤的初步印象。
        </p>

        <h3 className="text-lg font-semibold mb-3">快速掃描法</h3>
        <ol className="list-decimal list-inside space-y-3 mb-4 text-sm leading-relaxed">
          <li>
            <strong>標記每個宮位的主星</strong>
            — 用紙筆或心中記下每個宮位有哪些主星。特別注意那些雙星同宮的組合（如紫微天府同宮、武曲天相同宮），
            因為雙星的交互作用會產生獨特的性格傾向。
          </li>
          <li>
            <strong>注意主星的廟旺利陷</strong>
            — 同一顆主星在不同宮位有不同的「亮度」。廟地的主星能量較完整發揮，
            陷地的主星則可能展現出較多挑戰面。但請注意，陷地不等於「壞」，只是表現方式不同。
          </li>
          <li>
            <strong>找出星群的集中區域</strong>
            — 如果多顆主星集中在某幾個宮位，那些宮位代表的人生領域可能會特別「精彩」
            （不一定是好或壞，而是經歷較多）。
          </li>
        </ol>

        <Callout type="warning" title="常見誤區">
          <p>
            不要把主星的描述當作「人格定型」。每顆主星都有正面和挑戰面，
            實際表現取決於宮位、四化、輔煞星的整體搭配。紫微星在命宮不代表一定是「帝王」，
            破軍在命宮也不代表一定「破壞力強」。
          </p>
        </Callout>
      </section>

      {/* ===== Step 3 ===== */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" id="step-3">
          步驟三：看三方四正
        </h2>
        <p className="mb-4 leading-relaxed">
          三方四正是紫微斗數中非常重要的觀察結構。任何一個宮位的完整意義，
          都不能只看該宮本身，而必須同時考慮它的三方（三合宮）和四正（對宮）。
        </p>

        <h3 className="text-lg font-semibold mb-3">什麼是三方四正？</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface-alt">
                <th className="border border-border px-4 py-2 text-left">概念</th>
                <th className="border border-border px-4 py-2 text-left">說明</th>
                <th className="border border-border px-4 py-2 text-left">以命宮為例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">對宮</td>
                <td className="border border-border px-4 py-2">正對面的宮位，互為表裡</td>
                <td className="border border-border px-4 py-2">遷移宮</td>
              </tr>
              <tr className="bg-surface-alt/50">
                <td className="border border-border px-4 py-2 font-medium">三合宮</td>
                <td className="border border-border px-4 py-2">與本宮相隔四個宮位的兩個宮</td>
                <td className="border border-border px-4 py-2">財帛宮、官祿宮</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">三方四正</td>
                <td className="border border-border px-4 py-2">對宮 + 三合宮，合計三個關聯宮位</td>
                <td className="border border-border px-4 py-2">遷移宮、財帛宮、官祿宮</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mb-3">為什麼三方四正很重要？</h3>
        <ul className="list-disc list-inside space-y-2 mb-4 text-sm leading-relaxed">
          <li>
            三方四正中的星曜會「照入」本宮，對本宮的力量產生支持或干擾。
          </li>
          <li>
            一個命宮主星再好，如果三方四正充滿煞星，整體表現也可能受到影響。
          </li>
          <li>
            反之，命宮本身看起來平淡，但三方四正有強力吉星支撐，實際運勢可能比預期好。
          </li>
        </ul>

        <Callout type="tip" title="實用技巧">
          <p>
            解盤時，養成一個習慣：每看一個宮位，就立刻看它的三方四正。
            不要孤立地判斷任何一個宮位。這就像看一個人不能只看臉，
            還要看他的整體儀態、穿著、說話方式。
          </p>
        </Callout>
      </section>

      {/* ===== Step 4 ===== */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" id="step-4">
          步驟四：看四化
        </h2>
        <p className="mb-4 leading-relaxed">
          四化（化祿、化權、化科、化忌）是命盤中最動態的元素。
          它們將特定的主星「激活」，賦予額外的能量方向。
          看四化的重點是：哪顆星被化了？化入了哪個宮位？
        </p>

        <h3 className="text-lg font-semibold mb-3">四化的基本能量</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface-alt">
                <th className="border border-border px-4 py-2 text-left">四化</th>
                <th className="border border-border px-4 py-2 text-left">能量傾向</th>
                <th className="border border-border px-4 py-2 text-left">值得觀察的面向</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">化祿</td>
                <td className="border border-border px-4 py-2">順利、豐盛、機會</td>
                <td className="border border-border px-4 py-2">在哪個宮位容易獲得資源？</td>
              </tr>
              <tr className="bg-surface-alt/50">
                <td className="border border-border px-4 py-2 font-medium">化權</td>
                <td className="border border-border px-4 py-2">掌控、主導、積極</td>
                <td className="border border-border px-4 py-2">在哪個領域傾向於主動掌握？</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">化科</td>
                <td className="border border-border px-4 py-2">聲名、貴人、學習</td>
                <td className="border border-border px-4 py-2">在哪個領域可能得到他人認可？</td>
              </tr>
              <tr className="bg-surface-alt/50">
                <td className="border border-border px-4 py-2 font-medium">化忌</td>
                <td className="border border-border px-4 py-2">執著、阻礙、課題</td>
                <td className="border border-border px-4 py-2">在哪個領域需要特別留意？</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mb-3">四化觀察要點</h3>
        <ol className="list-decimal list-inside space-y-2 mb-4 text-sm leading-relaxed">
          <li>
            <strong>先看生年四化</strong>
            — 生年四化是與生俱來的能量配置，影響一生的基調。找出生年天干對應的四顆化星，看看它們分別落在哪些宮位。
          </li>
          <li>
            <strong>注意化忌的位置</strong>
            — 化忌落入的宮位，通常是人生中需要面對的課題所在。但化忌不等於「壞事」，
            它可能代表投入大量精力的領域，也可能是最終帶來成長的契機。
          </li>
          <li>
            <strong>觀察四化是否形成特殊格局</strong>
            — 例如「祿轉忌」（化祿的星同時化忌的星落在相關宮位）等進階格局，
            初學者可先做記錄，待經驗增加後再深入分析。
          </li>
        </ol>

        <Callout type="warning" title="重要提醒">
          <p>
            化忌不是「凶」，化祿不是「吉」。四化代表的是能量的流動方向，不是命運的好壞。
            初學者最常犯的錯誤就是一看到化忌就緊張，一看到化祿就興奮——
            這樣的解讀方式會過度簡化命盤的真實訊息。
          </p>
        </Callout>
      </section>

      {/* ===== Step 5 ===== */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" id="step-5">
          步驟五：看重點宮位
        </h2>
        <p className="mb-4 leading-relaxed">
          如果是針對特定問題解盤（例如問事業、問感情），你需要把焦點放在與問題最相關的宮位上。
          這個步驟是讓你的解盤從「全面掃描」轉為「重點聚焦」。
        </p>

        <h3 className="text-lg font-semibold mb-3">常見問題對應的重點宮位</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface-alt">
                <th className="border border-border px-4 py-2 text-left">問題類型</th>
                <th className="border border-border px-4 py-2 text-left">主要宮位</th>
                <th className="border border-border px-4 py-2 text-left">輔助宮位</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2">事業發展</td>
                <td className="border border-border px-4 py-2 font-medium">官祿宮</td>
                <td className="border border-border px-4 py-2">命宮、財帛宮、遷移宮</td>
              </tr>
              <tr className="bg-surface-alt/50">
                <td className="border border-border px-4 py-2">感情婚姻</td>
                <td className="border border-border px-4 py-2 font-medium">夫妻宮</td>
                <td className="border border-border px-4 py-2">命宮、福德宮、遷移宮</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">財富理財</td>
                <td className="border border-border px-4 py-2 font-medium">財帛宮</td>
                <td className="border border-border px-4 py-2">官祿宮、田宅宮、福德宮</td>
              </tr>
              <tr className="bg-surface-alt/50">
                <td className="border border-border px-4 py-2">健康狀況</td>
                <td className="border border-border px-4 py-2 font-medium">疾厄宮</td>
                <td className="border border-border px-4 py-2">命宮、父母宮、福德宮</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">人際關係</td>
                <td className="border border-border px-4 py-2 font-medium">交友宮</td>
                <td className="border border-border px-4 py-2">兄弟宮、遷移宮、命宮</td>
              </tr>
              <tr className="bg-surface-alt/50">
                <td className="border border-border px-4 py-2">家庭房產</td>
                <td className="border border-border px-4 py-2 font-medium">田宅宮</td>
                <td className="border border-border px-4 py-2">財帛宮、父母宮、兄弟宮</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="交叉觀察法">
          <p>
            解讀重點宮位時，記得回頭看那個宮位的三方四正。
            例如問事業，主看官祿宮，但同時要看官祿宮的三方四正——
            也就是命宮、財帛宮、夫妻宮的星曜和四化狀況。
            事業從來不是孤立的，它和個人特質、經濟能力、家庭支持都息息相關。
          </p>
        </Callout>
      </section>

      {/* ===== Step 6 ===== */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" id="step-6">
          步驟六：整合成敘述
        </h2>
        <p className="mb-4 leading-relaxed">
          前面五個步驟收集了大量的觀察素材。現在，你需要把這些零散的發現串聯成一段連貫的敘述。
          這是解盤中最有挑戰、也最需要練習的部分。
        </p>

        <h3 className="text-lg font-semibold mb-3">整合的思維框架</h3>
        <ol className="list-decimal list-inside space-y-3 mb-4 text-sm leading-relaxed">
          <li>
            <strong>找出主旋律</strong>
            — 在你收集到的所有資訊中，有沒有反覆出現的主題？
            例如多個宮位都顯示「求穩定」的傾向，或多個位置都有「變動」的能量。
            這個反覆出現的主題就是命盤的主旋律。
          </li>
          <li>
            <strong>連結因果</strong>
            — 試著把不同宮位的訊息連成故事。
            例如：「命宮有太陽星，為人熱情外向（因）→ 交友宮有化祿，人際關係中容易得到助力（果）」。
            這種連結不是確定的因果，而是一種可能的傾向性敘述。
          </li>
          <li>
            <strong>平衡正反</strong>
            — 好的解盤一定是立體的，不會只說好話或只說壞話。
            每個命盤都有優勢和需要面對的課題，把兩者都呈現出來。
          </li>
          <li>
            <strong>使用彈性語言</strong>
            — 用「可能」「傾向於」「值得留意」「有這方面的潛力」取代斷定式的表述。
            命盤顯示的是傾向和潛力，不是固定的結果。
          </li>
        </ol>

        <Expandable title="整合敘述的範例：從觀察到表達">
          <div className="space-y-3">
            <p><strong>觀察紀錄：</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>命宮：天機星（廟），化科</li>
              <li>官祿宮：太陰星，化祿</li>
              <li>財帛宮：天同星、天梁星</li>
              <li>遷移宮：巨門星，化忌</li>
            </ul>
            <p className="mt-3"><strong>整合敘述（範例）：</strong></p>
            <p className="italic text-muted">
              「從命宮的天機化科來看，這位命主可能傾向於思維敏捷、善於分析，
              且在學習或專業領域有機會獲得一定的聲譽。官祿宮太陰化祿，
              在事業方面可能適合需要細膩規劃的工作，且工作中的資源流動傾向順暢。
              不過，遷移宮巨門化忌值得留意，在外出或與陌生人互動時，
              可能需要多注意溝通方式，避免口舌紛爭的傾向。
              整體而言，這張盤在思考能力和事業規劃上展現了不錯的潛力，
              但在人際溝通上可能是需要持續修練的課題。」
            </p>
          </div>
        </Expandable>
      </section>

      {/* ===== Step 7 ===== */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" id="step-7">
          步驟七：避免過度解讀
        </h2>
        <p className="mb-4 leading-relaxed">
          這是最後一個步驟，也是最重要的提醒。紫微斗數是一套象徵系統，
          不是精確預測未來的工具。過度解讀不僅不準確，還可能造成不必要的焦慮。
        </p>

        <h3 className="text-lg font-semibold mb-3">過度解讀的常見形式</h3>
        <ul className="list-disc list-inside space-y-2 mb-4 text-sm leading-relaxed">
          <li>
            <strong>單星論斷</strong>
            — 只看到一顆星就下結論。例如「破軍在夫妻宮所以一定會離婚」——
            這完全忽略了其他星曜、四化和整體格局的影響。
          </li>
          <li>
            <strong>非黑即白</strong>
            — 把命盤分成「好盤」或「壞盤」。每張命盤都是獨特的能量組合，
            沒有絕對的好壞之分。
          </li>
          <li>
            <strong>忽略自由意志</strong>
            — 命盤顯示的是傾向，不是宿命。
            一個人的選擇、努力、環境都會影響最終的結果。
          </li>
          <li>
            <strong>恐嚇式解讀</strong>
            — 用命盤來嚇唬自己或別人。例如「你有化忌在疾厄宮，小心重大疾病」——
            這種解讀既不負責任，也不準確。
          </li>
          <li>
            <strong>過度延伸</strong>
            — 從命盤中讀出過多具體細節。命盤是一個傾向性的框架，
            它不會告訴你幾月幾號會發生什麼事。
          </li>
        </ul>

        <Callout type="error" title="負責任的態度">
          <p>
            解盤者的責任是提供有建設性的觀察，而不是製造恐懼。
            如果你的解讀讓對方感到焦慮或無助，那這個解讀方式值得重新檢視。
            好的解盤應該讓人更了解自己，而不是更害怕未來。
          </p>
        </Callout>

        <h3 className="text-lg font-semibold mt-6 mb-3">健康解盤的原則</h3>
        <ol className="list-decimal list-inside space-y-2 mb-4 text-sm leading-relaxed">
          <li>承認命盤的侷限性——它不能回答所有問題</li>
          <li>保持開放態度——同一組星曜可能有多種詮釋</li>
          <li>重視整體格局——不要被單一元素牽著走</li>
          <li>使用建設性語言——聚焦在「可以怎麼做」而非「命中注定」</li>
          <li>持續學習——解盤技巧需要時間和經驗的累積</li>
        </ol>
      </section>

      {/* ===== Beginner Checklist ===== */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4" id="checklist">
          初學者解盤檢查清單
        </h2>
        <p className="mb-4 text-sm text-muted leading-relaxed">
          每次解盤時，按照以下順序逐項檢查，可以幫助你建立穩定的解盤習慣。
        </p>

        <div className="border border-border rounded-lg p-6 bg-surface-alt/30">
          <ol className="list-decimal list-inside space-y-3 text-sm leading-relaxed">
            <li>確認命盤的基本資料（出生年月日時、性別、農曆/國曆）是否正確</li>
            <li>找到命宮位置，記下命宮的主星、輔星、煞星</li>
            <li>檢查命宮是否有四化落入</li>
            <li>找到身宮位置，記下身宮的星曜配置</li>
            <li>快速掃描十二宮，記下每個宮位的主星分佈</li>
            <li>標記生年四化分別落在哪四個宮位</li>
            <li>針對命宮，看其三方四正（遷移宮、財帛宮、官祿宮）的配置</li>
            <li>如果有特定問題，找到對應的主要宮位並分析</li>
            <li>記下觀察到的重複主題或特殊格局</li>
            <li>試著用自己的話整合成一段連貫敘述</li>
            <li>檢視自己的解讀是否過度武斷，語言是否保持彈性</li>
            <li>如果是幫別人看盤，確認自己的解讀是建設性的</li>
          </ol>
        </div>
      </section>

      {/* ===== Tips for Connecting Observations ===== */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" id="connection-tips">
          串聯觀察的技巧
        </h2>
        <p className="mb-4 leading-relaxed">
          初學者最常遇到的困難是：「每個宮位我都看了，但不知道怎麼把它們連在一起。」
          以下是幾個實用的串聯技巧。
        </p>

        <Expandable title="技巧一：主題歸類法">
          <p className="mb-2">
            把你觀察到的所有資訊按照主題歸類，例如：
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong>性格相關：</strong>命宮主星 + 福德宮主星 + 命宮的輔煞星</li>
            <li><strong>事業相關：</strong>官祿宮 + 財帛宮 + 命宮中與事業有關的元素</li>
            <li><strong>關係相關：</strong>夫妻宮 + 交友宮 + 遷移宮中與人際有關的元素</li>
          </ul>
          <p className="mt-2">
            歸類之後，同一主題下的資訊自然會形成一個完整的觀察面向。
          </p>
        </Expandable>

        <Expandable title="技巧二：對比法">
          <p className="mb-2">
            找出命盤中的「矛盾」或「對比」，這往往是最有洞察力的觀察。例如：
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>命宮很積極但福德宮很安逸 → 外在表現和內心需求可能有差距</li>
            <li>官祿宮很強但財帛宮有化忌 → 事業能力可能不錯但理財上需要留意</li>
            <li>夫妻宮有吉星但命宮偏獨立 → 感情上可能有吸引力但需要學習互相配合</li>
          </ul>
        </Expandable>

        <Expandable title="技巧三：四化追蹤法">
          <p className="mb-2">
            以四化為線索，追蹤命盤的能量流向：
          </p>
          <ol className="list-decimal list-inside space-y-1 ml-2">
            <li>找出四化分別是哪四顆星</li>
            <li>找出這四顆星分別坐在哪個宮位</li>
            <li>觀察這些宮位之間是否有三方四正的關聯</li>
            <li>用一句話描述這個能量流向的整體傾向</li>
          </ol>
          <p className="mt-2">
            例如：「化祿在官祿宮、化忌在財帛宮 → 事業上可能有機會，
            但收入方面需要特別注意理財方式。」
          </p>
        </Expandable>
      </section>

      {/* ===== Common Mistakes ===== */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" id="common-mistakes">
          常見解盤錯誤
        </h2>

        <div className="space-y-4">
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-sm mb-1">錯誤一：只看一顆星就下結論</p>
            <p className="text-sm text-muted">
              例如：「太陰在命宮，所以你很感性。」——
              但如果同宮有擎羊，或三方有七殺照入，表現可能完全不同。
              永遠要看整體配置。
            </p>
          </div>

          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-sm mb-1">錯誤二：把所有化忌都當成災難</p>
            <p className="text-sm text-muted">
              化忌代表執著和課題，但也可能是驅動成長的力量。
              很多成功人士的命盤中都有化忌在重要宮位——
              正因為在意，所以投入，最終可能有很大的成就。
            </p>
          </div>

          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-sm mb-1">錯誤三：忽略宮位之間的互動</p>
            <p className="text-sm text-muted">
              十二宮不是十二個獨立的房間，而是互相連結的系統。
              只逐宮分析而不看宮位之間的關係，等於只見樹不見林。
            </p>
          </div>

          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-sm mb-1">錯誤四：用現代職業名稱硬套古星名</p>
            <p className="text-sm text-muted">
              不要把「武曲」直接等同於「金融業」，也不要把「天機」等同於「工程師」。
              星曜描述的是一種能量特質和行為傾向，不是具體的職業或事件。
            </p>
          </div>

          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-sm mb-1">錯誤五：忽略命盤主人的實際背景</p>
            <p className="text-sm text-muted">
              同樣的命盤，在不同的時代、文化、環境下會有不同的展現方式。
              解盤時不能脫離實際情境，否則容易流於空泛。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Printable Summary ===== */}
      <section className="mt-16 mb-8">
        <h2 className="text-2xl font-bold mb-4" id="summary">
          解盤步驟速查表
        </h2>
        <p className="text-sm text-muted mb-4">
          以下是七個步驟的精簡摘要，方便隨時參考。
        </p>

        <div className="border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-surface-alt">
                  <th className="border-b border-border px-4 py-3 text-left w-16">步驟</th>
                  <th className="border-b border-border px-4 py-3 text-left w-32">名稱</th>
                  <th className="border-b border-border px-4 py-3 text-left">核心任務</th>
                  <th className="border-b border-border px-4 py-3 text-left">注意事項</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-border px-4 py-3 font-mono">1</td>
                  <td className="border-b border-border px-4 py-3 font-medium">看命宮</td>
                  <td className="border-b border-border px-4 py-3">辨識主星、輔煞星、四化</td>
                  <td className="border-b border-border px-4 py-3 text-muted">空宮需借對宮判斷</td>
                </tr>
                <tr className="bg-surface-alt/30">
                  <td className="border-b border-border px-4 py-3 font-mono">2</td>
                  <td className="border-b border-border px-4 py-3 font-medium">看主星</td>
                  <td className="border-b border-border px-4 py-3">掃描各宮主星分佈</td>
                  <td className="border-b border-border px-4 py-3 text-muted">留意廟旺利陷與雙星組合</td>
                </tr>
                <tr>
                  <td className="border-b border-border px-4 py-3 font-mono">3</td>
                  <td className="border-b border-border px-4 py-3 font-medium">看三方四正</td>
                  <td className="border-b border-border px-4 py-3">觀察對宮與三合宮的照入</td>
                  <td className="border-b border-border px-4 py-3 text-muted">不孤立判斷任何一宮</td>
                </tr>
                <tr className="bg-surface-alt/30">
                  <td className="border-b border-border px-4 py-3 font-mono">4</td>
                  <td className="border-b border-border px-4 py-3 font-medium">看四化</td>
                  <td className="border-b border-border px-4 py-3">找出四化落宮與能量方向</td>
                  <td className="border-b border-border px-4 py-3 text-muted">化忌 ≠ 壞事</td>
                </tr>
                <tr>
                  <td className="border-b border-border px-4 py-3 font-mono">5</td>
                  <td className="border-b border-border px-4 py-3 font-medium">看重點宮位</td>
                  <td className="border-b border-border px-4 py-3">針對問題聚焦關鍵宮位</td>
                  <td className="border-b border-border px-4 py-3 text-muted">搭配三方四正交叉觀察</td>
                </tr>
                <tr className="bg-surface-alt/30">
                  <td className="border-b border-border px-4 py-3 font-mono">6</td>
                  <td className="border-b border-border px-4 py-3 font-medium">整合敘述</td>
                  <td className="border-b border-border px-4 py-3">將觀察串聯成連貫故事</td>
                  <td className="border-b border-border px-4 py-3 text-muted">平衡正反、語言彈性</td>
                </tr>
                <tr>
                  <td className="border-b border-border px-4 py-3 font-mono">7</td>
                  <td className="border-b border-border px-4 py-3 font-medium">避免過度解讀</td>
                  <td className="border-b border-border px-4 py-3">檢視解讀是否武斷偏頗</td>
                  <td className="border-b border-border px-4 py-3 text-muted">命盤顯示傾向非宿命</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Callout type="info" title="最後提醒">
          <p>
            解盤是一門需要長期練習的技藝。不要期望看完這篇教學就能完美解盤。
            重要的是建立正確的思維框架和觀察習慣，然後透過大量的練習（包括下一章的練習案例）
            來逐步提升你的解盤能力。保持謙虛、保持好奇，是學好紫微斗數的關鍵心態。
          </p>
        </Callout>
      </section>

      <LessonNav currentPath="/chart-reading" />
    </>
  );
}
