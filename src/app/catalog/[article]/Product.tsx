"use client";

import { PRODUCT } from "@/app/shared/data/product.data";
import Image from "next/image";
import { useParams } from "next/navigation";

export function Product() {
  const params = useParams<{ article: string }>();

  const articleQuery = Number(params.article) - 1;

  return (
    <div className="product">
      <Image
        className="product-img"
        src={PRODUCT[articleQuery].img}
        width={600}
        height={400}
        alt="изображение товара"
      />
      <p className="product-brend">{PRODUCT[articleQuery].brend}</p>
      <p className="product-price">Цена: {PRODUCT[articleQuery].price} р.</p>
      <p className="product-article">
        Артикул: {PRODUCT[articleQuery].article}
      </p>
    </div>
  );
}
