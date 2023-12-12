cards = document.querySelectorAll('#experience .container');
input = document.querySelector('#experience select');
filter = input.value.toLowerCase();

/*
cards.forEach(card => {
    card.classList.contains(filter) ? card.style.display = 'flex' : card.style.display = 'none';
}
);
*/

input.addEventListener("event", function () {
    var filterName = document.getElementById("filterName");
    filterName.innerHTML = "Filter: " + input.value;
});
