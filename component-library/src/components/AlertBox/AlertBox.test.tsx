import { render, screen, fireEvent } from "@testing-library/react";
import AlertBox from "./AlertBox";

describe("AlertBox", () => {
  test("renders message correctly", () => {
    render(<AlertBox type="success" message="Success message" />);
    expect(screen.getByText("Success message")).toBeInTheDocument();
  });

  test("renders different alert types", () => {
    const { rerender } = render(
      <AlertBox type="success" message="Test" />
    );

    expect(screen.getByText("Test")).toBeInTheDocument();

    rerender(<AlertBox type="error" message="Error message" />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  test("calls onClose when button is clicked", () => {
    const mockClose = jest.fn();

    render(
      <AlertBox type="info" message="Closable alert" onClose={mockClose} />
    );

    fireEvent.click(screen.getByText("✕"));
    expect(mockClose).toHaveBeenCalledTimes(1);
  });

  test("renders children when provided", () => {
    render(
      <AlertBox type="warning" message="Warning">
        <span>Extra content</span>
      </AlertBox>
    );

    expect(screen.getByText("Extra content")).toBeInTheDocument();
  });
});