import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import LinkMemojiResume from './LinkMemojiResume';

const About = () => {
  const t = useTranslations('about');

  return (
    <div className="flex flex-1 flex-col gap-y-3">
      <LinkMemojiResume />
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-base leading-relaxed"
      >
        {t('intro')}{' '}
        <span className="font-mochi text-lg font-bold md:text-2xl">
          {t('name')}
        </span>
        , {t('description')}
      </motion.p>
    </div>
  );
};

export default About;
