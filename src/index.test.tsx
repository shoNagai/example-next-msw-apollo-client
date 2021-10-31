import { ApolloProvider } from "@apollo/client";
import "@testing-library/jest-dom/extend-expect";
import { act, render, screen } from "@testing-library/react";
import { initializeApollo } from "../apollo/client";
import { IndexPage } from "./index";

async function wait(ms = 0) {
  await act(() => {
    // you could use wait here instead if you prefer
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  });
}
describe("index", () => {
  test("view index", async () => {
    render(
      <ApolloProvider client={initializeApollo()}>
        <IndexPage />
      </ApolloProvider>
    );

    await wait();

    screen.debug();

    expect(screen.queryByText(/cached/)).toBeInTheDocument();
  });
});
