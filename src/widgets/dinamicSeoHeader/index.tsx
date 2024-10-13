import Head from "next/head";
interface ISEO {
    title:string;
    description:string
    
}
const DynamicSeoHeader = ( {title, description} :  ISEO): React.ReactElement => {

  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default DynamicSeoHeader;