import React from "react";
import ProductCardMain from "./ProductCardMain";
// import { ProductCardFullInfo } from "./ProductCardFullInfo";

import Image1 from "../../images/image-product-card-hero-antiox-cream.png";

export type Props = {
  name: string;
  imageUrl: string;
  imageAlt: string;
  rating: number;
  price: number;
  favourite: boolean;
  description: string;
};

const item = {
  name: "Антиоксидантний крем для обличчя",
  imageUrl: Image1,
  imageAlt: "antiox cream",
  rating: 4,
  price: 630,
  favourite: false,
  description:
    "При регулярному використанні колір обличчя стане більш рівномірним, а почервоніння і сухість менш вираженими. Крем попереджає появу зморшок, зневоднення і стоншування шкіри за допомогою потужних антиоксидантів з екстракту швейцарської сосни й чаю матча. Велика кількість протизапальних і протиалергійних компонентів допомагає позбутися подразнень і гіперчутливості.",
};

const ProductCard: React.FC = () => (
  <>
    <ProductCardMain
      name={item.name}
      imageUrl={item.imageUrl}
      imageAlt={item.imageAlt}
      rating={item.rating}
      price={item.price}
      favourite={item.favourite}
      description={item.description}
    />
    {/* <ProductCardFullInfo /> */}
  </>
);

export default ProductCard;
