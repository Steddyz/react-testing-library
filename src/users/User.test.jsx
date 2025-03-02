import { render } from "@testing-library/react";
import User from "./User";
import axios from "axios";

jest.mock("axios");

describe("User Test", () => {
  test("renders learn react link", () => {
    render(<User />);

    let response;
    beforeEach(() => {
      response = {
        data: [
          {
            id: 1,
            name: "Leanne Graham",
          },
          {
            id: 2,
            name: "Ervin Howell",
          },
          {
            id: 3,
            name: "Clementine Bauch",
          },
        ],
      };
    });

    test("renders learn react link", async () => {
      axios.get.mockReturnValue(response);
      render(<User />);
      const users = await screen.findAllByTestId("username-element");
      expect(users.length).toBe(3);
      expect(axios.get).toBeCalledTime(1);
      screen.debug();
    });
  });
});
