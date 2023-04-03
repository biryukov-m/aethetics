import ImageCataloguePage1 from '../assets/images/image-catalogue-page-1-fluid.png';
import ImageCataloguePage2 from '../assets/images/image-catalogue-page-2-antiox-cream.png';
import ImageCataloguePage3 from '../assets/images/image-catalogue-page-3-shower-gel.png';
import ImageCataloguePage4 from '../assets/images/image-catalogue-page-4-moisturizing serum.png';
import ImageCataloguePage5 from '../assets/images/image-catalogue-page-5-moisturizing-cream.png';
import ImageCataloguePage6 from '../assets/images/image-catalogue-page-6-face-tonic.png';
import ImageCataloguePage7 from '../assets/images/image-catalogue-page-7-cleaning-foam.png';
import ImageCataloguePage8 from '../assets/images/image-catalogue-page-8-day-night-cream.png';
import ImageCataloguePage9 from '../assets/images/image-catalogue-page-9-mattifying-cream.png';
import ImageCataloguePage10 from '../assets/images/image-catalogue-page-10-night-anti-aging-cream.png';
import ImageCataloguePage11 from '../assets/images/image-catalogue-page-11-make-up-remover-gel.png';
import ImageCataloguePage12 from '../assets/images/image-catalogue-page-12-anti-aging-serum.png';
import ImageCataloguePage13 from '../assets/images/image-catalogue-page-13-lotion-skin.png';
import ImageCataloguePage14 from '../assets/images/image-catalogue-page-14-scrub-sensitive.png';
import ImageCataloguePage15 from '../assets/images/image-catalogue-page-15-gel-deep-cleaning.png';
import { IProduct } from '../types/products';

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    imageUrl: ImageCataloguePage1,
    imageAlt: 'fluid for face',
    name: 'Флюїд для обличчя для сухої шкіри',
    price: 630,
    rating: 4,
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
    (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`
  },
  {
    id: 2,
    imageUrl: ImageCataloguePage2,
    imageAlt: 'antiox cream',
    name: 'Антиоксидантний крем для обличчя',
    price: 850,
    rating: 4,
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
    (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`
  },
  {
    id: 3,
    imageUrl: ImageCataloguePage3,
    imageAlt: 'shower gel',
    name: 'Гель для вмивання для проблемної шкіри',
    price: 590,
    rating: 4,
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
    (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`
  },
  {
    id: 4,
    imageUrl: ImageCataloguePage4,
    imageAlt: 'moisturizing serum',
    name: 'Зволожуюча сироватка для нормальної шкіри',
    price: 490,
    rating: 4,
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
    (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`
  },
  {
    id: 5,
    imageUrl: ImageCataloguePage5,
    imageAlt: 'moisturizing-cream',
    name: 'Зволожуючий крем для сухої шкіри',
    price: 830,
    rating: 4,
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
    (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`
  },
  {
    id: 6,
    imageUrl: ImageCataloguePage6,
    imageAlt: 'face-tonic',
    name: 'Тонік для обличчя для нормальної шкіри',
    price: 450,
    rating: 4,
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
    (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`
  },
  {
    id: 7,
    imageUrl: ImageCataloguePage7,
    imageAlt: 'cleaning-foam',
    name: 'Пінка для очищення шкіри обличчя',
    price: 560,
    rating: 4,
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
    (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`
  },
  {
    id: 8,
    imageUrl: ImageCataloguePage8,
    imageAlt: 'day night cream',
    name: 'Набір Денний та нічний крем',
    price: 1230,
    rating: 4,
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
    (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`
  },
  {
    id: 9,
    imageUrl: ImageCataloguePage9,
    imageAlt: 'mattifying cream',
    name: 'Матуючий денний крем для жирної шкіри',
    price: 680,
    rating: 4,
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
    (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`
  },
  {
    id: 10,
    imageUrl: ImageCataloguePage10,
    imageAlt: 'night anti aging cream',
    name: 'Нічний антивіковий крем для сухої шкіри',
    price: 860,
    rating: 4,
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
    (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`
  },
  {
    id: 11,
    imageUrl: ImageCataloguePage11,
    imageAlt: 'make-up-remover-gel',
    name: 'Гель для зняття макіяжу',
    price: 730,
    rating: 4,
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
    (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`
  },
  {
    id: 12,
    imageUrl: ImageCataloguePage12,
    imageAlt: 'anti-aging-serum',
    name: 'Антивікова сироватка для зони навколо очей',
    price: 900,
    rating: 4,
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
    (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`
  },
  {
    id: 13,
    imageUrl: ImageCataloguePage13,
    imageAlt: 'lotion-skin',
    name: 'Лосьон для нормальної та комбінованої шкіри',
    price: 1050,
    rating: 4,
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
    (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`
  },
  {
    id: 14,
    imageUrl: ImageCataloguePage14,
    imageAlt: 'scrub-sensitive',
    name: 'Скраб для чутливої шкіри',
    price: 890,
    rating: 4,
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
    (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`
  },
  {
    id: 15,
    imageUrl: ImageCataloguePage15,
    imageAlt: 'gel-deep-cleaning',
    name: 'Гель для глубокого очищення шкіри обличчя',
    price: 890,
    rating: 4,
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
    (Coenzyme Q10) Ubiquinone (Коензим Q10). *Сертифікат Ecocert.`
  }
];
