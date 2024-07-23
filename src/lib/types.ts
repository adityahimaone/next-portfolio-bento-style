import { StaticImageData } from 'next/image';

export interface IExperienceData {
  id: number;
  title: string;
  subtitle: string;
  work_schema?: string;
  desc: string;
  time: string;
}

export interface IBentoGridItem {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
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

export interface IProjectData {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  url: string;
}
