import React, { useState } from "react";
import AlertBox from "./components/AlertBox.tsx";
import UserProfileCard from "./components/UserProfileCard.tsx";
import ProductDisplay from "./components/ProductDisplay.tsx";

import { User } from "./types";
import { Product } from "./types";

const App: React.FC = () => {
  // 🧠 Shared state across components
  const [alert, setAlert] = useState<string | null>(null);

  // 👤 User data
  const user: User = {
    id: "u1",
    name: "Tybrianna Hall",
    email: "tybrianna@example.com",
    role: "Property Manager",
  };

  // 🛍 Product data
  const product: Product = {
    id: "p1",
    name: "Smart Watch",
    price: 199.99,
    description: "Track your fitness and notifications",
    inStock: true,
  };

  // 🔁 Handlers (prop drilling happens here)
  const handleEditUser = (userId: string) => {
    setAlert(`Editing user with ID: ${userId}`);
  };

  const handleAddToCart = (productId: string) => {
    setAlert(`Added product ${productId} to cart`);
  };

  return (
    <div className="p-6 space-y-6">
      {/* 🔔 Alert (conditionally rendered) */}
      {alert && (
        <AlertBox
          type="success"
          message={alert}
          onClose={() => setAlert(null)}
        >
          <span>This action was successful.</span>
        </AlertBox>
      )}

      {/* 👤 User Profile Card */}
      <UserProfileCard user={user} onEdit={handleEditUser}>
        {/* 🧩 Nested content (children) */}
        <button className="text-sm text-purple-600">
          View Activity
        </button>
      </UserProfileCard>

      {/* 🛍 Product Display */}
      <ProductDisplay product={product} onAddToCart={handleAddToCart}>
        {/* 🧩 Nested content */}
        <p className="text-xs text-gray-500">
          Free shipping included
        </p>
      </ProductDisplay>
    </div>
  );
};

export default App;