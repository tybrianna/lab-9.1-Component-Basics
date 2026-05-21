import { useState } from 'react';

import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const user = {
    id: '1',
    name: 'Ty',
    email: 'Tyh01@example.com',
    role: 'Software Engineer',
    avatarUrl:
      'https://via.placeholder.com/100'
  };

  const product = {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    description:
      'High-quality wireless headphones.',
    imageUrl:
      'https://via.placeholder.com/150',
    inStock: true
  };

  const handleAddToCart = (
    productId: string
  ) => {
    alert(`Added product ${productId}`);
    setShowAlert(true);
  };

  return (
    <div style={{ padding: '2rem' }}>
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        >
          <p>Item successfully added.</p>
        </AlertBox>
      )}

      <div
        style={{
          display: 'grid',
          gap: '2rem'
        }}
      >
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(id) =>
            alert(`Editing user ${id}`)
          }
        >
          <small>Last login: 2 hours ago</small>
        </UserProfileCard>

        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        >
          <small>
            Free shipping available
          </small>
        </ProductDisplay>
      </div>
    </div>
  );
}

export default App;