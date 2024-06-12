// pages/index.js o la página correspondiente
import { createClient } from "@/prismicio";
import Header from "@/components/Header";

export async function getStaticProps() {
  const client = createClient();
  const header = await client.getSingle("body");
  const navbar = await client.getSingle("navbar");

  return {
    props: {
      header,
      navbar,
    },
  };
}

export default function Home({ header, navbar }) {
  return (
    <div>
      <Header header={header} navbar={navbar} />
    </div>
  );
}
