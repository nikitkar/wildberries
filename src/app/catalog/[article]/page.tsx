import type { Metadata } from "next";
import { Product } from "./Product";

export const metadata: Metadata = {
  title: "Product",
};

export default function ProductPage() {
  return <Product />;
}
