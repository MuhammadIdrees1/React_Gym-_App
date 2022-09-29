export const exerciseOptions = {
    method: 'GET',
    
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_kEY
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_kEY
    }
  };

export const fetchData = async (url, options) => {
    const response = fetch(url, options);
    const data  = await (await response).json();

    return data;
}
