import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>

    <Link href="/builder">Newsletter Builder</Link>
  </Layout>
);

export default IndexPage;
