
const injectPopup = () => {
    const body = document.querySelector('body')

    body.innerHTML += `
        <div class="popup fade-in">

            <div class="popup__bg"></div>

            <div class="popup__wrapper">

                <img src="/assets/brand/check.svg" class="popup__wrapper__img" alt="check">

                <h2 class="popup__wrapper__title">
                    Tu información ha sido <br>
                    enviada exitosamente
                </h2>

                <h2 class="popup__wrapper__sub-title">
                    Dentro de las próximas <br>
                    24 horas me estaré comunicando <br>
                    contigo por correo o celular
                </h2>

                <div class="popup__wrapper__btn" onclick="rejectPopup()">
                    <p>
                        Entendido
                    </p>
                </div>

            </div>

        </div>
`}

const rejectPopup = () => {
    const listPopup = document.querySelectorAll('.popup')

    console.log('popup');

    listPopup.forEach( (popup) => {

        // popup.parentNode.removeChild(popup);
        popup.remove()
    })

}