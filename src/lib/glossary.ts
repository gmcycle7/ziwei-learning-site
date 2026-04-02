export interface GlossaryEntry {
  term: string;
  pinyin?: string;
  definition: string;
  category: '基礎' | '宮位' | '主星' | '輔星' | '四化' | '關係' | '解盤';
  related?: string[];
}

export const glossaryData: GlossaryEntry[] = [
  // 基礎概念
  { term: '命盤', pinyin: 'mìng pán', definition: '根據出生時間排列而成的星曜配置圖，是紫微斗數分析的基礎工具。', category: '基礎' },
  { term: '天干', pinyin: 'tiān gān', definition: '甲、乙、丙、丁、戊、己、庚、辛、壬、癸，共十個符號，用於標記時間循環。', category: '基礎' },
  { term: '地支', pinyin: 'dì zhī', definition: '子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥，共十二個符號，與十二宮位對應。', category: '基礎' },
  { term: '星曜', pinyin: 'xīng yào', definition: '命盤中的各種星，包含主星、輔星、煞星等，每顆星代表不同的性格特質或能量。', category: '基礎' },
  { term: '安星', pinyin: 'ān xīng', definition: '將星曜依照規則排入命盤各宮位的過程。', category: '基礎' },
  { term: '大限', pinyin: 'dà xiàn', definition: '紫微斗數中的十年運程區段，每個大限對應一個宮位。', category: '基礎' },
  { term: '流年', pinyin: 'liú nián', definition: '每一年的運勢變化，以該年的天干地支來判斷。', category: '基礎' },
  { term: '本命盤', pinyin: 'běn mìng pán', definition: '根據出生時間排出的原始命盤，反映一個人的基本格局與傾向。', category: '基礎' },

  // 宮位
  { term: '命宮', pinyin: 'mìng gōng', definition: '代表自我、個性、外在表現，是命盤最核心的宮位。', category: '宮位', related: ['遷移宮'] },
  { term: '兄弟宮', pinyin: 'xiōng dì gōng', definition: '代表兄弟姊妹關係、同輩互動、合作模式。', category: '宮位' },
  { term: '夫妻宮', pinyin: 'fū qī gōng', definition: '代表感情關係、婚姻狀態、伴侶特質。', category: '宮位' },
  { term: '子女宮', pinyin: 'zǐ nǚ gōng', definition: '代表子女緣分、親子關係，也可延伸為創造力與桃花。', category: '宮位' },
  { term: '財帛宮', pinyin: 'cái bó gōng', definition: '代表理財能力、賺錢方式、對金錢的態度。', category: '宮位' },
  { term: '疾厄宮', pinyin: 'jí è gōng', definition: '代表健康狀況、身體弱點、心理壓力來源。', category: '宮位' },
  { term: '遷移宮', pinyin: 'qiān yí gōng', definition: '代表外出運、社交形象、在外的發展，與命宮成對宮關係。', category: '宮位', related: ['命宮'] },
  { term: '交友宮', pinyin: 'jiāo yǒu gōng', definition: '又稱奴僕宮，代表人際關係、下屬緣、朋友圈品質。', category: '宮位' },
  { term: '官祿宮', pinyin: 'guān lù gōng', definition: '代表事業、工作型態、職業發展方向。', category: '宮位' },
  { term: '田宅宮', pinyin: 'tián zhái gōng', definition: '代表不動產、居住環境、家庭氛圍。', category: '宮位' },
  { term: '福德宮', pinyin: 'fú dé gōng', definition: '代表精神世界、內在滿足感、思想模式、享受方式。', category: '宮位' },
  { term: '父母宮', pinyin: 'fù mǔ gōng', definition: '代表與父母的關係、長輩緣、教育背景。', category: '宮位' },

  // 主星
  { term: '紫微星', pinyin: 'zǐ wēi xīng', definition: '帝王之星，代表領導力、尊貴、自尊心，為紫微斗數的核心主星。', category: '主星' },
  { term: '天機星', pinyin: 'tiān jī xīng', definition: '智慧之星，代表聰明、善變、計劃能力、思維敏捷。', category: '主星' },
  { term: '太陽星', pinyin: 'tài yáng xīng', definition: '光明之星，代表熱情、付出、公開性、男性長輩。', category: '主星' },
  { term: '武曲星', pinyin: 'wǔ qǔ xīng', definition: '財星，代表剛毅、務實、理財能力、行動力。', category: '主星' },
  { term: '天同星', pinyin: 'tiān tóng xīng', definition: '福星，代表溫和、享受、知足、有時缺乏衝勁。', category: '主星' },
  { term: '廉貞星', pinyin: 'lián zhēn xīng', definition: '複雜之星，代表政治力、感情豐富、雙面性格。', category: '主星' },
  { term: '天府星', pinyin: 'tiān fǔ xīng', definition: '庫星，代表穩重、保守、累積、安全感。', category: '主星' },
  { term: '太陰星', pinyin: 'tài yīn xīng', definition: '月亮之星，代表細膩、內斂、母性、審美。', category: '主星' },
  { term: '貪狼星', pinyin: 'tān láng xīng', definition: '慾望之星，代表多才多藝、桃花、追求、變化。', category: '主星' },
  { term: '巨門星', pinyin: 'jù mén xīng', definition: '口舌之星，代表口才、分析力、是非、質疑精神。', category: '主星' },
  { term: '天相星', pinyin: 'tiān xiàng xīng', definition: '印星，代表協助、公正、文書、受人影響。', category: '主星' },
  { term: '天梁星', pinyin: 'tiān liáng xīng', definition: '蔭星，代表照顧、清高、排難解紛、長者風範。', category: '主星' },
  { term: '七殺星', pinyin: 'qī shā xīng', definition: '將軍之星，代表衝勁、果斷、獨立、改革。', category: '主星' },
  { term: '破軍星', pinyin: 'pò jūn xīng', definition: '先鋒之星，代表破壞與重建、勇於改變、不按牌理。', category: '主星' },

  // 輔星
  { term: '左輔', pinyin: 'zuǒ fǔ', definition: '貴人星，代表有人幫助、人緣佳、助力。', category: '輔星' },
  { term: '右弼', pinyin: 'yòu bì', definition: '貴人星，與左輔類似，代表人際助力、支持。', category: '輔星' },
  { term: '文昌', pinyin: 'wén chāng', definition: '文書之星，代表學業、考試、文書能力、條理。', category: '輔星' },
  { term: '文曲', pinyin: 'wén qǔ', definition: '藝術之星，代表才藝、感性、藝術天分。', category: '輔星' },
  { term: '天魁', pinyin: 'tiān kuí', definition: '陽貴人星，代表明顯的幫助、提拔。', category: '輔星' },
  { term: '天鉞', pinyin: 'tiān yuè', definition: '陰貴人星，代表暗中的幫助、化解。', category: '輔星' },
  { term: '祿存', pinyin: 'lù cún', definition: '財祿之星，代表穩定的財源、保守理財。', category: '輔星' },
  { term: '天馬', pinyin: 'tiān mǎ', definition: '驛馬星，代表變動、出行、流動性。', category: '輔星' },
  { term: '擎羊', pinyin: 'qíng yáng', definition: '煞星之一，代表衝突、急躁、刑傷。', category: '輔星' },
  { term: '陀羅', pinyin: 'tuó luó', definition: '煞星之一，代表拖延、糾纏、暗中困擾。', category: '輔星' },
  { term: '火星', pinyin: 'huǒ xīng', definition: '煞星之一，代表衝動、爆發、急性子。', category: '輔星' },
  { term: '鈴星', pinyin: 'líng xīng', definition: '煞星之一，代表暗火、悶燒、內在壓力。', category: '輔星' },
  { term: '地空', pinyin: 'dì kōng', definition: '空曜之一，代表空想、不切實際，但也有創意。', category: '輔星' },
  { term: '地劫', pinyin: 'dì jié', definition: '空曜之一，代表損失、破耗，但也可激發突破。', category: '輔星' },

  // 四化
  { term: '化祿', pinyin: 'huà lù', definition: '四化之一，代表順利、增加、福氣、收穫。', category: '四化' },
  { term: '化權', pinyin: 'huà quán', definition: '四化之一，代表掌控、權力、強化、主導。', category: '四化' },
  { term: '化科', pinyin: 'huà kē', definition: '四化之一，代表名聲、貴人、文雅、考試。', category: '四化' },
  { term: '化忌', pinyin: 'huà jì', definition: '四化之一，代表阻礙、執著、糾結、需要面對的課題。', category: '四化' },

  // 關係
  { term: '對宮', pinyin: 'duì gōng', definition: '命盤中正對面的宮位，兩者互相影響，形成互補關係。', category: '關係' },
  { term: '三方', pinyin: 'sān fāng', definition: '某宮位與其左右各隔四位的兩個宮位，合稱三方，力量互通。', category: '關係' },
  { term: '三方四正', pinyin: 'sān fāng sì zhèng', definition: '三方加上對宮，合稱三方四正，是判斷宮位力量的核心結構。', category: '關係' },
  { term: '夾宮', pinyin: 'jiá gōng', definition: '某宮位左右相鄰的兩個宮位對該宮的影響。', category: '關係' },
  { term: '飛星', pinyin: 'fēi xīng', definition: '四化飛入其他宮位的技法，進階解盤會使用。', category: '關係' },

  // 解盤
  { term: '格局', pinyin: 'gé jú', definition: '命盤中星曜組合形成的特定模式，如「紫府同宮」等。', category: '解盤' },
  { term: '廟旺', pinyin: 'miào wàng', definition: '星曜在某些宮位力量強盛，發揮正面特質。', category: '解盤' },
  { term: '落陷', pinyin: 'luò xiàn', definition: '星曜在某些宮位力量較弱，可能顯現負面特質。', category: '解盤' },
  { term: '同宮', pinyin: 'tóng gōng', definition: '兩顆或以上的星曜同時出現在同一個宮位中。', category: '解盤' },
  { term: '坐守', pinyin: 'zuò shǒu', definition: '星曜位於某宮位中，對該宮產生直接影響。', category: '解盤' },
];

export function searchGlossary(query: string): GlossaryEntry[] {
  const q = query.toLowerCase();
  return glossaryData.filter(
    (entry) =>
      entry.term.toLowerCase().includes(q) ||
      entry.definition.toLowerCase().includes(q) ||
      (entry.pinyin && entry.pinyin.toLowerCase().includes(q))
  );
}

export function getGlossaryByCategory(category: GlossaryEntry['category']): GlossaryEntry[] {
  return glossaryData.filter((entry) => entry.category === category);
}
