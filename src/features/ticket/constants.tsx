import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";
import { ReactElement } from "react";

export const TICKET_ICONS: {[key: string]: ReactElement} = {
  OPEN: <LucideFileText />,
  IN_PROGRESS: <LucidePencil />,
  DONE: <LucideCircleCheck />,
};