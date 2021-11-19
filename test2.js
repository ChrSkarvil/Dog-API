const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");
const nextBtn = document.querySelector(".next-btn");

async function randomBreed() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  console.log(data);
  showImage(data.message);
}

function showImage(images) {
  let currentImage = 0;
  document.getElementById("slideshow").innerHTML = `
    <div class="slide" id="slide" style="background-image: url('${images[0]}');"></div>
    <div class="slide" id="slide"></div>
    `;
}

// prevBtn.addEventListener("click", prevDog);
randomBtn.addEventListener("click", randomBreed);
// nextBtn.addEventListener("click", nextDog);
