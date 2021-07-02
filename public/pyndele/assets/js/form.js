(function(){

    let formPopupDesktop = document.querySelector('#formPopupDesktop');
    let formPopupMovil = document.querySelector('#formPopupMovil');

    let formUpFooterDesktop = document.querySelector('#formUpFooterDesktop');
    let formUpFooterMovil = document.querySelector('#formUpFooterMovil');

    let btnPopup = document.querySelectorAll('.navbar__suscribete');
    let btnPopup2 = document.querySelectorAll('.aprende-emprender-col__suscribete');
    let close = document.querySelectorAll('.popup__wrapper__col-right__close'); 

    let bg = document.querySelectorAll('.popup__bg');
    let popup = document.querySelectorAll('.popup');
    

    for (let i = 0; i < btnPopup.length; i++) {

        btnPopup[i].addEventListener('click', function(){
            console.log('abrir')

            for (let i = 0; i < popup.length; i++) {
                popup[i].classList.remove('popup-close')
                
            }
        })
    }

    
    for (let i = 0; i < btnPopup2.length; i++) {

        btnPopup2[i].addEventListener('click', function(){
            console.log('abrir')
            
            for (let i = 0; i < popup.length; i++) {
                popup[i].classList.remove('popup-close')
                
            }
        })
    }


    for (let i = 0; i < close.length; i++) {
        
        close[i].addEventListener('click', function(){
            for (let i = 0; i < popup.length; i++) {
                popup[i].classList.add('popup-close')
                
            }
        })
    }

    for (let i = 0; i < bg.length; i++) {

        bg[i].addEventListener('click', function(){

            for (let i = 0; i < popup.length; i++) {
                popup[i].classList.add('popup-close')
                
            }
        })
    }

    const sendForm = function(formData ){

        let post = {
            nombre: formData.get('nombre'),
            correo: formData.get('correo'),
            temas:  formData.get('temas'),
        }

        let jsonPost = JSON.stringify(post);

        fetch('/form', {
            method: 'POST',
            body: jsonPost,
            headers: {
                "content-type" : "application/json"
            }
        })
        .then( res => res.json() )
        .then( data =>{
            
            console.log( data );

            if ( data.success === false ) {

                errorTerm.classList.add('active_error');
                
            } else {

                window.location = "/gracias";
                
            }

        })
    }

    formUpFooterDesktop.addEventListener('submit', function(e){

        e.preventDefault()

        let formData = new FormData(formUpFooterDesktop)

        sendForm(formData)

    })

    formPopupDesktop.addEventListener('submit', function(e){

        e.preventDefault()

        let formData = new FormData(formPopupDesktop)

        sendForm(formData)
    })

    
    formPopupMovil.addEventListener('submit', function(e){

        e.preventDefault()

        let formData = new FormData(formPopupMovil)

        sendForm(formData)
    })

    formUpFooterMovil.addEventListener('submit', function(e){

        e.preventDefault()

        let formData = new FormData(formUpFooterMovil)

        sendForm(formData)

    })
})();