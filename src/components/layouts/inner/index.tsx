'use client';

import { motion } from 'framer-motion';
import React from 'react';
import styles from './index.module.scss';
import { opacity, slide, perspective } from './anim';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
};

const Inner = ({ children }: Props) => {
  const anim = (variants: any) => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      variants,
    };
  };

  return (
    <div className={cn('bg-black dark:bg-slate-700', styles.inner)}>
      <motion.div className={styles.slide} {...anim(slide)} />
      <motion.div className={styles.page} {...anim(perspective)}>
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </motion.div>
    </div>
  );
};

export default Inner;
