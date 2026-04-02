import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Callout from '@/components/ui/Callout';
import LessonNav from '@/components/ui/LessonNav';

export const metadata: Metadata = {
  title: '十四主星總覽',
  description:
    '認識紫微斗數的十四顆主星：紫微、天機、太陽、武曲、天同、廉貞、天府、太陰、貪狼、巨門、天相、天梁、七殺、破軍。了解紫微系與天府系的分類方式，以及每顆主星的核心性格原型。',
};

const starGroups = [
  {
    system: '紫微系（北斗主星）',
    description:
      '以紫微星為首，這組星曜在排盤時依紫微星的位置推算而出。紫微系的星曜整體而言偏向主導性較強、較為剛健或理想化的能量。',
    stars: [
      {
        slug: 'ziwei',
        name: '紫微星',
        nickname: '帝王星',
        element: '己土',
        traits: '領導、尊貴、主導、自尊心強',
        summary: '具備統馭能力與領袖格局，重視尊嚴與秩序。',
      },
      {
        slug: 'tianji',
        name: '天機星',
        nickname: '智慧星',
        element: '乙木',
        traits: '聰敏、善變、分析力強、多思慮',
        summary: '思維敏捷且善於應變，擅長策劃與分析。',
      },
      {
        slug: 'taiyang',
        name: '太陽星',
        nickname: '光明星',
        element: '丙火',
        traits: '博愛、熱情、付出、重面子',
        summary: '如太陽般照耀他人，樂於奉獻且注重公平正義。',
      },
      {
        slug: 'wuqu',
        name: '武曲星',
        nickname: '財星',
        element: '辛金',
        traits: '剛毅、務實、重效率、不善言辭',
        summary: '行動力強且講求實際成果，與財務能力密切相關。',
      },
      {
        slug: 'tiantong',
        name: '天同星',
        nickname: '福星',
        element: '壬水',
        traits: '溫和、享受、知足、缺乏衝勁',
        summary: '性格溫潤平和，追求生活中的舒適與和諧。',
      },
      {
        slug: 'lianzhen',
        name: '廉貞星',
        nickname: '囚星 / 次桃花星',
        element: '丁火',
        traits: '精明、好勝、感情豐富、內心複雜',
        summary: '兼具政治手腕與感性深度，表現形式因宮位而異。',
      },
    ],
  },
  {
    system: '天府系（南斗主星）',
    description:
      '以天府星為首，這組星曜在排盤時依天府星的位置推算而出。天府系的星曜整體而言偏向穩健、務實或變革的能量。',
    stars: [
      {
        slug: 'tianfu',
        name: '天府星',
        nickname: '庫星',
        element: '戊土',
        traits: '穩重、保守、包容、守成',
        summary: '如同國家的財庫，穩健保守，善於管理與積累。',
      },
      {
        slug: 'taiyin',
        name: '太陰星',
        nickname: '月亮星',
        element: '癸水',
        traits: '細膩、內斂、追求完美、情緒化',
        summary: '如月光般柔和含蓄，感受力極強且重視品質。',
      },
      {
        slug: 'tanlang',
        name: '貪狼星',
        nickname: '桃花星',
        element: '甲木',
        traits: '慾望多元、才藝、社交力強、善變',
        summary: '慾望驅動力強烈，多才多藝且人際關係活躍。',
      },
      {
        slug: 'jumen',
        name: '巨門星',
        nickname: '暗星',
        element: '癸水',
        traits: '口才好、好辯、疑心、分析力強',
        summary: '具備出色的表達與辯論能力，善於質疑與深究。',
      },
      {
        slug: 'tianxiang',
        name: '天相星',
        nickname: '印星',
        element: '壬水',
        traits: '正直、樂於助人、重禮教、依附性',
        summary: '如同宰相輔臣，為人正派且善於協調各方。',
      },
      {
        slug: 'tianliang',
        name: '天梁星',
        nickname: '蔭星',
        element: '戊土',
        traits: '正義感、好為人師、清高、化解災厄',
        summary: '具備長者風範，善於排解紛爭並化險為夷。',
      },
      {
        slug: 'qisha',
        name: '七殺星',
        nickname: '將軍星',
        element: '庚金',
        traits: '果決、衝勁十足、孤獨、不服輸',
        summary: '行動果斷且開創力強，獨來獨往且勇於挑戰。',
      },
      {
        slug: 'pojun',
        name: '破軍星',
        nickname: '耗星',
        element: '癸水',
        traits: '破壞與重建、不按牌理出牌、變動大',
        summary: '先破後立的變革者，帶來顛覆性的改變與重新開始。',
      },
    ],
  },
];

export default function StarsOverviewPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '十四主星' }]} />

      <h1 className="text-3xl font-bold mb-4">十四主星總覽</h1>
      <p className="text-lg text-muted mb-8 leading-relaxed">
        十四主星是紫微斗數中最核心的星曜，它們構成了命盤判讀的基礎骨架。每顆主星代表一種獨特的性格原型與行為傾向，是理解一個人命盤的第一步。
      </p>

      {/* What are major stars */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">什麼是主星？</h2>
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            在紫微斗數的星曜體系中，十四顆主星是最具影響力的核心星曜。它們各自坐落在命盤的不同宮位中，為該宮位賦予特定的性格色彩與行為傾向。可以把主星想像成一齣戲中的「主要角色」——每個角色都有自己鮮明的個性、動機與行為模式。
          </p>
          <p>
            與西洋占星中的行星類似，紫微斗數的主星並非「好」或「壞」。每顆星都有其正向的發揮與可能的盲點，關鍵在於它所處的宮位、與其他星曜的組合，以及整體命盤的格局。單獨看一顆主星就下結論，是初學者最常犯的錯誤。
          </p>
          <p>
            十四主星的重要性在於：它們決定了一個宮位的「基調」。如果一個宮位沒有主星（稱為「空宮」），就需要借對宮的主星來理解——這說明了主星在斗數體系中不可或缺的地位。
          </p>
        </div>
      </section>

      {/* Two systems */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">兩大星系：紫微系與天府系</h2>
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            十四主星按排盤方式分為兩大系統，這不僅是技術上的分類，也反映了兩組星曜在性質上的微妙差異：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-lg mb-2">紫微系（北斗）</h3>
              <p className="text-sm text-muted mb-3">
                紫微、天機、太陽、武曲、天同、廉貞
              </p>
              <p className="text-sm leading-relaxed">
                以紫微星為首，排列位置依紫微星的落點而定。紫微系的星曜傾向於較為剛健、主動、理想化。它們代表的能量偏向「創造」與「引領」，如同帝王與其核心謀臣、將領的組合。
              </p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-surface">
              <h3 className="font-semibold text-lg mb-2">天府系（南斗）</h3>
              <p className="text-sm text-muted mb-3">
                天府、太陰、貪狼、巨門、天相、天梁、七殺、破軍
              </p>
              <p className="text-sm leading-relaxed">
                以天府星為首，排列位置依天府星的落點而定。天府系的星曜範圍較廣，有穩健保守的（天府、天相），有感性細膩的（太陰），也有積極求變的（七殺、破軍、貪狼）。
              </p>
            </div>
          </div>
          <p>
            值得注意的是，在實際排盤中，紫微星和天府星的位置是互相關聯的——知道紫微在哪裡，就能推出天府的位置，反之亦然。因此這兩大系統並非獨立運作，而是一體兩面地共同構成命盤的星曜分布。
          </p>
        </div>
      </section>

      {/* How to think about stars */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">如何正確看待主星</h2>

        <Callout type="tip" title="核心觀念">
          <p>
            主星是「性格原型」，不是「命運標籤」。紫微在命宮不代表一定會當領導；七殺在命宮也不代表一定會孤獨。真正的解讀需要看完整的命盤格局。
          </p>
        </Callout>

        <div className="space-y-4 text-base leading-relaxed mt-6">
          <p>
            <strong>第一，主星是「傾向」而非「定論」。</strong>
            每顆主星描述的是一種性格傾向、行為模式或處事風格。當我們說某人命宮有武曲星，意味著這個人「傾向於」務實、重效率、不太善於表達情感——但這不是絕對的。其他星曜的搭配、四化的飛入、以及大限流年的變化，都會修正這種傾向。
          </p>
          <p>
            <strong>第二，同一顆星在不同宮位意義不同。</strong>
            太陽星在命宮與太陽星在財帛宮，展現方式截然不同。在命宮是性格光明熱情，在財帛宮則可能是財運與付出有關。學習主星時，不能只記住星的「關鍵字」，更要理解它在不同場景下如何表達。
          </p>
          <p>
            <strong>第三，沒有「好星」或「壞星」。</strong>
            傳統書籍有時會將天同稱為「福星」、將七殺稱為「煞星」，這些稱呼容易誤導初學者。天同雖享福但可能缺乏鬥志；七殺雖殺伐但可能帶來突破。理解星曜要看它的完整面貌，而非簡單的好壞標籤。
          </p>
          <p>
            <strong>第四，星曜組合比單星更重要。</strong>
            實際命盤中，主星很少單獨出現。紫微常與輔星同宮，武曲可能與貪狼同宮——不同的組合會產生截然不同的效果。這就像化學反應：同樣的元素，在不同條件下會生成完全不同的物質。
          </p>
        </div>

        <Callout type="warning" title="初學者常見錯誤">
          <p>
            不要看到「殺、破、狼」就覺得命不好，也不要看到「紫微」就覺得貴氣逼人。這種簡單化的判斷是紫微斗數學習中最需要避免的心態。每顆星都有其複雜性，需要在具體的命盤脈絡中理解。
          </p>
        </Callout>
      </section>

      {/* Star tables by group */}
      {starGroups.map((group) => (
        <section key={group.system} className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">{group.system}</h2>
          <p className="text-muted mb-6 text-sm leading-relaxed">
            {group.description}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-surface-alt">
                  <th className="text-left px-4 py-3 font-semibold border-b border-border">
                    星名
                  </th>
                  <th className="text-left px-4 py-3 font-semibold border-b border-border hidden sm:table-cell">
                    別稱
                  </th>
                  <th className="text-left px-4 py-3 font-semibold border-b border-border hidden md:table-cell">
                    五行
                  </th>
                  <th className="text-left px-4 py-3 font-semibold border-b border-border">
                    核心特質
                  </th>
                </tr>
              </thead>
              <tbody>
                {group.stars.map((star, i) => (
                  <tr
                    key={star.slug}
                    className={
                      i % 2 === 0
                        ? 'bg-surface'
                        : 'bg-surface-alt/50'
                    }
                  >
                    <td className="px-4 py-3 border-b border-border">
                      <Link
                        href={`/stars/${star.slug}`}
                        className="font-medium text-primary hover:underline"
                      >
                        {star.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 border-b border-border text-muted hidden sm:table-cell">
                      {star.nickname}
                    </td>
                    <td className="px-4 py-3 border-b border-border text-muted hidden md:table-cell">
                      {star.element}
                    </td>
                    <td className="px-4 py-3 border-b border-border">
                      {star.traits}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {/* Quick nav cards */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">逐星學習</h2>
        <p className="text-muted mb-6">
          點擊以下任一主星，進入該星的詳細教學頁面，深入了解其核心意涵、正向表現、可能盲點，以及在不同宮位的解讀方式。
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[...starGroups[0].stars, ...starGroups[1].stars].map((star) => (
            <Link
              key={star.slug}
              href={`/stars/${star.slug}`}
              className="flex flex-col items-center gap-1 p-4 rounded-xl border border-border bg-surface hover:border-primary/40 hover:bg-surface-alt transition-all text-center group"
            >
              <span className="text-lg font-bold group-hover:text-primary transition-colors">
                {star.name.replace('星', '')}
              </span>
              <span className="text-xs text-muted">{star.nickname}</span>
              <span className="text-xs text-muted mt-1 leading-snug line-clamp-2">
                {star.summary}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning path tips */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">學習建議</h2>
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            <strong>建議學習順序：</strong>可以先從紫微星和天府星開始，因為它們分別是兩大星系的首星，理解它們有助於建立整體框架。接著可以學習太陽和太陰這對「日月」組合，感受陰陽對照的思維方式。然後再逐步學習其他星曜。
          </p>
          <p>
            <strong>學習方法建議：</strong>每學一顆星時，不要只是背誦關鍵字。試著想像這顆星如果是一個人，它會怎麼思考？怎麼做決定？什麼事情會讓它開心，什麼事情會讓它焦慮？將星曜「人格化」地理解，比死記硬背更有效。
          </p>
          <p>
            <strong>對比學習：</strong>紫微斗數中有許多自然的對比組合——太陽與太陰（陽與陰）、紫微與天府（帝與相）、七殺與破軍（將軍與先鋒）。透過比較相似又不同的星曜，可以更精準地掌握每顆星的獨特之處。
          </p>
        </div>
      </section>

      <LessonNav currentPath="/stars" />
    </>
  );
}
