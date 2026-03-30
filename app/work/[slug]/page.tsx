import { notFound } from "next/navigation";
import { PalmerWorkDetailPage } from "@/components/palmer-pages";
import { getEntryBySlug, portfolioEntries } from "@/components/site-data";

type WorkDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioEntries.map((entry) => ({
    slug: entry.slug,
  }));
}

export default async function WorkDetailPage({ params }: WorkDetailProps) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  return <PalmerWorkDetailPage entry={entry} />;
}
