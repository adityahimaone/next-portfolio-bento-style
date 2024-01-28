import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import LinkMemojiResume from './LinkMemojiResume';
import { mochiy_pop_one } from '@/lib/fonts';
import { cn } from '@/lib/utils';

const About = () => {
  const t = useTranslations('about');

  return (
    <div className="flex flex-1 flex-col gap-y-3">
      <LinkMemojiResume />
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-justify text-sm leading-relaxed sm:text-base"
      >
        {t('intro')}{' '}
        <span
          className={cn(
            'text-base font-bold md:text-2xl',
            mochiy_pop_one.className,
          )}
        >
          {t('name')}
        </span>
        , {t('description')}
      </motion.p>
    </div>
  );
};

export default About;
