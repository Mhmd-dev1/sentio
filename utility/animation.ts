// export const SlideUp = (delay) => {
//   return {
//     hidden: {
//       opacity: 0,
//       y: 100,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 1,
//         delay,
//       },
//     },
//   };
// };
// export const SlideBottom = (delay) => {
//   return {
//     hidden: {
//       opacity: 0,
//       y: -100,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 1,
//         delay,
//       },
//     },
//   };
// };

// utility/animation.ts
import { Variants } from "framer-motion";

export const SlideBottom = (delay: number): Variants => ({
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay,
    },
  },
});

export const SlideUp = (delay: number): Variants => ({
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay,
    },
  },
});
