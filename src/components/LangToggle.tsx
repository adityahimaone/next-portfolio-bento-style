import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const LangToggle = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const locale = useLocale();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleLocale = () => {
    if (locale === "en") {
      router.push("/id");
    } else {
      router.push("/en");
    }
  };

  if (locale === "undefined") return null;

  return isMounted ? (
    <SliderToggle selected={locale} setSelected={toggleLocale} />
  ) : null;
};

const SliderToggle = ({
  selected,
  setSelected,
}: {
  selected: string | undefined;
  setSelected: () => void;
}) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "en" ? "text-white" : "text-slate-300"
        }`}
        onClick={setSelected}
      >
        <Image
          src="/united-states.png"
          className="relative z-10"
          width={20}
          height={20}
          alt="english"
        />
        <span className="relative z-10">en</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "id" ? "text-white" : "text-slate-800"
        }`}
        onClick={setSelected}
      >
        <Image src="/indonesia.png" width={20} height={20} alt="indonesia" />
        <span className="relative z-10">id</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "id" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 shadow-md rounded-full bg-[linear-gradient(to_right,theme(colors.pallet-pink.1),theme(colors.pallet-pink.2),theme(colors.pallet-purple.1),theme(colors.pallet-purple.2),theme(colors.pallet-pink.1),theme(colors.pallet-pink.2),theme(colors.pallet-purple.1),theme(colors.pallet-pink.1))] bg-[length:200%_auto] animate-gradient"
        />
      </div>
    </div>
  );
};

export default LangToggle;
