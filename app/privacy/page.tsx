import type { Metadata } from "next";

import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Aaron Sutherland for Newport City Commission collects, uses, and protects information on vote4aaron.com.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <PolicyPage slug="privacy" />;
}
