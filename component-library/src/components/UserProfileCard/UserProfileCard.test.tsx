import { render, screen, fireEvent } from "@testing-library/react";
import UserProfileCard from "./UserProfileCard";

const mockUser = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  role: "Admin",
};

describe("UserProfileCard", () => {
  test("renders user name", () => {
    render(<UserProfileCard user={mockUser} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  test("hides email when showEmail is false", () => {
    render(<UserProfileCard user={mockUser} showEmail={false} />);
    expect(screen.queryByText("john@example.com")).not.toBeInTheDocument();
  });

  test("hides role when showRole is false", () => {
    render(<UserProfileCard user={mockUser} showRole={false} />);
    expect(screen.queryByText("Admin")).not.toBeInTheDocument();
  });

  test("calls onEdit when button is clicked", () => {
    const mockEdit = jest.fn();

    render(<UserProfileCard user={mockUser} onEdit={mockEdit} />);
    fireEvent.click(screen.getByText("Edit Profile"));

    expect(mockEdit).toHaveBeenCalledWith("1");
  });

  test("renders children", () => {
    render(
      <UserProfileCard user={mockUser}>
        <button>Custom Action</button>
      </UserProfileCard>
    );

    expect(screen.getByText("Custom Action")).toBeInTheDocument();
  });
});