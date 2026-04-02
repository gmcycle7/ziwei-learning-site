import Breadcrumb from '@/components/ui/Breadcrumb';
import Callout from '@/components/ui/Callout';
import LessonNav from '@/components/ui/LessonNav';
import Expandable from '@/components/ui/Expandable';

export const metadata = {
  title: '練習案例 — 紫微斗數學習平台',
  description: '透過三個虛構教學案例，練習解盤的觀察、推理與整合能力。',
};

export default function ExamplesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '練習案例' }]} />

      <h1 className="text-3xl font-bold mb-3">練習案例</h1>
      <p className="text-muted text-lg mb-6 leading-relaxed">
        學習解盤最好的方式就是實際練習。本頁提供三個虛構的教學案例，
        帶你一步步走過觀察、推理、整合的過程。每個案例都聚焦在不同的人生問題上，
        幫助你熟悉不同宮位的解讀方式。
      </p>

      <Callout type="warning" title="重要聲明">
        <p>
          以下所有案例均為虛構的教學範例，命盤配置皆為教學目的而設計。
          這些案例中的人物、情境、星曜配置都不是真實命盤，
          目的是幫助學習者練習解盤的思考流程。
          請勿將這些範例中的結論直接套用到真實命盤上。
        </p>
      </Callout>

      <Callout type="tip" title="建議學習方式">
        <p>
          閱讀每個案例時，建議你先自己看看命盤配置，
          試著用前面「解盤教學」學到的七個步驟來分析，
          寫下自己的觀察，然後再展開解析對照看看。
          這樣的主動練習會比純粹閱讀有效得多。
        </p>
      </Callout>

      {/* ===== Case 1: Career ===== */}
      <section className="mt-14">
        <div className="border-l-4 border-primary pl-4 mb-6">
          <h2 className="text-2xl font-bold mb-1">案例一：事業方向的困惑</h2>
          <p className="text-sm text-muted">
            重點宮位：命宮 + 官祿宮 + 四化
          </p>
        </div>

        <div className="bg-surface-alt/50 border border-border rounded-lg px-5 py-4 mb-6 text-sm">
          <p className="font-semibold text-red-500 mb-2">
            此為虛構教學範例，非真實命盤
          </p>
          <p className="leading-relaxed">
            <strong>虛構人物：</strong>小明，30歲，男性。目前在一間中型公司擔任行銷企劃，
            工作三年後感到發展受限，想知道自己的事業適性和未來方向。
          </p>
        </div>

        <h3 className="text-lg font-semibold mb-3">命盤配置（簡化描述）</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface-alt">
                <th className="border border-border px-4 py-2 text-left">宮位</th>
                <th className="border border-border px-4 py-2 text-left">主星</th>
                <th className="border border-border px-4 py-2 text-left">輔煞星</th>
                <th className="border border-border px-4 py-2 text-left">四化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">命宮（午）</td>
                <td className="border border-border px-4 py-2">天機星（廟）</td>
                <td className="border border-border px-4 py-2">文曲</td>
                <td className="border border-border px-4 py-2">—</td>
              </tr>
              <tr className="bg-surface-alt/50">
                <td className="border border-border px-4 py-2 font-medium">官祿宮（寅）</td>
                <td className="border border-border px-4 py-2">太陽星（廟）</td>
                <td className="border border-border px-4 py-2">左輔</td>
                <td className="border border-border px-4 py-2 font-medium text-green-600">化祿</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">財帛宮（戌）</td>
                <td className="border border-border px-4 py-2">天梁星</td>
                <td className="border border-border px-4 py-2">陀羅</td>
                <td className="border border-border px-4 py-2">—</td>
              </tr>
              <tr className="bg-surface-alt/50">
                <td className="border border-border px-4 py-2 font-medium">遷移宮（子）</td>
                <td className="border border-border px-4 py-2">巨門星</td>
                <td className="border border-border px-4 py-2">擎羊</td>
                <td className="border border-border px-4 py-2 font-medium text-red-500">化忌</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">夫妻宮（巳）</td>
                <td className="border border-border px-4 py-2">天同星</td>
                <td className="border border-border px-4 py-2">右弼</td>
                <td className="border border-border px-4 py-2 font-medium text-blue-500">化科</td>
              </tr>
              <tr className="bg-surface-alt/50">
                <td className="border border-border px-4 py-2 font-medium">福德宮（未）</td>
                <td className="border border-border px-4 py-2">武曲星</td>
                <td className="border border-border px-4 py-2">—</td>
                <td className="border border-border px-4 py-2 font-medium text-amber-600">化權</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mb-6">
          （以上僅列出與本案例分析相關的宮位，完整命盤共有十二宮。）
        </p>

        <h3 className="text-lg font-semibold mb-3">解盤示範</h3>

        <Expandable title="步驟一：觀察命宮" defaultOpen>
          <div className="space-y-2">
            <p>
              命宮在午宮，主星是天機星，且處於廟旺狀態。天機星的核心特質是
              思維敏捷、善於分析、喜歡變化。廟旺的天機，
              這些思維能力可能會有較完整的發揮。
            </p>
            <p>
              同宮有文曲星，文曲加強了藝術感和表達能力的傾向。
              結合天機的分析力和文曲的表達力，
              小明可能傾向於在需要「創意思考 + 文字表達」的領域有不錯的發展潛力。
            </p>
            <p className="text-muted italic">
              初步記錄：善分析、有創意、表達能力值得觀察。
            </p>
          </div>
        </Expandable>

        <Expandable title="步驟二：觀察官祿宮">
          <div className="space-y-2">
            <p>
              官祿宮是事業宮，在這個案例中主星是太陽星，且處於廟旺狀態。
              太陽星代表光明、外向、願意為他人付出的能量。
              太陽在官祿宮且廟旺，可能傾向於在需要對外展現、服務大眾的工作上有所表現。
            </p>
            <p>
              更重要的是，太陽在官祿宮有<strong>化祿</strong>。
              化祿代表這個宮位的能量傾向順暢、容易獲得資源和機會。
              太陽化祿在官祿宮，可能意味著在事業上傾向於有較多展現自我的機會，
              且在公開的、需要曝光度的工作環境中可能較為順利。
            </p>
            <p>
              輔星左輔的存在，進一步增加了在事業上可能獲得貴人相助的傾向。
            </p>
            <p className="text-muted italic">
              記錄：事業傾向外向型、有展現空間，化祿能量順暢。
            </p>
          </div>
        </Expandable>

        <Expandable title="步驟三：觀察三方四正">
          <div className="space-y-2">
            <p>
              以命宮為中心，三方四正包括：
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>對宮（遷移宮）：</strong>巨門星 + 擎羊 + 化忌</li>
              <li><strong>三合宮（財帛宮）：</strong>天梁星 + 陀羅</li>
              <li><strong>三合宮（官祿宮）：</strong>太陽星 + 左輔 + 化祿</li>
            </ul>
            <p className="mt-2">
              官祿宮方向是正面支持的能量（太陽化祿 + 左輔），
              但遷移宮的巨門化忌 + 擎羊則值得留意。巨門化忌在遷移宮，
              可能意味著在外出、與不熟悉的人互動、或開拓新環境時，
              容易在溝通上遇到挑戰或產生口舌紛爭的傾向。
            </p>
            <p>
              財帛宮的天梁 + 陀羅，天梁有穩健保守的傾向，
              而陀羅可能帶來一些拖延或猶豫的能量。
              在理財方面，小明可能傾向於保守但決斷力較慢。
            </p>
            <p className="text-muted italic">
              記錄：事業面有力支持，但對外溝通和理財面需留意。
            </p>
          </div>
        </Expandable>

        <Expandable title="步驟四：追蹤四化流向">
          <div className="space-y-2">
            <p>整理生年四化的分佈：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>化祿 →</strong> 太陽，在官祿宮 → 事業機會傾向順暢</li>
              <li><strong>化權 →</strong> 武曲，在福德宮 → 內心對實際成果和效率有強烈追求</li>
              <li><strong>化科 →</strong> 天同，在夫妻宮 → 感情關係上可能傾向平穩和諧</li>
              <li><strong>化忌 →</strong> 巨門，在遷移宮 → 外在環境的溝通可能是人生課題</li>
            </ul>
            <p className="mt-2">
              值得注意的是：化祿在官祿宮，化忌在遷移宮。
              這暗示事業本身的能量傾向正面，但在拓展新環境或對外接觸時需要特別留心溝通方式。
              對小明來說，可能「在熟悉的環境內發展」會比「頻繁跳槽或創業」來得順利。
            </p>
          </div>
        </Expandable>

        <Expandable title="步驟五：整合敘述">
          <div className="space-y-3">
            <p className="font-semibold">綜合分析：</p>
            <p>
              從整體命盤配置來看，小明的天機命宮加上太陽化祿在官祿宮，
              可能傾向於在需要分析能力和對外展現的工作中有所發揮。
              行銷企劃的工作方向與他的命盤傾向有一定的契合度——
              既需要創意思考（天機），也需要對外推廣（太陽）。
            </p>
            <p>
              他感到「發展受限」的原因，可能與遷移宮巨門化忌有關。
              在需要拓展新客戶或進入不熟悉的領域時，
              溝通上的挑戰可能讓他感到受挫。
              但這不代表他不適合現在的工作方向，
              而是提醒他可以在溝通技巧上投入更多練習。
            </p>
            <p>
              福德宮武曲化權顯示，他的內心深處可能傾向追求實際的成果和效率。
              如果目前的工作環境無法讓他看到明確的成果回饋，
              可能也是感到不滿足的原因之一。
            </p>
            <p className="font-semibold mt-3">建設性觀察：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>目前的工作方向與命盤傾向有一定契合度，不一定需要大幅轉向</li>
              <li>可以考慮在現有領域中尋找更能展現分析和表達能力的角色</li>
              <li>溝通技巧的提升可能是突破發展瓶頸的關鍵</li>
              <li>選擇能看到具體成果的工作模式，可能更符合內心的需求</li>
            </ul>
          </div>
        </Expandable>

        <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-5">
          <h4 className="font-bold mb-2">學習重點</h4>
          <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
            <li>
              <strong>觀察的方法：</strong>
              從命宮開始，逐步擴展到官祿宮和三方四正，
              不急著下結論，先收集完資訊再整合。
            </li>
            <li>
              <strong>推理的邏輯：</strong>
              把星曜特質和宮位含義結合，用「可能傾向於」的語言來描述，
              而不是「一定會」。
            </li>
            <li>
              <strong>整合的原則：</strong>
              找到重複出現的主題（這個案例中是「分析 + 表達 + 對外」），
              同時指出需要留意的面向（溝通挑戰），給出平衡的觀點。
            </li>
            <li>
              <strong>避免的陷阱：</strong>
              不要因為遷移宮有化忌就說「不適合出去闖」，
              也不要因為官祿宮有化祿就說「事業一定成功」——
              命盤顯示的是傾向和需要留意的方向。
            </li>
          </ul>
        </div>
      </section>

      {/* ===== Case 2: Relationships ===== */}
      <section className="mt-16">
        <div className="border-l-4 border-primary pl-4 mb-6">
          <h2 className="text-2xl font-bold mb-1">案例二：感情關係的疑惑</h2>
          <p className="text-sm text-muted">
            重點宮位：夫妻宮 + 命宮 + 福德宮
          </p>
        </div>

        <div className="bg-surface-alt/50 border border-border rounded-lg px-5 py-4 mb-6 text-sm">
          <p className="font-semibold text-red-500 mb-2">
            此為虛構教學範例，非真實命盤
          </p>
          <p className="leading-relaxed">
            <strong>虛構人物：</strong>小華，28歲，女性。目前單身，
            曾有幾段感情但都無法長久維持，想了解自己在感情上的傾向和需要留意的地方。
          </p>
        </div>

        <h3 className="text-lg font-semibold mb-3">命盤配置（簡化描述）</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface-alt">
                <th className="border border-border px-4 py-2 text-left">宮位</th>
                <th className="border border-border px-4 py-2 text-left">主星</th>
                <th className="border border-border px-4 py-2 text-left">輔煞星</th>
                <th className="border border-border px-4 py-2 text-left">四化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">命宮（卯）</td>
                <td className="border border-border px-4 py-2">七殺星（旺）</td>
                <td className="border border-border px-4 py-2">文昌</td>
                <td className="border border-border px-4 py-2 font-medium text-amber-600">化權</td>
              </tr>
              <tr className="bg-surface-alt/50">
                <td className="border border-border px-4 py-2 font-medium">夫妻宮（寅）</td>
                <td className="border border-border px-4 py-2">太陰星（陷）</td>
                <td className="border border-border px-4 py-2">火星</td>
                <td className="border border-border px-4 py-2 font-medium text-red-500">化忌</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">福德宮（辰）</td>
                <td className="border border-border px-4 py-2">天府星（廟）</td>
                <td className="border border-border px-4 py-2">天魁</td>
                <td className="border border-border px-4 py-2">—</td>
              </tr>
              <tr className="bg-surface-alt/50">
                <td className="border border-border px-4 py-2 font-medium">遷移宮（酉）</td>
                <td className="border border-border px-4 py-2">天府星（旺）</td>
                <td className="border border-border px-4 py-2">—</td>
                <td className="border border-border px-4 py-2">—</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">官祿宮（亥）</td>
                <td className="border border-border px-4 py-2">廉貞星、天相星</td>
                <td className="border border-border px-4 py-2">右弼</td>
                <td className="border border-border px-4 py-2 font-medium text-green-600">化祿</td>
              </tr>
              <tr className="bg-surface-alt/50">
                <td className="border border-border px-4 py-2 font-medium">交友宮（申）</td>
                <td className="border border-border px-4 py-2">貪狼星</td>
                <td className="border border-border px-4 py-2">鈴星</td>
                <td className="border border-border px-4 py-2 font-medium text-blue-500">化科</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mb-6">
          （以上僅列出與本案例分析相關的宮位，完整命盤共有十二宮。）
        </p>

        <h3 className="text-lg font-semibold mb-3">解盤示範</h3>

        <Expandable title="步驟一：觀察命宮的感情傾向" defaultOpen>
          <div className="space-y-2">
            <p>
              小華的命宮主星是七殺星，且有化權。七殺星的核心特質是
              獨立、果斷、行動力強、不喜歡被束縛。加上化權，
              這種自主和掌控的傾向會更加明顯。
            </p>
            <p>
              在感情脈絡中，這意味著小華可能傾向於：
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>對伴侶有較高的自我期許，不容易妥協</li>
              <li>在關係中傾向掌握主導權</li>
              <li>可能不太能接受過度的依賴或被依賴</li>
              <li>對感情的態度可能較為「要不然就在一起，不然就分開」</li>
            </ul>
            <p>
              文昌同宮增添了一些細膩和表達的能力，
              但七殺化權的強勢傾向仍然是主基調。
            </p>
            <p className="text-muted italic">
              記錄：獨立自主、掌控欲強、不容易妥協。
            </p>
          </div>
        </Expandable>

        <Expandable title="步驟二：觀察夫妻宮">
          <div className="space-y-2">
            <p>
              夫妻宮的主星是太陰星，但處於陷地。太陰星在夫妻宮代表對感情有
              細膩、浪漫、情感豐富的期待。然而陷地的太陰，
              這些情感表達可能無法如預期般順暢。
            </p>
            <p>
              更值得留意的是，太陰在這裡有<strong>化忌</strong>，
              同時還有煞星火星同宮。太陰化忌在夫妻宮，可能的傾向是：
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>對感情投入很深的情感，但容易因為期望過高而感到失望</li>
              <li>可能傾向於過度擔心或不安全感</li>
              <li>在感情中可能反覆思考「對方是不是真的愛我」</li>
              <li>火星的加入增加了情緒起伏的速度和強度</li>
            </ul>
            <p className="text-muted italic">
              記錄：感情期望高、容易不安、情緒起伏傾向明顯。
            </p>
          </div>
        </Expandable>

        <Expandable title="步驟三：觀察福德宮——內心世界">
          <div className="space-y-2">
            <p>
              福德宮是觀察內心世界和精神狀態的重要宮位。
              小華的福德宮主星是天府星（廟），且有天魁星。
            </p>
            <p>
              天府在福德宮且廟旺，顯示她的內心其實渴望穩定和安全感。
              天魁是貴人星，在福德宮可能代表在精神層面傾向於有貴人指引的機緣。
            </p>
            <p>
              這裡出現了一個有趣的「對比」：
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>命宮七殺化權：外在表現獨立、強勢、不需要依賴</li>
              <li>福德宮天府：內心其實渴望穩定、安全、被好好對待</li>
            </ul>
            <p>
              這種「外強內柔」的落差，可能是她在感情中感到矛盾的根源之一。
              她可能在關係中表現得很獨立，但內心其實非常在意對方的態度，
              卻不容易表達出脆弱的一面。
            </p>
          </div>
        </Expandable>

        <Expandable title="步驟四：整合敘述與觀察">
          <div className="space-y-3">
            <p className="font-semibold">綜合分析：</p>
            <p>
              小華的命盤在感情方面呈現出一個明顯的內外拉鋏：
              外在的獨立強勢（七殺化權）和內心對安全感的渴望（天府福德宮），
              再加上夫妻宮太陰化忌的深度情感投入和不安全感，
              形成了一個複雜但可以理解的情感模式。
            </p>
            <p>
              她過去感情無法長久的可能原因，不一定是「命中注定」，
              而可能與以下傾向有關：
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>在關係初期展現獨立姿態，對方可能感受不到被需要</li>
              <li>當感情深入後，內心的不安全感可能突然湧現，造成落差</li>
              <li>太陰化忌的傾向讓她可能對感情有過高的理想化期待</li>
              <li>火星加速了情緒的爆發，可能在衝突時反應過於激烈</li>
            </ul>

            <p className="font-semibold mt-3">建設性觀察：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>了解自己「外強內柔」的特質，學習適當地表達內心的需求</li>
              <li>對感情的期望值得適度調整——完美的關係不存在，但健康的關係是可以經營的</li>
              <li>情緒管理可能是感情關係中值得投入練習的領域</li>
              <li>交友宮貪狼化科顯示，她在社交場合可能有不錯的魅力，
                認識新對象的機會傾向不少，問題不在於「遇不到人」而是「如何經營」</li>
            </ul>
          </div>
        </Expandable>

        <Callout type="warning" title="解讀時的注意事項">
          <p>
            看到夫妻宮有化忌和煞星時，千萬不要直接說「你注定感情不順」。
            化忌代表的是需要面對的課題，不是不可改變的宿命。
            很多夫妻宮有化忌的人，最終都能建立深厚的感情關係——
            正因為在意，所以願意投入和學習。
          </p>
        </Callout>

        <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-5">
          <h4 className="font-bold mb-2">學習重點</h4>
          <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
            <li>
              <strong>多宮位交叉觀察：</strong>
              感情問題不能只看夫妻宮，命宮的性格傾向和福德宮的內心需求同樣重要。
              這三個宮位的互動關係，往往比單看夫妻宮更能揭示感情模式。
            </li>
            <li>
              <strong>對比法的運用：</strong>
              發現命宮和福德宮的「對比」是本案例最有價值的觀察。
              命盤中的矛盾往往不是「錯誤」，而是理解一個人複雜內心的入口。
            </li>
            <li>
              <strong>化忌的正面詮釋：</strong>
              化忌不只是「問題」，也是「在意」和「投入」的標記。
              好的解盤會同時呈現挑戰和成長的可能性。
            </li>
            <li>
              <strong>避免性別刻板印象：</strong>
              不要因為是女性命盤就強調「要溫柔」或「太強勢不好嫁」。
              命盤的解讀應該中性客觀，不帶預設的性別期待。
            </li>
          </ul>
        </div>
      </section>

      {/* ===== Case 3: Wealth ===== */}
      <section className="mt-16">
        <div className="border-l-4 border-primary pl-4 mb-6">
          <h2 className="text-2xl font-bold mb-1">案例三：財富潛力的探索</h2>
          <p className="text-sm text-muted">
            重點宮位：財帛宮 + 官祿宮 + 田宅宮
          </p>
        </div>

        <div className="bg-surface-alt/50 border border-border rounded-lg px-5 py-4 mb-6 text-sm">
          <p className="font-semibold text-red-500 mb-2">
            此為虛構教學範例，非真實命盤
          </p>
          <p className="leading-relaxed">
            <strong>虛構人物：</strong>阿德，35歲，男性。在科技公司擔任工程師，
            收入穩定但想了解自己是否有創業或投資的潛力，
            以及在財富管理方面需要留意什麼。
          </p>
        </div>

        <h3 className="text-lg font-semibold mb-3">命盤配置（簡化描述）</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface-alt">
                <th className="border border-border px-4 py-2 text-left">宮位</th>
                <th className="border border-border px-4 py-2 text-left">主星</th>
                <th className="border border-border px-4 py-2 text-left">輔煞星</th>
                <th className="border border-border px-4 py-2 text-left">四化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">命宮（辰）</td>
                <td className="border border-border px-4 py-2">紫微星、天府星（廟）</td>
                <td className="border border-border px-4 py-2">左輔</td>
                <td className="border border-border px-4 py-2">—</td>
              </tr>
              <tr className="bg-surface-alt/50">
                <td className="border border-border px-4 py-2 font-medium">財帛宮（申）</td>
                <td className="border border-border px-4 py-2">武曲星（廟）、貪狼星</td>
                <td className="border border-border px-4 py-2">文昌</td>
                <td className="border border-border px-4 py-2 font-medium text-green-600">化祿（武曲）</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">官祿宮（子）</td>
                <td className="border border-border px-4 py-2">天相星</td>
                <td className="border border-border px-4 py-2">天鉞</td>
                <td className="border border-border px-4 py-2 font-medium text-blue-500">化科</td>
              </tr>
              <tr className="bg-surface-alt/50">
                <td className="border border-border px-4 py-2 font-medium">田宅宮（午）</td>
                <td className="border border-border px-4 py-2">太陽星（旺）</td>
                <td className="border border-border px-4 py-2">擎羊</td>
                <td className="border border-border px-4 py-2 font-medium text-red-500">化忌</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">福德宮（巳）</td>
                <td className="border border-border px-4 py-2">天同星</td>
                <td className="border border-border px-4 py-2">陀羅</td>
                <td className="border border-border px-4 py-2 font-medium text-amber-600">化權</td>
              </tr>
              <tr className="bg-surface-alt/50">
                <td className="border border-border px-4 py-2 font-medium">遷移宮（戌）</td>
                <td className="border border-border px-4 py-2">（空宮，借對宮紫微天府）</td>
                <td className="border border-border px-4 py-2">—</td>
                <td className="border border-border px-4 py-2">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mb-6">
          （以上僅列出與本案例分析相關的宮位，完整命盤共有十二宮。）
        </p>

        <h3 className="text-lg font-semibold mb-3">解盤示範</h3>

        <Expandable title="步驟一：觀察財帛宮——理財傾向" defaultOpen>
          <div className="space-y-2">
            <p>
              財帛宮是觀察一個人理財模式和金錢態度的核心宮位。
              阿德的財帛宮有武曲星（廟）和貪狼星同宮，且武曲有化祿。
            </p>
            <p>
              <strong>武曲星</strong>是紫微斗數中最直接與財富相關的主星。
              武曲的特質是務實、重效率、有財務敏感度。
              廟旺的武曲化祿在財帛宮，這是一個在財務方面傾向正面的配置——
              可能代表有較好的賺錢能力和財務直覺。
            </p>
            <p>
              <strong>貪狼星</strong>同宮，貪狼帶來多才多藝和慾望強烈的能量。
              武曲貪狼同宮的組合（俗稱「武貪」），傾向於在追求實際利益方面有較強的動力，
              但也可能帶有一些投機的傾向。
            </p>
            <p>
              文昌同宮，增加了在財務分析和計算方面的細膩度。
            </p>
            <p className="text-muted italic">
              記錄：理財能力傾向不錯，化祿加持，但武貪組合需留意投機傾向。
            </p>
          </div>
        </Expandable>

        <Expandable title="步驟二：觀察官祿宮——賺錢方式">
          <div className="space-y-2">
            <p>
              官祿宮顯示一個人傾向的工作方式和事業模式，
              這直接影響「錢從哪裡來」。阿德的官祿宮是天相星加上天鉞星，且有化科。
            </p>
            <p>
              <strong>天相星</strong>的特質是輔佐、配合、注重制度和規範。
              天相在官祿宮，可能傾向於在有組織架構的環境中工作較為順利，
              例如大公司或有明確分工的團隊。
            </p>
            <p>
              天相<strong>化科</strong>，在事業上可能傾向於因為專業能力和口碑而獲得認可。
              天鉞是貴人星，在官祿宮可能代表在事業上傾向有上司或前輩的提拔。
            </p>
            <p>
              值得注意的是：天相的「配合」特質和創業所需的「開創」精神之間存在落差。
              這不是說阿德不能創業，而是如果創業，他可能更適合「合夥」的模式，
              而非獨立創業。
            </p>
            <p className="text-muted italic">
              記錄：適合有架構的環境，專業型發展，創業傾向合夥優於獨創。
            </p>
          </div>
        </Expandable>

        <Expandable title="步驟三：觀察田宅宮——資產與根基">
          <div className="space-y-2">
            <p>
              田宅宮不只代表房產，更廣義地代表一個人的資產根基、家庭環境、
              以及長期的財富積累方式。阿德的田宅宮是太陽星（旺），但有擎羊和化忌。
            </p>
            <p>
              太陽在田宅宮本身的含義是「家中可能有發光發熱的能量」，
              但<strong>化忌加上擎羊</strong>的組合，值得特別留意：
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>在置產方面可能傾向於投入大量精力和金錢，但過程不一定順暢</li>
              <li>房產或固定資產可能是需要特別謹慎的領域</li>
              <li>家庭或家族相關的財務問題值得留意</li>
              <li>太陽化忌也可能意味著「付出多但回報不如預期」的傾向</li>
            </ul>
            <p>
              這是整張命盤在財富面的一個重要提醒：
              財帛宮雖然配置不錯，但田宅宮的化忌提醒我們，
              「賺錢的能力」和「守財的能力」是兩回事。
            </p>
          </div>
        </Expandable>

        <Expandable title="步驟四：觀察三方四正與四化流向">
          <div className="space-y-2">
            <p>以財帛宮為中心的三方四正：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>對宮（福德宮）：</strong>天同星 + 陀羅 + 化權</li>
              <li><strong>三合宮（命宮）：</strong>紫微天府 + 左輔</li>
              <li><strong>三合宮（官祿宮）：</strong>天相星 + 天鉞 + 化科</li>
            </ul>
            <p className="mt-2">
              三方四正的配置相當正面：命宮紫微天府提供了穩健的格局，
              官祿宮天相化科提供了專業的支撐。
              但福德宮天同化權 + 陀羅值得注意——
              天同本質享受安逸，化權卻推動他追求掌控，
              陀羅帶來猶豫。這種組合可能意味著：
              他內心在「享受現狀」和「追求更多」之間拉鋏。
            </p>

            <p className="mt-3 font-semibold">四化流向整理：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>化祿（武曲）→ 財帛宮：財務面傾向正面</li>
              <li>化權（天同）→ 福德宮：內心對精神滿足有掌控需求</li>
              <li>化科（天相）→ 官祿宮：事業聲譽傾向正面</li>
              <li>化忌（太陽）→ 田宅宮：固定資產面需要留意</li>
            </ul>
            <p>
              四化的分佈呈現出「動態收入不錯，但固定資產需謹慎」的整體傾向。
            </p>
          </div>
        </Expandable>

        <Expandable title="步驟五：整合敘述">
          <div className="space-y-3">
            <p className="font-semibold">綜合分析：</p>
            <p>
              從整體配置來看，阿德在財務方面有不錯的基礎條件：
              命宮紫微天府的穩健格局加上財帛宮武曲化祿的賺錢潛力，
              構成了一個財務基調傾向正面的命盤。
            </p>
            <p>
              在工作方式上，官祿宮天相化科 + 天鉞的配置，
              顯示他在有組織的專業環境中可能更能發揮所長。
              目前在科技公司擔任工程師的工作方式，
              與命盤的傾向是有一定契合度的。
            </p>
            <p>
              至於創業的問題，命盤顯示的傾向是：
              不是不能創業，但可能更適合「技術合夥人」而非「獨立創業者」的角色。
              如果要創業，找一個互補的合作夥伴可能是值得考慮的策略。
            </p>
            <p>
              投資方面，武曲貪狼在財帛宮顯示有一定的投機傾向和財務敏感度，
              但田宅宮太陽化忌 + 擎羊的警示不應忽略。
              在房產或固定資產的投資上，建議保持特別的謹慎。
              「能賺」不等於「能守」，理財規劃和風險管理可能是阿德需要特別學習的課題。
            </p>

            <p className="font-semibold mt-3">建設性觀察：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>現有的工作模式（專業技術 + 有組織架構）與命盤傾向有良好的契合度</li>
              <li>賺錢能力的傾向不錯，但需要同時培養理財和風險管理的意識</li>
              <li>如果考慮創業，合夥模式可能優於獨立創業</li>
              <li>房產投資需要格外謹慎，建議多做功課、避免衝動決定</li>
              <li>內心可能在「穩定」和「追求更多」之間掙扎，這個掙扎本身是正常的</li>
            </ul>
          </div>
        </Expandable>

        <Callout type="warning" title="財富解讀的倫理提醒">
          <p>
            看到財帛宮配置好就說「你會發大財」，或看到化忌就說「你會破產」，
            都是不負責任的解讀方式。財富的實現涉及個人努力、時機、環境等眾多因素。
            命盤能告訴我們的是傾向和值得留意的方向，不是確定的結果。
            負責任的解盤者永遠不會用命盤來推銷投資或嚇唬客戶。
          </p>
        </Callout>

        <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-5">
          <h4 className="font-bold mb-2">學習重點</h4>
          <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
            <li>
              <strong>財富問題的多宮觀察：</strong>
              財帛宮看理財傾向、官祿宮看賺錢方式、田宅宮看資產積累。
              三個宮位缺一不可，才能看到完整的財務圖景。
            </li>
            <li>
              <strong>四化流向的整體解讀：</strong>
              不要孤立地看每個化星，而是把四顆化星的分佈連成一個整體故事。
              本案例中「動態收入好、固定資產需謹慎」就是四化流向的整體敘述。
            </li>
            <li>
              <strong>武貪組合的觀察：</strong>
              武曲貪狼同宮是一個經典組合，既有務實的賺錢能力，
              也有投機的傾向。解讀時需要兩面都提到，不能只說好或只說壞。
            </li>
            <li>
              <strong>建設性語言的運用：</strong>
              與其說「你不適合買房」，不如說「在房產方面值得格外謹慎」。
              前者是斷定，後者是提醒——好的解盤提供方向，而非限制。
            </li>
          </ul>
        </div>
      </section>

      {/* ===== Summary Section ===== */}
      <section className="mt-16 mb-8">
        <h2 className="text-2xl font-bold mb-4">三個案例的共通啟示</h2>
        <div className="border border-border rounded-lg p-6 space-y-4 text-sm leading-relaxed">
          <div>
            <p className="font-semibold mb-1">一、解盤是系統性的觀察，不是片段式的判斷</p>
            <p className="text-muted">
              每個案例都示範了從多個宮位收集資訊、然後整合成故事的過程。
              單看一個宮位或一顆星就下結論，是初學者最常見的錯誤。
            </p>
          </div>
          <div>
            <p className="font-semibold mb-1">二、化忌是課題，不是災難</p>
            <p className="text-muted">
              三個案例中都有化忌出現在重要宮位。每次我們都示範了如何在不製造恐懼的前提下，
              客觀地指出化忌代表的課題和可能的成長方向。
            </p>
          </div>
          <div>
            <p className="font-semibold mb-1">三、命盤中的「矛盾」是理解的入口</p>
            <p className="text-muted">
              案例二中命宮和福德宮的對比、案例三中財帛宮和田宅宮的反差，
              都是命盤中最有洞察力的觀察點。不要害怕矛盾，
              而是把它當作理解一個人複雜性的鑰匙。
            </p>
          </div>
          <div>
            <p className="font-semibold mb-1">四、語言的力量比技術更重要</p>
            <p className="text-muted">
              你如何表達觀察結果，比你觀察到什麼更重要。
              用「傾向」「可能」「值得留意」取代「一定」「注定」「必然」——
              這不是模糊不清，而是對命盤複雜性和個人自由意志的尊重。
            </p>
          </div>
        </div>

        <Callout type="info" title="繼續練習">
          <p>
            看完這三個案例後，建議你找幾張練習用的命盤（可以用自己或朋友的盤，徵得同意後），
            按照解盤教學的七個步驟實際走一遍。
            剛開始可能會覺得很慢、很不確定，這是完全正常的。
            持續練習，你會逐漸建立自己的解盤節奏和直覺。
          </p>
        </Callout>
      </section>

      <LessonNav currentPath="/examples" />
    </>
  );
}
