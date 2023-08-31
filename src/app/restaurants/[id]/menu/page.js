import MenuPage from "@/components/Menu";

async function getData() {
  const data = await fetch(
    "https://oneassure-assignment.blr1.cdn.digitaloceanspaces.com/restaurant_data"
  );
  return data.json();
}

const Menu = async ({ params }) => {
  const data = await getData();
  const restaurantData = data.filter((d) => d.id === params.id);

  return <MenuPage data={restaurantData[0]} />;
};

export default Menu;
