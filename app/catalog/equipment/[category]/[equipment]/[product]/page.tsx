import { NextPage, Metadata, ResolvingMetadata } from 'next';
import { Product } from '@/src/page/product/';

type Props = {
  params: { product: string, equipment: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {

  const equipment = params.equipment
  const product = params.product

  const result = await fetch(`https://royal-equipment.ae/api/GetProduct?Slug=/${equipment}/${product}/`).then((res) => res.json());

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: result.value?.SeoTitle || result.value?.label,
    description: result.value?.SeoDescription || result.value?.text,
    openGraph: {
      images: [result.value?.OgImage, ...previousImages],
      title: result.value?.OgTitle || result.value?.label,
      description: result.value?.OgDescription || result.value?.text,
    }
  }
}
export default function ProductPage({ params }: Props) {


  return  <Product />;
};


