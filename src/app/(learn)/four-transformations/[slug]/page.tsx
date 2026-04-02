import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Callout from '@/components/ui/Callout';
import LessonNav from '@/components/ui/LessonNav';
import Expandable from '@/components/ui/Expandable';
import FlashCard from '@/components/ui/FlashCard';

/* ──────────────────────────────────────────────
   Data for each of the four transformations
   ────────────────────────────────────────────── */

interface TransformationData {
  title: string;
  subtitle: string;
  metaDescription: string;
  navPath: string;
  conceptExplanation: {
    paragraphs: string[];
    callout: { type: 'info' | 'tip' | 'warning' | 'error'; title: string; content: string };
  };
  intuitiveUnderstanding: {
    paragraphs: string[];
    metaphors: { label: string; description: string }[];
  };
  positiveEffects: {
    intro: string;
    effects: { title: string; description: string }[];
  };
  thingsToWatch: {
    intro: string;
    items: { title: string; description: string }[];
    callout: { type: 'info' | 'tip' | 'warning' | 'error'; title: string; content: string };
  };
  beginnerMistakes: {
    mistakes: { title: string; description: string }[];
  };
  palaceManifestations: {
    intro: string;
    palaces: { palace: string; manifestation: string; detail: string }[];
  };
  chartIntegration: {
    paragraphs: string[];
    steps: { step: string; description: string }[];
  };
  keySummary: string[];
  flashCards: { front: string; back: string }[];
}

const transformations: Record<string, TransformationData> = {
  'hua-lu': {
    title: '化祿',
    subtitle: '增加、豐盛、好運 — 四化中最受歡迎的轉化',
    metaDescription: '深入了解紫微斗數中化祿的含義、正面效果、在不同宮位的表現，以及初學者常犯的錯誤。',
    navPath: '/four-transformations/hua-lu',
    conceptExplanation: {
      paragraphs: [
        '化祿是四化中代表「增加」和「豐盛」的轉化。當一顆星曜化祿時，該星曜原本的正面特質會被放大、增強，並以更順遂、更豐饒的方式展現出來。',
        '「祿」這個字在中國傳統文化中與「俸祿」「福祿」相關，代表的是一種自然而然到來的好處和回報。化祿不是靠拚命爭取來的收穫，而更像是「水到渠成」的順勢而為——因為條件成熟、機緣到位，好的結果自然發生。',
        '在命盤中，化祿落入的宮位代表那個生活領域會有比較多的「加分項」，事情在那個方面比較容易順利推進，資源也比較容易匯聚。但這不代表完全不需要努力——化祿提供的是「順風」，而不是「目的地」。',
      ],
      callout: {
        type: 'info',
        title: '核心概念 vs 常見說法',
        content: '常見說法：「化祿就是有錢、好運、發財。」核心概念：化祿代表某顆星曜的能量被增幅，使得相關領域的發展更加順暢。它不一定直接等於「有錢」，而是讓那個領域的正面潛能更容易被實現。',
      },
    },
    intuitiveUnderstanding: {
      paragraphs: [
        '要理解化祿，最好從「流動」和「增加」這兩個關鍵字入手。化祿就像是在花園裡打開了灌溉系統——水源充沛了，植物自然長得更好。但花園裡種了什麼植物（哪顆星化祿），以及花園在哪個位置（落在哪個宮位），會決定最終收穫什麼。',
      ],
      metaphors: [
        { label: '水龍頭比喻', description: '化祿像是打開了一個水龍頭，讓好的能量源源不絕地流入某個領域。流入的不一定是「錢」，也可能是「機會」、「人緣」、「靈感」或「健康」——取決於落入的宮位。' },
        { label: '順風比喻', description: '化祿像是航行時遇到順風——你還是需要掌舵和操帆，但風幫了你很大的忙，讓航行變得輕鬆得多。順風不會自動帶你到目的地，但會讓旅程更愉快。' },
        { label: '土壤比喻', description: '化祿像是肥沃的土壤——在這片土壤上種下的種子更容易發芽成長。但如果你什麼都不種，再肥沃的土壤也長不出莊稼。' },
      ],
    },
    positiveEffects: {
      intro: '化祿帶來的正面效果主要體現在以下幾個方面：',
      effects: [
        { title: '機會增加', description: '化祿所在的宮位，相關領域的機會會比較多。不論是事業機會、財富機會還是人際機會，都比較容易出現。' },
        { title: '過程順遂', description: '在化祿相關的領域做事，通常過程比較順利，阻力較小。不代表完全沒有困難，但困難往往更容易被克服。' },
        { title: '人緣加持', description: '化祿自帶一種「親和力」，使得相關領域的人際互動更加融洽。貴人較多，也比較容易得到他人的善意和幫助。' },
        { title: '心態樂觀', description: '化祿所在的宮位，當事人通常對那個領域的態度比較樂觀正面，願意投入也容易感到滿足。' },
      ],
    },
    thingsToWatch: {
      intro: '化祿雖然帶來正面能量，但也有需要留意的地方：',
      items: [
        { title: '過度樂觀', description: '因為事情太順利，可能對風險估計不足，或者因為「反正會順利」而疏忽準備。' },
        { title: '貪多不精', description: '化祿帶來的機會多，如果什麼都想抓，反而可能分散精力，最終什麼都做不好。' },
        { title: '依賴順境', description: '習慣了化祿帶來的順風，當大限或流年走到不同的能量時，可能會難以適應逆境。' },
        { title: '花費增加', description: '如果化祿落在財帛宮，確實有賺錢多的傾向，但同時花錢也可能更大方，不一定能守住財富。' },
      ],
      callout: {
        type: 'tip',
        title: '重要提醒',
        content: '化祿是「增加」而非「完美」。它增加的是正面能量的流入，但也可能增加慾望和期待。學會在順境中保持清醒，是化祿帶來的人生功課。',
      },
    },
    beginnerMistakes: {
      mistakes: [
        { title: '化祿 = 一定發財', description: '化祿落在財帛宮確實有利財運，但化祿落在其他宮位時，帶來的好處不一定與金錢有關。化祿在命宮是人緣好，在官祿宮是事業順，在夫妻宮是感情甜——不要把所有化祿都解讀成「發財」。' },
        { title: '忽略化祿的星曜本質', description: '太陽化祿和天機化祿完全不同。太陽化祿傾向光明正大地展現、付出與得到回報；天機化祿傾向思維靈活、點子多、善於規劃。同樣是化祿，因為星曜不同，表現方式也不同。' },
        { title: '認為化祿所在的宮位完全不用擔心', description: '化祿帶來助力，但不代表那個領域就完全沒有問題。尤其當化忌同時出現在相關的對宮或三方四正時，事情可能變得更加複雜。' },
        { title: '混淆化祿與祿存', description: '化祿是四化的一種轉化，祿存是一顆固定的星曜。兩者都與「祿」有關，但性質不同。化祿是流動的、活潑的好運；祿存是穩定的、保守的資源。' },
      ],
    },
    palaceManifestations: {
      intro: '化祿落入不同宮位時，會在不同的人生領域帶來豐盛的能量：',
      palaces: [
        { palace: '命宮', manifestation: '個人魅力增加，樂觀開朗', detail: '化祿在命宮的人通常給人很好的第一印象，天生帶有一種親和力和福氣。待人處事比較圓融，容易讓人產生好感。生活態度偏向樂觀正面，即使遇到挫折也比較容易恢復。' },
        { palace: '財帛宮', manifestation: '財路廣、賺錢機會多', detail: '化祿在財帛宮是最直接的「好財運」象徵。賺錢的管道比較多，對金錢的態度也比較大方。但要注意的是，花錢可能也很大方，「賺得多」不等於「存得多」。需要搭配祿存或其他穩定因素才能真正累積財富。' },
        { palace: '官祿宮', manifestation: '事業發展順暢，工作帶來成就感', detail: '化祿在官祿宮的人，工作上比較容易得到機會和賞識。不論從事什麼行業，都傾向從工作中獲得滿足感和成就感。事業上的貴人緣也較佳，容易遇到欣賞自己的上司或合作夥伴。' },
        { palace: '夫妻宮', manifestation: '感情和諧，伴侶帶來好運', detail: '化祿在夫妻宮暗示感情生活比較順遂，伴侶關係融洽。另一半可能在物質或精神上帶來助力，是一種「嫁對人/娶對人」的格局。但也可能因為感情上太順利而缺乏危機意識。' },
        { palace: '福德宮', manifestation: '內心平靜，精神生活充實', detail: '化祿在福德宮的人，心態上比較知足常樂，精神世界豐富。懂得享受生活的美好，不容易被物質慾望所困擾。即使外在條件不是最好的，內心也能保持平和滿足。' },
        { palace: '遷移宮', manifestation: '外出得利，社交環境佳', detail: '化祿在遷移宮代表離開家鄉或到外面發展比較順利。社交圈子比較寬廣，外出時容易遇到貴人。從事需要經常與外界接觸的工作（如業務、公關、國際貿易）特別有利。' },
      ],
    },
    chartIntegration: {
      paragraphs: [
        '理解化祿的概念之後，要將它整合到實際的命盤解讀中，可以遵循以下步驟：',
      ],
      steps: [
        { step: '確認化祿的星曜', description: '先看是哪顆星化祿。了解那顆星的基本特質，才能理解化祿後會放大什麼樣的能量。' },
        { step: '確認落入的宮位', description: '化祿落在哪個宮位，代表好運和豐盛會出現在哪個生活領域。宮位決定了化祿的「舞台」。' },
        { step: '觀察三方四正', description: '化祿的影響不只限於所在的宮位，還會透過三方四正影響到其他相關宮位。例如化祿在官祿宮，也會間接影響到命宮和財帛宮（因為三者是三方）。' },
        { step: '對照化忌的位置', description: '化祿和化忌像是蹺蹺板的兩端。看到化祿帶來好處時，也要注意化忌指出的挑戰在哪裡，才能得到更完整的畫面。' },
        { step: '結合整體格局判斷', description: '化祿只是命盤的一個面向。最終的解讀需要結合主星、其他三化、輔煞星、宮位之間的互動等多種因素，才能得出完整的結論。' },
      ],
    },
    keySummary: [
      '化祿代表「增加」和「豐盛」，是一種自然順遂的正面能量增幅。',
      '化祿的效果取決於被轉化的星曜和落入的宮位，不能一概而論。',
      '化祿帶來機會增加、過程順遂、人緣加持和樂觀心態。',
      '化祿也有需要留意之處：過度樂觀、貪多不精、依賴順境。',
      '化祿不等於「一定發財」——它在不同宮位有不同的表現形式。',
      '解讀化祿時，需要同時觀察化忌的位置，才能獲得完整的命盤畫面。',
    ],
    flashCards: [
      { front: '化祿的核心概念是什麼？', back: '化祿代表「增加」和「豐盛」——某顆星曜的正面能量被放大，相關領域的發展更加順暢。像是打開水龍頭，好的能量源源流入。' },
      { front: '化祿在財帛宮就代表一定會發財嗎？', back: '不一定。化祿在財帛宮代表賺錢機會多、財路廣，但同時花錢也可能大方。「賺得多」不等於「存得多」，還需要看整體格局。' },
      { front: '化祿需要留意什麼？', back: '四點：1.過度樂觀而忽略風險；2.機會太多導致貪多不精；3.習慣順境後難以面對逆境；4.花費可能同步增加。' },
    ],
  },

  'hua-quan': {
    title: '化權',
    subtitle: '掌控、權力、堅持 — 四化中最具力量感的轉化',
    metaDescription: '深入了解紫微斗數中化權的含義、如何帶來掌控力與決斷力，以及在不同宮位的表現。',
    navPath: '/four-transformations/hua-quan',
    conceptExplanation: {
      paragraphs: [
        '化權是四化中代表「掌控」和「權力」的轉化。當一顆星曜化權時，該星曜的能量會變得更加強勢、集中和有力，使得相關領域呈現出強烈的主導性和控制力。',
        '「權」在中國文化中意味著「權力」「權柄」——擁有做決定的能力和影響他人的力量。化權不像化祿那樣帶來「順風」，而是賦予「掌舵」的能力——你有能力也有意願去主導局面、做出決定、堅持立場。',
        '在命盤中，化權落入的宮位代表那個生活領域是當事人想要掌控、也有能力掌控的地方。這個領域中，他不甘於被動等待，而是傾向主動出擊、據理力爭、不輕易妥協。',
      ],
      callout: {
        type: 'info',
        title: '核心概念 vs 常見說法',
        content: '常見說法：「化權就是當官、掌權、有地位。」核心概念：化權代表某顆星曜的能量變得集中而有力，使得相關領域的行動力和決斷力被增強。它不一定直接等於「當官」，而是讓那個領域的主導能力得到強化。',
      },
    },
    intuitiveUnderstanding: {
      paragraphs: [
        '要理解化權，最好從「握住」和「堅持」這兩個關鍵字入手。化權就像是握住了方向盤——不論路況如何，你都堅定地決定方向。這種能量帶來掌控感和自信，但也可能帶來固執和霸道。',
      ],
      metaphors: [
        { label: '方向盤比喻', description: '化權像是牢牢握住方向盤——你清楚知道要去哪裡，也有決心帶著大家到達目的地。但如果握得太緊、不聽旁人建議，可能會錯過更好的路線。' },
        { label: '樹根比喻', description: '化權像是一棵大樹深深扎入土壤的根——穩固、有力、不容動搖。這讓樹木能夠抵禦風暴，但也意味著無法輕易移動。堅定是力量，也可能是限制。' },
        { label: '鐵匠比喻', description: '化權像是鐵匠手中的鐵鉗——有能力在高溫中把鐵塊鍛造成想要的形狀。這需要力量和意志力，但如果力道過猛，也可能把材料敲壞。' },
      ],
    },
    positiveEffects: {
      intro: '化權帶來的正面效果主要體現在以下幾個方面：',
      effects: [
        { title: '決斷力強', description: '化權所在的領域，當事人能夠快速做出決定，不會猶豫不決。在需要果斷行動的時刻，這種能力非常寶貴。' },
        { title: '執行力佳', description: '化權不只是想法，更是行動。有化權加持的領域，當事人會主動去執行、推動，不會空想空談。' },
        { title: '領導能力', description: '化權自帶領導氣場，在相關領域容易被推舉為領導者，也有能力帶領團隊完成目標。' },
        { title: '抗壓性高', description: '化權帶來的堅定意志讓人在面對壓力時不容易退縮。即使遇到困難也會咬牙堅持，展現強大的韌性。' },
      ],
    },
    thingsToWatch: {
      intro: '化權帶來的強勢能量，如果不加以節制，可能產生以下問題：',
      items: [
        { title: '控制欲過強', description: '在化權所在的領域，可能會想要掌控一切，包括不該由自己掌控的事情。對伴侶、孩子、同事的控制欲可能引發衝突。' },
        { title: '固執己見', description: '化權帶來的堅定，如果過度就變成固執。不願意接受不同意見、不願意改變已經做出的決定，即使那個決定是錯的。' },
        { title: '人際摩擦', description: '強勢的態度容易與他人產生摩擦，尤其是同樣個性強硬的人。在需要團隊合作的場合，過度的化權能量可能成為障礙。' },
        { title: '身心疲憊', description: '總是想要掌控和主導，意味著承擔的責任和壓力更大。長期下來可能導致身心俱疲，因為你把太多事情扛在自己肩上。' },
      ],
      callout: {
        type: 'tip',
        title: '化權的平衡之道',
        content: '化權最好的狀態是「剛柔並濟」——在需要果斷的時候能夠果斷，在需要退讓的時候也懂得退讓。權力的最高境界不是控制一切，而是知道什麼該管、什麼該放。',
      },
    },
    beginnerMistakes: {
      mistakes: [
        { title: '化權 = 一定當官掌權', description: '化權在官祿宮確實有利於擔任領導職位，但化權在其他宮位時表現完全不同。化權在命宮是個性強勢、化權在夫妻宮是在感情中主導、化權在財帛宮是理財有主見。不是所有化權都跟「當官」有關。' },
        { title: '把化權和化祿混淆', description: '化祿帶來的是「順遂」和「機會」，化權帶來的是「掌控」和「力量」。化祿像春風，讓事情自然順利；化權像利劍，讓你有能力開路前行。兩者的能量方向不同。' },
        { title: '認為化權一定是好的', description: '化權在合適的位置可以帶來很大的助力，但在某些宮位可能造成問題。例如化權在夫妻宮，如果過度表現為控制伴侶，反而會損害關係。化權需要智慧來駕馭。' },
        { title: '忽略化權帶來的壓力', description: '有權力就有責任。化權所在的宮位，雖然有主導權，但也承受更大的壓力和期待。初學者容易只看到「權力」的光環，忽略背後的沈重。' },
      ],
    },
    palaceManifestations: {
      intro: '化權落入不同宮位時，會在不同的人生領域帶來掌控力和決斷力：',
      palaces: [
        { palace: '命宮', manifestation: '個性強勢、有主見、不輕易妥協', detail: '化權在命宮的人通常給人「有氣場」的感覺。說話有分量、做事有魄力，在團體中容易自然而然地成為中心人物。但如果不加節制，可能顯得霸道或不好相處。' },
        { palace: '官祿宮', manifestation: '事業心強、追求掌控權、適合領導職位', detail: '化權在官祿宮是很典型的「事業型」人格。對工作非常認真投入，追求在職場上的話語權和影響力。適合擔任管理者或在專業領域中建立權威。但工作壓力也會比較大。' },
        { palace: '財帛宮', manifestation: '理財有主見、不受他人左右', detail: '化權在財帛宮的人在金錢方面很有自己的想法，不容易被別人說服去做不想做的投資。對財務的掌控力強，但也可能因為太堅持己見而錯過好的建議。' },
        { palace: '夫妻宮', manifestation: '感情中傾向主導、對伴侶有要求', detail: '化權在夫妻宮暗示在感情關係中偏向掌控的一方。可能對另一半有較高的要求和期待，希望按照自己的方式經營感情。如果另一半也是強勢型的人，容易產生權力之爭。' },
        { palace: '子女宮', manifestation: '對子女教育有明確想法、管教嚴格', detail: '化權在子女宮的人對孩子的教育非常有自己的堅持和規劃。可能會是那種「虎爸虎媽」，對孩子寄予厚望、管教嚴格。孩子的獨立性和親子關係需要特別注意。' },
        { palace: '福德宮', manifestation: '意志力堅強、內心有明確的價值觀', detail: '化權在福德宮的人內心有很強的主見和信念。精神世界不容易被外界動搖，知道自己要什麼、不要什麼。但也可能因為太堅持某些觀念而顯得頑固。' },
      ],
    },
    chartIntegration: {
      paragraphs: [
        '將化權整合到命盤解讀中時，重點在於找到「力量的方向」——化權告訴你在哪裡有掌控力，但掌控力的使用方式還需要結合其他因素來判斷。',
      ],
      steps: [
        { step: '確認化權的星曜', description: '不同星曜化權的味道不同。武曲化權偏重財務和決策上的魄力；天同化權讓原本溫和的天同變得有稜角和主見；紫微化權則進一步強化了紫微本有的帝王氣質。' },
        { step: '觀察所在宮位', description: '宮位決定化權發揮的領域。在事業宮是職場上的掌控力，在感情宮是關係中的主導權，在命宮則是整體性格中的強勢表現。' },
        { step: '對照化祿和化忌', description: '化權單獨出現是一種穩健的力量。但如果化權和化忌出現在同一個宮位或相對的宮位，可能意味著那個領域雖然有掌控力，但也伴隨著更大的壓力和糾結。' },
        { step: '注意化權的「過度」訊號', description: '如果命盤中化權星曜同時受到煞星影響（如擎羊、火星等），掌控力可能走向極端——過度控制、不計後果地堅持、甚至用不當手段維護權力。' },
        { step: '評估平衡性', description: '一個健康的命盤通常需要化權的力量被其他柔和的因素（如化科的理性、化祿的順遂）所平衡。全盤都是強硬的能量，反而可能導致過度緊繃。' },
      ],
    },
    keySummary: [
      '化權代表「掌控」和「決斷」，賦予相關領域強勢的主導能力。',
      '化權的正面表現是果斷、執行力強、有領導力、抗壓性高。',
      '化權需要留意控制欲過強、固執己見、人際摩擦、身心疲憊。',
      '化權不等於「當官掌權」——它在不同宮位有不同的掌控表現。',
      '化權最佳的狀態是「剛柔並濟」——知道何時堅持、何時退讓。',
      '解讀化權時，要注意被轉化的星曜本質和煞星的影響，避免走向極端。',
    ],
    flashCards: [
      { front: '化權的核心概念是什麼？', back: '化權代表「掌控」和「力量」——某顆星曜的能量變得集中而有力，在相關領域帶來主導力和決斷力。像是握住方向盤，堅定地決定方向。' },
      { front: '化權和化祿有什麼不同？', back: '化祿像春風，帶來順遂和機會，是「水到渠成」；化權像利劍，帶來掌控和力量，是「主動出擊」。化祿是得到好處，化權是掌握主導權。' },
      { front: '化權在夫妻宮代表什麼？', back: '代表在感情關係中傾向主導的一方，對伴侶有較高要求。若另一半也很強勢，可能出現「權力之爭」。需要學習在親密關係中放鬆掌控。' },
    ],
  },

  'hua-ke': {
    title: '化科',
    subtitle: '名聲、聲譽、貴人 — 四化中最優雅的轉化',
    metaDescription: '深入了解紫微斗數中化科的含義、如何帶來名聲與貴人緣，以及在不同宮位的表現。',
    navPath: '/four-transformations/hua-ke',
    conceptExplanation: {
      paragraphs: [
        '化科是四化中代表「名聲」和「聲譽」的轉化。當一顆星曜化科時，該星曜的能量會以更優雅、更有品味、更受人尊敬的方式展現出來，帶來正面的名聲和外界的認可。',
        '「科」在古代科舉制度中代表「科名」——通過考試獲得功名的意思。延伸到現代，化科代表的是一種被社會認可的能力和聲望，包括學歷、專業資格、社會地位、聲譽等等。',
        '在命盤中，化科落入的宮位代表那個生活領域容易得到外界的認可和好評。這種認可不是靠自己吹噓，而是一種自然而然被看見、被尊重的力量。化科也帶有「化解」的功能——當事情不順時，化科能讓問題以比較體面、不傷面子的方式得到解決。',
      ],
      callout: {
        type: 'info',
        title: '核心概念 vs 常見說法',
        content: '常見說法：「化科就是考試好、有學歷、讀書厲害。」核心概念：化科代表某顆星曜的能量以受人尊敬的方式展現，帶來聲譽、被認可和貴人的機會。它不限於讀書考試，而是泛指在相關領域被社會肯定的一種力量。',
      },
    },
    intuitiveUnderstanding: {
      paragraphs: [
        '要理解化科，最好從「聚光燈」和「認可」這兩個關鍵字入手。化科就像是一束溫暖的聚光燈照在你身上——讓你的優點被看見、讓你的努力被肯定。這不是耀眼刺目的閃光，而是溫和而持久的照亮。',
      ],
      metaphors: [
        { label: '聚光燈比喻', description: '化科像是舞台上的聚光燈——它不會改變你本身的表演，但會讓觀眾看見你、注意到你。在化科的照耀下，你的優點更容易被發現，你的努力更容易被認可。' },
        { label: '名片比喻', description: '化科像是一張精美的名片——它代表的是你在社會上的「招牌」和「信譽」。好的名片讓人願意信任你、跟你合作，但名片背後必須有真實的能力做支撐。' },
        { label: '保護傘比喻', description: '化科也像一把隱形的保護傘——在遇到麻煩時，化科能讓事情以比較體面的方式收場，不至於太難看。它有「化解」和「遮羞」的功能，讓問題不會被赤裸裸地暴露。' },
      ],
    },
    positiveEffects: {
      intro: '化科帶來的正面效果主要體現在以下幾個方面：',
      effects: [
        { title: '聲譽良好', description: '化科所在的領域，當事人容易建立良好的名聲和口碑。他人對你在那個方面的評價通常比較正面。' },
        { title: '貴人相助', description: '化科自帶一種「讓人想要幫助你」的氣質。在相關領域比較容易遇到願意提攜和指點的貴人。' },
        { title: '化解困難', description: '當遇到問題或危機時，化科能讓事情以比較和緩、體面的方式得到解決，避免情況惡化到不可收拾。' },
        { title: '學習能力', description: '化科增強了相關領域的學習和理解能力。不一定是「考試很好」，而是在那個領域有更好的領悟力和鑑賞力。' },
      ],
    },
    thingsToWatch: {
      intro: '化科雖然是溫和的正面能量，但也有需要注意的地方：',
      items: [
        { title: '虛名大於實質', description: '化科帶來的名聲若沒有實力支撐，可能變成「虛有其表」。外界認為你很厲害，但實際能力跟不上名聲，壓力反而更大。' },
        { title: '過度在意面子', description: '化科強化了「被認可」的需求，可能讓人過度在意他人的看法，為了維持形象而壓抑真實的自己。' },
        { title: '化解≠解決', description: '化科能讓問題「不那麼難看」，但不代表真正解決了問題。有時候化科只是把問題暫時掩蓋住，根源還是需要面對。' },
        { title: '被動等待認可', description: '因為化科的能量是「被看見」，有些人可能過度依賴外界的肯定，而忽略了主動出擊的必要性。' },
      ],
      callout: {
        type: 'tip',
        title: '化科的真正價值',
        content: '化科最好的運用方式是「名實相符」——讓聲譽建立在真實的能力和品格之上。當名聲和實力同步增長時，化科的力量才能真正發揮到極致。不要為了名聲而去做事，而是做好事情後讓名聲自然到來。',
      },
    },
    beginnerMistakes: {
      mistakes: [
        { title: '化科 = 考試一定過', description: '化科確實有利於考試和學業，但不代表有化科就一定會考上。化科提供的是「學習的優勢」和「被認可的機會」，最終的結果還是取決於個人的準備和努力。' },
        { title: '認為化科的力量很大', description: '在四化中，化科的力量相對來說是最溫和的。它不像化祿那樣直接帶來好處，也不像化權那樣強勢有力。化科是一種「潤物細無聲」的力量，效果往往需要時間才能顯現。' },
        { title: '忽略化科的化解功能', description: '很多初學者只知道化科跟「名聲」有關，卻忽略了它重要的「化解」功能。當命盤中有煞星或化忌帶來的負面影響時，化科能在一定程度上緩和這些衝擊。' },
        { title: '把化科和文昌文曲混淆', description: '文昌文曲是星曜，化科是一種轉化。文昌文曲增加的是具體的文才和學問能力，化科增加的是聲譽和被認可的機會。兩者有關聯但不相同。' },
      ],
    },
    palaceManifestations: {
      intro: '化科落入不同宮位時，會在不同的人生領域帶來名聲和認可：',
      palaces: [
        { palace: '命宮', manifestation: '氣質優雅、受人尊重、有書卷氣', detail: '化科在命宮的人通常給人一種「有教養」的感覺。言談舉止比較得體，待人接物有分寸，在社交場合中容易獲得他人的好感和尊重。即使出了狀況，也比較能維持體面。' },
        { palace: '官祿宮', manifestation: '事業上聲譽良好、專業受到肯定', detail: '化科在官祿宮代表在職業領域中容易建立專業形象和良好口碑。同事和客戶對你的評價通常比較正面，適合從事需要信譽和口碑的行業。晉升的機會也較多，因為上層願意提拔有好名聲的人。' },
        { palace: '夫妻宮', manifestation: '感情得體、伴侶有教養', detail: '化科在夫妻宮暗示感情關係比較和諧有質感。另一半可能有良好的學歷或社會形象。兩人的相處方式比較文雅得體，不太會出現激烈的衝突。即使有矛盾，也傾向以理性溝通的方式解決。' },
        { palace: '父母宮', manifestation: '與長輩關係良好、得到師長提攜', detail: '化科在父母宮代表與父母或師長的關係融洽。容易得到長輩的指導和提攜，在學習或事業初期可能有好的老師或導師出現。家庭的教育環境通常比較好。' },
        { palace: '遷移宮', manifestation: '外出得好名聲、社交形象佳', detail: '化科在遷移宮代表在外界的形象和口碑很好。別人對你的第一印象通常很正面。從事需要對外溝通、展示專業形象的工作特別有利。出國留學或移民的經歷也可能為你帶來好的聲譽。' },
        { palace: '福德宮', manifestation: '精神世界豐富、有品味和修養', detail: '化科在福德宮的人內心世界比較豐富，有自己的審美觀和價值觀。偏好有質感、有深度的事物。對於文學、藝術、哲學等領域可能有較高的鑑賞力。追求精神層面的滿足甚於物質。' },
      ],
    },
    chartIntegration: {
      paragraphs: [
        '化科是四化中最容易被忽略的一個，因為它的力量最溫和、最不顯眼。但在實際命盤解讀中，化科往往扮演著關鍵的「調和劑」角色。',
      ],
      steps: [
        { step: '確認化科的星曜', description: '化科落在不同星曜上的表現差異很大。紫微化科是地位上的被認可，文昌化科是學術上的成就，太陰化科則是品味和柔性的認可。' },
        { step: '觀察化科與煞星的互動', description: '化科的一個重要功能是化解煞星帶來的負面影響。如果化科所在的宮位同時有煞星，化科能在一定程度上緩和衝擊。這是「逢凶化吉」的重要機制之一。' },
        { step: '評估化科的「深度」', description: '化科帶來的名聲是否有實質支撐？如果化科所在的宮位同時有化祿或化權的支持，名聲通常是名實相符的。如果化科孤立無援，名聲可能比較單薄。' },
        { step: '注意化科的時效性', description: '在流年或大限中的化科效果比較短暫。一個人可能在某個十年特別受人尊敬，但過了那個大限後光環漸退。生年化科的影響最為持久。' },
        { step: '結合三方四正', description: '化科的影響同樣會透過三方四正擴散。化科在官祿宮時，也會對命宮和財帛宮產生一定程度的正面影響。' },
      ],
    },
    keySummary: [
      '化科代表「名聲」和「認可」，是一種溫和而優雅的正面轉化力量。',
      '化科帶來聲譽良好、貴人相助、化解困難和學習能力的提升。',
      '化科需要留意虛名大於實質、過度在意面子、化解不等於解決等問題。',
      '化科不等於「考試一定過」——它增加的是被認可的機會而非直接的成績。',
      '化科在四化中力量最溫和，但其「化解」功能在困境中非常重要。',
      '化科最好的運用方式是「名實相符」——讓聲譽建立在真實能力之上。',
    ],
    flashCards: [
      { front: '化科的核心概念是什麼？', back: '化科代表「名聲」和「被認可」——某顆星曜以優雅、受尊敬的方式展現。像是溫暖的聚光燈，讓你的優點被看見。' },
      { front: '化科有什麼容易被忽略的功能？', back: '化科的「化解」功能常被忽略。當命盤中有煞星或化忌帶來的負面影響時，化科能讓問題以比較體面的方式得到緩和，是「逢凶化吉」的重要機制。' },
      { front: '化科在四化中的力量強度如何？', back: '化科是四化中力量最溫和的。它不像化祿直接帶來好處，也不像化權強勢有力，更不像化忌那樣強烈糾結。化科是「潤物細無聲」的力量，效果往往需要時間顯現。' },
    ],
  },

  'hua-ji': {
    title: '化忌',
    subtitle: '執著、糾結、阻礙 — 四化中最需要正確理解的轉化',
    metaDescription: '深入了解紫微斗數中化忌的真正含義、它所揭示的人生課題，以及如何將化忌轉化為成長的動力。',
    navPath: '/four-transformations/hua-ji',
    conceptExplanation: {
      paragraphs: [
        '化忌是四化中最容易被誤解的轉化。很多人一看到「忌」字就聯想到「不好」，但化忌的本質遠比「不好」這兩個字複雜得多。化忌代表的是「執著」「在意」「收縮」——一種讓能量向內凝聚、讓注意力被鎖定的力量。',
        '「忌」字拆開來是「己心」——自己的心。化忌指向的是你內心深處最在意、最放不下的事情。正因為太在意，所以容易糾結、容易焦慮、容易因為小事而大做文章。但也正因為太在意，所以願意投入更多心力、更加認真對待。',
        '在命盤中，化忌落入的宮位代表那個生活領域是你人生中的「功課」——不是完成不了的障礙，而是需要花更多心思去學習和面對的課題。化忌讓你無法忽視那個領域，它像一根刺，提醒你去關注、去處理、去成長。',
      ],
      callout: {
        type: 'info',
        title: '核心概念 vs 常見說法 vs 初學者版本',
        content: '常見說法：「化忌就是不好、倒楣、有災。」初學者版本：「化忌代表那個宮位的事情會比較辛苦。」核心概念：化忌代表某顆星曜的能量產生收縮和凝聚，使得相關領域成為當事人最在意、投入最多心力、但也最容易產生糾結的地方。它揭示的是人生的課題，而非命運的詛咒。',
      },
    },
    intuitiveUnderstanding: {
      paragraphs: [
        '要理解化忌，最好從「心結」和「牽掛」這兩個關鍵字入手。化忌就像是一個你一直惦記著的事情——吃飯的時候想著、睡覺的時候想著、工作的時候也會不經意想起。它佔據了你大量的心理資源，讓你無法輕鬆面對。',
      ],
      metaphors: [
        { label: '心結比喻', description: '化忌像是心裡打了一個結——你知道它在那裡，總是想去解開它，但越用力越緊。學會帶著這個結生活、而不是一直想解開它，反而可能讓結自然鬆開。' },
        { label: '聚焦鏡比喻', description: '化忌像是一面放大鏡——它把某個領域的問題放大了，讓你看得更清楚，但也可能讓你以為問題比實際嚴重。放大鏡下看到的瑕疵，在正常視角下可能根本不算什麼。' },
        { label: '重力比喻', description: '化忌像是一股額外的重力——讓你在某個領域走得比較辛苦、比較慢。但也因為走得慢，你可能看到更多風景、積累更多經驗。有些人正是因為在困難的道路上走過，才有了超越常人的深度。' },
      ],
    },
    positiveEffects: {
      intro: '是的，化忌也有正面的效果。理解這一點對於正確認識化忌非常重要：',
      effects: [
        { title: '深度投入', description: '化忌讓你對某個領域特別在意，這種在意轉化為動力時，可以帶來超乎常人的投入和專注。很多在某一領域出類拔萃的人，命盤中那個領域恰恰有化忌。' },
        { title: '敏銳觀察', description: '因為太在意，化忌所在的領域你的觀察力會特別敏銳。你能注意到別人忽略的細節，能預見到別人看不到的問題。' },
        { title: '深刻理解', description: '經歷過化忌帶來的困難後，你對那個領域的理解會比一帆風順的人更加深刻。痛苦是很好的老師——它教會你別人不願意學、也學不到的東西。' },
        { title: '堅韌性格', description: '化忌帶來的挑戰會磨練出堅強的意志。長期面對和處理化忌相關的課題，會讓你在那個領域變得越來越老練和沉穩。' },
      ],
    },
    thingsToWatch: {
      intro: '化忌帶來的挑戰是真實的，以下是需要留意的方面：',
      items: [
        { title: '過度焦慮', description: '化忌讓你容易對某個領域過度擔心、反覆思考、陷入焦慮的循環。即使客觀條件還不錯，你也可能覺得「不夠好」或「隨時會出問題」。' },
        { title: '人際摩擦', description: '因為太在意某些事情，可能在相關領域與人產生摩擦。你覺得「理所當然」的標準，在別人看來可能是「過度要求」。' },
        { title: '完美主義傾向', description: '化忌可能帶來一種「怎樣都不夠好」的感覺，讓你陷入完美主義的陷阱——永遠覺得還可以更好、還沒準備好，以至於遲遲不敢行動。' },
        { title: '情緒化反應', description: '在化忌相關的領域遇到挫折時，情緒反應可能特別激烈。因為太在意，所以一點小問題都可能引發很大的情緒波動。' },
      ],
      callout: {
        type: 'warning',
        title: '化忌不是詛咒',
        content: '請務必記住：化忌揭示的是人生的「功課」，而非不可改變的「命運」。每個人都有化忌，每個命盤都有需要面對的課題。化忌只是告訴你在哪裡需要更多的學習和成長，而非宣判你在那個領域注定失敗。面對化忌最好的態度是：接受它、理解它、然後帶著覺知去經營那個領域。',
      },
    },
    beginnerMistakes: {
      mistakes: [
        { title: '化忌 = 一定不好', description: '這是最嚴重的誤解。化忌代表「在意」和「功課」，不代表「一定不好」。化忌在官祿宮的人可能因為太在意事業而成為工作狂，反而在事業上取得很大的成就。化忌帶來的是挑戰，但挑戰可以成為成長的催化劑。' },
        { title: '看到化忌就害怕', description: '很多初學者看到化忌落在某個宮位就嚇壞了，以為那個領域注定不順。事實上，化忌在生年四化中是每個人都有的——世界上不存在沒有化忌的命盤。重要的是如何理解和面對它。' },
        { title: '用化忌預測具體事件', description: '「化忌在夫妻宮所以會離婚」「化忌在財帛宮所以會破產」——這種具體的預測是非常不負責任的。化忌描述的是能量傾向，不是具體事件。相同的化忌位置，不同的人會有完全不同的人生經歷。' },
        { title: '忽略化忌的正面力量', description: '只看到化忌的困難面，忽略它帶來的深度、專注力和成長機會。很多歷史上的偉大人物，正是因為在某個領域有深刻的「在意」（化忌的能量），才投入畢生心力去追求和突破。' },
      ],
    },
    palaceManifestations: {
      intro: '化忌落入不同宮位時，會在不同的人生領域帶來需要面對的課題：',
      palaces: [
        { palace: '命宮', manifestation: '對自我要求嚴格、容易自我懷疑', detail: '化忌在命宮的人往往對自己最不滿意。覺得自己不夠好、不夠聰明、不夠漂亮——即使在別人眼中他已經很優秀了。這種內在的不安全感可以成為進步的動力，但也可能導致長期的自我否定。學會接納自己是化忌在命宮最大的人生功課。' },
        { palace: '財帛宮', manifestation: '對金錢特別在意、容易有財務焦慮', detail: '化忌在財帛宮的人對金錢議題特別敏感。可能不是真的沒錢，但總覺得錢不夠、擔心入不敷出。這種焦慮有時反而讓他們非常節儉或非常努力賺錢。需要學會的是建立與金錢之間的健康關係——既不過度焦慮，也不完全忽視。' },
        { palace: '夫妻宮', manifestation: '感情上容易牽掛、對伴侶有較高期待', detail: '化忌在夫妻宮的人在感情方面投入很深，但也因此特別敏感。可能會過度解讀伴侶的言行、容易因為小事吃醋或生氣、或者對伴侶有很高的要求但不善於表達。需要學會的是在親密關係中建立安全感，以及有效的溝通方式。' },
        { palace: '官祿宮', manifestation: '工作上特別認真但壓力也大', detail: '化忌在官祿宮的人通常是職場上最認真的那一個。對工作品質要求極高，也因此承受較大的壓力。可能是典型的「工作狂」——不是因為熱愛工作，而是因為放不下、停不下來。需要學會在事業和生活之間找到平衡。' },
        { palace: '福德宮', manifestation: '內心不安、思慮過多、精神壓力大', detail: '化忌在福德宮的人最大的挑戰在內心——總是想太多、擔心太多、夜裡翻來覆去睡不著。他們的心理活動非常豐富，但也因此容易被負面思緒吞噬。學會靜心、學會放下對事情的過度掌控，是這個位置最重要的功課。' },
        { palace: '田宅宮', manifestation: '居住環境容易有波折、家庭關係有課題', detail: '化忌在田宅宮可能表現為居住環境經常變動、買房過程不順、或者家庭內部有需要處理的關係問題。也可能是對「家」這個概念特別在意——渴望一個安穩的家，但總覺得現有的狀態還不夠好。' },
      ],
    },
    chartIntegration: {
      paragraphs: [
        '化忌是命盤解讀中最重要也最需要謹慎處理的元素之一。正確理解化忌，能讓你對命盤的解讀從「表面」走向「深層」。',
      ],
      steps: [
        { step: '先確認化忌的星曜', description: '不同星曜化忌的味道差異很大。太陽化忌是付出得不到回報或者與男性長輩的關係有課題；太陰化忌是情感上的不安全感；天機化忌是思慮過度、計劃容易出差錯；巨門化忌是口舌是非、溝通上的障礙。' },
        { step: '看化忌落在哪個宮位', description: '宮位決定課題所在的領域。化忌在命宮是自我認同的課題，在夫妻宮是感情的課題，在官祿宮是事業的課題。宮位是化忌作用的「舞台」。' },
        { step: '觀察化忌是否被化解', description: '如果化忌所在的宮位同時有化科、左輔右弼、天魁天鉞等正面星曜，化忌的困難會得到一定程度的緩和。「逢凶化吉」就是這個原理——有吉星的化解，困難不會那麼嚴重。' },
        { step: '對照化祿的位置', description: '化忌和化祿是四化中的兩個極端——一個收縮、一個擴展。看兩者的位置關係，能理解命盤的「重心配置」：好運集中在哪裡，課題集中在哪裡。' },
        { step: '用理解代替恐懼', description: '解讀化忌時最重要的原則是「理解」而非「恐嚇」。化忌告訴你的是「這裡需要注意」，而非「這裡注定完蛋」。帶著溫暖和理解去解讀化忌，才是負責任的態度。' },
      ],
    },
    keySummary: [
      '化忌代表「執著」「在意」「收縮」——它指向你人生中最牽掛、最放不下的領域。',
      '化忌不是詛咒，而是人生的功課。每個命盤都有化忌，每個人都有需要面對的課題。',
      '化忌有正面力量：帶來深度投入、敏銳觀察、深刻理解和堅韌性格。',
      '化忌需要留意過度焦慮、人際摩擦、完美主義和情緒化反應。',
      '切勿用化忌預測具體事件——它描述的是能量傾向，不是命運判決。',
      '面對化忌最好的態度：接受它、理解它、帶著覺知去經營相關領域。',
    ],
    flashCards: [
      { front: '化忌的核心概念是什麼？', back: '化忌代表「執著」和「在意」——「忌」字拆開是「己心」（自己的心）。化忌指向你最牽掛、最放不下的事情，是人生的功課而非詛咒。' },
      { front: '化忌有正面力量嗎？', back: '有。化忌帶來深度投入、敏銳觀察、深刻理解和堅韌性格。很多出類拔萃的人，正是因為在某領域有化忌的「在意」，才投入畢生心力去突破。' },
      { front: '面對化忌最好的態度是什麼？', back: '接受它、理解它、帶著覺知去經營。不要害怕，不要逃避，也不要用它來預測具體的災禍。化忌告訴你「哪裡需要注意」，而非「哪裡注定完蛋」。' },
    ],
  },
};

/* ──────────────────────────────────────────────
   generateStaticParams
   ────────────────────────────────────────────── */

export function generateStaticParams() {
  return [
    { slug: 'hua-lu' },
    { slug: 'hua-quan' },
    { slug: 'hua-ke' },
    { slug: 'hua-ji' },
  ];
}

/* ──────────────────────────────────────────────
   generateMetadata
   ────────────────────────────────────────────── */

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const data = transformations[slug];
  if (!data) return { title: '找不到頁面' };
  return {
    title: `${data.title} — 紫微斗數學習`,
    description: data.metaDescription,
  };
}

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */

export default async function TransformationPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const data = transformations[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: '四化', href: '/four-transformations' },
          { label: data.title },
        ]}
      />

      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-muted text-lg mb-8">{data.subtitle}</p>

      {/* 1. 概念解釋 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">概念解釋</h2>
        {data.conceptExplanation.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed">{p}</p>
        ))}
        <Callout
          type={data.conceptExplanation.callout.type}
          title={data.conceptExplanation.callout.title}
        >
          <p>{data.conceptExplanation.callout.content}</p>
        </Callout>
      </section>

      {/* 2. 直覺理解 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">直覺理解</h2>
        {data.intuitiveUnderstanding.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed">{p}</p>
        ))}
        <div className="space-y-3">
          {data.intuitiveUnderstanding.metaphors.map((m, i) => (
            <Expandable key={i} title={m.label}>
              <p>{m.description}</p>
            </Expandable>
          ))}
        </div>
      </section>

      {/* 3. 正面效果 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">正面效果</h2>
        <p className="mb-4 leading-relaxed">{data.positiveEffects.intro}</p>
        <div className="space-y-4">
          {data.positiveEffects.effects.map((e, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-1">{e.title}</h3>
              <p className="leading-relaxed text-sm">{e.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 需要留意的地方 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">需要留意的地方</h2>
        <p className="mb-4 leading-relaxed">{data.thingsToWatch.intro}</p>
        <div className="space-y-4 mb-6">
          {data.thingsToWatch.items.map((item, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        <Callout
          type={data.thingsToWatch.callout.type}
          title={data.thingsToWatch.callout.title}
        >
          <p>{data.thingsToWatch.callout.content}</p>
        </Callout>
      </section>

      {/* 5. 初學者常犯錯誤 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">初學者常犯錯誤</h2>
        <div className="space-y-6">
          {data.beginnerMistakes.mistakes.map((m, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-1">
                錯誤{i + 1}：{m.title}
              </h3>
              <p className="leading-relaxed text-sm">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. 在不同宮位的表現 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">在不同宮位的表現</h2>
        <p className="mb-6 leading-relaxed">{data.palaceManifestations.intro}</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-surface-alt">
                <th className="px-4 py-3 text-left font-semibold border-b border-border">宮位</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-border">主要表現</th>
              </tr>
            </thead>
            <tbody>
              {data.palaceManifestations.palaces.map((p, i) => (
                <tr
                  key={i}
                  className={
                    i < data.palaceManifestations.palaces.length - 1
                      ? 'border-b border-border'
                      : ''
                  }
                >
                  <td className="px-4 py-3 font-medium">{p.palace}</td>
                  <td className="px-4 py-3">{p.manifestation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-3">
          {data.palaceManifestations.palaces.map((p, i) => (
            <Expandable key={i} title={`${p.palace}：${p.manifestation}`}>
              <p>{p.detail}</p>
            </Expandable>
          ))}
        </div>
      </section>

      {/* 7. 如何整合到解盤中 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">如何整合到解盤中</h2>
        {data.chartIntegration.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed">{p}</p>
        ))}
        <div className="space-y-4">
          {data.chartIntegration.steps.map((s, i) => (
            <div key={i} className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold mb-1">{s.step}</h3>
                <p className="text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. 重點總結 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">重點總結</h2>
        <Callout type="info" title={`${data.title}的關鍵要點`}>
          <ul className="list-disc list-inside space-y-2">
            {data.keySummary.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </Callout>
      </section>

      {/* FlashCards */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">快速記憶卡</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.flashCards.map((card, i) => (
            <FlashCard key={i} front={card.front} back={card.back} />
          ))}
        </div>
      </section>

      <LessonNav currentPath={data.navPath} />
    </>
  );
}
