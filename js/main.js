import {headerDisplay} from './templates/header.js';
import {footerDisplay} from './templates/footer.js';
headerDisplay();
footerDisplay();

import { getBackgroundPages } from "./modules/gradients.js";

$('document').ready(function() {

    $('.head_hiden').height($('header').height());
    /*блок под шапкой*/

    // console.log($('header')[0].clientHeight);
    // console.log($('.con_nav').height());
    console.log($('header')[0].clientHeight);
    console.log($('header'));

    // getjQueryPages();
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



 