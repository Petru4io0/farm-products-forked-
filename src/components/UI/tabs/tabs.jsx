import React, { useState } from "react";
import { TitleList, TitleButton } from "./styles";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <TitleButton active="true" key={item.title}>
                  {item.title}
                </TitleButton>
              );
            }
            return (
              <TitleButton key={item.title} onClick={() => setActiveTab(index)}>
                {item.title}
              </TitleButton>
            );
          })}
      </TitleList>
      <>{tabs[activeTab].content}</>
    </div>
  );
}

export default Tabs;
