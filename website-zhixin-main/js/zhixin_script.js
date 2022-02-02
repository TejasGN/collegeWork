const headr = document.querySelector('#headr');
const crrDtlBtn = document.querySelectorAll('.careers .detail-btn');
const crrJobDetl = document.querySelectorAll('.careers .job-details');

/*Hamburger code starts*/
document.querySelector('#hamburger').addEventListener('click', () => {
    if(document.querySelector('#hamburger').classList.contains('open')){
        document.querySelector('.mob-menu').style.display = "none";
        document.querySelector('#hamburger').classList.remove('open');
    }
    else{
        document.querySelector('.mob-menu').style.display = "flex";
        document.querySelector('#hamburger').classList.add('open');
    }
});
/*Hamburger code ends*/

/*Sticky header code starts*/
document.addEventListener('scroll', () => {
    if(this.scrollY >= 6 && !headr.classList.contains('sticky')){
        headr.classList.add('sticky');
    }
    else if(this.scrollY < 6 && headr.classList.contains('sticky')){
        headr.classList.remove('sticky');
    }
});
/*Sticky header code ends*/

/*Careers page view more code starts*/
crrDtlBtn.forEach(elem => {
    elem.addEventListener('click', () => {
        crrJobDetl.forEach(div => {
            div.classList.remove('show');
        });
        elem.parentNode.parentNode.parentNode.nextElementSibling.classList.add('show');
    });
});
/*Careers page view more code ends*/