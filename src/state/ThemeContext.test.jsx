import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, useTheme } from "./ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme-state">{theme}</span>
      <button type="button" onClick={toggleTheme}>
        Basculer
      </button>
    </div>
  );
}

test("le theme par defaut suit la preference systeme (clair par defaut)", () => {
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );

  expect(screen.getByTestId("theme-state")).toHaveTextContent("light");
  expect(document.documentElement).toHaveAttribute("data-theme", "light");
});

test("le basculement bascule le theme et le persiste", async () => {
  window.localStorage.setItem("prepreact.theme", "dark");
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );

  const toggle = screen.getByRole("button", { name: /Basculer/i });
  await userEvent.click(toggle);

  expect(screen.getByTestId("theme-state")).toHaveTextContent("light");
  expect(document.documentElement).toHaveAttribute("data-theme", "light");
  expect(window.localStorage.getItem("prepreact.theme")).toBe("light");
});
