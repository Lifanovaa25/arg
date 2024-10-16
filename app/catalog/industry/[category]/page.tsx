"use client";
import DynamicSeoHeader from '@/src/widgets/dinamicSeoHeader';
import { NextPage } from 'next';
import { CategoryPage } from '@/src/page/categoryPage/page';

// Описание типов для данных, возвращаемых API
interface Subcategory {
  name: string;
  url: string;
  image: string;
}

interface ApiResponse {
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
  };
  SeoTitle: string,
  SeoDescription: string,
  SeoCanonical: string
}

const IndustryCategoryPage: NextPage =  () => {
 
 
  return (
    <CategoryPage/>
  );
};

export default IndustryCategoryPage;
