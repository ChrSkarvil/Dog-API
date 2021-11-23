let timer;

const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");
const nextBtn = document.querySelector(".next-btn");

async function randomBreed() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  console.log(data);
  showImage(data.message);
}

function showImage(data) {
  document.getElementById("slideshow").innerHTML = `
    <div class="slide2" id="slide" style="background-image: url('${data}');"></div>
    <div class="slide2" id="slide"></div>
    `;
}

// prevBtn.addEventListener("click", prevDog);
randomBtn.addEventListener("click", randomBreed);
// nextBtn.addEventListener("click", nextDog);
