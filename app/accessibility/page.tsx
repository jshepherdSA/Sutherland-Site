import type { Metadata } from "next";

import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Our commitment to making vote4aaron.com accessible to everyone, and how to report a problem.",
  alternates: { canonical: "/accessibility" },
};

export default function Page() {
  return <PolicyPage slug="accessibility" />;
}
