document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
        header.addEventListener("click", function () {
            const parentItem = this.parentElement;

            const isActive = parentItem.classList.contains("active");

            document.querySelectorAll(".accordion-item").forEach((item) => {
                item.classList.remove("active");
                item.querySelector("span").textContent = "+";
            });

            if (!isActive) {
                parentItem.classList.add("active");
                this.querySelector("span").textContent = "-";
            }
        });
    });
});

function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Gagal memuat " + filePath);
            }
            return response.text();
        })
        .then((htmlData) => {
            document.getElementById(elementId).innerHTML = htmlData;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header-placeholder", "header.html");
    loadComponent("footer-placeholder", "footer.html");

    /* INTERSECTION OBSERVER */

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
    };

    const scrollObserver = new IntersectionObserver(function (
        entries,
        observer,
    ) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    animatedElements.forEach((el) => {
        scrollObserver.observe(el);
    });
});
