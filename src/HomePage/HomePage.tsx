import React from "react";
import "./HomePage.scss";
import News from "./News/News";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage-heading">
        <span className="heading-title">Новости</span>
        <span className="subHeading-title">Обновление CRM до 1.2</span>
      </div>
      <News />
    </div>
  );
}

export default HomePage;
