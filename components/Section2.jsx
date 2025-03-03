import Image from "next/image";

import Pic2 from "../public/3.jpg";
import { useTransform, motion } from "framer-motion";

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <Image src={Pic2} alt="img" placeholder="blur" fill />
    </motion.div>
  );
};

export default Section2;
