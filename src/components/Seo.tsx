import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface ISeoProps {
    title: string | null | undefined;
}

export default function Seo({ title }: ISeoProps) {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return <title>{title} | {data.site?.siteMetadata?.title}</title>
}