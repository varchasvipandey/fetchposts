import { render, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import { faker } from "@faker-js/faker";

import App from "../components/App";

fetchMock.enableMocks(); // changes global fetch to mock. Adds new properties to the prototype. Can be accessed using fetch dot

const postBuilder = () => ({
  id: faker.datatype.uuid(),
  userId: faker.datatype.uuid(),
  body: faker.internet.userName(),
  title: faker.internet.userName(),
});

const getPosts = (count) => {
  return [...Array(count)].map(() => postBuilder());
};

describe("Integration test for data fetching", () => {
  const setupApp = () => render(<App />);

  beforeEach(() => {
    fetch.resetMocks();
  }); // before running any other test in this suite, clear mocks

  it("Loads 10 posts on page load", async () => {
    const posts = getPosts(10);
    fetch.mockResponseOnce(JSON.stringify(posts));

    const { findAllByRole, findByText } = setupApp();

    // wait for API to resolve
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    const listItems = await findAllByRole("listitem");
    expect(listItems).toHaveLength(10);

    // randomly check any one post text on the DOM
    expect(await findByText(posts[5].title)).toBeInTheDocument();
  });
});
