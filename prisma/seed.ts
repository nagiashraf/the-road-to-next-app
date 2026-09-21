import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, TicketStatus } from "@/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const tickets = [
  {
    title: "Ticket 1",
    content: "This is the first ticket",
    status: TicketStatus.DONE,
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket",
    status: TicketStatus.OPEN,
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket",
    status: TicketStatus.IN_PROGRESS,
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log("DB Seed: Started seeding tickets...");
  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({ data: tickets });

  const t1 = performance.now();
  console.log(`DB Seed: Finished seeding tickets in ${t1 - t0}ms`);
};

seed();