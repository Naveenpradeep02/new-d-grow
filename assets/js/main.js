// text
document.addEventListener("DOMContentLoaded", function () {
  console.log("main.js loaded");
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
  });
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

  // =================================== scroll number count============================

  const counters = document.querySelectorAll(".counter span");
  const container = document.querySelector(".counters");
  let active = false;

  window.addEventListener("scroll", () => {
    if (
      window.pageYOffset > container.offsetTop - container.offsetHeight - 500 &&
      !active
    ) {
      counters.forEach((counter) => {
        counter.innerHTML = 0;
        let count = 0;
        const target = parseInt(counter.dataset.count);
        const increment = Math.ceil(target / 100); // Adjust speed dynamically

        const updateCount = () => {
          if (count < target) {
            count += increment;
            if (count > target) count = target; // Prevent overshooting
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
      window.pageYOffset < container.offsetTop - container.offsetHeight - 500 &&
      active
    ) {
      counters.forEach((counter) => {
        counter.innerHTML = 0;
      });
      active = false;
    }
  });
  // float menu
  const arrow = document.getElementById("scrollArrow");
  const firstSection = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > firstSection.offsetHeight) {
      arrow.style.display = "block";
    } else {
      arrow.style.display = "none";
    }
  });

  const scrollToTopBtn = document.getElementById("scrollToTop");

  window.onscroll = function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = (scrollTop / totalHeight) * 100;

    if (scrolledPercentage > 5) {
      scrollToTopBtn.style.opacity = "1";
    } else {
      scrollToTopBtn.style.opacity = "0";
    }
  };

  const showSocial = () => {
    document.querySelector(".float-social").classList.toggle("show-social");
  };

  //  FAQ
  function toggleFAQ(clickedQuestion) {
    const allAnswers = document.querySelectorAll(".faq .answer");
    const allQuestions = document.querySelectorAll(".faq .question");

    const answer = clickedQuestion.nextElementSibling;
    const isAlreadyOpen = answer.style.display === "block";

    // Close all answers
    allAnswers.forEach((ans) => (ans.style.display = "none"));
    allQuestions.forEach((q) => q.classList.remove("active"));

    // If the clicked one was not open, open it
    if (!isAlreadyOpen) {
      answer.style.display = "block";
      clickedQuestion.classList.add("active");
    }
  }
  // Sub-menu

  const subMenuShow = () => {
    const subMenu = document.querySelector(".mobile-sub-menu");

    subMenu.classList.toggle("show-sub-menu");
  };

  // main Menu

  const showMenu = () => {
    const Menu = document.querySelector(".mobile-menu");
    const open = document.querySelector(".open");
    const close = document.querySelector(".close");
    Menu.classList.toggle("show-menu");
    open.classList.toggle("hide-bar");
    close.classList.toggle("show-bar");
  };

  function showContent(section) {
    const visionBtn = document.getElementById("vision-btn");
    const missionBtn = document.getElementById("mission-btn");
    const visionContent = document.getElementById("vision-content");
    const missionContent = document.getElementById("mission-content");

    if (section === 1) {
      visionBtn.classList.add("active");
      visionBtn.classList.remove("inactive");
      missionBtn.classList.remove("active");
      missionBtn.classList.add("inactive");

      visionContent.classList.add("show");
      missionContent.classList.remove("show");
    } else {
      missionBtn.classList.add("active");
      missionBtn.classList.remove("inactive");
      visionBtn.classList.remove("active");
      visionBtn.classList.add("inactive");

      missionContent.classList.add("show");
      visionContent.classList.remove("show");
    }
  }

  // ======================
  document.addEventListener("click", function (e) {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (!dropdown.contains(e.target)) {
      dropdownMenu.style.display = "none";
    }
  });

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

  function toggleDropdown() {
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  }

  dropdownMenu.addEventListener("click", (e) => e.stopPropagation());
  document.addEventListener("click", function (e) {
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(e.target)) dropdownMenu.style.display = "none";
  });

  function renderDropdown() {
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

  function removeSelected(service) {
    selectedServices = selectedServices.filter((s) => s !== service);
    renderDropdown();
    renderSelectedTags();
  }

  function updateServicesInput() {
    servicesInput.value = selectedServices.join(", ");
  }

  renderDropdown();

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

    // Basic Validations
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
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzmqyI2w36fUREIapIhxBAqieBNVxNtooiLLlw3dc6Npr1q6pkj6q3JiyzzNY7-f2US/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        window.location.href = "/"; // ✅ Redirect to homepage
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

  // Initialize dropdown on page load
  renderDropdown();

  const checkboxes = document.querySelectorAll(".budget-checkbox");
  const checkDivs = document.querySelectorAll(".budget-div");

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
      // Uncheck all others
      checkboxes.forEach((cb, i) => {
        if (cb !== checkbox) {
          cb.checked = false;
          checkDivs[i].classList.remove("box-check");
          checkDivs[i].children[0].classList.add("hidden", "box-check"); // hide ✔
        }
      });

      // Toggle styling for the selected one
      if (checkbox.checked) {
        checkDivs[index].classList.add("box-check-bg");
        checkDivs[index].children[0].classList.remove("hidden"); // show ✔
      } else {
        checkDivs[index].classList.remove("box-check-bg");
        checkDivs[index].children[0].classList.add("hidden");
      }
    });
  });

  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(this);
      const submitButton = document.getElementById("submitButton");

      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";

      fetch(this.action, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result === "success") {
            alert("Form submitted successfully!");
            window.location.href = "thank-you.html"; // or index.html
          } else {
            alert("Form submission failed.");
          }
          submitButton.disabled = false;
          submitButton.textContent = "Submit";
        })
        .catch((error) => {
          alert("Network error. Try again.");
          submitButton.disabled = false;
          submitButton.textContent = "Submit";
        });
    });
});
