import { useTransform, motion } from "framer-motion";
import Pic1 from "../public/4.jpg";
import Image from "next/image";

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0  h-screen bg-[#ACE123] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      <p>Lord Shiva</p>
      <div className="flex gap-4">
        <p>The</p>
        <div className="relative w-[12.5vw]">
          <Image src={Pic1} alt="img" placeholder="blur" fill />
        </div>
        <p>Destroyer</p>
      </div>
    </motion.div>
  );
};

export default Section1;
