import { ApolloProvider } from "@apollo/client";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { initializeApollo } from "../apollo/client";
import { IndexPage } from "./index";

describe("index", () => {
  test("view index", async () => {
    render(
      <ApolloProvider client={initializeApollo()}>
        <IndexPage />
      </ApolloProvider>
    );

    screen.debug();

    expect(screen.queryByText(/cached/)).toBeInTheDocument();
  });
});
