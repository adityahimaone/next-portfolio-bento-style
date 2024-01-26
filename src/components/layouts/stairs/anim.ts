export const expand = {
  initial: {
    top: 0,
  },
  enter: (i: number) => ({
    top: '100vh',
    transition: {
      duration: 0.3,
      delay: 0.05 * i,
    },
    transitionEnd: {
      height: 0,
      top: 0,
    },
  }),
  exit: (i: number) => ({
    height: '100%',
    transition: {
      duration: 0.3,
      delay: 0.05 * i,
    },
  }),
};

export const overlay = {
  initial: {
    opacity: 0.5,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5,
  },
};
