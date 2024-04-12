const testimoniData = [
  {
    nama: "Icha",
    komentar:
      "Paket mendarat aman sampe bandung. Good packaging dan juga sudah ada sertifikasi halal dan pirt",
  },
  {
    nama: "Maulina",
    komentar:
      "Suka banget produknya segar, jarang-jarang nemu minuman yang ringan tapi fulfilling. Enak!",
  },
];

// Function to update testimonial content based on index
function updateTestimonial(index) {
  const testimonial = testimoniData[index];
  const testimonialQuote = document.querySelector(".testimoni-quote");
  const testimonialPerson = document.querySelector(".testimoni-person");

  testimonialQuote.textContent = `"${testimonial.komentar}"`;
  testimonialPerson.textContent = testimonial.nama;
}

// Initial index for testimonial
let currentIndex = 0;
updateTestimonial(currentIndex);

// Event listener for next button
document.querySelector(".left").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % testimoniData.length;
  updateTestimonial(currentIndex);
});

// Event listener for previous button
document.querySelector(".right").addEventListener("click", function () {
  currentIndex =
    (currentIndex - 1 + testimoniData.length) % testimoniData.length;
  updateTestimonial(currentIndex);
});

// // Function to create product elements based on data
// function createProductElement(product) {
//   const productHTML = `
//     <div class="col">
//       <img src="./img/${product.namaProduk
//         .replace(/\s+/g, "-")
//         .toLowerCase()}.png" alt="${product.namaProduk}" />
//       <h3>${product.namaProduk}</h3>
//       <p>${product.deskripsiProduk}</p>
//       <button class="pesan">Pesan Sekarang</button>
//     </div>
//   `;
//   return productHTML;
// }

// // Function to display products
// function displayProducts() {
//   const produkContainer = document.getElementById("produk-container");
//   let productElements = "";

//   produkData.forEach((product) => {
//     productElements += createProductElement(product);
//   });

//   produkContainer.innerHTML = productElements;
// }

// // Call the function to display products
// displayProducts();
