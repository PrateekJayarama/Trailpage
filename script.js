// Set your target email here (No API key required!)
const TARGET_EMAIL = "prateekjayaram123@gmail.com";

const pastEvents = [
  {
    title: "CyberPulse Summit",
    category: "Corporate Event",
    slug: "corporate",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    description: "An end-to-end managed conference featuring keynote stages, multi-room AV setups, and delegate management."
  },
  {
    title: "Pulse Campus Fest",
    category: "College Fest",
    slug: "fest",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    description: "A high-energy annual college festival with concert stages, talent showcases, and crowd safety execution."
  },
  {
    title: "Glow & Neon Milestone Bash",
    category: "Birthday",
    slug: "birthday",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    description: "A themed private birthday event with interactive neon installations, custom DJ setups, and curated catering."
  },
  {
    title: "Starlight Open-Air Concert",
    category: "Outdoor Event",
    slug: "outdoor",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    description: "A mega outdoor music event with massive stage mapping, pyrotechnics, and entry logistics."
  },
  {
    title: "The Royal Mirage Wedding",
    category: "Marriage",
    slug: "marriage",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    description: "A luxury wedding celebration featuring custom stage design, dynamic ambient lighting, and hospitality."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const stickyWrapper = document.querySelector(".sticky-wrapper");
  const stickySection = document.getElementById("stickySection");

  // Dynamic Card Generator
  function createCardHTML(event) {
    return `
      <div class="carousel-card" onclick="window.location.href='event-details.html?type=${event.slug}'" style="cursor: pointer;">
        <img src="${event.image}" alt="${event.title}" class="card-img">
        <div class="card-content">
          <span class="card-tag">${event.category}</span>
          <h3 class="card-title">${event.title}</h3>
          <p class="card-desc">${event.description}</p>
        </div>
      </div>
    `;
  }

  // Inject cards
  if (track) {
    track.innerHTML = pastEvents.map((event) => createCardHTML(event)).join("");

    const originalCards = Array.from(track.children);
    const stepWidth = 335;
    let currentIndex = 0;
    let isTransitioning = false;

    // Clone cards at both ends
    originalCards.forEach((card) => {
      const cloneEnd = card.cloneNode(true);
      track.appendChild(cloneEnd);
    });

    originalCards.slice().reverse().forEach((card) => {
      const cloneStart = card.cloneNode(true);
      track.insertBefore(cloneStart, track.firstChild);
    });

    const totalClonesFront = originalCards.length;
    currentIndex = totalClonesFront;
    track.style.transform = `translateX(-${currentIndex * stepWidth}px)`;

    function updateCarousel(animate = true) {
      if (animate) {
        track.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
      } else {
        track.style.transition = "none";
      }
      track.style.transform = `translateX(-${currentIndex * stepWidth}px)`;
    }

    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex++;
      updateCarousel(true);
    });

    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex--;
      updateCarousel(true);
    });

    track.addEventListener("transitionend", () => {
      isTransitioning = false;

      if (currentIndex >= totalClonesFront + originalCards.length) {
        currentIndex = totalClonesFront;
        updateCarousel(false);
      }

      if (currentIndex < totalClonesFront) {
        currentIndex = totalClonesFront + originalCards.length - 1;
        updateCarousel(false);
      }
    });
  }

  // Sticky Section Animation
  if (stickyWrapper && stickySection) {
    window.addEventListener("scroll", () => {
      const wrapperRect = stickyWrapper.getBoundingClientRect();
      const wrapperHeight = stickyWrapper.offsetHeight - window.innerHeight;
      const scrollProgress = -wrapperRect.top / wrapperHeight;

      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const scaleVal = 0.97 + Math.sin(scrollProgress * Math.PI) * 0.03;
        stickySection.style.transform = `scale(${scaleVal})`;
      } else {
        stickySection.style.transform = `scale(0.97)`;
      }
    });
  }

  // --- ZERO API KEY DIRECT BACKGROUND FORM SUBMISSION ---
  const eventForm = document.getElementById("eventForm");
  const formStatus = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  if (eventForm) {
    eventForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // UI Loading state
      submitBtn.disabled = true;
      submitBtn.innerText = "Sending Inquiry...";
      formStatus.className = "form-status";
      formStatus.innerText = "";

      const formData = new FormData(eventForm);
      formData.append("_subject", "New Lead for Friendz Eventz!");
      formData.append("_captcha", "false"); // Disables captcha for seamless user flow

      try {
        // FormSubmit AJAX Endpoint (Zero API key / zero registration required)
        const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
          method: "POST",
          body: formData
        });

        if (response.ok) {
          formStatus.className = "form-status success";
          formStatus.innerText = "✓ Thank you! Your inquiry has been sent directly to our team inbox.";
          eventForm.reset();
        } else {
          throw new Error("Submission issue");
        }
      } catch (error) {
        formStatus.className = "form-status error";
        formStatus.innerText = "✕ Submission encountered an error. Please try again or call us directly.";
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit Inquiry";
      }
    });
  }
});