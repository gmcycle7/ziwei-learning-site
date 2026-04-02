export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
  description?: string;
}

export const navigation: NavItem[] = [
  {
    title: '入門指引',
    href: '/getting-started',
    description: '從零開始認識紫微斗數',
  },
  {
    title: '基礎觀念',
    href: '/foundations',
    description: '命盤結構與核心概念',
  },
  {
    title: '十二宮',
    href: '/palaces',
    description: '人生十二個面向',
    children: [
      { title: '命宮', href: '/palaces/ming' },
      { title: '兄弟宮', href: '/palaces/siblings' },
      { title: '夫妻宮', href: '/palaces/spouse' },
      { title: '子女宮', href: '/palaces/children' },
      { title: '財帛宮', href: '/palaces/wealth' },
      { title: '疾厄宮', href: '/palaces/health' },
      { title: '遷移宮', href: '/palaces/travel' },
      { title: '交友宮', href: '/palaces/friends' },
      { title: '官祿宮', href: '/palaces/career' },
      { title: '田宅宮', href: '/palaces/property' },
      { title: '福德宮', href: '/palaces/fortune' },
      { title: '父母宮', href: '/palaces/parents' },
    ],
  },
  {
    title: '十四主星',
    href: '/stars',
    description: '每顆主星的性格與意涵',
    children: [
      { title: '紫微', href: '/stars/ziwei' },
      { title: '天機', href: '/stars/tianji' },
      { title: '太陽', href: '/stars/taiyang' },
      { title: '武曲', href: '/stars/wuqu' },
      { title: '天同', href: '/stars/tiantong' },
      { title: '廉貞', href: '/stars/lianzhen' },
      { title: '天府', href: '/stars/tianfu' },
      { title: '太陰', href: '/stars/taiyin' },
      { title: '貪狼', href: '/stars/tanlang' },
      { title: '巨門', href: '/stars/jumen' },
      { title: '天相', href: '/stars/tianxiang' },
      { title: '天梁', href: '/stars/tianliang' },
      { title: '七殺', href: '/stars/qisha' },
      { title: '破軍', href: '/stars/pojun' },
    ],
  },
  {
    title: '輔星與煞星',
    href: '/supporting-stars',
    description: '輔助判讀的星曜',
  },
  {
    title: '四化',
    href: '/four-transformations',
    description: '化祿、化權、化科、化忌',
    children: [
      { title: '化祿', href: '/four-transformations/hua-lu' },
      { title: '化權', href: '/four-transformations/hua-quan' },
      { title: '化科', href: '/four-transformations/hua-ke' },
      { title: '化忌', href: '/four-transformations/hua-ji' },
    ],
  },
  {
    title: '解盤教學',
    href: '/chart-reading',
    description: '步驟化的命盤解讀方法',
  },
  {
    title: '練習案例',
    href: '/examples',
    description: '虛構範例與實作練習',
  },
  {
    title: '詞彙表',
    href: '/glossary',
    description: '重要名詞查詢',
  },
  {
    title: '常見問答',
    href: '/faq',
    description: '初學者最常問的問題',
  },
  {
    title: '關於本站',
    href: '/about',
    description: '網站說明與聲明',
  },
];

// Flatten all navigation items for prev/next navigation
export function getFlatNavItems(): NavItem[] {
  const items: NavItem[] = [];
  for (const item of navigation) {
    items.push(item);
    if (item.children) {
      for (const child of item.children) {
        items.push(child);
      }
    }
  }
  return items;
}

export function getPrevNext(currentHref: string): { prev: NavItem | null; next: NavItem | null } {
  const flat = getFlatNavItems();
  const index = flat.findIndex((item) => item.href === currentHref);
  return {
    prev: index > 0 ? flat[index - 1] : null,
    next: index < flat.length - 1 ? flat[index + 1] : null,
  };
}
