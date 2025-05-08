function navbar() {
  return `
    <nav class="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky w-full">
      <div class="text-2xl font-bold">
        <a href="./index.html">
          <h1>Ravi</h1>
        </a>
      </div>

      <ul class="hidden md:flex space-x-6 font-medium">
        <li><a href="./index.html" class="hover:text-blue-600 transition-colors">Home</a></li>
        <li><a href="./About.html" class="hover:text-blue-600 transition-colors">About</a></li>
        <li><a href="./Services.html" class="hover:text-blue-600 transition-colors">Services</a></li>
        <li><a href="./Contact.html" class="hover:text-blue-600 transition-colors">Contact</a></li>
      </ul>

      <div class="hidden md:flex space-x-4">
        <a href="./SignIn.html"><button
            class="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-100 transition-colors">Sign
            In</button></a>
        <a href="./SignUp.html"><button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Sign
            Up</button></a>
      </div>

      <div class="md:hidden">
        <i class="fa-solid fa-bars text-2xl cursor-pointer" id="menu-toggle"></i>
      </div>
    </nav>

    <div id="mobile-menu" class="md:hidden flex flex-col items-center bg-white shadow-lg px-6">
      <ul class="flex flex-col space-y-4 py-4 font-medium">
        <li><a href="./index.html" class="hover:text-blue-600 transition-colors block">Home</a></li>
        <li><a href="./About.html" class="hover:text-blue-600 transition-colors block">About</a></li>
        <li><a href="./Services.html" class="hover:text-blue-600 transition-colors block">Services</a></li>
        <li><a href="./Contact.html" class="hover:text-blue-600 transition-colors block">Contact</a></li>
      </ul>
      <div class="flex flex-col space-y-4 pb-4">
        <a href="./SignIn.html"><button
            class="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-100 transition-colors">Sign
            In</button></a>
        <a href="./SignUp.html"><button
            class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Sign
            Up</button></a>
      </div>
    </div>

    <style>
      #mobile-menu {
        transition: all 0.3s ease;
        max-height: 0;
        overflow: hidden;
      }
      #mobile-menu.active {
        max-height: 500px;
      }
    </style>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navbar").innerHTML = navbar();

  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
