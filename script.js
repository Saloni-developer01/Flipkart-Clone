


// !===================================> POPUP SCREEN JS <====================================!


const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");
const closeBtn = document.querySelector(".popupClose-btn");


window.addEventListener("load", () =>{
    setTimeout(()=>{
        popupScreen.classList.add("active");
    }, 1000)
})

closeBtn.addEventListener("click", ()=>{
    popupScreen.classList.remove("active");

});








// !=============================> TOP IMAGE SLIDER <=========================!


let slides = document.getElementsByClassName("slides");
let navlinks = document.getElementsByClassName("dot");
let currentSlide = 0;

document.getElementById("next").addEventListener("click", ()=>{
    changeSlide(currentSlide + 1);
});
document.getElementById("privous").addEventListener("click", ()=>{
    changeSlide(currentSlide - 1);
});


function changeSlide(moveTo) {
    if(moveTo >= slides.length){
        moveTo = 0;
    }
    if (moveTo < 0){
        moveTo = slides.length -1;
    }
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("activeDot");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("activeDot");
    currentSlide = moveTo;
}


document.querySelectorAll(".dot").forEach((bullet, bulletIndex) =>{
    bullet.addEventListener("click", () =>{
        if(currentSlide !== bulletIndex){
            changeSlide(bulletIndex);
        }
    });
});  


window.onload=setInterval(function(){
    changeSlide(currentSlide+1)
}, 3000);




// !===============================> ELECTRONIC PRODUCT SLIDER <================================!


const productContainer = document.querySelectorAll(".productContainer");

const nxtbtn = document.querySelectorAll("#cardNxtBtn");
const prebtn = document.querySelectorAll("#cardPreBtn");

productContainer.forEach((item, i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    nxtbtn[i].addEventListener("click", ()=>{
        item.scrollLeft += containerwidth;
    })

    prebtn[i].addEventListener("click", ()=>{
        item.scrollLeft -= containerwidth;
    })

})






// !===============================> TOP DEAL PRODUCT SLIDER <================================!


const topProductContainer = document.querySelectorAll(".topProductContainer");

const topDealNxtBtn = document.querySelectorAll("#topDealNxtBtn");
const topDealPreBtn = document.querySelectorAll("#topDealPreBtn");

topProductContainer.forEach((item, i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    topDealNxtBtn[i].addEventListener("click", ()=>{
        item.scrollLeft += containerwidth;
    })

    topDealPreBtn[i].addEventListener("click", ()=>{
        item.scrollLeft -= containerwidth;
    })

})







// !===============================> FASHION PRODUCT SLIDER <================================!


const fashionContainer = document.querySelectorAll(".fashion-Container");

const fashionNxtBtn = document.querySelectorAll("#fashionNxtBtn");
const fashionPreBtn = document.querySelectorAll("#fashionPreBtn");

fashionContainer.forEach((item, i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    fashionNxtBtn[i].addEventListener("click", ()=>{
        item.scrollLeft += containerwidth;
    })

    fashionPreBtn[i].addEventListener("click", ()=>{
        item.scrollLeft -= containerwidth;
    })

})









// !===============================> BEAUTY PRODUCT SLIDER <================================!


const beautyContainer = document.querySelectorAll(".beauty-Container");

const beautyNxtBtn = document.querySelectorAll("#beautyNxtBtn");
const beautyPreBtn = document.querySelectorAll("#beautyPreBtn");

beautyContainer.forEach((item, i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    beautyNxtBtn[i].addEventListener("click", ()=>{
        item.scrollLeft += containerwidth;
    })

    beautyPreBtn[i].addEventListener("click", ()=>{
        item.scrollLeft -= containerwidth;
    })

})







// !===============================> KICHEN PRODUCT SLIDER <================================!





const kichenContainer = document.querySelectorAll(".kichen-Container");

const kichenNxtBtn = document.querySelectorAll("#kichenNxtBtn");
const kichenPreBtn = document.querySelectorAll("#kichenPreBtn");

kichenContainer.forEach((item, i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    kichenNxtBtn[i].addEventListener("click", ()=>{
        item.scrollLeft += containerwidth;
    })

    kichenPreBtn[i].addEventListener("click", ()=>{
        item.scrollLeft -= containerwidth;
    })

})







// !=========================================> FASHION BEST PRODUCTS <==============================!



const fashionBestContainer = document.querySelectorAll(".fashionBest-Container");

const fashionBestNxtBtn = document.querySelectorAll("#fashionBestNxtBtn");
const fashionBestPreBtn = document.querySelectorAll("#fashionBestPreBtn");

fashionBestContainer.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    fashionBestNxtBtn[i].addEventListener("click", ()=>{
        item.scrollLeft += containerwidth;
    })

    fashionBestPreBtn[i].addEventListener("click", ()=>{
        item.scrollLeft -= containerwidth;
    })
})


// !=============================> OFFERS ON FURNITURE <=====================================!






const FurnitureContainer = document.querySelectorAll(".Furniture-Container");

const FurnitureNxtBtn = document.querySelectorAll("#FurnitureNxtBtn");
const FurniturePreBtn = document.querySelectorAll("#FurniturePreBtn");

FurnitureContainer.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    FurnitureNxtBtn[i].addEventListener("click", ()=>{
        item.scrollLeft += containerwidth;
    })

    FurniturePreBtn[i].addEventListener("click", ()=>{
        item.scrollLeft -= containerwidth;
    })
})








// !=============================> TOP APPLIANCE <=====================================!






const applianceContainer = document.querySelectorAll(".appliance-Container");

const applianceNxtBtn = document.querySelectorAll("#applianceNxtBtn");
const appliancePreBtn = document.querySelectorAll("#appliancePreBtn");

applianceContainer.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    applianceNxtBtn[i].addEventListener("click", ()=>{
        item.scrollLeft += containerwidth;
    })

    appliancePreBtn[i].addEventListener("click", ()=>{
        item.scrollLeft -= containerwidth;
    })
})







// !=============================> BEST OF ELECTRONIC  <=====================================!






const bestElectronicContainer = document.querySelectorAll(".bestElectronic-Container");

const bestElectronicNxtBtn = document.querySelectorAll("#bestElectronicNxtBtn");
const bestElectronicPreBtn = document.querySelectorAll("#bestElectronicPreBtn");

bestElectronicContainer.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    bestElectronicNxtBtn[i].addEventListener("click", ()=>{
        item.scrollLeft += containerwidth;
    })

    bestElectronicPreBtn[i].addEventListener("click", ()=>{
        item.scrollLeft -= containerwidth;
    })
})







// !=============================> HOME AND FURNISHING  <=====================================!






const furnishingContainer = document.querySelectorAll(".furnishing-Container");

const furnishingNxtBtn = document.querySelectorAll("#furnishingNxtBtn");
const furnishingPreBtn = document.querySelectorAll("#furnishingPreBtn");

furnishingContainer.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    furnishingNxtBtn[i].addEventListener("click", ()=>{
        item.scrollLeft += containerwidth;
    })

    furnishingPreBtn[i].addEventListener("click", ()=>{
        item.scrollLeft -= containerwidth;
    })
})









// !=============================> BEAUTY TOYS AND MORE 2  <=====================================!






const beauty2Container = document.querySelectorAll(".beauty2-Container");

const beauty2NxtBtn = document.querySelectorAll("#beauty2NxtBtn");
const beauty2PreBtn = document.querySelectorAll("#beauty2PreBtn");

beauty2Container.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    beauty2NxtBtn[i].addEventListener("click", ()=>{
        item.scrollLeft += containerwidth;
    })

    beauty2PreBtn[i].addEventListener("click", ()=>{
        item.scrollLeft -= containerwidth;
    })
})








// !=============================> TOP OFFERS ON MOBILE PHONES  <=====================================!






const mobilesContainer = document.querySelectorAll(".mobiles-Container");

const mobilesNxtBtn = document.querySelectorAll("#mobilesNxtBtn");
const mobilesPreBtn = document.querySelectorAll("#mobilesPreBtn");

mobilesContainer.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    mobilesNxtBtn[i].addEventListener("click", ()=>{
        item.scrollLeft += containerwidth;
    })

    mobilesPreBtn[i].addEventListener("click", ()=>{
        item.scrollLeft -= containerwidth;
    })
})