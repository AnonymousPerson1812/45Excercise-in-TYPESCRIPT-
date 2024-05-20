//Define the make Album function.
function make_album(artist_name:string,album_title:string,tracks?:number){
    let album:{artist:string,
        title:string,
        tracks?:number}={
            artist:artist_name,
            title:album_title,

    }
if(tracks!==undefined){
    album.tracks=tracks;
}
return album;
}
//Calling three functions and creating 3 varaibles with different values.
let album1=make_album("Hamza","Album tittle 1")
//Print values of our object created my function.
console.log(album1)
//For more examples.
//Example # 01.
let album2=make_album("Usama","Album tittle 2")
console.log(album2)
//Example # 03.(Calling a 3 function with third parameters).
let album3=make_album("Bilal","Album tittle 3",15)
console.log(album3)
