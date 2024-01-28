import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { SiTypescript, SiJavascript, SiSwift, SiGo } from 'react-icons/si';
import { HiViewGridAdd } from 'react-icons/hi';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface IRepoGithub {
  id: number;
  name: string;
  language: string;
  description: string | null;
  topics: string[];
  html_url: string;
}

interface ILanguageIcons {
  [key: string]: ReactNode;
}

const languageIcons: ILanguageIcons = {
  typescript: <SiTypescript className="h-8 w-8 text-pallet-blue-1" />,
  javascript: <SiJavascript className="h-8 w-8 text-yellow-300" />,
  swift: <SiSwift className=" h-8 w-8 text-orange-600" />,
  go: <SiGo className="h-8 w-8 text-pallet-blue-1" />,
};

const stagger = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: IRepoGithub[] | undefined;
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className={cn(
        'my-3 grid max-w-7xl grid-cols-1 md:auto-rows-[15rem] md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      {items?.map((item, idx) => (
        <motion.div
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
          }}
          key={item?.html_url}
        >
          <Link
            href={item?.html_url}
            className="group relative  block h-full w-full p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            target="_blank"
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-[36px] bg-slate-300  dark:bg-slate-800/[0.8]"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2">
                  <div className="">
                    <div className="">
                      {languageIcons[item.language.toLowerCase()]}
                    </div>
                  </div>
                  <div>
                    <h5
                      style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                      className="text-base font-medium"
                    >
                      {item.name.split('-').join(' ')}
                    </h5>
                  </div>
                </div>
                <p
                  className="mt-1 text-sm"
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item.description}
                </p>
              </div>
              <div className="my-3">
                {item.topics?.length > 0 ? (
                  <ScrollArea className="h-[80px] rounded-md border border-slate-300 p-1">
                    {item.topics.map((topic, idx) => (
                      <motion.span
                        key={topic}
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: {
                            duration: 0.5,
                            delay: idx * 0.2,
                          },
                        }}
                        className="mr-1 inline-flex items-center rounded-full bg-pallet-blue-1 px-2.5 py-0.5 text-xs font-normal text-white"
                      >
                        {topic}
                      </motion.span>
                    ))}
                    <ScrollBar orientation="vertical" />
                  </ScrollArea>
                ) : (
                  <div className="flex h-20 items-center justify-center rounded-md border border-slate-300 p-1">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-center text-base font-semibold">
                        <span className="mr-1">No Topics</span>
                        <HiViewGridAdd />
                      </div>
                      <div className="text-xs font-normal">
                        Add Topics to your repository
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'relative z-50 h-full w-full overflow-hidden rounded-[32px] border border-transparent bg-white p-5 group-hover:border-slate-300 dark:border-white/[0.2] dark:bg-card',
        className,
      )}
    >
      {children}
    </div>
  );
};
