import { render } from "@testing-library/react"

import { Button } from "./Button"

describe("Button", () => {
  it("renders children in a button wrapper", async () => {
    const { getByText } = render(<Button>Button text</Button>)

    expect(getByText("Button text")).toHaveAttribute("type", "button")
  })

  it("renders type attribute", async () => {
    const { getByText } = render(<Button type="submit">Button text</Button>)

    expect(getByText("Button text")).toHaveAttribute("type", "submit")
  })
})
