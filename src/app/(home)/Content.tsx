import Link from "next/link";
import type { IProduct } from "../shared/types/product.interface";
import { PAGES } from "../config/pages.config";

interface Props {
  product: IProduct;
}

export function Content({ product }: Props) {
  return (
    <section className="content">
      <div className="content-wrapper">
        <article className="product">
          <Link className="product-card" href={PAGES.PRODUCT(product.article)}>
            <p className="product-brend">{product.brend}</p>
          </Link>
        </article>
      </div>
    </section>
  );
}
