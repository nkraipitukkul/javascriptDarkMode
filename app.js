let page = document.getElementById('page');
let headerTop = document.getElementById('headerTop');
let dateP1 = document.getElementById('dateP1');
let dateP2 = document.getElementById('dateP2');
let dateP3 = document.getElementById('dateP3');
let dateP4 = document.getElementById('dateP4');
let bodyText1 = document.getElementById('bodyText1');
let bodyText2 = document.getElementById('bodyText2');
let bodyText3 = document.getElementById('bodyText3');
let bodyText4 = document.getElementById('bodyText4');
let bt = document.getElementById('bt');


function darkMode(){
    page.classList.toggle("darkMode");
    headerTop.classList.toggle('headerDark');
    dateP1.classList.toggle('lightGrey');
    dateP2.classList.toggle('lightGrey');
    dateP3.classList.toggle('lightGrey');
    dateP4.classList.toggle('lightGrey');
    bodyText1.classList.toggle('whiteText');
    bodyText2.classList.toggle('whiteText');
    bodyText3.classList.toggle('whiteText');
    bodyText4.classList.toggle('whiteText');
    bt.classList.toggle('forButton');
}