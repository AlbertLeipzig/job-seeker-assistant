import { SVGProps } from "react";

import {
  MdRemoveRedEye,
  MdCheck,
  MdOutlineUTurnLeft,
  MdOutlineAdd,
  MdClear,
  MdCreate,
  MdDelete,
  MdEditDocument,
  MdOutlineFeedback,
  MdOutlineInsertLink,
  MdLink,
} from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { TiArrowUnsorted } from "react-icons/ti";

const iconsTable = {
  calendar: FaCalendarAlt,
  close: MdClear,
  delete: MdDelete,
  eye: MdRemoveRedEye,
  feedback: MdOutlineFeedback,
  link1: MdLink,
  link2: MdOutlineInsertLink,
  notes: MdEditDocument,
  ok: MdCheck,
  pencil: MdCreate,
  plus: MdOutlineAdd,
  sort: TiArrowUnsorted,
  undo: MdOutlineUTurnLeft,
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
