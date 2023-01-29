import React from "react";
import HTMLReactParser from "html-react-parser";
import DeliveryPaymentArticle from "./DeliveryPaymentArticle";

export type Article = {
  header: string;
  subheader?: string;
  content: string;
};

const articles: Article[] = [
  {
    header: "Оплата",
    content: `<p>Банківською карткою</p>
            <p>
              До оплати приймаються картки Visa та Mastercard.
              <br />
              Введення інформації про карту безпечно – AESTHETICS не доступні ці
              дані. Їх зберігання та обробка відбувається на стороні наших
              партнерів, які пройшли аудит PCI DSS, отримали відповідний
              сертифікат та гарантують захищеність даних.
              <br />
              З більш детальними умовами здійснення грошових переказів можна
              ознайомитись на офіційному сайті фінансового партнера:
              <br />• Фінансова компанія "Артуа", сервіс KastaPay.
            </p>
            <p>Оплата готівкою</p>
            <p>
              Такий спосіб оплати можливий при отриманні товару у відділеннях
              "Нова Пошта" або при кур'єрській доставці.
            </p>`,
  },
  {
    header: "Нова пошта",
    subheader: "Безкоштовна доставка від 1500 грн",
    content: `<p>
              При сумі замовлення до 1500 грн доставка коштує всього 39 грн, при
              сумі замовлення понад 1500 грн - доставка безкоштовна! Мінімальна
              сума замовлення - 200 грн.
            </p>
            <p>
              Оплатити замовлення ви можете за допомогою карт VISA/Mastercard
              під час оформлення замовлення або готівкою у відділенні компанії
              "Нова пошта". Жодних прихованих платежів, оплати послуг
              транспортних компаній, плати за переказ коштів, комісій та іншого!
              Ви оплачуєте тільки суму вашого замовлення.
              <br />
              При сумі замовлення до 1500 грн доставка коштує всього 39 грн, при
              сумі замовлення понад 1500 грн - доставка безкоштовна! Мінімальна
              сума замовлення - 200 грн.
            </p>
            <p>
              Оплатити замовлення ви можете за допомогою карт VISA/Mastercard
              під час оформлення замовлення або готівкою у відділенні компанії
              "Нова пошта". Жодних прихованих платежів, оплати послуг
              транспортних компаній, плати за переказ коштів, комісій та іншого!
              Ви оплачуєте тільки суму вашого замовлення.
            </p>`,
  },
  {
    header: "Доставка кур’єром",
    subheader: "Безкоштовна доставка від 2000 грн",
    content: `<p>
              Наша кур'єрська служба доставляє замовлення у межах м.Київ
              безкоштовно. Мінімальна сума замовлення – від 2000 грн.
            </p>
            <p>
              Замовлення, оформлені у будні до 14 години у м. Київ, ми зможемо
              доставити наступного дня.
            </p>
            <p>
              У мікрорайон Жуляни доставка замовлень здійснюється 3 рази на
              тиждень: по понеділках, середах та п'ятницях.
            </p>
            <p>
              Ми дбаємо про безпеку своїх клієнтів та кур'єрів, тому під час
              повітряної тривоги не доставляємо замовлення. Не хвилюйтеся: після
              закінчення повітряної тривоги кур'єр відновить рух маршрутом і
              доставить вам посилку.
            </p>
            <p>
              Якщо у вас є симптоми ГРВІ, ви перебуваєте на ізоляції або
              відчуваєте нездужання, будь ласка, сплатіть замовлення карткою при
              його оформленні. У цьому випадку наш кур'єр передасть вам посилку
              безконтактно, не наражаючись на небезпеку і піклуючись про ваш
              комфорт. AESTHETICS бажає вам міцного здоров'я!
            </p>
            <p>
              Якщо у вас є симптоми ГРВІ, ви перебуваєте на ізоляції або
              відчуваєте нездужання, будь ласка, сплатіть замовлення карткою при
              його оформленні. У цьому випадку наш кур'єр передасть вам посилку
              безконтактно, не наражаючись на небезпеку і піклуючись про ваш
              комфорт. AESTHETICS бажає вам міцного здоров'я!
            </p>`,
  },
];

const DeliveryPayment: React.FC = () => {
  const generatedArticles = articles.map((article) => (
    <DeliveryPaymentArticle
      header={article.header}
      subheader={article.subheader}
      content={HTMLReactParser(article.content) as JSX.Element}
    />
  ));
  return (
    <section className="delivery-and-payment">
      <div className="layout">
        <div className="wrapper">{generatedArticles}</div>
      </div>
    </section>
  );
};

export default DeliveryPayment;
