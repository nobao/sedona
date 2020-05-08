let hotelSearchOpenButton = document.querySelector(".hotel-search-title"),
    hotelSearchForm = document.querySelector(".hotel-search-form-wrapper");

hotelSearchOpenButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    hotelSearchForm.classList.toggle("hide-item");
    hotelSearchForm.classList.toggle("pull-down");
});