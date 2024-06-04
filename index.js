const popupBtn = document.querySelector('.btn-login');
popupBtn.onclick = () => {
    login-page.classList.add('active');
}

function login(){
    var warpper = document.getElementById("warpper");
    warpper.classList.add("popup")
}