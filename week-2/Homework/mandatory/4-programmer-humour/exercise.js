
fetch("https://xkcd.now.sh/?comic=latest")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.img);
    let ul = document.createElement("ul");
    // let li = document.createElement("li");
    let img = document.createElement("img");
    ul.className = "container"
    ul.style.display = "flex"
    ul.style.width ="150px"
    img.className = "image"
    img.src = data.img;
    ul.appendChild(img)
    console.log(divEl)
    document.body.appendChild(ul)
})
.catch(function (error){
    
    console.log(error);
});