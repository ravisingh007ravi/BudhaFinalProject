function navbar() {
  const MENUData = [
    { name: "Home", link: "./index.html" },
    { name: "About", link: "./About.html" },
    { name: "Services", link: "./Services.html" },
    { name: "Contact", link: "./Contact.html" },
  ];

  const AuthData = [
    { name: "Sign In", link: "./SignIn.html" },
    { name: "Sign Up", link: "./SignUp.html" },
  ];

  const menu = MENUData.map((item) =>
    `<li><a href="${item.link}" class="hover:text-blue-600 transition-colors">${item.name}</a></li>`)

  const auth = AuthData.map((item) =>
    `<a href="${item.link}">
          <button class="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-100 transition-colors">
            ${item.name}
          </button>
        </a>`
  )

  return `
      <nav class="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 w-full z-50">
        <div class="text-2xl font-bold">
          <a href="./index.html">Ravi</a>
        </div>
  
        <ul class="hidden md:flex space-x-6 font-medium">${menu}</ul>
  
        <div class="hidden md:flex space-x-4">${auth}</div>
  
        <div class="md:hidden">
          <i class="fa-solid fa-bars text-2xl text-black cursor-pointer" id="menu-toggle"></i>
        </div>
      </nav>
  
      <div id="mobile-menu" class="md:hidden max-h-0 overflow-hidden transition-all duration-300 ease-in-out bg-white shadow-lg px-6">
        <ul class="flex flex-col items-center space-y-4 py-4 font-medium">${menu}</ul>
        <div class="flex flex-col items-center space-y-4 pb-4"> ${auth}</div>
      </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navbar").innerHTML = navbar();

  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("max-h-0");
    mobileMenu.classList.toggle("max-h-[500px]");
  });
});
