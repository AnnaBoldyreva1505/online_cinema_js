// ключ с апи https://www.themoviedb.org/documentation/api
const API_KEY = "b6e9665514428b2c0f9442130a42f46a";
// базовый адрес из документации https://developers.themoviedb.org/3/trending/get-trending в разделе Try it out
const BASE_URL = "https://api.themoviedb.org/3/";

const LANGUAGE = "&language=ru-RU"

// trending/all/day?api_key=<<api_key>>
// получаем запрос от сервера/ Для проверки можно использовать сервис https://jsonplaceholder.typicode.com/
const getData = (url) =>
  fetch(url)
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      }

      throw `Что-то пошло не так, ошибка ${response.status}`;
    })
    .catch((error) => console.error(error));

export const getTrends = async (type = 'all', period = 'day', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`
  return await getData(url);

};
