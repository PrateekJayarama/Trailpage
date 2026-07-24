document.addEventListener("DOMContentLoaded", () => {
  // Get URL parameter e.g., ?type=corporate
  const urlParams = new URLSearchParams(window.location.search);
  const eventType = urlParams.get("type") || "corporate";

  // Fetch data for selected category or default to corporate
  const data = eventsDatabase[eventType] || eventsDatabase.corporate;

  // Render Header Details
  document.getElementById("eventTag").textContent = data.tag;
  document.getElementById("eventTitle").textContent = data.title;
  document.getElementById("eventDescription").textContent = data.description;
  document.getElementById("eventHero").style.backgroundImage = `url('${data.heroImage}')`;

  // Render Plans & Offerings
  const plansContainer = document.getElementById("plansContainer");
  plansContainer.innerHTML = data.plans.map(plan => `
    <div class="plan-card">
      <h3 class="plan-title">${plan.name}</h3>
      <div class="plan-price">${plan.price}</div>
      <ul class="plan-features">
        ${plan.features.map(f => `<li>✓ ${f}</li>`).join('')}
      </ul>
      <a href="index.html#contact" class="btn-primary plan-btn">Book This Plan</a>
    </div>
  `).join('');

  // Render Past Events Showcase
  const pastContainer = document.getElementById("pastGalleryContainer");
  pastContainer.innerHTML = data.pastEvents.map(event => `
    <div class="past-card">
      <img src="${event.image}" alt="${event.name}" class="past-img">
      <div class="past-info">
        <h3>${event.name}</h3>
        <p>📍 ${event.location}</p>
      </div>
    </div>
  `).join('');

  // Render Infinite Auto-Scrolling Customer Reviews
  const reviewsTrack = document.getElementById("reviewsTrack");
  
  function createReviewCard(review) {
    return `
      <div class="review-card">
        <p class="review-quote">"${review.quote}"</p>
        <div class="review-author">${review.author}</div>
        <div class="review-role">${review.role}</div>
      </div>
    `;
  }

  // Duplicate reviews to create a seamless infinite loop
  const reviewCardsHTML = data.reviews.map(r => createReviewCard(r)).join('');
  reviewsTrack.innerHTML = reviewCardsHTML + reviewCardsHTML; // Duplicated for smooth loop
});