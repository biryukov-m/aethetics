import React from "react";
import ProductCardRelatedProductsItem from "./ProductCardRelatedProductsItem";
import ImageCataloguePage5 from "../../images/image-catalogue-page-5-moisturizing-cream.png";
import ImageCataloguePage9 from "../../images/image-catalogue-page-9-mattifying-cream.png";
import ImageCataloguePage10 from "../../images/image-catalogue-page-10-night-anti-aging-cream.png";

const items = [
  {
    id: 5,
    imageUrl: ImageCataloguePage5,
    imageAlt: "moisturizing-cream",
    name: "Зволожуючий крем для сухої шкіри",
    price: 830,
  },
  {
    id: 9,
    imageUrl: ImageCataloguePage9,
    imageAlt: "mattifying cream",
    name: "Матуючий денний крем для жирної шкіри",
    price: 680,
  },
  {
    id: 10,
    imageUrl: ImageCataloguePage10,
    imageAlt: "night anti aging cream",
    name: "Нічний антивіковий крем для сухої шкіри",
    price: 860,
  },
];

const ProductCardRelatedProducts: React.FC = () => {
  const itemsComponents = items.map((item) => (
    <ProductCardRelatedProductsItem
      imageUrl={item.imageUrl}
      imageAlt={item.imageAlt}
      name={item.name}
      price={item.price}
      id={item.id}
    />
  ));
  return (
    <section className="more-products related-products">
      <div className="layout">
        <div className="wrapper">
          <h3>Схожі товари:</h3>
          <div className="items">{itemsComponents}</div>
        </div>
      </div>
    </section>
  );
};

export default ProductCardRelatedProducts;
