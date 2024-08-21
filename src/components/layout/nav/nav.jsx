import React from "react";
import Button from "/src/components/UI/button/button";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    to: AppRoute.MAIN,
    template: (
      <Button key={AppRoute.MAIN} link={AppRoute.MAIN}>
        На главную
      </Button>
    ),
  },
  {
    to: AppRoute.BUY,
    template: (
      <Button key={AppRoute.BUY} link={AppRoute.BUY}>
        Купить
      </Button>
    ),
  },
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      <nav>
        {buttons
          .filter((button) => button.to !== pageUrl)
          .map((button) => button.template)}
      </nav>
    </nav>
  );
}

export default Nav;
