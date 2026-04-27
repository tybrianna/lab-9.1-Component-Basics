import { render, screen, fireEvent } from "@testing-library/react";
import ProductDisplay from "./ProductDisplay";

const mockProduct = {
  id: "p1",
  name: "Laptop",
  price: 999.99,
  description: "High performance laptop",
  inStock: true,
};

describe("ProductDisplay", () => {
  test("renders product name and price", () => {
    render(<ProductDisplay product={mockProduct} />);
    expect(screen.getByText("Laptop")).toBeInTheDocument();
    expect(screen.getByText("$999.99")).toBeInTheDocument();
  });

  test("hides description when showDescription is false", () => {
    render(
      <ProductDisplay product={mockProduct} showDescription={false} />
    );
    expect(
      screen.queryByText("High performance laptop")
    ).not.toBeInTheDocument();
  });

  test("shows out of stock message", () => {
    render(
      <ProductDisplay
        product={{ ...mockProduct, inStock: false }}
      />
    );

    expect(screen.getByText("Out of Stock")).toBeInTheDocument();
  });

  test("calls onAddToCart when clicked", () => {
    const mockAdd = jest.fn();

    render(
      <ProductDisplay product={mockProduct} onAddToCart={mockAdd} />
    );

    fireEvent.click(screen.getByText("Add to Cart"));
    expect(mockAdd).toHaveBeenCalledWith("p1");
  });

  test("does not show Add to Cart if out of stock", () => {
    render(
      <ProductDisplay
        product={{ ...mockProduct, inStock: false }}
        onAddToCart={jest.fn()}
      />
    );

    expect(
      screen.queryByText("Add to Cart")
    ).not.toBeInTheDocument();
  });

  test("renders children", () => {
    render(
      <ProductDisplay product={mockProduct}>
        <span>Extra Info</span>
      </ProductDisplay>
    );

    expect(screen.getByText("Extra Info")).toBeInTheDocument();
  });
});