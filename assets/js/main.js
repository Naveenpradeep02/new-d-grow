var typed = new Typed(".typed", {
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

const arrow = document.getElementById("scrollArrow");
const firstSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > firstSection.offsetHeight) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
});
