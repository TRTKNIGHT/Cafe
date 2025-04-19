document.addEventListener('DOMContentLoaded', function () {
    const coffee = document.getElementById('coffee');
    const coffeeBtn = document.getElementById('coffeeBtn');
    coffee.classList.add('show');
    coffeeBtn.classList.add('active');
    shuffleImage();

    function shuffleImage() {
        const hotdrinks = document.getElementById('hotDrinksBtn');
        const exirs = document.getElementById('exirsBtn');
        const snacks = document.getElementById('snacksBtn');
        const shakesAndIceCreams = document.getElementById('shakesAndIceCreamsBtn');
        const mocktales = document.getElementById('mocktalesBtn');
        const punches = document.getElementById('punchesBtn');
        const smothies = document.getElementById('smothiesBtn');
        if (coffeeBtn.classList.contains('active')) {
            document.body.style.backgroundImage = "url('/images/coffees.jpg')";
        }
        else if (hotdrinks.classList.contains('active')) {
            document.body.style.backgroundImage = "url('/images/hotdrinks.jpg')";
        }
        else if (exirs.classList.contains('active')) {
            document.body.style.backgroundImage = "url('/images/hotdrinks.jpg')";
        }
        else if (snacks.classList.contains('active')) {
            document.body.style.backgroundImage = "url('/images/snacks.jpg')";
        }
        else if (shakesAndIceCreams.classList.contains('active')) {
            document.body.style.backgroundImage = "url('/images/shakesandincecreams.jpg')";
        }
        else if (mocktales.classList.contains('active')) {
            document.body.style.backgroundImage = "url('/images/mocktales.jpg')";
        }
        else if (punches.classList.contains('active')) {
            document.body.style.backgroundImage = "url('/images/punches.jpg')";
        }
        else if (smothies.classList.contains('active')) {
            document.body.style.backgroundImage = "url('/images/smothies.jpg')";
        }
        else {
            document.body.style.backgroundImage = "none";
        }
    };

    const togglers = document.querySelectorAll('.nav-toggler');
    const collapsibles = document.querySelectorAll('.collapse');
    const logo = document.getElementById('logo');

    togglers.forEach(function (toggler) {
        toggler.addEventListener('click', () => {
            toggler.classList.toggle('active');
            let target = document.querySelector(toggler.getAttribute('data-bs-target'));

            collapsibles.forEach(collapsible => {
                togglers.forEach(t => {
                    if (t !== toggler) {
                        t.classList.remove('active');
                    };
                });

                if (collapsible !== target) {
                    collapsible.classList.remove('show');
                    shuffleImage();
                };

                collapsible.addEventListener('shown.bs.collapse', function () {
                    logo.classList.remove('up');
                    logo.classList.add('down');
                });

                collapsible.addEventListener('hidden.bs.collapse', function () {
                    logo.classList.remove('down');
                    logo.classList.add('up');
                });
            });
        });
    });
});
