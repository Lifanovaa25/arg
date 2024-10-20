import AllMining from '@/src/page/ProductsPage/page';
import { Metadata, ResolvingMetadata } from 'next';
type Props = {
  params: { category: string, equipment: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const category = params.category
  const equipment = params.equipment

  
  const result = await fetch(`https://royal-equipment.ae/api/GetPageWithProducts?PageUrl=/catalog/equipment/${category}/${equipment}/`).then((res) => res.json());

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: result.value?.SeoTitle || result.value?.category.label,
    description: result.value?.SeoDescription || result.value?.text,
    openGraph: {
      images: [result.value?.OgImage, ...previousImages],
      title: result.value?.OgTitle || result.value?.label,
      description: result.value?.OgDescription || result.value?.text,
    }
  }
}
export default function AllMiningEquipment({ params }: Props) {

  return (
    <AllMining />
  );
};
