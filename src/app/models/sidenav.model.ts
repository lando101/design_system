export interface SideNav {
  caseId: string;
  caseName: string;
  icon?: string;
  tabs?: Tabs[];
  meta?: Metadata[];
  strdMeta?: StandardMeta[], // inline below important
  imprtMeta?: ImportantMeta[], // bolded at top
  longMeta?: LongMeta[], // below inline :: more than a few words
  actionButtons?: ActionButtons[]
}
export interface ActionButtons {
  id: string;
  label: string;
  color?: string;
  icon?: string;
  dropDown?: boolean;
  order?: number;
}
export interface Tabs {
  tabName: string;
  count?: number;
  order?: number;
  href: string;
}
export interface Metadata {
  desc: string;
  content: string;
  important: boolean;
  badge: boolean;
  type: string;
  class?: string;
  layout?: string;
}

export interface StandardMeta {
  desc: string;
  content: string;
  important: boolean;
  badge: boolean;
  type: string;
  class?: string;
  layout?: string;
}

export interface ImportantMeta {
  desc: string;
  content: string;
  important: boolean;
  badge: boolean;
  type: string;
  class?: string;
  layout?: string;
}

export interface LongMeta {
  desc: string;
  content: string;
  important: boolean;
  badge: boolean;
  type: string;
  class?: string;
  layout?: string;
}
