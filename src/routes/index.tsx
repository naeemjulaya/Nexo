import { createFileRoute } from "@tanstack/react-router";
import { NexoMockups } from "@/components/nexo-mockups";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <NexoMockups />;
}
