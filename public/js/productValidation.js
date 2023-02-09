
    window.addEventListener('load',()=>{
        /*validacion  nombre del producto*/
        const nameProduct = document.querySelector('#name');
        const nameProductError = document.querySelector('#nameProductError')
        nameProduct.addEventListener('blur',()=>{
            if(nameProduct.value.length < 5){
                nameProductError.innerHTML= "El nombre del producto debe tener al menos 5 caracteres"
                nameProduct.focus();
            }
        });
        /*validacion descripcion del producto*/
        const description = document.querySelector('#description');
        const descriptionError = document.querySelector('#descriptionError')
        description.addEventListener('blur',()=>{
            if (description.value.length < 20){
                descriptionError.innerHTML = 'la descripcion debe tener al menos 20 caracteres'
            }
        });
        /* validacion de imagen*/
        const errorImagen = document.querySelector('#errorImagen')
        const imagen = document.querySelector('#image');
        const array = imagen.value.split('.')
        const formatosPermitidos = ['png','jpeg','gif','jpg']
        imagen.addEventListener('load',()=>{
        const formatoValido = false
            for (const formato of formatosPermitidos){
                if(array[1] === formato){
                    formatoValido = true;
                     break;
                }
            }
        if (!formatoValido) {
        errorImagen.innerHTML= 'los formatos permitidos son png, jpeg, gif, jpg';
        }

           
           
        })
    });
