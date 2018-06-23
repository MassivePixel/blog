import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import rehypeReact from 'rehype-react';
import Demos from '../pages/2018-forms-in-react/demos';

import './demos.css';

class BlogPostTemplatePart1 extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const { previous, next } = this.props.pathContext;
    const tags = post.frontmatter.tags || [];

    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        demo: Demos,
      },
    }).Compiler;

    return (
      <div className="blog-post mid-column">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>

        {renderAst(post.htmlAst)}
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}

        <hr />

        {tags.length > 0 ? (
          <div className="tags">
            Tags:
            {tags.map((tag, index) => (
              <Link to={`/tags/${tag}`} key={index} className="tag">
                {tag}
              </Link>
            ))}
          </div>
        ) : null}

        <hr />

        <ul>
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default BlogPostTemplatePart1;

export const pageQueryWithAst = graphql`
  query BlogPostBySlugWithAst($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
