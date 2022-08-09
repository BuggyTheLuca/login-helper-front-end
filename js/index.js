function showPass(){
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const passField = document.getElementById('field-password');

    if(eye.style.display === 'none'){
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        passField.type = 'text';
    }else{
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        passField.type = 'password';
    }
}

//por padrao, quando clica no botao do formulario, faz o carregamento da pagina
document.getElementById('btn-login').addEventListener('click', function(e){
    //isso previne este padrão
    e.preventDefault();
    alert('Logado!');
});