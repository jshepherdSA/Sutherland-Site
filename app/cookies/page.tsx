import type { Metadata } from "next";

import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How vote4aaron.com uses cookies and how to change your cookie choices.",
  alternates: { canonical: "/cookies" },
};

export default function Page() {
  return <PolicyPage slug="cookies" />;
}
