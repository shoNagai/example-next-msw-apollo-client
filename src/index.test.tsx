import { ApolloProvider } from "@apollo/client";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import { client } from "./apolloClient";
import { IndexPage } from "./index";

describe("index", () => {
  test("view index", async () => {
    render(
      <ApolloProvider client={client}>
        <IndexPage />
      </ApolloProvider>
    );

    await waitFor(async () => {
      expect(screen.queryByText(/cached/)).toBeInTheDocument();
    });
  });
});
