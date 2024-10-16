import Title from "@/src/shared/ui/Title/Title";
import Head from "next/head";
interface ISEO {
  title: string;
  description: string

}
const DynamicSeoHeader = ({ title, description }: ISEO): React.ReactElement => {

// alert(title)
  return (

    <Head>
      <title>{title}</title>
      <meta name={description}
        content={description} />
      <meta property="og:title"
        content={title} />
      <meta property="og:description"
        content={description} />
        <meta property="og:title"
             content="My Page Title" />
      
    </Head>
  );
};

export default DynamicSeoHeader;