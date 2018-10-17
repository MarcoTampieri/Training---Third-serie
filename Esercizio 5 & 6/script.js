
let cambio = document.querySelectorAll("img");


for(let i = 0; i < cambio.length; i++){
    let temp = i+1;
    cambio[i].addEventListener("mouseover", function (event) {
        event.target.src = "images/image" + temp  + "_2.jpg";
    });
    cambio[i].addEventListener("mouseout", function (event) {
        event.target.src = "images/image" + temp  + ".jpg";
    })
};



/*
document.querySelector(".conteneur").addEventListener("mouseover", function change(event) {
    let myTarget = event.target.id;
    if (myTarget == "image1") {
        document.getElementById("image1").src = "images/image1_2.jpg";
    } else if (myTarget == "image2") {
        document.getElementById("image2").src = "images/image2_2.jpg";
    } else if (myTarget == "image3") {
        document.getElementById("image3").src = "images/image3_2.jpg";
    }  else if (myTarget == "image4") {
        document.getElementById("image4").src = "images/image4_2.jpg";
    } else if (myTarget == "image5") {
        document.getElementById("image5").src = "images/image5_2.jpg";
    }
});

document.querySelector(".conteneur").addEventListener("mouseout", function changeBack(event) {
    let myTarget = event.target.id;
    if (myTarget == "image1") {
        document.getElementById("image1").src = "images/image1.jpg";
    } else if (myTarget == "image2") {
        document.getElementById("image2").src = "images/image2.jpg";
    } else if (myTarget == "image3") {
        document.getElementById("image3").src = "images/image3.jpg";
    }  else if (myTarget == "image4") {
        document.getElementById("image4").src = "images/image4.jpg";
    } else if (myTarget == "image5") {
        document.getElementById("image5").src = "images/image5.jpg";
    }
})
*/