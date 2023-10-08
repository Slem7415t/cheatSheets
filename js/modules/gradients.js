/*gradients.js(Градиенты)*/

export function getBackgroundPages() {
    var degress = 90,
    timer = setInterval(function() {
        degress++;
        $('.fon_content').css('background', 'linear-gradient(' + degress + 'deg, #ffffff, #d1d0d0');
    }, 15000 / 360);
}; /*Фон страницы*/