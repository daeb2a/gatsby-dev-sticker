import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

interface IBlogPostProps {
  data: Queries.PostDetailQuery,
  children: any,
}
export default function BlogPost({ data, children }:IBlogPostProps) {
  console.log(data);
  return (
    <Layout title="">
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug }}) {
      frontmatter {
        slug
        author
        category 
        date(formatString: "YYYY.MM.DD")
        title
      }
      excerpt(pruneLength: 50)
    }
  }
`;

export const Head = ({data}:IBlogPostProps) => <Seo title={data.mdx?.frontmatter?.title} />