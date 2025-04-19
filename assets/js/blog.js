console.log("blog.js loaded");

const Blog = [
  {
    id: 1,
    imageUrl: "../images/blog-1.png",
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
    imageUrl: "../images/blog-1.png",
    blogTitle: "Set Up and Optimize Google Business Profile (GBP)",
    subTitle1: "Why it matters",
    des1: " Most clients type “interior designer near me”—and Google shows your GBP, not your website.",
    subTitle2: "Checklist",
    des2: [
      "NAP (Name, Address, Phone) consistency",
      "Add 30+ high-quality photos (projects, workspace, team)",
      "Enable messaging",
      "Get regular reviews (at least 2/month)",
      "Post weekly updates",
    ],
    subTitle4: "Realistic Result",
    des4: " A Chennai-based designer ranked in the top 3 local results and received 140+ calls in 2 months just from Google Maps.",
  },
  {
    id: 3,
    imageUrl: "../images/blog-1.png",
    blogTitle: "SEO That Actually Brings You Leads",
    subTitle1: "Why it matters",
    des1: "  Organic traffic brings people actively looking for your service.",
    subTitle2: "Checklist",
    des2: [
      "Target keywords like",
      "Home interior designer in [City]",
      "Modular kitchen interior Chennai",
      "2BHK interior cost [City]",
      "Create location pages",
      "Add blog posts (e.g., “Top 5 Interior Trends in Chennai 2025”)",
      "Optimize metadata and image ALT tags",
    ],
    subTitle4: "Realistic Result",
    des4: "Interior firm in Bangalore saw a 70% jump in website traffic and 22 qualified form leads/month after 3 months of consistent SEO.",
  },
  {
    id: 4,
    imageUrl: "../images/blog-1.png",
    blogTitle: "Run Hyper-Targeted Google Ads",
    subTitle1: "Why it matters",
    des1: "When someone searches for “interior designer for new home,” they’re ready to buy.",
    subTitle2: "Checklist",
    des2: [
      "Use intent-based keywords",
      "Target specific zip codes or localities",
      "Use lead forms or call-only ads",
      "Use ad extensions (location, call, sitelinks)",
    ],
    subTitle3: "Budget Tip",
    des3: " Start with ₹500–₹1000/day to test. Scale based on cost per lead.",
    subTitle4: "Realistic Result",
    des4: " Using just ₹30K/month, a Tamil Nadu designer closed 3 premium projects (worth ₹7 lakhs total) from Google Ads in 45 days.",
  },
  {
    id: 5,
    imageUrl: "../images/blog-1.png",
    blogTitle: "Create Engaging Instagram + Facebook Content",
    subTitle1: "Why it matters",
    des1: " People love visuals. Instagram is where homeowners browse before choosing a designer.",
    subTitle2: "Content Plan",
    des2: [
      "Project Before/After Reels",
      "Client video testimonials",
      "15-sec time-lapse project walkthroughs",
      "Polls & Q&As (e.g., “Which living room style do you love more?”)",
      "Weekly design tips (branding YOU as an expert)",
    ],
    subTitle3: "Trending Format (2025)",
    des3: "Use trending reel audio with a strong hook in the first 3 seconds. Add captions always.",
    subTitle4: "Realistic Result",
    des4: " A Coimbatore-based designer gained 5,000 followers organically in 3 months and closed 2 projects directly from Instagram DMs.",
  },
];

// -------- Blog Listing Page --------
const blogbox = document.querySelector(".blog-boxes");
if (blogbox) {
  Blog.forEach((e, i) => {
    blogbox.innerHTML += `
      <div class="blog-box" style="flex-direction: ${
        i % 2 === 1 ? "row-reverse" : "row"
      }">
        <div class="blog-img">
          <img src="${e.imageUrl}" alt="Blog image" />
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
const containers = document.querySelector(".blog-det-container");
if (containers) {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = parseInt(urlParams.get("id"));

  const selectedBlog = Blog.find((b) => b.id === blogId);

  if (selectedBlog) {
    containers.innerHTML = `
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
    containers.innerHTML = `<p>Blog not found.</p>`;
  }
}
