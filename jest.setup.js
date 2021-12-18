import '@testing-library/jest-dom/extend-expect';
import 'isomorphic-unfetch';
import { server } from './mocks/server';
import { client } from "./src/apolloClient";

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen({
    onUnhandledRequest(req) {
      console.error(
        'Found an unhandled %s request to %s',
        req.method,
        req.url.href,
      )
    },
  })
  server.printHandlers()
})

beforeEach(() => {
  // Ensure Apollo cache is cleared between tests.
  // https://www.apollographql.com/docs/react/api/core/ApolloClient/#ApolloClient.clearStore
  return client.clearStore()
})

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers()
})

afterAll(() => {
  // Clean up once the tests are done.
  server.close()
})