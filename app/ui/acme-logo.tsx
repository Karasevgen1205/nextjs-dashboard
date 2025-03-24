import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import styles from "./home.module.css";

interface IAcmeLogoProps {
  isSkipAnimate?: boolean;
}

export default function AcmeLogo({ isSkipAnimate }: IAcmeLogoProps) {
  // ${isSkipAnimate ? styles.typewriter : ""}
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white p-2`}
    >
      <GlobeAltIcon className="h-8 w-8 md:h-12 md:w-12 rotate-[15deg]" />
      <h1 className={`text-[22px] md:text-[44px] pl-3`}>Evgeniy Karas</h1>
    </div>
  );
}
