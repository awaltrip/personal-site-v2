import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import { Layout } from '@components';
import * as styles from '@styles/main.module.scss';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="Page not found">
      <p>
        Sorry 😔, we couldn't find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code className={styles.code}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>
      </p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <>
    <title>Anna Waltrip Portfolio Site - Page Not Found</title>
    <meta name="description" content="Anna Waltrip Portfolio Site - 404 Page Not Found"/>
  </>
);

export default NotFoundPage;
