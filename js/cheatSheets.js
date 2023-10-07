/*cheatSheets.js*/


jQuery('document').ready(function() {

var
    degress = 90,
    timer = setInterval(function() {

        degress++;
        jQuery('.fon_content').css('background', 'linear-gradient(' + degress + 'deg, #ffffff, #d1d0d0');

    }, 60000 / 360);

});


jQuery('document').ready(function() {

// пока не получается отступ увеличить
if(jQuery('div.nav').height() == 84) {
    jQuery('div.nav').height(84);
    console.log($('.nav').height());
} else {
    jQuery('div.nav').height(112);
}

 });

