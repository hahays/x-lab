import { useLocation } from "react-router-dom";
import "./MenuItem.scss";

import LINE from "../img/line.svg";

interface Props {
  source: string;
  name: string;
  onclick?: () => void;
  url?: string;
}

function MenuItem({ source, name, onclick, url }: Props) {
  const location = useLocation();

  return (
    <div onClick={onclick} className="menu-itemList">
      <div className="menu-item">
        <img src={source} alt="logo" />
        <span> {name} </span>
      </div>
      <div className="line">
        {url && location.pathname === url && <img src={LINE} alt="line" />}
      </div>
    </div>
  );
}

export default MenuItem;
