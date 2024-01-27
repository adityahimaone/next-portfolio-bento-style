import React from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.scss';
import { overlay, expand } from './anim';

type Props = {
  children: React.ReactNode;
};

const Stairs = ({ children }: Props) => {
  // custom will be index
  const anim = (variants: any, custom?: number) => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      variants,
      custom,
    };
  };

  const numberOfStairs = 5;
  return (
    <div className={`page ${styles.stairs}`}>
      <motion.div {...anim(overlay)} className={styles.background}></motion.div>
      <div className={styles['transition-container']}>
        {[...Array(numberOfStairs)].map((_, i) => {
          return <motion.div {...anim(expand, numberOfStairs - i)} key={i} />;
        })}
      </div>
      {children}
    </div>
  );
};

export default Stairs;
