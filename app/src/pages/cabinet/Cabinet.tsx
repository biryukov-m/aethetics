import React from 'react';
import CabinetTabs from './CabinetTabs';
import CabinetContacts from './CabinetContacts';
import CabinetAddress from './CabinetAddress';
import CabinetFavourites from './CabinetFavourites';
import CabinetHistory from './CabinetHistory';

const Cabinet: React.FC = () => {
  const handleTabsClick = (event: React.MouseEvent) => {
    const target = event.target as Element;
    if (target.classList.contains('tab-link')) {
      document.querySelector('.tab.active')?.classList.remove('active');

      const id = target.getAttribute('data-for');
      if (id) {
        document.getElementById(id)?.classList.add('active');
      }

      const links = document.querySelectorAll('.tab-link');
      links?.forEach((link) => {
        if (link.getAttribute('data-for') === id) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  };
  return (
    <section role="article" className="cabinet" onClick={handleTabsClick}>
      <div className="layout">
        <div className="wrapper">
          <h2>Особистий кабінет</h2>
          <CabinetTabs />
          <div className="window">
            <CabinetContacts />
            <CabinetAddress />
            <CabinetFavourites />
            <CabinetHistory />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cabinet;
