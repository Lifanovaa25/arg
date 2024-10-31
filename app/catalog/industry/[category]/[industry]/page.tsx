import AllMining from '@/src/page/ProductsPage/page';
import { Metadata, ResolvingMetadata } from 'next';
type Props = {
  params: { category: string, industry: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const category = params.category
  const industry = params.industry
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/GetPageWithProducts?PageUrl=/catalog/industry/${category}/${industry}/`)
   if (response.ok) {


    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/GetPageWithProducts?PageUrl=/catalog/industry/${category}/${industry}/`).then((res) => res.json());

    const previousImages = (await parent).openGraph?.images || []

    return {
      title: result.value?.SeoTitle || (result.value?.category.label)?.replace(/<[^>]*>/g, ''),
      description: result.value?.SeoDescription || (result.value?.text)?.replace(/<[^>]*>/g, ''),
      openGraph: {
        images: [result.value?.OgImage, ...previousImages],
        title: result.value?.OgTitle || result.value?.label,
        description: result.value?.OgDescription || result.value?.text,
      }
    }
  }
  return {}
}
export default function AllMiningEquipment({ params }: Props) {

  return (
    <AllMining />
  );
};
