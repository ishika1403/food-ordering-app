import Image from "next/image";
// import styles from "./page.module.css";

export default function Restaurants({ params }) {
  return <h1>{`This is the Restaurants page id : ${params.id}`}</h1>;
}
