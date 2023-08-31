import CartPage from "@/components/Cart";
import ProtectedRoute from "@/components/ProtectedRoute";

const Cart = async () => {
  return (
    <ProtectedRoute>
      <CartPage />
    </ProtectedRoute>
  );
};

export default Cart;
