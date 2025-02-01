import { SVGProps } from "react";
import { TfiHome } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const iconsTable = {
  arrowDown: IoIosArrowDown,
  arrowLeft: MdOutlineArrowBackIosNew,
  arrowRight: MdOutlineArrowForwardIos,
  close: IoClose,
  closeQuotation: BiSolidQuoteAltRight,
  home: TfiHome,
  openQuotation: BiSolidQuoteAltLeft,
};

export const Icons = Object.entries(iconsTable).reduce(
  (icons, [key, Component]) => {
    icons[key] = (props: SVGProps<SVGSVGElement>) => (
      <Component className="font-icon" {...props} />
    );
    return icons;
  },
  {} as Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element>
);
