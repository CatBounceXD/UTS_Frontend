document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("cariKlinik");
    const klinikCards = document.querySelectorAll(".klinik-card");

    if(searchInput) {
        searchInput.addEventListener("input", function (e) {
            const keyword = e.target.value.toLowerCase();

            klinikCards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                
                if (cardText.includes(keyword)) {
                    card.style.display = "flex"; 
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});