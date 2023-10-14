import { render, screen } from '@testing-library/react';
import App from './App'
import userEvent from '@testing-library/user-event';

test("header render with correct text", () => {
  render(<App />)
  const headerEl = screen.getByRole("heading")
  expect(headerEl.textContent).toBe("Testing Playground")

})
describe('test for the button', () =>{
  test("button changes color when clicked", () => {
    render(<App />)
    const colorBtn = screen.getByRole("button")
    userEvent.click(colorBtn)
    expect(colorBtn).toHaveStyle({ backgroundColor: "blue" })
    expect(colorBtn.textContent).toBe("Change button color to green")
  })
}) 
