document.addEventListener("DOMContentLoaded", () => {
  // Get all elements
  const profiles = [
    {
      image: document.getElementById("tanya-profile-image"),
      review: document.getElementById("tanya-review-text-container"),
    },
    {
      image: document.getElementById("john-profile-image"),
      review: document.getElementById("john-review-text-container"),
    },
  ];

  let currentIndex = 0;

  const leftButton = document.querySelector(
    ".main__carousal-section__image-container__button-images-container__left-button-image"
  );
  const rightButton = document.querySelector(
    ".main__carousal-section__image-container__button-images-container__right-button-image"
  );

  function showProfile(index, direction) {
    // Hide current profile
    profiles[currentIndex].image.style.display = "none";
    profiles[currentIndex].review.style.display = "none";

    // Show new profile with slide effect
    const slideDirection = direction === "left" ? "-100%" : "100%";

    // Set initial position
    profiles[index].image.style.transform = `translateX(${slideDirection})`;
    profiles[index].review.style.transform = `translateX(${slideDirection})`;

    // Show elements
    profiles[index].image.style.display = "block";
    profiles[index].review.style.display = "block";

    // Slide to center
    setTimeout(() => {
      profiles[index].image.style.transform = "translateX(0)";
      profiles[index].review.style.transform = "translateX(0)";
    }, 50);

    currentIndex = index;
  }

  function nextProfile() {
    const nextIndex = (currentIndex + 1) % profiles.length;
    showProfile(nextIndex, "right");
  }

  function prevProfile() {
    const prevIndex = (currentIndex - 1 + profiles.length) % profiles.length;
    showProfile(prevIndex, "left");
  }

  // Add event listeners
  leftButton.addEventListener("click", prevProfile);
  rightButton.addEventListener("click", nextProfile);

  // Initialize first profile
  profiles[currentIndex].image.style.display = "block";
  profiles[currentIndex].review.style.display = "block";
});
