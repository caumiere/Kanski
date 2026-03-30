import { redirect } from "next/navigation";

type WritingPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WritingPage({ params }: WritingPageProps) {
  const { slug } = await params;
  redirect(`/work/${slug}`);
}
