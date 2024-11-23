const input = document.getElementById("receta");
const galleryItems = document.querySelectorAll(".gallery_item");

input.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  galleryItems.forEach((item) => {
    const title = item.querySelector("h2").textContent.toLowerCase();
    const description = item.querySelector("p").textContent.toLowerCase();
    if (title.includes(query) || description.includes(query)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});
