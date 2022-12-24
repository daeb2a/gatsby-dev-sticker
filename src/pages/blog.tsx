import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

function Blog({ data }: PageProps<Queries.BlogTitlesQuery>) { 
   return (
    <Layout title="Blog">
      <p>The most recent news from my show.</p>
      <ul>
        {data.allFile.nodes.map((file, index) => <li key={index}>{file.name}</li>)}
      </ul>
    </Layout>
   );
}

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />

export default Blog; 