import axios from 'axios'; //TO MAKE GET REQUEST

const API_KEY = '7f06be07815f9aa9d1528f0a5f0ef638';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	console.log('Request', request);
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}