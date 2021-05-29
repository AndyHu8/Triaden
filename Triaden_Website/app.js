window.onload = () => {
    const ul = document.querySelector('nav ul');
    const nav = document.querySelector('.burger-nav');

    nav.addEventListener("click", () =>{
        ul.classList.toggle("open");
    });
};