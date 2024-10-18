
import AllMining from '@/src/page/ProductsPage/page';
import { Metadata, ResolvingMetadata } from 'next';

const AllMiningEquipment: React.FC = () => {
  
  return (
   <AllMining/>
  );
};
export default AllMiningEquipment



type Props = {
  params: { id: string ,slug:string}
  searchParams: { key: string | string[] | undefined }
}
interface ApiResponse {
  json(): ApiResponse | PromiseLike<ApiResponse>;
  isSuccess: boolean;
  isFailure: boolean;
  error?: {
    code: string;
    description: string;
    type: string;
  };
  value?: {
    label: string;
    text: string;
    subcategories: Subcategory[];
    SeoTitle: string,
    SeoDescription: string,
    SeoCanonical: string
  };

}
interface Subcategory {
  name: string;
  url: string;
  image: string;
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
  const slug = params.slug
  const key = searchParams.key

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const resp = await fetch((`https://royal-equipment.ae/api/GetCategory?Slug=/catalog/equipment/${params.id}/`), {
    headers: myHeaders,
    method: 'GET',
    // ...
  })
  // .then((res) => res.json());
const previousImages = (await parent).openGraph?.images || []

  return {
    title:resp.url ,

    // title:resp.value.SeoTitle|| resp.value.label ,
    // description:resp.value.SeoDescription|| resp.value.text ,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
      // title:resp.value.SeoTitle|| resp.value.label ,
      // description:resp.value.SeoDescription|| resp.value.text ,
    },
  }
}



