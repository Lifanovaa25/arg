import CategoryPage from '@/src/page/categoryPage/page';
import { Metadata, NextPage, ResolvingMetadata } from 'next';


type Props = {
  params: { category: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const category = params.category

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/GetCategory?Slug=/catalog/industry/${category}/`)
  if (response.ok) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/GetCategory?Slug=/catalog/industry/${category}/`).then((res) => res.json());

    const previousImages = (await parent).openGraph?.images || []

    return {
      title: result.value?.SeoTitle || (result.value?.label)?.replace(/<[^>]*>/g, ''),
      description: result.value?.SeoDescription || (result.value?.text)?.replace(/<[^>]*>/g, ''),
      openGraph: {
        images: [result.value?.OgImage, ...previousImages],
        title: result.value?.OgTitle || result.value?.label,
        description: result.value?.OgDescription || result.value?.text,
      },
    }
  }
  return {};
}
export default function IndustryCategoryPage({ params }: Props) {
  return (
    <CategoryPage />
  );
};








