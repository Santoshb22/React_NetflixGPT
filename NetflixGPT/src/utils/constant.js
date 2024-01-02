const movieApiKey = import.meta.env.VITE_MOVIE_API_KEY;
const gptApiKey = import.meta.env.VITE_GPT_KEY;

// Defining API_OPTIONS with the obtained API key
export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: 'application/json',
        Authorization: "Bearer " + movieApiKey
    }
};

export const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg";


export const lang = [
    {
       value: "english",
       langName: "English",
    },

    {
        value: "hindi",
        langName: "Hindi",
    },

    {
        value: "spanish",
        langName: "Spanish",
    }
]

export const SEARCH_GPT_KEY = import.meta.env.gptApiKey