export function headerDisplay() {
    const titlePages = document.querySelector('title').innerText;
    /**
     * Отображение шапки на разных страницах
     */
    if(titlePages == 'Шпаргалки') {
        header.innerHTML =`
            <div class="container">
              <div class="row">
                <h1 class="item p10">${titlePages}</h1>
              </div>
            </div>`
    } else {
        header.innerHTML =`
            <div class="container">
                <div class="row">
                  <div class="col jcc">
                    <a class="item header-logo" href="../index.html">
                      <img src="../images/home.png" alt="home" class="logo btn-logo" />
                    </a><!-- Лого -->
                  </div>
                  <div class="col f1 jcc">
                    <h1 class="item p10">${titlePages}</h1>
                  </div>
                </div>
            </div>`
    }
}

