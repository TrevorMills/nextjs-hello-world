import Layout from '../../components/layout';
import { getAllPostIds,getPostData } from '../../lib/posts';
import Link from "next/link";
import Head from "next/head";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}
export default function Post({ postData }) {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <h1>{postData.title}</h1>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>;
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}