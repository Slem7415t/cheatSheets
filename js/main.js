/*main.js(Основной js)*/

import { getBackgroundPages } from "./modules/gradients.js";

$(function () {
    $("#header").load("../templates/header.html");
    $("#header_pages").load("../templates/header_pages.html");
    $("#footer").load("../templates/footer.html");
    $("#footer_pages").load("../templates/footer_pages.html");
});

$('document').ready(function() {

    getBackgroundPages();

});




// jQuery('document').ready(function() {

// // пока не получается отступ увеличить
// if(jQuery('div.nav').height() == 84) {
//     jQuery('div.nav').height(84);
//     console.log($('.nav').height());
// } else {
//     jQuery('div.nav').height(112);
// }



//  });

//  С приходом ES6 стандарта в JavaScript появилась возможность использовать модули. 
// Это позволяет подключать одни файлы к другим с помощью директив import/export.

//  Чтобы экспортировать функцию из файла utils.js, нужно добавить перед ней ключевое слово export:
 

//  export function usefulFunction() {
//    some code here
//  }
//  Затем в файле main.js можно импортировать эту функцию:
 

//  import { usefulFunction } from './utils.js';
  
//  теперь можно использовать usefulFunction



 