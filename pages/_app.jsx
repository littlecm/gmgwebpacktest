// pages/_app.jsx
import '../app/styles/globals.css'; // Import global styles
import Layout from '../app/layout'; // Import the layout component

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
