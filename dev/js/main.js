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
        x0: 25,
        x1: 70, y1: 50,
        x2: 75, y2: 50,
        x3: 30
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

var megaMenu = document.getElementById('megaMenu');
var megaMenuOpener = document.getElementById('megaMenuOpener');
var openMegaMenu = function(e) {
    e.preventDefault();
    megaMenu.classList.toggle('closed');
}

megaMenuOpener.addEventListener('click', openMegaMenu)