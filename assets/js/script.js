const submitbtn = document.querySelector('#submitbtn');
const indexmain = document.querySelector('#indexmain');
const thankmain = document.querySelector('#thankmain');
const rating = document.querySelector('#rating');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const n3 = document.querySelector('#n3');
const n4 = document.querySelector('#n4');
const n5 = document.querySelector('#n5');

// This line disables the submit button by setting its disabled property to true.
submitbtn.disabled = true; 

// This function enables or disables the submit button based on whether the rating element has any content. If the innerHTML of rating is empty, the submit button is disabled. Otherwise, it is enabled
function toggleSubmitButton() {
    submitbtn.disabled = !rating.innerHTML;
}

//This event listener is added to the n1 element. When n1 is clicked, it sets the innerHTML of the rating element to '1' and calls the toggleSubmitButton function.
n1.addEventListener('click', function() {
    rating.innerHTML = '1';
    toggleSubmitButton();
});

n2.addEventListener('click', function() {
    rating.innerHTML = '2';
    toggleSubmitButton();
    });

n3.addEventListener('click', function() {
    rating.innerHTML = '3';
    toggleSubmitButton();
});

n4.addEventListener('click', function() {
    rating.innerHTML = '4';
    toggleSubmitButton();
});

n5.addEventListener('click', function() {
    rating.innerHTML = '5';
    toggleSubmitButton();
});

//This event listener is added to the submitbtn element. When the submit button is clicked, it prevents the default form submission behavior. If the event target exists (which is always the case in this context), it hides the indexmain element and shows the thankmain element. Otherwise, it hides the thankmain element and shows the indexmain element.
submitbtn.addEventListener('click', function(event) {
event.preventDefault();
if (event.target) {
    indexmain.style.display = 'none';
    thankmain.style.display = 'flex';
} else {
    thankmain.style.display = 'none';
    indexmain.style.display = 'flex';
}
});
