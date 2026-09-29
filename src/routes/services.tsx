/**
 * /services — legacy path, redirects to /platform.
 *
 * The campaign renamed "Services" to "Platform" (The H.A.T. Agenda).
 * This redirect preserves any bookmarks or external links to /services.
 */
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  beforeLoad: () => {
    throw redirect({ to: "/platform", replace: true });
  },
});
