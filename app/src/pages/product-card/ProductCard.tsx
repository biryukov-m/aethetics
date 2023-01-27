import React from "react";
import { useParams } from "react-router-dom";
import ProductCardMain from "./ProductCardMain";
import ProductCardFullInfo from "./ProductCardFullInfo";
import ProductCardRelatedProducts from "./ProductCardRelatedProducts";
import BottomContacts from "../bottom-contacts/BottomContacts";
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
  description: `При регулярному використанні колір обличчя стане більш рівномірним, 
  а почервоніння і сухість менш вираженими. Крем попереджає появу зморшок, зневоднення 
  і стоншування шкіри за допомогою потужних антиоксидантів з екстракту швейцарської сосни
   й чаю матча.Велика кількість протизапальних і протиалергійних компонентів допомагає
   позбутися подразнень і гіперчутливості.`,
  composition: `Aqua (вода), Grape Seed (Vitis Vinifera) Oil (олія виноградної кісточки), 
  Triolein, Glyceryl Dioleate, Polyglyceryl-3 Cetyl Ether (емульгатор з оливкової олії), 
  Butyrospermum Parkii (Shea) Butter (баттер ши (каріте)), Cetearyl Alcohol (цетилстеариловий спирт), 
  Complex of phytoе strogens: Glycine Soja Extract, Trifolium Pratense Extract, Tamarindus Indica
  Fruit Extract, Medicago Sativa Extract, Glycyrrhiza glabra Root Extract, Vitis Vinifera Leaf 
  Extract, Humulus Lupulus Cone Extract (комплекс фітоестрогенів: екстракти сої, конюшини, фініка,
  люцерни, солодки, червоного винограду, хмелю), Optiphen BD* (харчовий консервант), Limnanthes 
  Alba (Meadowfoam) Seed Oil (олія пінника), Сhaulmoogra (Hydnocarpuslaurifolia) Seed Oil 
  (чаульмугри олія), Carapa Guianensis Seed Oil(олія андироби), Pinus Sylvestris Bark 
  Extract (екстракт швейцарської кам’яної сосни), Lactose, Milk Protein (молочні поліпептиди),
  Vitamin E (Вітамін Е), Blend of Essential Oils: Ylang Ylang (Cananga odorata) Flower Oil, 
  Neroli (Citrus aurantium var. amara) Essential Oil, Patchouli (Pogostemon Cablin Blanco) 
  Essential Oil, Cinnamon Bark (Cinnamomum verum) Essential Oil, Grapefruite (Citrus paradisi) 
  Essential Oil, European mandarin (Citrus mandurensis) Essential Oil, Citrus Aurantium Dulcis 
  Peel Extract, Rosa centifolia Flower Extract (композиція натуральних ефірних олій: іланг – 
  ілангу, неролі, пачулі, кориці, грейпфрута, мандарина, апельсина, абсолют троянди), 
  Camellia Sinensis Leaf Extract (екстракт чаю матча), Beta Glucan (бета-глюкан),
  (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`,
  reviews: [
    {
      id: 1,
      author: "Катерина",
      date: "5.08.2022",
      rating: 5,
      text: `Цей крем замовляю вдруге, дуже задоволена. Дякую за швидку доставку!`,
    },
    {
      id: 2,
      author: "Поліна",
      date: "3.08.2022",
      rating: 4,
      text: `Товар дуже якісний, крем не залишає липку плівку. Дякую!`,
    },
    {
      id: 3,
      author: "Олена",
      date: "28.07.2022",
      rating: 5,
      text: `Почитала відгуки і вирішила спробувати цей засіб. Я дуже вдячна
              магазину за такий якісний продукт!`,
    },
  ],
};

const ProductCard: React.FC = () => {
  const { itemId } = useParams();
  return (
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
      <ProductCardFullInfo
        composition={item.composition}
        reviews={item.reviews}
      />
      <ProductCardRelatedProducts />
      <BottomContacts />
    </>
  );
};

export default ProductCard;
