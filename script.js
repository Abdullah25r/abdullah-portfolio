function showSideBar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.style.display === "flex") {
    sidebar.style.display = "none";
  }else
  sidebar.style.display = "flex";
}
function scrollToTop() {
  // Scroll to the top of the page
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Adds a smooth scrolling effect
  });
}
