// text
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
