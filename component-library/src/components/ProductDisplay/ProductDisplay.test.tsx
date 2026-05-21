import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { ProductDisplay } from './ProductDisplay';

const mockProduct = {
  id: '1',
  name: 'Headphones',
  price: 199.99,
  description: 'Wireless headphones',
  inStock: true
};

describe('ProductDisplay', () => {
  test('renders product information', () => {
    render(
      <ProductDisplay product={mockProduct} />
    );

    expect(
      screen.getByText('Headphones')
    ).toBeInTheDocument();
  });

  test('calls onAddToCart', () => {
    const mockAdd = vi.fn();

    render(
      <ProductDisplay
        product={mockProduct}
        onAddToCart={mockAdd}
      />
    );

    fireEvent.click(
      screen.getByText('Add to Cart')
    );

    expect(mockAdd).toHaveBeenCalledWith('1');
  });
});