import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Callout from '@/components/ui/Callout';
import LessonNav from '@/components/ui/LessonNav';
import Expandable from '@/components/ui/Expandable';
import FlashCard from '@/components/ui/FlashCard';

export const metadata: Metadata = {
  title: '輔星與煞星 — 紫微斗數學習',
  description: '認識紫微斗數中的六吉星、四煞星、空曜與其他重要輔星，了解它們如何修飾主星的力量。',
};

export default function SupportingStarsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '輔星與煞星' }]} />

      <h1 className="text-3xl font-bold mb-2">輔星與煞星</h1>
      <p className="text-muted text-lg mb-8">
        主星決定格局方向，輔星與煞星則修飾力量的強弱與表現方式。
      </p>

      {/* ===== 什麼是輔星與煞星 ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">什麼是輔星與煞星？</h2>
        <p className="mb-4 leading-relaxed">
          在紫微斗數的星曜體系中，十四主星是命盤的骨架，決定了一個人的核心特質與人生大方向。但僅憑主星，不足以描述人生的複雜性。輔星與煞星就像是畫作上的色彩和紋理——它們不會改變構圖，但會極大地影響整幅作品的質感。
        </p>
        <p className="mb-4 leading-relaxed">
          「輔星」（又稱「吉星」）為命盤帶來助力、順遂與貴人緣；「煞星」則帶來挑戰、波折與考驗。然而，吉星不一定全然是好的，煞星也不一定全然是壞的——它們的表現取決於所在的宮位、搭配的主星，以及整體命盤的格局。
        </p>

        <Callout type="tip" title="核心觀念">
          <p>
            輔星與煞星的角色是「修飾」而非「定義」。它們調整主星的力量強度與表現方式，但不會完全改變主星的本質。把主星想成一個人的性格核心，輔星就像他的際遇和環境——環境好時能力更容易發揮，環境差時需要更多努力克服。
          </p>
        </Callout>
      </section>

      {/* ===== 六吉星 ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">六吉星（六輔星）</h2>
        <p className="mb-6 leading-relaxed">
          六吉星是命盤中帶來正面能量的星曜，它們各有不同的助力方式。六吉星可分為三組對星：
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-surface-alt">
                <th className="px-4 py-3 text-left font-semibold border-b border-border">分組</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">星曜</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">核心意涵</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">助力方式</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium" rowSpan={2}>助力對星</td>
                <td className="px-4 py-3 font-medium">左輔</td>
                <td className="px-4 py-3">實質幫助、做事有人協助</td>
                <td className="px-4 py-3">帶來具體的助力和人手</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">右弼</td>
                <td className="px-4 py-3">暗中相助、柔性支持</td>
                <td className="px-4 py-3">帶來間接的扶持和化解</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium" rowSpan={2}>文才對星</td>
                <td className="px-4 py-3 font-medium">文昌</td>
                <td className="px-4 py-3">正統學問、文書、考試</td>
                <td className="px-4 py-3">增加思路清晰、學業順利</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">文曲</td>
                <td className="px-4 py-3">才藝、口才、藝術天分</td>
                <td className="px-4 py-3">增加表達能力與藝文天賦</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium" rowSpan={2}>貴人對星</td>
                <td className="px-4 py-3 font-medium">天魁</td>
                <td className="px-4 py-3">陽貴人、男性長輩提攜</td>
                <td className="px-4 py-3">明顯的貴人運、機會出現</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">天鉞</td>
                <td className="px-4 py-3">陰貴人、女性或暗中相助</td>
                <td className="px-4 py-3">逢凶化吉、暗中得助</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 左輔右弼 */}
        <h3 className="text-xl font-semibold mb-3">左輔、右弼 — 助力對星</h3>
        <p className="mb-4 leading-relaxed">
          左輔與右弼是最直接的「幫手星」。左輔偏向明面上的協助，比如工作上有得力的同事、事業上有合夥人願意分擔；右弼偏向暗中或柔性的助力，比如遇到困難時有人悄悄幫你打點、化解障礙。
        </p>
        <p className="mb-4 leading-relaxed">
          兩顆星若同時出現在命宮或命宮的三方四正，表示此人一生中容易得到他人幫助，做事往往有人願意支持配合。但需要注意的是，左輔右弼也有「多情」的一面——若在夫妻宮出現，有時反而暗示感情上容易有第三者介入的可能。
        </p>

        <Expandable title="左輔右弼的細微差異">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>左輔</strong>：五行屬土，象徵穩定踏實的助力。更傾向「有人幫你做事」的實際支援。</li>
            <li><strong>右弼</strong>：五行屬水，象徵靈活柔軟的助力。更傾向「有人幫你化解」的間接幫忙。</li>
            <li>兩者都是助力星，但左輔偏向「陽」的幫助（看得見的），右弼偏向「陰」的幫助（暗中的）。</li>
            <li>在古書中，左輔右弼被視為紫微帝星的左右手，象徵朝廷中的宰相與輔臣。</li>
          </ul>
        </Expandable>

        {/* 文昌文曲 */}
        <h3 className="text-xl font-semibold mb-3 mt-8">文昌、文曲 — 文才對星</h3>
        <p className="mb-4 leading-relaxed">
          文昌與文曲都與「文」相關，但側重點不同。文昌偏向正統的學問、文書處理、考試運，強調的是邏輯性、條理性的文才；文曲則偏向藝術性、創意性的才華，包括口才、音樂、表演等較感性的表達能力。
        </p>
        <p className="mb-4 leading-relaxed">
          在現代社會，文昌的作用常見於學業考試、公務文書、合約處理等需要嚴謹文字能力的場合；文曲則常見於藝術創作、演藝表演、溝通談判等需要感性表達的場合。
        </p>

        <Callout type="info" title="文昌與文曲的比較">
          <p>
            文昌像是一位嚴謹的學者，善於撰寫論文和報告；文曲像是一位感性的藝術家，善於創作與表達。兩者都是才華，只是表現的方式不同。
          </p>
        </Callout>

        {/* 天魁天鉞 */}
        <h3 className="text-xl font-semibold mb-3 mt-8">天魁、天鉞 — 貴人對星</h3>
        <p className="mb-4 leading-relaxed">
          天魁與天鉞是紫微斗數中最明確的「貴人星」。天魁為陽貴人，通常代表公開的提攜、長輩的賞識、上司的重用，多半是明面上可見的貴人緣；天鉞為陰貴人，通常代表暗中的相助、逢凶化吉、在危急時刻有人伸出援手。
        </p>
        <p className="mb-4 leading-relaxed">
          命盤中有天魁或天鉞的人，一生中比較容易在關鍵時刻遇到貴人。如果兩顆同時出現在三方四正，古書稱為「坐貴向貴」，是很好的格局。不過，貴人星的力量也需要自身具備一定的能力才能真正發揮——貴人會幫助有準備的人。
        </p>
      </section>

      {/* ===== 四煞星 ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">四煞星</h2>
        <p className="mb-6 leading-relaxed">
          四煞星是命盤中帶來挑戰和波折的星曜。它們的存在並非全然負面——煞星可以磨練意志、激發潛能，甚至在某些格局中成為成功的推動力。關鍵在於如何與主星搭配以及落在什麼宮位。
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-surface-alt">
                <th className="px-4 py-3 text-left font-semibold border-b border-border">分組</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">星曜</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">五行</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">核心意涵</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">挑戰表現</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium" rowSpan={2}>刑忌對星</td>
                <td className="px-4 py-3 font-medium">擎羊</td>
                <td className="px-4 py-3">金</td>
                <td className="px-4 py-3">剛烈衝突、競爭鬥爭</td>
                <td className="px-4 py-3">人際摩擦、爭鬥、開刀血光</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">陀羅</td>
                <td className="px-4 py-3">金</td>
                <td className="px-4 py-3">糾纏拖延、反覆困頓</td>
                <td className="px-4 py-3">事情拖延、心結難解、鑽牛角尖</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium" rowSpan={2}>火鈴對星</td>
                <td className="px-4 py-3 font-medium">火星</td>
                <td className="px-4 py-3">火</td>
                <td className="px-4 py-3">急躁暴烈、突發狀況</td>
                <td className="px-4 py-3">脾氣急躁、意外事件、暴起暴落</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">鈴星</td>
                <td className="px-4 py-3">火</td>
                <td className="px-4 py-3">壓抑悶燒、暗中焦慮</td>
                <td className="px-4 py-3">悶悶不樂、隱藏的壓力、突然爆發</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 擎羊陀羅 */}
        <h3 className="text-xl font-semibold mb-3">擎羊、陀羅 — 刑忌對星</h3>
        <p className="mb-4 leading-relaxed">
          擎羊與陀羅都屬金，帶有「剛硬」的能量，但表現方式截然不同。擎羊像一把利刃，力量外顯、直接、猛烈——它帶來的挑戰通常是明面上的衝突，比如人際關係中的口角、職場上的競爭對手、甚至身體上的開刀或受傷。
        </p>
        <p className="mb-4 leading-relaxed">
          陀羅則像一團纏繞的繩索，力量內斂、糾纏、反覆——它帶來的挑戰通常是內心的困頓，比如事情一拖再拖、反覆猶豫難以下決定、對某件事情放不下而持續糾結。
        </p>

        <Callout type="tip" title="煞星的正面力量">
          <p>
            擎羊雖為煞星，但在某些格局中反而能成就大事。例如「擎羊入廟」（在特定地支位置）時，擎羊的剛烈之氣反而成為破除困難的力量，讓人有勇氣面對挑戰，敢於競爭。很多成功者的命盤中並非沒有煞星，而是善用了煞星的能量。
          </p>
        </Callout>

        {/* 火星鈴星 */}
        <h3 className="text-xl font-semibold mb-3 mt-8">火星、鈴星 — 火鈴對星</h3>
        <p className="mb-4 leading-relaxed">
          火星與鈴星都屬火，帶有急躁和爆發的能量。火星的表現是外顯的——脾氣暴躁、做事衝動、容易與人起衝突，但也代表行動力強、反應快速、能在短時間內爆發巨大能量。
        </p>
        <p className="mb-4 leading-relaxed">
          鈴星的表現則較為內斂——悶燒式的壓力、表面平靜但內心焦慮、長期壓抑後突然爆發。鈴星的人可能表面看不出煩惱，但內心其實一直在翻攪，到了臨界點才會一次性地釋放出來。
        </p>

        <Expandable title="火星鈴星與貪狼的特殊組合">
          <p className="mb-2">
            在紫微斗數中，有一個著名的格局叫「火貪格」或「鈴貪格」——火星或鈴星與貪狼同宮或會照。這個格局非但不是負面的，反而代表一種突然暴發的機會。
          </p>
          <p className="mb-2">
            貪狼本身有慾望和衝勁，加上火星或鈴星的爆發力，可以在某個時間點突然崛起，創造出意料之外的成就。這就是煞星在特定組合中反而成為助力的典型例子。
          </p>
          <p>
            不過，「暴起」往往也伴隨「暴落」的風險。這類格局的人需要在成功後懂得收斂和穩固，否則可能像煙火般短暫燦爛。
          </p>
        </Expandable>
      </section>

      {/* ===== 空曜 ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">空曜：地空、地劫</h2>
        <p className="mb-4 leading-relaxed">
          地空與地劫是紫微斗數中比較特殊的星曜，它們不屬於傳統的吉星或煞星分類，而是帶有「虛空」與「損耗」的特質。在某些流派中被歸類為煞星，但它們的作用方式與四煞星截然不同。
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-surface-alt">
                <th className="px-4 py-3 text-left font-semibold border-b border-border">星曜</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">核心意涵</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">影響層面</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">正面解讀</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">地空</td>
                <td className="px-4 py-3">空想、虛無、不切實際</td>
                <td className="px-4 py-3">對物質的追求容易落空</td>
                <td className="px-4 py-3">想像力豐富、有哲學或靈性傾向</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">地劫</td>
                <td className="px-4 py-3">損失、劫奪、突然失去</td>
                <td className="px-4 py-3">財物或機會容易有意外損耗</td>
                <td className="px-4 py-3">看破物質、對精神層面更敏銳</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-4 leading-relaxed">
          地空讓人的思維容易飄向虛無縹緲之處，對於從事哲學、宗教、藝術創作的人來說，地空反而能帶來超越常人的想像力和靈感。但對於追求實際物質成就的人，地空可能讓計畫難以落地。
        </p>
        <p className="mb-4 leading-relaxed">
          地劫則帶有「劫奪」的意味——原本到手的東西可能突然失去，或者在即將成功時出現意外變數。但換個角度看，地劫也讓人更懂得放下執著、不被物質綁架，反而在精神層面上更加自在。
        </p>

        <Callout type="info" title="空曜與宗教、哲學的關聯">
          <p>
            古書中常說「地空地劫入命，宜僧道」——這不是說有這兩顆星就一定要出家，而是暗示這類人對物質世界的執著較淡，更傾向思考人生的意義。在現代社會，這可能表現為對哲學、心理學、靈性修行有興趣，或者對物質生活比較看得開。
          </p>
        </Callout>
      </section>

      {/* ===== 其他重要輔星 ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">其他重要輔星：祿存、天馬</h2>

        <h3 className="text-xl font-semibold mb-3">祿存 — 財祿之星</h3>
        <p className="mb-4 leading-relaxed">
          祿存是紫微斗數中非常重要的一顆吉星，主要與「財富」和「穩定收入」有關。祿存所在的宮位，通常代表那個領域會有穩定的資源和保障。
        </p>
        <p className="mb-4 leading-relaxed">
          但祿存有一個重要特性：它永遠被擎羊和陀羅夾住。祿存在某個地支位置時，擎羊一定在它的前一位，陀羅一定在它的後一位。這就是「祿逢羊陀」的現象——得到財富的同時，也伴隨著挑戰和考驗。
        </p>

        <Callout type="tip" title="祿存的象徵意義">
          <p>
            祿存像是一份穩定的薪水——它不會讓你一夜暴富，但會提供持續且可靠的經濟支撐。它代表的是「正財」，是靠自己的努力和能力換來的回報，而非偏財或意外之財。
          </p>
        </Callout>

        <Expandable title="祿存與化祿的差異">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>祿存</strong>：固定位置（由生年天干決定），象徵穩定的、保守的財富。像是銀行裡的定存，安穩但不易大幅增長。</li>
            <li><strong>化祿</strong>：隨四化飛入不同宮位，象徵流動的、活潑的好運。像是一筆投資收益，有機會增長但也有變數。</li>
            <li>兩者若同時出現在同一宮位（「祿合鴛鴦」），是財運很好的格局。</li>
            <li>初學者常混淆兩者，請記住：祿存是一顆「星」，化祿是一種「轉化」。</li>
          </ul>
        </Expandable>

        <h3 className="text-xl font-semibold mb-3 mt-8">天馬 — 驛動之星</h3>
        <p className="mb-4 leading-relaxed">
          天馬代表「移動」和「變動」——它所在的宮位暗示那個領域會有較多的變化、移動或遷徙。天馬不分吉凶，它只代表「動」的能量。
        </p>
        <p className="mb-4 leading-relaxed">
          天馬若與祿存同宮或對照，稱為「祿馬交馳」，是非常好的格局——財富會因為移動而增加，比如做國際貿易、需要到處出差的業務、或者移民後事業更好等。天馬若與煞星同宮，則可能表示奔波勞碌、為了生計四處奔走。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-surface-alt">
                <th className="px-4 py-3 text-left font-semibold border-b border-border">組合</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">名稱</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">含義</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">天馬 + 祿存</td>
                <td className="px-4 py-3 font-medium">祿馬交馳</td>
                <td className="px-4 py-3">因移動而得財，國際貿易、出差業務等特別有利</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">天馬 + 化祿</td>
                <td className="px-4 py-3 font-medium">祿馬交馳（化祿版）</td>
                <td className="px-4 py-3">移動中帶來好運與機會</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">天馬 + 擎羊/陀羅</td>
                <td className="px-4 py-3 font-medium">折足馬</td>
                <td className="px-4 py-3">移動中有阻礙，奔波但進展不順</td>
              </tr>
              <tr>
                <td className="px-4 py-3">天馬 + 地空/地劫</td>
                <td className="px-4 py-3 font-medium">天馬落空</td>
                <td className="px-4 py-3">移動白費力氣，徒勞無功</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== 綜合比較表 ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">星曜綜合比較</h2>
        <p className="mb-6 leading-relaxed">
          以下表格將所有重要的輔星與煞星放在一起比較，方便初學者建立整體概念。
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-surface-alt">
                <th className="px-4 py-3 text-left font-semibold border-b border-border">類別</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">星曜</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">五行</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">性質</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">一句話概括</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3" rowSpan={6}>六吉星</td>
                <td className="px-4 py-3 font-medium">左輔</td>
                <td className="px-4 py-3">土</td>
                <td className="px-4 py-3">陽性助力</td>
                <td className="px-4 py-3">做事有人幫、人緣好</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">右弼</td>
                <td className="px-4 py-3">水</td>
                <td className="px-4 py-3">陰性助力</td>
                <td className="px-4 py-3">暗中有人扶持、化解</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">文昌</td>
                <td className="px-4 py-3">金</td>
                <td className="px-4 py-3">正統文才</td>
                <td className="px-4 py-3">考試順利、文書能力強</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">文曲</td>
                <td className="px-4 py-3">水</td>
                <td className="px-4 py-3">藝術才華</td>
                <td className="px-4 py-3">口才好、有藝文天分</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">天魁</td>
                <td className="px-4 py-3">火</td>
                <td className="px-4 py-3">陽貴人</td>
                <td className="px-4 py-3">明面上的貴人、被提攜</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">天鉞</td>
                <td className="px-4 py-3">火</td>
                <td className="px-4 py-3">陰貴人</td>
                <td className="px-4 py-3">暗中得助、逢凶化吉</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3" rowSpan={4}>四煞星</td>
                <td className="px-4 py-3 font-medium">擎羊</td>
                <td className="px-4 py-3">金</td>
                <td className="px-4 py-3">剛烈衝突</td>
                <td className="px-4 py-3">競爭激烈、容易起衝突</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">陀羅</td>
                <td className="px-4 py-3">金</td>
                <td className="px-4 py-3">糾纏拖延</td>
                <td className="px-4 py-3">拖延反覆、心結難解</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">火星</td>
                <td className="px-4 py-3">火</td>
                <td className="px-4 py-3">暴烈急躁</td>
                <td className="px-4 py-3">性急衝動、暴起暴落</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">鈴星</td>
                <td className="px-4 py-3">火</td>
                <td className="px-4 py-3">壓抑悶燒</td>
                <td className="px-4 py-3">隱藏壓力、突然爆發</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3" rowSpan={2}>空曜</td>
                <td className="px-4 py-3 font-medium">地空</td>
                <td className="px-4 py-3">火</td>
                <td className="px-4 py-3">虛無空想</td>
                <td className="px-4 py-3">想像力豐富但不切實際</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">地劫</td>
                <td className="px-4 py-3">火</td>
                <td className="px-4 py-3">損耗劫奪</td>
                <td className="px-4 py-3">容易有意外損失</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3" rowSpan={2}>其他輔星</td>
                <td className="px-4 py-3 font-medium">祿存</td>
                <td className="px-4 py-3">土</td>
                <td className="px-4 py-3">財祿穩定</td>
                <td className="px-4 py-3">穩定的財富來源</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">天馬</td>
                <td className="px-4 py-3">火</td>
                <td className="px-4 py-3">驛動變遷</td>
                <td className="px-4 py-3">移動、變化、遷徙</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== 如何評估輔星與煞星 ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">如何評估輔星與煞星</h2>
        <p className="mb-4 leading-relaxed">
          了解每顆輔星和煞星的個別意涵之後，更重要的是學會如何在整體命盤中評估它們的影響。以下是幾個關鍵原則：
        </p>

        <h3 className="text-lg font-semibold mb-3">原則一：輔星修飾主星，不獨立論斷</h3>
        <p className="mb-4 leading-relaxed">
          輔星和煞星必須依附主星來發揮作用。單獨看一顆煞星就斷定「命不好」，或者看到吉星就認為「一切順利」，都是過於簡化的判斷。正確的做法是先看主星的本質，再看輔煞星如何修飾這個本質。
        </p>

        <h3 className="text-lg font-semibold mb-3">原則二：同一顆星在不同宮位效果不同</h3>
        <p className="mb-4 leading-relaxed">
          文昌在命宮代表本人聰明好學，在財帛宮可能代表靠文書或知識賺錢，在夫妻宮可能代表另一半有文采。同一顆星的「能量」是固定的，但「表現」會根據宮位改變。
        </p>

        <h3 className="text-lg font-semibold mb-3">原則三：吉煞同宮不一定互相抵消</h3>
        <p className="mb-4 leading-relaxed">
          吉星和煞星同時出現在一個宮位，不代表「一好一壞剛好抵消」。它們各自發揮作用，使得那個宮位的表現變得更加複雜。比如文昌與擎羊同宮，可能代表有才華但人際關係容易緊張，或者在學業上需要更加努力才能成功。
        </p>

        <h3 className="text-lg font-semibold mb-3">原則四：數量和組合很重要</h3>
        <p className="mb-4 leading-relaxed">
          一個宮位若聚集了多顆煞星，挑戰自然更大；若聚集了多顆吉星，助力自然更強。但更關鍵的是「組合」——某些星曜組合在一起會產生特殊的效果（如前述的「火貪格」），不能只用簡單的加減法來判斷。
        </p>

        <Callout type="warning" title="避免機械化判斷">
          <p>
            切勿將輔星煞星當作「加分扣分」的機械公式。「命宮有左輔所以加十分、有擎羊所以扣十分」這種思維方式完全錯誤。星曜的作用是質的變化，不是量的加減。每一顆星都在改變整體命盤的「故事」，而非只是調整某個「分數」。
          </p>
        </Callout>
      </section>

      {/* ===== 初學者指南 ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">初學者應怎麼看，不要怎麼看</h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-surface-alt">
                <th className="px-4 py-3 text-left font-semibold border-b border-border w-1/2">應該這樣看</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border w-1/2">不要這樣看</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">先看主星定大方向，再看輔煞星如何修飾</td>
                <td className="px-4 py-3">看到煞星就緊張，認為一定不好</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">注意輔煞星落在哪個宮位，結合宮位意涵理解</td>
                <td className="px-4 py-3">脫離宮位單獨解讀星曜</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">觀察吉星和煞星的整體分布，感受命盤的「氣場」</td>
                <td className="px-4 py-3">把吉凶當成數學題計算「總分」</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">理解煞星也有正面力量，吉星也有需要留意之處</td>
                <td className="px-4 py-3">把星曜簡單劃分為「好」與「壞」</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">考慮星曜之間的互動和組合效果</td>
                <td className="px-4 py-3">把每顆星孤立地看，忽略整體格局</td>
              </tr>
              <tr>
                <td className="px-4 py-3">保持開放心態，將命盤視為人生的「地圖」而非「判決書」</td>
                <td className="px-4 py-3">用輔煞星預測具體事件或時間</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="warning" title="初學者最常犯的錯誤">
          <p className="mb-2">
            很多初學者看到命宮有煞星就認為「命不好」，或者看到三方四正沒有吉星就覺得「一生勞碌」。這是非常粗糙的判斷方式。
          </p>
          <p className="mb-2">
            紫微斗數是一個非常精密的系統，輔星和煞星只是其中一個面向。一個命盤的好壞不能只看吉煞星的數量，還要看主星的組合、宮位的搭配、四化的飛佈、大限的走勢等等。
          </p>
          <p>
            更重要的是：命盤展示的是「傾向」而非「定局」。即使命盤中煞星較多，也不代表人生一定不順——它可能意味著這個人需要更多磨練，但也因此更加堅韌。
          </p>
        </Callout>
      </section>

      {/* ===== FlashCards ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">快速記憶卡</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FlashCard
            front="六吉星包括哪些？"
            back="左輔、右弼、文昌、文曲、天魁、天鉞。分為助力對星、文才對星、貴人對星三組。"
          />
          <FlashCard
            front="四煞星包括哪些？"
            back="擎羊、陀羅、火星、鈴星。分為刑忌對星（擎羊陀羅）和火鈴對星（火星鈴星）。"
          />
          <FlashCard
            front="祿存的最大特點是什麼？"
            back="祿存永遠被擎羊和陀羅夾住——得到財富的同時必伴隨挑戰。象徵穩定的正財。"
          />
          <FlashCard
            front="什麼是「祿馬交馳」？"
            back="祿存（或化祿）與天馬同宮或對照，代表因移動、變化而增加財富的好格局。"
          />
        </div>
      </section>

      <LessonNav currentPath="/supporting-stars" />
    </>
  );
}
