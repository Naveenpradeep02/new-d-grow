console.log("main.js loaded");

document.addEventListener("DOMContentLoaded", function () {
  console.log("main.js loaded");
  console.log("DOM fully loaded and parsed");

  // Typed JS
  if (typeof Typed !== "undefined" && document.querySelector(".typed")) {
    new Typed(".typed", {
      strings: [
        "Digital Marketing",
        "SEO",
        "Social Media Marketing",
        "Lead Generation",
        "Website Designing",
        "Branding",
      ],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true,
    });
  }

  // Scroll number count
  const counters = document.querySelectorAll(".counter span");
  const container = document.querySelector(".counters");
  let active = false;

  if (container) {
    window.addEventListener("scroll", () => {
      if (
        window.pageYOffset >
          container.offsetTop - container.offsetHeight - 500 &&
        !active
      ) {
        counters.forEach((counter) => {
          counter.innerHTML = 0;
          let count = 0;
          const target = parseInt(counter.dataset.count);
          const increment = Math.ceil(target / 100);

          const updateCount = () => {
            if (count < target) {
              count += increment;
              if (count > target) count = target;
              counter.innerHTML = count;
              setTimeout(updateCount, 15);
            } else {
              counter.innerHTML = target;
            }
          };

          updateCount();
        });
        active = true;
      } else if (
        window.pageYOffset <
          container.offsetTop - container.offsetHeight - 500 &&
        active
      ) {
        counters.forEach((counter) => (counter.innerHTML = 0));
        active = false;
      }
    });
  }

  // Scroll Arrow
  const arrow = document.getElementById("scrollArrow");
  const firstSection = document.querySelector(".hero");

  if (arrow && firstSection) {
    window.addEventListener("scroll", () => {
      arrow.style.display =
        window.pageYOffset > firstSection.offsetHeight ? "block" : "none";
    });
  }

  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (scrollToTopBtn) {
    window.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercentage = (scrollTop / totalHeight) * 100;

      scrollToTopBtn.style.opacity = scrolledPercentage > 5 ? "1" : "0";
    };
  }

  // FAQ Toggle
  window.toggleFAQ = function (clickedQuestion) {
    const allAnswers = document.querySelectorAll(".faq .answer");
    const allQuestions = document.querySelectorAll(".faq .question");

    const answer = clickedQuestion.nextElementSibling;
    const isAlreadyOpen = answer.style.display === "block";

    allAnswers.forEach((ans) => (ans.style.display = "none"));
    allQuestions.forEach((q) => q.classList.remove("active"));

    if (!isAlreadyOpen) {
      answer.style.display = "block";
      clickedQuestion.classList.add("active");
    }
  };

  // Sub-menu toggle
  window.subMenuShow = function () {
    const subMenu = document.querySelector(".mobile-sub-menu");
    if (subMenu) subMenu.classList.toggle("show-sub-menu");
  };

  // ✅ Fixed Error Here
  const serviceMenuLink = document.querySelector(".service-menu > a");
  if (serviceMenuLink) {
    serviceMenuLink.addEventListener("click", (e) => {
      e.preventDefault();
      const subMenu = document.querySelector(".sub-service");
      if (subMenu) {
        subMenu.style.display =
          subMenu.style.display === "block" ? "none" : "block";
      }
    });
  }

  // Mobile menu
  window.showMenu = function () {
    const Menu = document.querySelector(".mobile-menu");
    const open = document.querySelector(".open");
    const close = document.querySelector(".close");

    if (Menu && open && close) {
      Menu.classList.toggle("show-menu");
      open.classList.toggle("hide-bar");
      close.classList.toggle("show-bar");
    }
  };

  window.showContent = function (section) {
    const visionBtn = document.getElementById("vision-btn");
    const missionBtn = document.getElementById("mission-btn");
    const visionContent = document.getElementById("vision-content");
    const missionContent = document.getElementById("mission-content");

    if (section === 1) {
      visionBtn.classList.add("active");
      missionBtn.classList.remove("active");
      visionBtn.classList.remove("inactive");
      missionBtn.classList.add("inactive");
      visionContent.classList.add("show");
      missionContent.classList.remove("show");
    } else {
      missionBtn.classList.add("active");
      visionBtn.classList.remove("active");
      missionBtn.classList.remove("inactive");
      visionBtn.classList.add("inactive");
      missionContent.classList.add("show");
      visionContent.classList.remove("show");
    }
  };

  // Dropdown close logic
  document.addEventListener("click", function (e) {
    const dropdown1 = document.querySelector(".dropdown");
    const dropdown2 = document.querySelector(".service-menu");
    const dropdownMenu1 = document.querySelector(".dropdown-menu");
    const dropdownMenu2 = document.querySelector(".sub-service");

    if (dropdown1 && dropdownMenu1 && !dropdown1.contains(e.target)) {
      dropdownMenu1.style.display = "none";
    }

    if (dropdown2 && dropdownMenu2 && !dropdown2.contains(e.target)) {
      dropdownMenu2.style.display = "none";
    }
  });

  // Dropdown services
  const services = [
    "Social Media Marketing(SMM)",
    "Digital Marketing services",
    "SEO Services",
    "Google Ads (PPC)",
    "SEO Content Writing",
    "Product Listing + Amazon",
    "Graphic Designing",
    "Digital Marketing Consultation",
    "Political Ads",
    "Web Designing & Development",
    "Lead Generation",
    "WhatsApp Marketing",
    "Email Marketing",
    "Marketing Automation",
    "Personal Branding",
    "GMB Listing & Ranking",
    "Lead Nurturing",
    "Video Production",
    "Personal Branding",
  ];

  const dropdownMenu = document.querySelector(".dropdown-menu");
  const dropdownOptions = document.getElementById("dropdown-options");
  const selectedOptionsBox = document.getElementById("selected-options");
  const servicesInput = document.getElementById("servicesInput");
  const form = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitButton");

  let selectedServices = [];

  window.toggleDropdown = function () {
    if (dropdownMenu) {
      dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
    }
  };

  if (dropdownMenu) {
    dropdownMenu.addEventListener("click", (e) => e.stopPropagation());
  }

  function renderDropdown() {
    if (!dropdownOptions) return;

    dropdownOptions.innerHTML = "";
    const remaining = services.filter((s) => !selectedServices.includes(s));

    if (remaining.length === 0) {
      dropdownOptions.innerHTML = `<div class="p-2 text-gray-400">No more options</div>`;
      return;
    }

    remaining.forEach((service) => {
      const label = document.createElement("label");
      label.className = "dropdown";
      label.textContent = service;
      label.onclick = (e) => {
        e.stopPropagation();
        selectedServices.push(service);
        renderDropdown();
        renderSelectedTags();
      };
      dropdownOptions.appendChild(label);
    });
  }

  function renderSelectedTags() {
    if (!selectedOptionsBox) return;

    selectedOptionsBox.innerHTML = "";

    if (selectedServices.length === 0) {
      selectedOptionsBox.innerHTML = "<span>No services selected</span>";
      updateServicesInput();
      return;
    }

    selectedServices.forEach((service) => {
      const tag = document.createElement("div");
      tag.className = "red-color";
      tag.innerHTML = `
          <span class="service-span">${service}</span>
          <button onclick="removeSelected('${service}')" class="btn-x"><i class="fa-solid fa-x"></i></button>
        `;
      selectedOptionsBox.appendChild(tag);
    });

    updateServicesInput();
  }

  window.removeSelected = function (service) {
    selectedServices = selectedServices.filter((s) => s !== service);
    renderDropdown();
    renderSelectedTags();
  };

  function updateServicesInput() {
    if (servicesInput) {
      servicesInput.value = selectedServices.join(", ");
    }
  }

  renderDropdown();

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const firstName = document.getElementById("firstName").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const phoneRegex = /^[0-9]{10}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const selectedBudget = document.querySelector(
        'input[name="budget"]:checked'
      );

      if (!firstName || firstName.length < 3) {
        alert("First name must be at least 3 characters long.");
        return;
      }

      if (!selectedServices.length) {
        alert("Please select at least one service.");
        return;
      }

      if (!selectedBudget) {
        alert("Please select a marketing budget.");
        return;
      }

      if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          window.location.href = "/";
        } else {
          alert("Submission failed. Please try again.");
          submitButton.disabled = false;
          submitButton.textContent = "Submit";
        }
      } catch (error) {
        alert("Network error. Please try again.");
        submitButton.disabled = false;
        submitButton.textContent = "Submit";
      }
    });
  }

  // Budget Selection Styling
  const checkboxes = document.querySelectorAll(".budget-checkbox");
  const checkDivs = document.querySelectorAll(".budget-div");

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
      checkboxes.forEach((cb, i) => {
        if (cb !== checkbox) {
          cb.checked = false;
          checkDivs[i].classList.remove("box-check");
          checkDivs[i].children[0].classList.add("hidden", "box-check");
        }
      });

      if (checkbox.checked) {
        checkDivs[index].classList.add("box-check-bg");
        checkDivs[index].children[0].classList.remove("hidden");
      } else {
        checkDivs[index].classList.remove("box-check-bg");
        checkDivs[index].children[0].classList.add("hidden");
      }
    });
  });
});
//
const newsBox = document.querySelector(".news");
const footer = document.querySelector("footer");

function checkStickyStop() {
  const footerTop = footer.getBoundingClientRect().top;
  const newsHeight = newsBox.offsetHeight;

  if (footerTop <= newsHeight + 150) {
    newsBox.style.position = "absolute";
    newsBox.style.top = `${footer.offsetTop - newsHeight - 150}px`;
  } else {
    newsBox.style.position = "sticky";
    newsBox.style.top = "150px";
  }
}

window.addEventListener("scroll", checkStickyStop);
window.addEventListener("resize", checkStickyStop);

function showSocial() {
  const social = document.querySelector(".float-social");
  social.classList.toggle("show-social");
}
