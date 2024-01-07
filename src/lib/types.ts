export interface IExperienceData {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  time: string;
}

export interface IBentoGridItem {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  idx: number;
  value: any; // Replace any with the actual type of your value
  index: number;
  active?: boolean;
}

export interface IListItem {
  header: React.JSX.Element;
  className: string;
  active: boolean;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface IListSocialMedia {
  text: string;
  link: string;
  color: string;
  borderColor: string;
  icon: React.ReactNode;
  shadow: string;
}
