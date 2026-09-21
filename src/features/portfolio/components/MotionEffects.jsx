import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function MotionEffects() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const firstOrbY = useTransform(scrollYProgress, [0, 1], [0, 420]);
  const secondOrbY = useTransform(scrollYProgress, [0, 1], [0, -320]);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <div className="ambient-motion" aria-hidden="true">
        <motion.span className="ambient-orb ambient-orb-one" style={{ y: firstOrbY }} />
        <motion.span className="ambient-orb ambient-orb-two" style={{ y: secondOrbY }} />
      </div>
    </>
  );
}
