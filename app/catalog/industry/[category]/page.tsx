import CategoryPage from '@/src/page/categoryPage/page';
import { Metadata, NextPage, ResolvingMetadata } from 'next';


// const EquipmentCategoryPage: NextPage = () => {
  export default function IndustryCategoryPage({params}:Props) {
  return (
  <>
  <p> {JSON.stringify(params)}</p>
  <CategoryPage />
  </>);
};
// export default EquipmentCategoryPage

type Props = {
  params: { category: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.category
  

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const result = await fetch(`https://royal-equipment.ae/api/GetCategory?Slug=/catalog/industry/${id}/`)
  .then((res) => res.json());
 
const previousImages = (await parent).openGraph?.images || []

  return {
    title: result.value?.SeoTitle || result.value?.label  ,
    description: result.value?.SeoDescription || result.value?.text  ,

    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
      title: result.value?.SeoTitle || result.value?.label  ,
      description: result.value?.SeoDescription || result.value?.text  ,
    },
  }
}






