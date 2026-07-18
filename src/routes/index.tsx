import { createFileRoute } from "@tanstack/react-router";
import { MockupsGallery } from "@/components/gallery/MockupsGallery";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <MockupsGallery />;
}
