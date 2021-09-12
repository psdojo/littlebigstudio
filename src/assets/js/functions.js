document.querySelectorAll(".siteNav__listItem--link").forEach(function(element) {
	document.getElementById('burger').addEventListener('click', function() {
		
    if (element.classList.contains('transit')) {
      element.classList.remove('transit');
    } 
    
    else {
      element.classList.add('transit');
    }
  	});
});






document.getElementById('burger').addEventListener('click', function () {

  if (document.getElementsByClassName('siteNav')[0].classList.contains('show')) {
   document.getElementsByClassName('siteNav')[0].classList.remove('show');


  } else {
    document.getElementsByClassName('siteNav')[0].classList.add('show');

  }
});



console.log('hi');


// var list = document.getElementById('siteNav__listItem');

// document.querySelectorAll(".siteNav__listItem").forEach(function(element) {
// 	document.getElementById('burger').addEventListener('click', function() {
		
//     list.classList.add('transit');
//   	});
// });






const scrollElements = document.querySelectorAll(".square");

const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
  );
};


const displayScrollElement = (element) => {
  element.classList.add("showup");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }

    else  {
      console.log('hi');
    }
    }
  )}


window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});
