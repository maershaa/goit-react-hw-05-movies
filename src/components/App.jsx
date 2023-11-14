import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

// import HomePage from 'pages/HomePage';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';

const HomePage = lazy(() => import('pages/HomePage'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));
const NotFound = lazy(() => import('pages/NotFound'));

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
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
