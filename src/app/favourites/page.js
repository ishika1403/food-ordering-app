import FavouritesPage from "@/components/Favourites";
import ProtectedRoute from "@/components/ProtectedRoute";

const Favourites = async () => {
  return (
    <ProtectedRoute>
      <FavouritesPage />
    </ProtectedRoute>
  );
};

export default Favourites;
