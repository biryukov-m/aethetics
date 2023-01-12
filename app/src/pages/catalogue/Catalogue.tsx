import React from "react";
import CatalogueFilter from "./CatalogueFilter";
import CatalogueContent from "./CatalogueContent";
import BottomContacts from "../bottom-contacts/BottomContacts";

export const Catalogue: React.FC = () => (
  <>
    <section className="catalogue">
      <div className="layout">
        <div className="sorting">
          <div className="wrapper">
            <p>Фільтри</p>
            <p>Сортування</p>
          </div>
        </div>
        <div className="flex">
          <CatalogueFilter />
          <CatalogueContent />
        </div>
      </div>
    </section>
    {/* recently viewed section here */}
    <BottomContacts />
  </>
);

export default Catalogue;
