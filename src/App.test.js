// import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// import App from "./App";

// describe("Test App", () => {
//   test("renders learn react link", () => {
//     render(<App />);
//     const helloWorldElement = screen.getByText(/hello world/i);
//     const btn = screen.getByRole("button");
//     const input = screen.getByPlaceholderText(/input value/i);

//     expect(helloWorldElement).toBeInTheDocument();
//     expect(btn).toBeInTheDocument();
//     expect(input).toMatchSnapshot();
//   });
//   test("renders learn react link", async () => {
//     render(<App />);
//     // const helloWorldElement = screen.queryByText(/hello5252/i);
//     // expect(helloWorldElement).toBeNull();
//     screen.debug();
//     const helloWorldElem = await screen.findByText(/data/i);
//     expect(helloWorldElem).toBeInTheDocument();
//     expect(helloWorldElem).toHaveStyle({ color: "red" });
//     screen.debug();
//   });
//   test("Button Event", () => {
//     render(<App />);

//     const btn = screen.getByTestId("toggle-btn");
//     expect(screen.queryByTestId("toggle-element")).toBeNull();
//     fireEvent.click(btn);
//     expect(screen.queryByTestId("toggle-element")).toBeInTheDocument();
//     fireEvent.click(btn);
//     expect(screen.queryByTestId("toggle-element")).toBeNull();
//   });
//   test("Input Event", () => {
//     render(<App />);

//     const input = screen.getByPlaceholderText(/input value/i);
//     expect(screen.queryByTestId("value-element")).toContainHTML("");
//     // Искуственное событие
//     // fireEvent.input(input, { target: { value: "123123" } });

//     // Воспроизводит действия пользователя
//     userEvent.type(input, "123123");

//     expect(screen.queryByTestId("value-element")).toContainHTML("123123");
//   });
// });
