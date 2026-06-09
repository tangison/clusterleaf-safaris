import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safari Packages | Cluster Leaf Safaris - Custom Namibia & Botswana Tours",
  description:
    "Explore our curated safari packages across Namibia, Botswana, Zimbabwe & Zambia. From classic game drives to photographic expeditions, find your perfect African adventure.",
  openGraph: {
    title: "Safari Packages | Cluster Leaf Safaris",
    description:
      "Explore our curated safari packages across Namibia, Botswana, Zimbabwe & Zambia.",
    url: "https://www.clusterleafsafaris.com/safaris",
  },
  alternates: {
    canonical: "https://www.clusterleafsafaris.com/safaris",
  },
};

export default function SafarisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
