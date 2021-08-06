import "../styles/globals.css";
import { Provider, createClient } from "urql";
const client = createClient({
  url: "http://localhost:9000/graphql",
  fetchOptions: {
    credentials: "include",
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
