import { IExperienceData, IProjectData } from './types';
import imgDailyCalories from '../../public/dailycalories.png';

export const options: string[] = ['all', 'about', 'projects'];

export const experienceData: IExperienceData[] = [
  {
    id: 1,
    title: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    subtitle: 'Cloud Computing',
    desc: 'I am collaborated with a team to create a capstone project, an intuitive machine learning application capable of accurately calculating the calories in food photos. Serving as an API integrated with Firebase and deployed on Google Cloud with Cloud Balancing, our project seamlessly combines machine learning prowess with efficient cloud-based solutions.',
    time: 'Feb 2021 - Jul 2021',
  },
  {
    id: 2,
    title: 'Bootcamp Fullstack Engineering By Alterra Academy',
    subtitle: 'Fullstack Engineering',
    desc: 'Built a capstone project, the Calories Tracker & Hospital Management System, with a Golang backend serving as a RESTful API and a ReactJS frontend. The backend, powered by Golang, ensures efficiency, while the ReactJS frontend provides a user-friendly interface for tracking calories and managing hospital-related information.',
    time: 'Aug 2021 - Jan 2022',
  },
  {
    id: 3,
    title: 'Bootcamp Frontend Developer By Binar Academy',
    subtitle: 'Frontend Developer',
    desc: 'Exploring frontend development with a stack comprising NodeJS, EJS, ReactJS, and NextJS. The focus is on a capstone project, a frontend application for car booking. The aim is to gain hands-on experience in building a user-friendly car booking interface while mastering the intricacies of these frontend technologies.',
    time: 'Feb 2022 - Jul 2022',
  },
  {
    id: 4,
    title: 'PT. Unzypsoft',
    subtitle: 'Frontend Developer',
    desc: 'Responsible for maintaining and enhancing the functionality of the existing website, crafting a compelling company profile, and developing an e-commerce platform. As a frontend developer, the role involves ensuring the smooth operation of the current website, optimizing its performance, and implementing updates. (Last Stack Using ReactJS & NextJS)',
    time: 'Jun 2022 - August 2022',
  },
  {
    id: 5,
    title: 'PT. Fatiha Sakti',
    subtitle: 'Frontend SAAS Developer',
    desc: 'Tasked with the development and upkeep of Human Resources Information System (HRIS) and attendance applications, including improvement key features, redesign, troubleshooting and resolving bugs. Additionally, responsible for enhancing the features of Key Performance Index (KPI) automation applications (Last Stack Using JQuery & PHP)',
    time: 'Oct 2022 - Present',
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
