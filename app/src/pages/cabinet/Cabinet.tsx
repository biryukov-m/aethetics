import React from "react";
import CabinetTabs from "./CabinetTabs";
import CabinetContacts from "./CabinetContacts";
import CabinetAddress from "./CabinetAddress";
import CabinetFavourites from "./CabinetFavourites";
import CabinetHistory from "./CabinetHistory";

const Cabinet: React.FC = () => (
  <section className="cabinet">
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

export default Cabinet;
