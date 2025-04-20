document.addEventListener('DOMContentLoaded', function () {
    const coffee = document.getElementById('coffee');
    const coffeeBtn = document.getElementById('coffeeBtn');
    coffee.classList.add('show');
    coffeeBtn.classList.add('active');


    const body = document.body;
    body.style.setProperty('--bg-image', 'url("/images/coffees.jpg")');
    body.classList.add('has-bg');

    const togglers = document.querySelectorAll('.nav-toggler');
    const collapsibles = document.querySelectorAll('.collapse');
    const logo = document.getElementById('logo');

    function toggleImage(toggler) {

    }

    togglers.forEach(function (toggler) {
        toggler.addEventListener('click', () => {
            toggler.classList.toggle('active');
            let target = document.querySelector(toggler.getAttribute('data-bs-target'));

            const bgImage = toggler.getAttribute('data-bg');
            if (bgImage) {
                body.style.setProperty('--bg-image', `url("/images/${bgImage}")`);
            }

            collapsibles.forEach(collapsible => {
                togglers.forEach(t => {
                    if (t !== toggler) {
                        t.classList.remove('active');
                    };
                });

                if (collapsible !== target) {
                    collapsible.classList.remove('show');
                };

                collapsible.addEventListener('shown.bs.collapse', function () {
                    logo.classList.remove('up');
                    logo.classList.add('down');
                    let imageUrl = `url('/images/${toggler.dataset.bg}')`;
                    body.style.setProperty('--bg-image', imageUrl);
                    body.classList.add('has-bg');
                });

                collapsible.addEventListener('hidden.bs.collapse', function () {
                    logo.classList.remove('down');
                    logo.classList.add('up');
                    body.classList.remove('has-bg');
                    body.style.removeProperty('--bg-image');
                });
            });
        });
    });
});
