import axios from 'axios'

const config = {
	endpoint: 'https://the-one-api.dev/v2/',
	apikey: ''
}

const initApi = (apikey: string, endpoint?: string) => {
	config.apikey = apikey
	if (!!endpoint) config.endpoint = endpoint
}

const fetchApi = async (api: string) => {
	try {
		const response = await axios({
			url: `${config.endpoint}/${api}`,
			headers: {
				'Authorization': `Bearer ${config.apikey}`,
				'Content-Type': 'application/json',
				'accept': 'application/json'
			}
		});
		return response.data;
	} catch (error) {
		console.log(error)
		throw new Error("unknown error")
	}
}


//Get Book
const getBookList = () => {
	return fetchApi('book');
}
const getBookById = (id: string) => {
	return fetchApi(`book/${id}`);
}
const getBookChapterById = (id: string) => {
	return fetchApi(`book/${id}/chapter`);
}

// Get Movie
const getMovieList = () => {
	return fetchApi('movie');
}
const getMovieById = (id: string) => {
	return fetchApi(`movie/${id}`);
}
const getMovieQuoteById = (id: string) => {
	return fetchApi(`movie/${id}/quote`);
}


//Get Character
const getCharacterList = () => {
	return fetchApi('character');
}
const getCharacterById = (id: string) => {
	return fetchApi(`character/${id}`);
}
const getCharacterQuoteById = (id: string) => {
	return fetchApi(`character/${id}/quote`);
}

//Get Quote
const getQuoteList = () => {
	return fetchApi('quote');
}
const getQuoteById = (id: string) => {
	return fetchApi(`quote/${id}`);
}

//Get Chapter
const getChapterList = () => {
	return fetchApi('chapter');
}
const getChapterById = (id: string) => {
	return fetchApi(`chapter/${id}`);
}
export default {
	initApi,
	getBookList,
	getBookById,
	getBookChapterById,
	getMovieList,
	getMovieById,
	getMovieQuoteById,
	getCharacterList,
	getCharacterById,
	getCharacterQuoteById,
	getQuoteList,
	getQuoteById,
	getChapterList,
	getChapterById,
};