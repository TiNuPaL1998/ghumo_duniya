// LIVE SEARCH
const searchInput = document.getElementById("searchInput");
const cards = document.getElementsByClassName("card");

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    for (let card of cards) {
        card.style.display = card.innerText.toLowerCase().includes(value)
            ? "block"
            : "none";
    }
});
