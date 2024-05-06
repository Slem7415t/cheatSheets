export function footerDisplay() {
    const titlePages = document.querySelector('title').innerText;
    /**
     * Отображение подвала на разных страницах
     */
    if(titlePages == 'Шпаргалки') {
        footer.innerHTML =`
        <div class="container">
            <div class="row">
              <div class="col">
                <img src="images/signature.png" class="item signature" />
              </div>
              <div class="col"></div>
            </div>
        </div>`
    } else {
        footer.innerHTML =`
        <div class="container">
            <div class="row">
              <div class="col">
                <img src="../images/signature.png" class="item signature" />
              </div>
              <div class="col"></div>
            </div>
        </div>`
    }
}
