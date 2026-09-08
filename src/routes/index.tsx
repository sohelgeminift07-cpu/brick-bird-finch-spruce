import { createFileRoute } from "@tanstack/react-router";
import { Presentation } from "@/components/presentation";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Presentation />;
}
