import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Loader from 'components/Loader/Loader'; //npm install react-loader-spinner --save
// rafce - react arrow function expression component export default

/*
1. Обгорнути весь App в компонент BrowserRouter
2. Прописати маршрути та компоненти Link|NavLink
3. Підготувати компоненти Route для кожноъ сторінки за певною адресою.
4. Якщо нам потрібно зробити шаблонну сторінку для багатьох однотипних даних,
    нам потрібно використовувати динамічні параметри '/posts/:postId'
5. Щоб у користувача була змога потрабити на конкретну шаблонну сторінку 
    ми у компоненті Link або NavLink вказуємо маршрут наступним чином <Link to={`/posts/${post.id}`}>


Етапи роботи з маршрутеризацією:
1. Змінити адресний рядок браузера за допомогою компонти Link або NavLink маршрут вказуємо 
   в (пропс to).
2. Підготувати компонент Route для відображення конкретної сторінки за певним 
   шляхом(пропс path).

РЕМАРКА!!!
Тег <a href="..." target="_blank" rel="noopener noreferrer"></a> Ми використовуємо для 
   всіх зовнішніх посиланнь(фейсбук, гугель, ютубе, інтаграми).
Тег <NavLink to="..."></NavLink> або <Link to="..."></Link> Ми використовуємо виключно 
   для навігації всередині нашого додатку.
*/
export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState('');

  //   // Функция для выполнения запроса и обновления фотографий
  // async fetchAndSetPhotos(inputValue, currentPage = 1) {
  //   try {
  //     // Устанавливаем isLoading в true перед началом запроса
  //     this.setState({ isLoading: true });

  //     // Выполняем запрос к API с переданным поисковым запросом и номером страницы
  //     const data = await fetchPhotos(inputValue, currentPage);

  //     // При успешном запросе, добавляем новые фотографии к текущим
  //     const currentPhotos = this.state.photos || []; // Существующие фотографии
  //     const newPhotos = data.hits; // Новые фотографии

  //     const updatedPhotos = [...currentPhotos, ...newPhotos]; // Объединяем их

  //     this.setState({ photos: updatedPhotos, error: null });
  //   } catch (error) {
  //     // В случае ошибки сохраняем сообщение об ошибке и очищаем фотографии
  //     this.setState({ error: error.message, photos: null });
  //   } finally {
  //     // В любом случае завершаем запрос, сбрасывая флаг isLoading
  //     this.setState({ isLoading: false });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   const { inputValue, currentPage } = this.state;
  //   if (
  //     prevState.inputValue !== this.state.inputValue ||
  //     prevState.currentPage !== this.state.currentPage
  //   ) {
  //     this.fetchAndSetPhotos(inputValue, currentPage);
  //   }
  // }

  return (
    <div>
      {error !== null && (
        <p className="errorBadge">
          Oops, some error occurred... Error message: {error}
        </p>
      )}

      {isLoading && <Loader />}

      <header>
        <ul>
          <li>
            <NavLink className="header-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="header-link" to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </main>
    </div>
  );
};
