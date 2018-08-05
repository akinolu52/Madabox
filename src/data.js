// get data as json and return
let base = "http://storage.googleapis.com/automotive-media/";
let dir = "music.json";

export default async function getData() {
  try {
    let data = await fetch(base+dir, {mode:'no-cors'} );
    console.log("im left here", data)
    
    let res = await data.json();
    let music = res.music; 
    let arr = [];
    music.forEach(( i, index) => {
      arr.push({
        id: index,
        url: base + i.source,
        artwork: base + i.image,
        duration: i.duration,
        title: i.title,
        artist: i.artist,
        album: i.album,
        genre: i.genre
      });
    });
    return arr;
  } catch (error) {
    console.log("Error in fetching data", error);
    return [];
    
  }
}
