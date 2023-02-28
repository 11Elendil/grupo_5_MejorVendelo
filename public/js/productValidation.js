
    window.addEventListener('load',()=>{
        /*validacion  nombre del producto*/
        const nameProduct = document.querySelector('#name');
        const nameProductError = document.querySelector('#nameProductError')
        if (nameProduct){
            
            nameProduct.addEventListener('blur',()=>{
                if(nameProduct.value.length < 5){
                    nameProductError.innerHTML= "El nombre del producto debe tener al menos 5 caracteres"
                    nameProduct.focus();
                }
            });

        }
        
        /*validacion descripcion del producto*/
        const description = document.querySelector('#description');
        const descriptionError = document.querySelector('#descriptionError')
        description.addEventListener('blur',()=>{
            if (description.value.length < 20){
                descriptionError.innerHTML = 'te recomendamos que la descripcion tenga al menos 20 caracteres'
                description.focus();
            }
        });
        /* validacion de imagen*/
        const errorImagen = document.querySelector('#errorImagen')
        const imagen = document.querySelector('#image');
        const array = imagen.value.split('.')
        const formatosPermitidos = ['image/png','image/jpeg','image/gif','image/jpg']
        

        
        imagen.addEventListener('change',()=>{
            const archivoAValidar = imagen.files[0];
            console.log(archivoAValidar)
        
        let formatoValido = true
        
        if(!formatosPermitidos.includes(archivoAValidar.type)) {
            formatoValido = false
        } 
        
        if (!formatoValido) {
        errorImagen.innerHTML= 'los formatos permitidos son png, jpeg, gif, jpg';
        }

           
           
        })
    });
