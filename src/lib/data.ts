import { IExperienceData, IProjectData } from './types';
import imgDailyCalories from '../../public/dailycalories.png';

export const options: string[] = ['all', 'about', 'projects'];

export const experienceData: IExperienceData[] = [
  {
    id: 1,
    title: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    subtitle: 'Cloud Computing',
    desc: 'Collaborated on a capstone project to develop a machine learning application that estimates calories from food images. Integrated with Firebase and deployed on Google Cloud, this project utilized cloud balancing to optimize resource use and enhance application performance.',
    time: 'Feb 2021 - Jul 2021',
  },
  {
    id: 2,
    title: 'Bootcamp Fullstack Engineering By Alterra Academy',
    subtitle: 'Fullstack Engineering',
    desc: 'Developed a comprehensive Calories Tracker & Hospital Management System, using a Golang backend for efficient data handling and a ReactJS frontend for a smooth user experience. The project supported hospital management and health tracking functionalities.',
    time: 'Aug 2021 - Jan 2022',
  },
  {
    id: 3,
    title: 'Bootcamp Frontend Developer By Binar Academy',
    subtitle: 'Frontend Developer',
    desc: 'Focused on developing a frontend application for car booking using a modern stack including NodeJS, EJS, ReactJS, and NextJS. The project aimed at providing a user-friendly interface for booking vehicles, improving the service accessibility for users.',
    time: 'Feb 2022 - Jul 2022',
  },
  {
    id: 4,
    title: 'PT. Unzypsoft - Jakarta, Indonesia',
    subtitle: 'Frontend Developer',
    work_schema: 'Contract',
    desc: 'Played a pivotal role in maintaining and enhancing the existing website, creating a compelling company profile, and developing an e-commerce platform. This involved optimizing the websites performance and implementing updates to improve user engagement and sales conversions.',
    time: 'Jun 2022 - August 2022',
  },
  {
    id: 5,
    title: 'PT. Fatiha Sakti - Jakarta, Indonesia',
    subtitle: 'Frontend Developer',
    work_schema: 'Fulltime',
    desc: 'Led the development and ongoing maintenance of the Human Resources Information System (HRIS) and attendance applications, significantly improving feature usability and system reliability. Key achievements include the automation of Key Performance Indicators (KPIs), which enhanced the effectiveness of performance assessments.',
    time: 'Oct 2022 - Present',
  },
  {
    id: 6,
    title: '80&Company - Kyoto, Japan',
    subtitle: 'Frontend Developer',
    work_schema: 'Part Time',
    desc: 'Spearheaded the development of a next-generation Human Resources Management System incorporating blockchain technology to ensure enhanced data security and decentralization. Also responsible for maintaining the application, resolving critical bugs to improve system reliability and user experience.',
    time: 'Jun 2022 - Present',
  },
];

export const projectsData: IProjectData[] = [
  {
    id: 1,
    title: 'SeaPhantom Landing Page',
    description:
      'Landing page for SeaPhantom, an NFT project focusing on innovative and sustainable technologies. Explore the world of NFTs and peer-to-peer trading on the SeaPhantom platform.',
    image:
      'https://res.cloudinary.com/deselamak/image/upload/v1699777135/portofolio/y2l1g36bjudgsf6yr0eg.webp',
    url: 'https://seaphantom.com',
  },
  {
    id: 2,
    title: 'SeaPhantom P2P Rum Token Escrow Trading',
    description:
      'Engage in NFT trading with the P2P Rum Token Escrow Trading project. This platform facilitates secure and transparent NFT transactions.',
    image:
      'https://res.cloudinary.com/deselamak/image/upload/v1699777135/portofolio/fphb7ddemp4ixeutav1b.webp',
    url: 'https://auth.seaphantom.com/',
  },
  {
    id: 3,
    title: 'Labgrownbeasts Company Profile',
    description:
      'Explore the Labgrownbeasts Company Profile, showcasing innovation and excellence in the field. Learn about our vision, mission, and the cutting-edge work we do.',
    image:
      'https://res.cloudinary.com/deselamak/image/upload/v1699777135/portofolio/mqprcb6todunicq4cg0a.webp',
    url: 'https://labgrownbeasts.com/',
  },
  {
    id: 4,
    title: 'Daily Calories Tracker Application',
    description:
      'Application for tracking and counting daily calorie intake, including meal plans. Integrates with Open API for comprehensive nutritional insights.',
    image:
      'https://ucarecdn.com/26d0d2ab-f0d4-453f-a71c-b395c744f7b0/dailycalories.png',
    url: 'https://github.com/adityahimaone/Daily-Calorie-Apps',
  },
];

export const selectedReposList: String[] = [
  'SwiftUI-EmojiFinder',
  'SwiftUI-StateBinding',
  'Next-Fake-Nike-Landing-Page',
  'Framer-Motion',
  'Next-DigitalMarket',
  'SwiftUI-Reusable-Layout',
  'NextJS-Travel-Agency',
  'FE-Cryptocurrency-LandingPage',
  'FE-Daily-Calorie-Apps',
  'FE-Hospital-Management-System',
  'BE-Daily-Calorie-App-Api',
  'go-clean-architecture',
];
