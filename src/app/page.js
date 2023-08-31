import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "@/components/Home";

async function getData() {
  const data = await fetch(
    "https://oneassure-assignment.blr1.cdn.digitaloceanspaces.com/restaurant_data"
  );
  return data.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <LandingPage data={data} />
    </>
  );
}
