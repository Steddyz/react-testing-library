import userEvent from "@testing-library/user-event";
import { App } from "./App";

describe("Test Router", () => {
  test("renders learn react link", () => {
    render(<App />);

    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");

    userEvent.click(aboutLink);

    expect(screenTop.getByTestId("about-page")).toBeInTheDocument();

    userEvent.click(mainLink);
    expect(screenTop.getByTestId("main-page")).toBeInTheDocument();
  });
});
