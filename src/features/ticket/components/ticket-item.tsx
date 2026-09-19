import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/paths";
import Link from "next/link";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="w-4 h-4" />
      </Link>
    </Button>
  );

  return (
    <div className={clsx("w-full flex gap-x-1", {
      "max-w-[580]": isDetail,
      "max-w-[420]": !isDetail,
    })}>
      <Card key={ticket.id} className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <h3 className="text-lg font-semibold truncate">{ticket.title}</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className={clsx("whitespace-break-spaces", {
            "line-clamp-3": !isDetail
          })}>
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      {!isDetail && detailButton}
    </div>
  );
};

export { TicketItem };