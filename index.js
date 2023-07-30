
// for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
//     document.querySelectorAll(".drum")[index].addEventListener("click", function () {
//         // let audio= new Audio('sounds/tom-1.mp3');
//         // audio.play();
//          btnInnerHtml = this.innerHTML;
//         switch (btnInnerHtml) {
//             case "w":
//                 let audio = new Audio('sounds/tom-1.mp3');
//                 audio.play();
//                 break;
//             case "a":
//                 let audio1 = new Audio('sounds/tom-2.mp3');
//                 audio1.play();
//                 break;
//             case "s":
//                 let audio3 = new Audio('sounds/tom-3.mp3');
//                 audio3.play();
//                 break;
//             case "d":
//                 let audio4 = new Audio('sounds/tom-4.mp3');
//                 audio4.play();
//                 break;
//             case "j":
//                 let audio5 = new Audio('sounds/snare.mp3');
//                 audio5.play();
//                 break;
//             case "k":
//                 let audio6 = new Audio('sounds/crash.mp3');
//                 audio6.play();
//                 break;
//             case "l":
//                 let audio7 = new Audio('sounds/kick-bass.mp3');
//                 audio7.play();
//                 break;
//             default:
//                 break;
//         }
//     });
// }
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        btnInnerHtml = this.innerHTML;
        checkKey(btnInnerHtml);
        btnAnimation(btnInnerHtml);
    });

}


document.addEventListener("keydown", function (event) {
    checkKey(event.key);
    btnAnimation(event.key);

});

function checkKey(char) {
    switch (char) {
        case "w":
            let audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            let audio1 = new Audio('sounds/tom-2.mp3');
            audio1.play();
            break;
        case "s":
            let audio3 = new Audio('sounds/tom-3.mp3');
            audio3.play();
            break;
        case "d":
            let audio4 = new Audio('sounds/tom-4.mp3');
            audio4.play();
            break;
        case "j":
            let audio5 = new Audio('sounds/snare.mp3');
            audio5.play();
            break;
        case "k":
            let audio6 = new Audio('sounds/crash.mp3');
            audio6.play();
            break;
        case "l":
            let audio7 = new Audio('sounds/kick-bass.mp3');
            audio7.play();
            break;
        default:
            break;
    }
}
function btnAnimation(key) {
    let activeBtn = document.querySelector("." + key);
    activeBtn.classList.add("pressed");
    setTimeout(() => {
        activeBtn.classList.remove("pressed");
    }, 100);
}