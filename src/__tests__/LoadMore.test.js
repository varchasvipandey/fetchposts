import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../components/App";

describe("Load More button", () => {
  test("Initial button text should be Loading...", () => {
    render(<App />);

    screen.getByRole("button", { name: "Loading..." });
  });

  test("Button text changes to Load More after posts are fetched", async () => {
    render(<App />);

    const posts = await screen.findAllByRole("listitem");
    expect(posts).toHaveLength(2);

    screen.getByRole("button", { name: "Load More" });
  });

  test("Button text changes on click", async () => {
    render(<App />);

    const posts = await screen.findAllByRole("listitem");
    expect(posts).toHaveLength(2);

    userEvent.click(screen.getByRole("button", { name: "Load More" }));
  });
});
