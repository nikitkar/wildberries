import { PRODUCT } from "../shared/data/product.data";
import { Content } from "./Content";

export default function Home() {
  return (
    <>
      {PRODUCT.map((value) => (
        <Content product={value} key={value.article} />
      ))}
    </>
  );
}
