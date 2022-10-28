import { useState } from "react";

import LOUPE from "../img/loupe.svg";

import "./AddressDaData.scss";

function AddressDaData() {
  const [value, setValue] = useState("");
  const [selectValue, setSelectValue] = useState([]);
  const API_URL =
    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address?fias_level=9";
  const API_TOKEN = "c0197d69ebe3b77e93ea778d1608d942bf90fb6f";

  const changeValue = () => {
    fetch(API_URL, options)
      .then((response) => response.json())
      .then((result) =>
        setSelectValue(
          result.suggestions.map((elem: { value: string }) => {
            return elem.value;
          })
        )
      )
      .catch((error) => console.log("error", error));
  };
  const options: RequestInit = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + API_TOKEN,
    },
    body: JSON.stringify({
      query: value,
      count: 30,
      locations: [{ country: "Россия" }, { region_type_full: "республика" }],
    }),
  };

  return (
    <div className="address-container">
      <div className="address-container-addressInput">
        <input
          value={value}
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Введите интересующий Вас адрес"
        ></input>

        <button
          className="search-button"
          onClick={() => {
            value.length > 2
              ? changeValue()
              : alert(
                  "Минимальная длина ввода в поле ввода адреса - 3 символа"
                );
          }}
        >
          <img src={LOUPE} alt="loupe" />
          Поиск
        </button>
      </div>
      {selectValue.length > 0 ? (
        <div className="address-container-list">
          {<p className="list-title">Адреса</p>}
          {selectValue.map((elem, id) => {
            return <p key={id}>{elem}</p>;
          })}
        </div>
      ) : null}
    </div>
  );
}

export default AddressDaData;
