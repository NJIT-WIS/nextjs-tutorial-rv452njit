import Date from '../../components/date';
import Link from "next/link";
import Router, { useRouter } from 'next/router';
export default function Post({ postData }) {
    const router = useRouter();
    const data = router.query;
  return (
    <div className='font-size24'>
      Title: {data.title}
      <br />
      Id: {data.ids}
      <br />
      Date: {data.date}
      <br />
      Description: {data.description}
      <br />
      <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
    <footer>
      <Link role="link" href={'/'}>Go Back</Link>
    </footer>
    </div>
  );
}

export const getServerSideProps = ({ params }) => {
    const description = { params }
    return {
      props: {
        postData: params
      }
    }
  }