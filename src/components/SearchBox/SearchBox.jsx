import React from 'react';
import { StyledSearchBox } from 'components/SearchBox/StyledSearchBox';

const SearchBox = ({ onSearch, inputValue, setInputValue }) => {
  // Обработчик изменения значения инпута
  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  // Обработчик отправки формы
  const handleSubmit = event => {
    event.preventDefault();
    if (!inputValue) {
      alert('Please, enter film name');
    }
    // Вызываем функцию onSearch из родительского компонента для выполнения поиска
    console.log('inputValue', inputValue);
    onSearch(inputValue);
  };

  return (
    <StyledSearchBox>
      <h2 className="welcomeTitle"> Welcome.</h2>
      <h3 className="welcomeText">
        Millions of movies, series, and people. Explore now.
      </h3>
      <div className="searchContainer">
        <form className="searchForm" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="search by film name"
            value={inputValue}
            // Обновляем состояние при изменении значения инпута
            onChange={handleInputChange}
          />
          <button type="submit" className="submitBtn">
            <span className="buttonLabel"> Search</span>
          </button>
        </form>
      </div>
    </StyledSearchBox>
  );
};

export default SearchBox;
