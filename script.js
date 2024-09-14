window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');

    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach((a) => {
        a.classList.remove('current');
        if (a.getAttribute('href') === '#' + current) {
            a.classList.add('current');
        }
    });
});
