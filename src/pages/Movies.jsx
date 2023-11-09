// import React, { useState, useEffect, useParams } from 'react';

// const Movies = () => {
//   const { movieId } = useParams();
//   useEffect(() => {
//     if (!movieId) return;
//   }, [movieId]);

//   const [inputValue, setInputValue] = useState('');

//   const onSearch = { handleSubmit };
//   // Обработчик изменения значения инпута
//   const handleInputChange = event => {
//     setInputValue(event.target.value);
//   };

//   // Обработчик отправки формы
//   const handleSubmit = event => {
//     event.preventDefault();
//     if (!inputValue) {
//       alert('Please, enter film name');
//     }
//     // Вызываем функцию onSearch из родительского компонента для выполнения поиска
//     onSearch(inputValue);
//   };

//   return (
//     <div>
//       <form className="searchForm" onSubmit={handleSubmit}>
//         <button type="submit" className="button">
//           <span className="buttonLabel"> Search</span>
//         </button>
//         <input
//           className="input"
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="search by film name"
//           value={inputValue}
//           // Обновляем состояние при изменении значения инпута
//           onChange={handleInputChange}
//         />
//       </form>
//     </div>
//   );
// };

// export default Movies;
