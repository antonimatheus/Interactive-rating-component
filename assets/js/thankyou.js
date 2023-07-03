var btn2 = document.querySelector("#inputButton2");

        btn2.addEventListener("click", function () {
            var rating = document.querySelector("#rating");
            rating.textContent =  localStorage.getItem('valueText'); })
    