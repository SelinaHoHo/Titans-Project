function animateNumber(
    finalNumber,
    duration = 5000,
    startNumber = 0,
    callback
  ) {
    const startTime = performance.now();
    function updateNumber(currentTime) {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime > duration) {
        callback(finalNumber);
      } else {
        const rate = elapsedTime / duration;
        const currentNumber = Math.round(rate * finalNumber);
        callback(currentNumber);
        requestAnimationFrame(updateNumber);
      }
    }
    requestAnimationFrame(updateNumber);
  }
  document.addEventListener("DOMContentLoaded", function () {
    animateNumber(332, 1500, 0, function (number) {
      const formattedNumber = number.toLocaleString();
      document.getElementById("courses-count").innerText = formattedNumber;
    });

    animateNumber(1403, 1500, 0, function (number) {
      const formattedNumber = number.toLocaleString();
      document.getElementById("members-count").innerText = formattedNumber;
    });

    animateNumber(60, 1500, 0, function (number) {
      const formattedNumber = number.toLocaleString();
      document.getElementById("authors-count").innerText = formattedNumber;
    });
    animateNumber(120, 1500, 0, function (number) {
      const formattedNumber = number.toLocaleString();
      document.getElementById("subjects-count").innerText = formattedNumber;
    });
  });

// headers

function showSidebar() {
  var sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("show");
  var overlay = document.querySelector(".overlay");
  overlay.classList.add("show");
}

function hideSidebar() {
  var sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("show");
  var overlay = document.querySelector(".overlay");
  overlay.classList.remove("show");
}
//



  const event1 = document.querySelector('.event-1');
  const event2 = document.querySelector('.event-2');
  const arrowBacks = document.querySelectorAll('.arrow-back');
  const arrowForwards = document.querySelectorAll('.arrow-forward');
  
  function updateButtons() {
      const isDesktop = window.innerWidth >= 768;
      const isEvent1Visible = !event1.classList.contains('hidden');
      arrowBacks.forEach(button => button.disabled = isDesktop || isEvent1Visible);
      arrowForwards.forEach(button => button.disabled = isDesktop || !isEvent1Visible);
  
      // If it's desktop, show all events
      if (isDesktop) {
          event1.classList.remove('hidden');
          event2.classList.remove('hidden');
      } else {
          // If it's mobile, show only the first event
          if (isEvent1Visible) {
              event1.classList.remove('hidden');
              event2.classList.add('hidden');
          } else {
              event1.classList.add('hidden');
              event2.classList.remove('hidden');
          }
      }
  }
  
  arrowBacks.forEach(button => button.addEventListener('click', () => {
      event1.classList.remove('hidden');
      event2.classList.add('hidden');
      updateButtons();
  }));
  
  arrowForwards.forEach(button => button.addEventListener('click', () => {
      event1.classList.add('hidden');
      event2.classList.remove('hidden');
      updateButtons();
  }));
  
  window.addEventListener('resize', updateButtons);
  updateButtons();


   const swiper = new Swiper('.mySwiper', {
     // Default parameters
     slidesPerView: 1,
     // Responsive breakpoints
     breakpoints: {
       // when window width is >= 320px
       320: {
         slidesPerView: 1,
       },
       // when window width is >= 480px
       768: {
         slidesPerView: 2,
       },
       // when window width is >= 640px
       1024: {
         slidesPerView: 3,
       },
     },
   });