import gql from "graphql-tag";
import { client } from "../src/apolloClient";
import { IndexPage } from "../src/index";

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`;

const Index = () => {
  return <IndexPage />;
};

export async function getStaticProps() {
  await client.query({
    query: ViewerQuery,
  });

  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}

export default Index;
