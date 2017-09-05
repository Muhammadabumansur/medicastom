var mainSlider = document.querySelector('.main-slider');
if(mainSlider) {
    var mainSliderFlkty = new Flickity( mainSlider, {
      // options
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      autoPlay: true,
      pageDots: false,
      arrowShape: { 
        x0: 25,
        x1: 70, y1: 50,
        x2: 75, y2: 50,
        x3: 30
      }
    });
}

var offersSlider = document.querySelector('.offers-slider');
if (offersSlider) {
    var offersSliderFlkty = new Flickity( offersSlider, {
      // options
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      autoPlay: true,
      pageDots: false,
      groupCells: true,
      arrowShape: { 
        x0: 10,
        x1: 60, y1: 50,
        x2: 62, y2: 50,
        x3: 12
      }
    });
}

var advantagesSlider = document.querySelector('.advantages-slider');
if (advantagesSlider) {
    var advantagesSliderFlkty = new Flickity( advantagesSlider, {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: true,
    arrowShape: { 
        x0: 30,
        x1: 60, y1: 30,
        x2: 65, y2: 30,
        x3: 35
    }
    });
}

var feedbackSlider = document.querySelector('.feedback-slider');
if (feedbackSlider) {
    var feedbackSliderFlkty = new Flickity( feedbackSlider, {
      // options
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      autoPlay: true,
      groupCells: true,
      prevNextButtons: false
    });
}

var clientsSlider = document.querySelector('.clients-slider');
if (clientsSlider) {
    var clientsSliderFlkty = new Flickity( clientsSlider, {
      // options
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      autoPlay: true,
      groupCells: 1,
      prevNextButtons: false,
      pageDots: false
    });
}

var doctorsSlider = document.querySelector('.doctors-slider');
if (doctorsSlider) {
    var doctorsSliderFlkty = new Flickity( doctorsSlider, {
      // options
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      autoPlay: true,
      prevNextButtons: false
    });
}

var photosSlider = document.querySelector('.photos-slider');
if (photosSlider) {
    var photosSliderFlkty = new Flickity( photosSlider, {
      // options
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      autoPlay: true,
      groupCells: 1,
      prevNextButtons: false,
      pageDots: false
    });
}

$('.services-price h2 button').click(function(){
    $(this).toggleClass('closed');
    $(this).parents('.services-price').find('.price-table').slideToggle()
})

$('#mainMenuOpener').click(function(e){
    e.preventDefault();
    $('.main-menu-list').slideToggle();
})

var clinicSwitcher = document.querySelector('.clinic-switcher-wide');
if (clinicSwitcher) {
    clinicSwitcher.addEventListener('change', function(e) {
        var radios = this.querySelectorAll("input[type='radio']");
        [].forEach.call(radios, function(radio) {
            var currentMap = document.querySelector("[data-map=" + radio.id + "]");
            currentMap.style.display = radio.checked ?  "block" : "none"
        });
    })
}

$("#phone").inputmask({"mask": "+7 (999) 999-99-99"});