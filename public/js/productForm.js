document.addEventListener('DOMContentLoaded',()=>{
    const imageinput = document.getElementById('imageInput');
    const iconImageInput = document.getElementById('iconImageInput');
    if(iconImageInput){
    iconImageInput.addEventListener('click',()=>{
        imageinput.click()
    })}
})
