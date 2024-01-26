'use client';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import MenuNavigation from '@/components/MenuNavigation';
import React, { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import { Github, icons } from 'lucide-react';
import { SiTypescript, SiJavascript, SiSwift } from 'react-icons/si';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Curve from '@/components/layouts/curve';
import Stairs from '@/components/layouts/stairs';

interface IRepoGithub {
  id: number;
  name: string;
  language: string;
  description: string | null;
  topics: string[];
  url: string;
}

interface ILanguageIcons {
  [key: string]: ReactNode;
}

const Page = () => {
  const [repos, setRepos] = useState<IRepoGithub[]>();
  const [selectedRepos, setSelectedRepos] = useState<IRepoGithub[]>();

  const languageIcons: ILanguageIcons = {
    typescript: <SiTypescript className="h-8 w-8 text-pallet-blue-1" />,
    javascript: <SiJavascript className="text-pallet-blue-1" />,
    swift: <SiSwift className=" h-8 w-8 text-orange-600" />,
  };

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get(
        'https://api.github.com/users/adityahimaone/repos?sort=created',
      );
      setRepos(response.data);
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    const selectedReposList = [
      'Next-Fake-Nike-Landing-Page',
      'Framer-Motion',
      'Next-DigitalMarket',
      'SwiftUI-Reusable-Layout',
    ];

    const selected = repos?.filter((repo) =>
      selectedReposList.includes(repo?.name),
    );

    setSelectedRepos(selected);
  }, [repos]);

  console.log(repos, selectedRepos, 'repos');
  return (
    <Stairs>
      <main className="min-h-screen px-6 py-3 sm:px-3 md:px-0">
        <MenuNavigation />
        <MaxWidthWrapper>
          <div>
            <h1>Repository</h1>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[12rem] md:grid-cols-3">
              {selectedRepos?.map((repo) => (
                <div
                  key={repo.id}
                  className="text-wrap rounded-[32px] bg-white p-6 shadow-input"
                >
                  <div className="flex flex-row items-center gap-x-2">
                    <div className="">
                      <div className="">
                        {languageIcons[repo.language.toLowerCase()]}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-base font-medium">
                        {repo.name.split('-').join(' ')}
                      </h5>
                    </div>
                  </div>
                  <p className="text-sm">{repo.description}</p>
                  <div className="my-3">
                    <ScrollArea className="h-[80px] rounded-md border p-1">
                      {repo.topics.map((topic) => (
                        <span
                          key={topic}
                          className="mr-1 inline-flex items-center rounded-full bg-pallet-blue-1 px-2.5 py-0.5 text-xs font-normal text-white"
                        >
                          {topic}
                        </span>
                      ))}
                      <ScrollBar orientation="vertical" />
                    </ScrollArea>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </main>
    </Stairs>
  );
};

export default Page;
