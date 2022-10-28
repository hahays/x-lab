import React, { useState } from "react";
import MenuItem from "./MenuItem/MenuItem";
import "./SideMenu.scss";
import HOME from "./img/home.svg";
import SEARCH from "./img/search.svg";
import SHEET from "./img/sheet.svg";
import CALENDAR from "./img/calendar.svg";
import MAP from "./img/map.svg";
import WIDGET from "./img/widget.svg";
import SETTING from "./img/setting.svg";
import SETTING_USER from "./img/setting-user.svg";
import FINANCE from "./img/finance.svg";
import ARROW from "./img/arrow.svg";
import EXIT from "./img/exit.svg";
import { Link } from "react-router-dom";

function SideMenu() {
  const [open, setOpen] = useState(true);

  const toogleFunc = () => {
    return setOpen(!open);
  };

  return (
    <div className="sideMenu">
      <div className="sideMenu-header">
        <span>
          <strong>Меню</strong>
        </span>
      </div>
      <div className="sideMenu-itemList">
        <Link to="/">
          <MenuItem source={HOME} name="Главная" url="/" />
        </Link>
        <Link to="address">
          <MenuItem source={SEARCH} name="Поиск адресов" url="/address" />
        </Link>
        <MenuItem source={SHEET} name="Таблицы" />
        <MenuItem source={CALENDAR} name="Календарь" />
        <MenuItem source={MAP} name="Карты" />
        <MenuItem source={WIDGET} name="Виджеты" />
        {open ? (
          <div className="itemList-setting_opened">
            <MenuItem
              onclick={() => toogleFunc()}
              source={SETTING}
              name="Настройки"
            />
            <div className="sideMenu-arrow">
              <img src={ARROW} alt="arrow" />
            </div>
          </div>
        ) : (
          <div className="itemList-setting_closed">
            <div className="setting">
              <MenuItem
                onclick={() => toogleFunc()}
                source={SETTING}
                name="Настройки"
              />
              <div className="sideMenu-arrow">
                <img src={ARROW} alt="arrow" />
              </div>
            </div>

            <div className="itemList-setting_hidden">
              <MenuItem source={SETTING_USER} name="Настройки профиля" />
              <MenuItem source={FINANCE} name="Управление финансами" />
            </div>
          </div>
        )}

        <MenuItem source={EXIT} name="Выход" />
      </div>
    </div>
  );
}

export default SideMenu;
