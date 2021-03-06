/* FAQ hide-show function  dresses*/


let PlusButton = document.querySelector('#plusDress');
let ShowDressText = document.querySelector('.showDressText');

let show = true;
PlusButton.addEventListener('click', function(){
   show = !show;
   if(!show){
       ShowDressText.style.display = "block";
   }  
});
/* close function */
let closeFaq = document.querySelector('.close');

closeFaq.addEventListener('click', function(){
    ShowDressText.style.display = "none";
})

/* dress-1 */
let PlusButton1 = document.querySelector('#plusDress1');
let ShowDressText1 = document.querySelector('.showDressText1');

let show1 = true;
PlusButton1.addEventListener('click', function(){
   show1 = !show1;
   if(!show1){
       ShowDressText1.style.display = "block";
   }  
});
/* close function */
let closeFaq1 = document.querySelector('.close1');

closeFaq1.addEventListener('click', function(){
    ShowDressText1.style.display = "none";
})

/* dress-2 */
let PlusButton2 = document.querySelector('#plusDress2');
let ShowDressText2 = document.querySelector('.showDressText2');

let show2 = true;
PlusButton2.addEventListener('click', function(){
   show2 = !show2;
   if(!show2){
       ShowDressText2.style.display = "block";
   }  
});
/* close function */
let closeFaq2 = document.querySelector('.close2');

closeFaq2.addEventListener('click', function(){
    ShowDressText2.style.display = "none";
})


/* trousers */
/* let PlusButton = document.querySelector('#plusDress');
let ShowDressText = document.querySelector('.showDressText');

let show = true;
PlusButton.addEventListener('click', function(){
   show = !show;
   if(!show){
       ShowDressText.style.display = "block";
   }  
}); */
/* close function *
let closeFaq = document.querySelector('.close');
closeFaq.addEventListener('click', function(){
    ShowDressText.style.display = "none";
}) */

/*  */
/* let ShowDressText = document.querySelector('.showDressText');
let PlusButton = document.querySelector('#plusDress');
for(let a = 0; a < PlusButton.length; a++){
    let PlusButtonLoop = PlusButton[0];
    let show = true;
    PlusButtonLoop.addEventListener('click', function(){
        show = !show;
        if(!show){
            ShowDressText.style.display = "block";
        }  
    })
} */
//console.log('pusButton', ShowContent); 
/*  *
let removeCartContent = document.getElementsByClassName("btn-danger");
for (let a = 0; a < removeCartContent.length; a++) {
  let removeBtn = removeCartContent[a];
  removeBtn.addEventListener("click", function(event) {
    let deleteContent = event.target;
    deleteContent.parentElement.parentElement.remove();
    /* console.log(deleteContent); *
    updateCartTotal();
  });
}
/*  */


 
/* let myDress = document.querySelector('.dressFaq');
let showDressContent  = document.querySelector('.showDressText');
let myPlusIcon = document.querySelector('#plusDress');
//let myPlus = document.getElementById('span');

let showIt = true;
myPlusIcon.addEventListener('click', function(){
        showIt = !showIt;
        if(!showIt){
            showDressContent.style.display = "none";
            showDressContent.style.flexDirection = "column";
            showDressContent.style.display = "none";
            /*mySpan.innerHTML = "X";
            mySpan.style.color = "red";
            mySpan.style.fontWeight = "bold";
            mySpan.style.marginLeft = "1%";
            mySpan.style.padding = "1% 1%"; *
        }else if (showIt) {
            document.location.reload();
          }
}); */