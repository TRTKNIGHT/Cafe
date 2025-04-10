document.addEventListener('DOMContentLoaded', function () {
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
