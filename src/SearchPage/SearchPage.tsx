import AddressDaData from "./AddressDaData/AddressDaData";
import "./SearchPage.scss";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage-heading">
        <span className="heading-title">Поиск адресов</span>
        <span className="subHeading-title">Введите интересующий вас адрес</span>
      </div>
      <AddressDaData />
    </div>
  );
}

export default SearchPage;
