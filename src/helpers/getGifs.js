// sf3CWs6mZbnm0G2IZxQjQqj3uscycECg
// 9nMuETDY4ymACJl8hPZhEIyekRa7bGOD


export const getGifs = async ( category ) => {

    const api_key = '9nMuETDY4ymACJl8hPZhEIyekRa7bGOD'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ category }&limit=10`;
    const resp = await fetch( url );

    const { data = [] } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));


    return(gifs);


}