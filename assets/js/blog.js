console.log("blog.js loaded");
const Blog = [
  {
    id: 1,
    imageUel: "../images/blog-1.png",
    blogTitle: "Build a Portfolio-First Website",
    subTitle1: "Why it matters",
    des1: "Clients want to see your past work before they even consider contacting you.",
    subTitle2: "What to include",
    des2: [
      "High-resolution project images",
      "Before & After shots",
      "Testimonials (preferably with client names + location)",
      "Contact form + WhatsApp button",
      "Page Speed optimization (especially mobile)",
    ],
    subTitle3: "2025 Trend Tip:",
    des3: "Integrate a 3D walkthrough or short video reels of your project walkthroughs. They keep visitors on the page longer.",
    subTitle4: "Realistic Result",
    des4: "Interior designer from Hyderabad saw a 38% increase in inquiries after restructuring their portfolio site with clear CTAs and WhatsApp integration.",
  },
  {
    id: 2,
    imageUel: "../images/blog-2.png",
    blogTitle: "Another Blog Title Here",
    subTitle1: "Why it matters",
    des1: "Second blog content for testing...",
    subTitle2: "What to include",
    des2: ["Example 1", "Example 2", "Example 3"],
    subTitle3: "2025 Tip",
    des3: "Add interactive features",
    subTitle4: "Results",
    des4: "Got better engagement",
  },
];

// -------- Blog Listing Page --------
const blogbox = document.querySelector(".blog-boxes");
if (blogbox) {
  Blog.map((e, i) => {
    blogbox.innerHTML += `
        <div class="blog-box" style="flex-direction: ${
          i % 2 === 1 ? "row-reverse" : "row"
        }">
          <div class="blog-img">
            <img src="${e.imageUel}" alt="Blog image" />
          </div>
          <div class="blog-text">
            <div class="text">
              <h3>${e.blogTitle}</h3>
              <div class="inner-text">
                <h5>${e.subTitle1}</h5>
                <p>${e.des1}</p>
              </div>
            </div>
            <div class="blog-btn">
              <a href="../page/services/blogDetial.html?id=${
                e.id
              }" class="btn">Read More</a>
            </div>
          </div>
        </div>
      `;
  });
}

// -------- Blog Detail Page --------
const container = document.querySelector(".blog-det-container");
if (container) {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = parseInt(urlParams.get("id"));

  const selectedBlog = Blog.find((b) => b.id === blogId);

  if (selectedBlog) {
    container.innerHTML = `
        <h1>${selectedBlog.blogTitle}</h1>
        <h3>${selectedBlog.subTitle1}</h3>
        <p>${selectedBlog.des1}</p>
        <h3>${selectedBlog.subTitle2}</h3>
        <ul>
          ${selectedBlog.des2.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <h3>${selectedBlog.subTitle3}</h3>
        <p>${selectedBlog.des3}</p>
        <h3>${selectedBlog.subTitle4}</h3>
        <p>${selectedBlog.des4}</p>
      `;
  } else {
    container.innerHTML = `<p>Blog not found.</p>`;
  }
}
