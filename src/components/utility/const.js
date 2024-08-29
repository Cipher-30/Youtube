// PUT AUTH IN PRIVATE FILE 
const authKey = "AIzaSyCxmBwoDaS7JkxCdPxUAFAdvjBkPbP2mZw";

export const youtubeApi =  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+authKey;

export const suggestionApi = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// export const commentApi = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${Wid}&key=${authKey}`;