import React from "react";

const CabinetTabs: React.FC = () => {
  const handleTabsClick = (event: React.MouseEvent) => {
    const element = event.target as Element;
    console.log(element);
    if (element.classList.contains("tab")) {
      const tabLinks = element.parentElement?.querySelectorAll("li.tab");
      tabLinks?.forEach((tabLink) => {
        const tabContentId = tabLink.getAttribute("data-for");
        const tabContent = tabContentId
          ? document.getElementById(tabContentId)
          : null;
        if (tabLink === element) {
          tabLink.classList.add("active");
          tabContent?.classList.add("active");
        } else {
          tabLink.classList.remove("active");
          tabContent?.classList.remove("active");
        }
      });
    }
  };
  return (
    <ul className="tabs" onClick={handleTabsClick}>
      <li className="tab active" data-for="tab-contacts">
        Контактна інформація
      </li>
      <li className="tab" data-for="tab-address">
        Адресна книга
      </li>
      <li className="tab" data-for="tab-favourites">
        Список бажань
      </li>
      <li className="tab" data-for="tab-history">
        Історія замовлень
      </li>
    </ul>
  );
};

export default CabinetTabs;
