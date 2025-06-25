import { getEventById } from "@/data/event";

export default async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const event = await getEventById(id);
  return <p>Hello from {event?.title}!</p>;
};
