import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import _ from 'lodash';

import Layout from '../components/layout';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const { previous, next } = this.props.pathContext;
    const tags = post.frontmatter.tags || [];

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className="blog-post mid-column">
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <hr />

          {tags.length > 0 ? (
            <div className="tags">
              Tags:
              {tags.map((tag, index) => (
                <Link
                  to={`/tags/${_.kebabCase(tag)}`}
                  key={index}
                  className="tag">
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
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
