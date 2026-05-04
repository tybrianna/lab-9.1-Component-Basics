import React, { useState } from "react";
import AlertBox from "./components/AlertBox";
import UserProfileCard from "./components/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay";

import { User, Product } from "./types";

const App: React.FC = () => {
  const [alert, setAlert] = useState<string | null>(null);

  const user: User = {
    id: "u1",
    name: "Tybrianna Hall",
    email: "tybrianna@example.com",
    role: "Property Manager",
  };

  const product: Product = {
    id: "p1",
    name: "Smart Watch",
    price: 199.99,
    description: "Track your fitness and notifications",
    inStock: true,
  };

  const handleEditUser = (userId: string) => {
    setAlert(`Editing user with ID: ${userId}`);
  };

  const handleAddToCart = (productId: string) => {
    setAlert(`Added product ${productId} to cart`);
  };

  return (
    <div className="p-6 space-y-6">
      {alert && (
        <AlertBox
          type="success"
          message={alert}
          onClose={() => setAlert(null)}
        >
          <span>This action was successful.</span>
        </AlertBox>
      )}

      <UserProfileCard user={user} onEdit={handleEditUser}>
        <button className="text-sm text-purple-600">
          View Activity
        </button>
      </UserProfileCard>

      <ProductDisplay product={product} onAddToCart={handleAddToCart}>
        <p className="text-xs text-gray-500">
          Free shipping included
        </p>
      </ProductDisplay>
    </div>
  );
};

export default App;