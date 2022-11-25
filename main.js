const headerNav = document.querySelector('#navbar')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener("click", () => {
    const visibility = headerNav.getAttribute("data-visible")

    if(visibility === "false") {
        headerNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else if (visibility === "true") {
        headerNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }

})

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

const year = document.querySelector("#current-year")

year.innerHTML = new Date().getFullYear()