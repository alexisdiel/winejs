import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ButtonComponent } from "../../index";

test("Renders", async () => {
  const { getByRole } = render(<ButtonComponent />);
  expect(getByRole("heading")).toHaveTextContent("Base Component");
});
