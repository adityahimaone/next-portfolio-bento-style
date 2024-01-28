'use client';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import MenuNavigation from '@/components/MenuNavigation';
import React, { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import { SiTypescript, SiJavascript, SiSwift, SiGo } from 'react-icons/si';
import { motion } from 'framer-motion';
import { HoverEffect } from '@/components/ui/card-hover-effect';

interface IRepoGithub {
  id: number;
  name: string;
  language: string;
  description: string | null;
  topics: string[];
  html_url: string;
}

const selectedReposList = [
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

const Page = () => {
  const [repos, setRepos] = useState<IRepoGithub[]>();
  const [selectedRepos, setSelectedRepos] = useState<IRepoGithub[]>();

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get(
        'https://api.github.com/users/adityahimaone/repos?sort=created&per_page=100',
      );
      setRepos(response.data);
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    const selected = repos?.filter((repo) =>
      selectedReposList.includes(repo?.name),
    );

    setSelectedRepos(selected);
  }, [repos]);

  console.log(repos, selectedRepos, 'repos');
  return (
    <>
      <main className="min-h-screen px-6 py-3 sm:px-3 md:px-0">
        <MenuNavigation />
        <MaxWidthWrapper>
          <div>
            <motion.h1
              initial={{
                opacity: 0,
                scale: 0,
                x: 5,
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
              animate={{ x: 0, scale: 1, opacity: 1 }}
              className="mb-4 text-2xl"
            >
              Repository
            </motion.h1>
            <HoverEffect items={selectedRepos} />
          </div>
        </MaxWidthWrapper>
      </main>
    </>
  );
};

export default Page;
