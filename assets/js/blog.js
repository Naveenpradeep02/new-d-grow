console.log("blog.js loaded");

const Blog = [
  {
    id: 1,
    imageUrl: "../images/blog-1.png",
    blogTitle: "1. Build a Portfolio-First Website",
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
    blogTitle: "2. Set Up and Optimize Google Business Profile (GBP)",
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
    blogTitle: "3. SEO That Actually Brings You Leads",
    subTitle1: "Why it matters",
    des1: "  Organic traffic brings people actively looking for your service.",
    subTitle2: "Checklist",
    des2: [
      "Target keywords like",
    { submenu:[ "Home interior designer in [City]",
      "Modular kitchen interior Chennai",
      "2BHK interior cost [City]"]},
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
    blogTitle: "4. Run Hyper-Targeted Google Ads",
    subTitle1: "Why it matters",
    des1: "When someone searches for “interior designer for new home,” they're ready to buy.",
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
    blogTitle: "5. Create Engaging Instagram + Facebook Content",
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
  {
    id: 6,
    imageUrl: "../images/blog-1.png",
    blogTitle: " 6. Build a Lead Funnel with WhatsApp & Email Automation",
    subTitle1: "Why it matters",
    des1: "Not everyone who visits your website or watches your reels is ready to book now. But you can stay top of mind.",
    subTitle2: "Checklist",
    des2: [
      "Use WhatsApp API or tools like WA Team Inbox",
      "Capture leads with a freebie (e.g., “Free 10 Interior Design Tips PDF”)",
      "Send weekly broadcast messages: project updates, offers, testimonials",
      "Monthly newsletter via Mailchimp or ConvertKit",
    ],
    
    subTitle4: "Realistic Result",
    des4: "  A Mumbai-based designer nurtured 60+ cold leads and closed 4 projects in 6 months—all via regular WhatsApp follow-ups.",
  },
  {
    id: 7,
    imageUrl: "../images/blog-1.png",
    blogTitle: "7. Run Location-Based Meta Ads (Facebook & Instagram)",
    subTitle1: "Why it matters",
    des1: " 7. Run Location-Based Meta Ads (Facebook & Instagram)",
    subTitle2: "Ad Ideas",
    des2: [
      "Home Makeover Offer - Limited Slots This Month",
      "See Our Latest 2BHK Project - Swipe to Explore",
      "Carousel of project images with strong CTA",
      "Use Lead Form objective",
    ],
    subTitle3: "Budget Tip",
    des3: " Start with ₹300/day, target people aged 28–50 in specific high-income localities.",
    subTitle4: "Realistic Result",
    des4: "  A Pune designer generated 170+ leads in 25 days with a ₹10,000 Meta ad spend.",
  },
    {
    id: 8,
    imageUrl: "../images/blog-1.png",
    blogTitle: " 8. Ask for and Display Client Reviews",
    subTitle1: "Why it matters",
    des1: "  90% of homeowners check Google reviews before choosing a service provider.",
    subTitle2: "Checklist",
    des2: [
      "After every project, ask: “Would you mind writing us a quick Google review?”",
      "Offer a small thank-you gift (optional)",
      "Display reviews on website & Instagram Stories Highlights",
    ],
    subTitle3: "Pro Tip",
    des3: " Video testimonials > written ones.",
    subTitle4: "Realistic Result",
    des4: "  A designer with 50+ reviews ranked higher locally and received 3X more direct calls compared to a competitor with 5 reviews.",
  },
  {
    id: 9,
    imageUrl: "../images/blog-1.png",
    blogTitle: "9. Track, Analyze & Improve",
    subTitle1: "Why it matters",
    des1: "  You can't improve what you don't track.",
    subTitle2: "Tools to Use",
    des2: [
      "Use UTM links to track campaign sources",
      "WhatsApp Broadcast CTR",
      "Google My Business Insights",
      "WhatsApp Broadcast CTR",
      "Use UTM links to track campaign sources",
    ],
    subTitle4: "Realistic Result",
    des4: "  After reviewing insights, a designer shifted ad focus from general branding to lead generation and doubled inquiries.",
  },
  {
    id: 10,
    imageUrl: "../images/blog-1.png",
    blogTitle: " 10. Collaborate with Local Influencers & Vendors",
    subTitle1: "Why it matters",
    des1: " In 2025, collaboration = credibility + reach.",
    subTitle2: "Ideas:",
    des2: [
      "Partner with home décor influencers for reels",
      "Cross-promote with architects, builders, or furniture brands",
      "Do “reels collabs” or giveaways (e.g., “Win a FREE design consultation”)",
    ],
    subTitle4: "Realistic Result",
    des4: "  A Kochi designer collaborated with a home influencer and gained 300+ followers + 12 consultation requests in a week.",
  },
];


// -------- Blog Detail Page --------
const containers = document.querySelector(".blog-section");
const indexBOX = document.querySelector(".inner-indec-box");

Blog.map((e)=>(

     containers.innerHTML += `
    <div class="blog-card" id="${e.id}">
      <h4>${e.blogTitle}</h4>
      ${e.subTitle1 ? `<h5>${e.subTitle1}</h5>` : ""}
      ${e.des1 ? `<p>${e.des1}</p>` : ""}
      ${e.subTitle2 ? `<h5>${e.subTitle2}</h5>` : ""}
      ${Array.isArray(e.des2) ? `<ul>
        ${e.des2
          .map((item) => {
            if (typeof item === "string") {
              return `<li>${item}</li>`;
            } else if (item.submenu && Array.isArray(item.submenu)) {
              return `
                
                <ul>${item.submenu.map((sub) => `<li>${sub}</li>`).join("")}</ul>
              `;
            }
            return "";
          })
          .join("")}
      </ul>` : ""}
      ${e.subTitle3 ? `<h5>${e.subTitle3}</h5>` : ""}
      ${e.des3 ? `<p>${e.des3}</p>` : ""}
      ${e.subTitle4 ? `<h5>${e.subTitle4}</h5>` : ""}
      ${e.des4 ? `<p>${e.des4}</p>` : ""}
    </div>
  `
))

Blog.map((e)=>(
indexBOX.innerHTML += `
              <a href="#${e.id }">${e.blogTitle}</a>

`
))