// https://blog.olivierlarose.com/articles/nextjs-page-transition-guide
'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { text, curve, translate } from './anim';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface IRoute {
  [key: string]: string;
}

const routes: IRoute = {
  '/en': 'Home',
  '/en/repository': 'Repository',
};

type Props = {
  children: React.ReactNode;
};

const anim = (variants: any) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  };
};

const Curve = ({ children }: Props) => {
  const router = usePathname();
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  console.log(router, 'router');

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    resize();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className={`page ${styles.curve}`}>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className={styles.background}
      />
      <motion.p className={cn('font-mochi', styles.route)} {...anim(text)}>
        {routes[router]}
      </motion.p>
      {dimensions.width > 0 && <SVG {...dimensions} />}
      {children}
    </div>
  );
};

const SVG = ({ width, height }: { width: number; height: number }) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
`;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
`;

  return (
    <motion.svg className={styles.transition} {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};

export default Curve;
