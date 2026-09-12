export interface EventStat {
  label: string;
  value: number;
}

export interface Sponsor {
  name: string;
  logoIcon?: string;
  logoSvg?: string;
  websiteUrl?: string;
}

export interface Speaker {
  name: string;
  role: string;
  organization: string;
  avatarUrl: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  speakers?: Speaker[];
  status: 'upcoming' | 'past';
  actionLabel?: string;
  link?: string;
}
