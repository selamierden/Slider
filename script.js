var photos = [
    {
        name : "7 Ballon D'or (best)",
        image : "img/messi1.jpg"
    },

    {
        name : "6 Golden Shoe (best)" ,
        image : "img/messi2.jpg"
    },

    {
        name : "700+ Goals (Most goals per match)",
        image : "img/messi3.jpg"
    },

    {
        name : "400+ Asists (best)",
        image : "img/messi4.jpg"
    },

    {
        name : "Contribution of more than 1 goal per match (best and only)",
        image : "img/messi5.jpg"
    },

    {
        name : "Unstoppable dribbling",
        image : "img/messi6.jpg"
    },

    {
        name : "Most distant goals",
        image : "img/messi7.jpg"
    },

    {
        name : "And 38 Trophies",
        image : "img/messi8.jpg"
    }
]

var index = 0;
let count = photos.length;

showSlide(index);

// document.querySelector(".card-img-top").setAttribute('src',photos[index].image);
// document.querySelector(".card-title").textContent = photos[index].name;

document.querySelector(".fa-arrow-circle-left").addEventListener('click',function(){
    index--;
    if (index == -1){
        index = 7;
    }
    showSlide(index);
});

document.querySelector(".fa-arrow-circle-right").addEventListener('click',function(){
    index++;
    if (index > count-1){
        index = 0;
    }
    showSlide(index);
});

function showSlide (index) {
    document.querySelector(".card-title").textContent = photos[index].name;
    document.querySelector(".card-img-top").setAttribute('src',photos[index].image);
}

