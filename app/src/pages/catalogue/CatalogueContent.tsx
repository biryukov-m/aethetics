import React from "react";
import CatalogueContentItem from "./CatalogueContentItem";

import ImageCataloguePage1 from "../../images/image-catalogue-page-1-fluid.png";
import ImageCataloguePage2 from "../../images/image-catalogue-page-2-antiox-cream.png";
import ImageCataloguePage3 from "../../images/image-catalogue-page-3-shower-gel.png";
import ImageCataloguePage4 from "../../images/image-catalogue-page-4-moisturizing serum.png";
import ImageCataloguePage5 from "../../images/image-catalogue-page-5-moisturizing-cream.png";
import ImageCataloguePage6 from "../../images/image-catalogue-page-6-face-tonic.png";
import ImageCataloguePage7 from "../../images/image-catalogue-page-7-cleaning-foam.png";
import ImageCataloguePage8 from "../../images/image-catalogue-page-8-day-night-cream.png";
import ImageCataloguePage9 from "../../images/image-catalogue-page-9-mattifying-cream.png";
import ImageCataloguePage10 from "../../images/image-catalogue-page-10-night-anti-aging-cream.png";
import ImageCataloguePage11 from "../../images/image-catalogue-page-11-make-up-remover-gel.png";
import ImageCataloguePage12 from "../../images/image-catalogue-page-12-anti-aging-serum.png";
import ImageCataloguePage13 from "../../images/image-catalogue-page-13-lotion-skin.png";
import ImageCataloguePage14 from "../../images/image-catalogue-page-14-scrub-sensitive.png";
import ImageCataloguePage15 from "../../images/image-catalogue-page-15-gel-deep-cleaning.png";

const items = [
  {
    id: 1,
    imageUrl: ImageCataloguePage1,
    imageAlt: "fluid for face",
    name: "Флюїд для обличчя для сухої шкіри",
    price: 630,
  },
  {
    id: 2,
    imageUrl: ImageCataloguePage2,
    imageAlt: "antiox cream",
    name: "Антиоксидантний крем для обличчя",
    price: 850,
  },
  {
    id: 3,
    imageUrl: ImageCataloguePage3,
    imageAlt: "shower gel",
    name: "Гель для вмивання для проблемної шкіри",
    price: 590,
  },
  {
    id: 4,
    imageUrl: ImageCataloguePage4,
    imageAlt: "moisturizing serum",
    name: "Зволожуюча сироватка для нормальної шкіри",
    price: 490,
  },
  {
    id: 5,
    imageUrl: ImageCataloguePage5,
    imageAlt: "moisturizing-cream",
    name: "Зволожуючий крем для сухої шкіри",
    price: 830,
  },
  {
    id: 6,
    imageUrl: ImageCataloguePage6,
    imageAlt: "face-tonic",
    name: "Тонік для обличчя для нормальної шкіри",
    price: 450,
  },
  {
    id: 7,
    imageUrl: ImageCataloguePage7,
    imageAlt: "cleaning-foam",
    name: "Пінка для очищення шкіри обличчя",
    price: 560,
  },
  {
    id: 8,
    imageUrl: ImageCataloguePage8,
    imageAlt: "day night cream",
    name: "Набір Денний та нічний крем",
    price: 1230,
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
  {
    id: 11,
    imageUrl: ImageCataloguePage11,
    imageAlt: "make-up-remover-gel",
    name: "Гель для зняття макіяжу",
    price: 730,
  },
  {
    id: 12,
    imageUrl: ImageCataloguePage12,
    imageAlt: "anti-aging-serum",
    name: "Антивікова сироватка для зони навколо очей",
    price: 900,
  },
  {
    id: 13,
    imageUrl: ImageCataloguePage13,
    imageAlt: "lotion-skin",
    name: "Лосьон для нормальної та комбінованої шкіри",
    price: 1050,
  },
  {
    id: 14,
    imageUrl: ImageCataloguePage14,
    imageAlt: "scrub-sensitive",
    name: "Скраб для чутливої шкіри",
    price: 890,
  },
  {
    id: 15,
    imageUrl: ImageCataloguePage15,
    imageAlt: "gel-deep-cleaning",
    name: "Гель для глубокого очищення шкіри обличчя",
    price: 890,
  },
];

export type Props = {
  items?: object;
};

const itemsComponents = items.map((item) => (
  <CatalogueContentItem
    imageUrl={item.imageUrl}
    imageAlt={item.imageAlt}
    name={item.name}
    price={item.price}
    id={item.id}
  />
));

export const CatalogueContent: React.FC<Props> = (items) => (
  <div className="column">
    <div className="items">{itemsComponents}</div>
    <div className="button-show-more">
      <div className="btn-arrow-bottom">
        <span>Показати ще</span>
      </div>
    </div>
  </div>
);

export default CatalogueContent;
