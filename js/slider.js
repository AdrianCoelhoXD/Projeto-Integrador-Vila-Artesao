$(document).ready(function(){
    var slideIndex = 0;
    
    function showSlide() {
        var slides = $(".slide");
        var controls = $("#controls input");

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
            controls[i].checked = false;
        }

        slides[slideIndex].style.display = "block";  
        controls[slideIndex].checked = true;
    }

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= $(".slide").length) {
            slideIndex = 0;
        }
        showSlide();
    }

    function prevSlide() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = $(".slide").length - 1;
        }
        showSlide();
    }

    $("#bullets label").click(function(){
        slideIndex = $(this).index();
        showSlide();
    });

    $("#controls input").change(function() {
        slideIndex = $(this).index();
        showSlide();
    });

    setInterval(nextSlide, 3000); // Altera o slide automaticamente a cada 3 segundos

    showSlide();
});
document.addEventListener("DOMContentLoaded", function() {
  const carouselItems = document.querySelector(".carousel-items");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const totalItems = document.querySelectorAll(".item").length;
  let currentIndex = 0;
  let intervalId;

  function showSlide(index) {
    const offset = -index * 100 + "%";
    carouselItems.style.transform = `translateX(${offset})`;
  }

  function goToNext() {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
  }

  function goToPrev() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
  }

  function startAutoSlide() {
    intervalId = setInterval(goToNext, 3000); // Troca de slide a cada 3 segundos
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  }

  // Event listeners para os botões de navegação
  nextButton.addEventListener("click", () => {
    goToNext();
    stopAutoSlide();
  });

  prevButton.addEventListener("click", () => {
    goToPrev();
    stopAutoSlide();
  });

  // Iniciar slide automático quando a página carregar
  startAutoSlide();
});
