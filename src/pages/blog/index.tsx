import { graphql, PageProps, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import React from "react"
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

export default function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  console.log(data.allMdx.nodes)
   return (
    <Layout title="Blog">
      <StaticImage
        width={500} 
        src="https://cdn.pixabay.com/photo/2021/11/29/15/01/christmas-6832802_960_720.jpg"
        alt="Christmas"
      />
      <p>The most recent news from my show.</p>
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.author} in: {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>
              <p>{file.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
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
  }
`;

export const Head = () => <Seo title="Blog" />