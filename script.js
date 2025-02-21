const modal = document.getElementById('registrationModal');
const closeBtn = document.getElementsByClassName('close')[0];
const form = document.getElementById('registrationForm');

function openRegistration() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for registering! We will contact you soon.');
    modal.style.display = "none";
    form.reset();
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect (Fixed Issue)
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// Countdown Timer
function updateCountdown() {
    const eventDate = new Date("March 8, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerText = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("countdown").innerText = "Registration Closed!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
document.addEventListener("DOMContentLoaded", function () {
    const line = document.querySelector(".line");
    const bubbles = document.querySelectorAll(".bubble");
    const bubbleTexts = document.querySelectorAll(".bubble-text");

    function animateLine() {
        line.style.height = "100%";  // Line moves down

        bubbles.forEach((bubble, index) => {
            setTimeout(() => {
                bubble.innerText = bubble.getAttribute("data-text");  // Show text inside
                bubble.style.opacity = "1";  // Highlight the bubble
                bubbleTexts[index].style.opacity = "1"; // Show description
            }, (index + 1) * 1000);
        });
    }

    animateLine();
});
document.addEventListener("DOMContentLoaded", function () {
    const problemCards = document.querySelectorAll(".problem-card");

    problemCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 800); // Adjust delay for smoother animation
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const organizerCards = document.querySelectorAll(".organizer-card");

    function revealOrganizers() {
        organizerCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("show");
            }, index * 600); // Adjust delay for smoother effect
        });
    }

    revealOrganizers(); // Call function when page loads
});
document.addEventListener("DOMContentLoaded", function () {
    function animateElements(sectionSelector, itemSelector, isAlternate = false) {
        const section = document.querySelector(sectionSelector);
        const items = document.querySelectorAll(`${sectionSelector} ${itemSelector}`);

        function playAnimation() {
            items.forEach((item, index) => {
                item.style.opacity = "0";
                item.style.transform = "translateY(50px)";
                item.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";

                setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = isAlternate
                        ? index % 2 === 0
                            ? "translateY(0)"
                            : "translateY(0)"
                        : "translateY(0)";
                }, index * 300);
            });
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    playAnimation();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(section);
    }

    // Keep the original animation but trigger on revisit
    animateElements(".problems", ".problem-card");

    // Organizers come from top-bottom alternately
    animateElements(".organizers", ".organizer-card", true);
});
document.addEventListener("DOMContentLoaded", function () {
    let prizes = document.querySelectorAll(".prize-box");

    let observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("show");
                    }, index * 200); // Stagger effect like PS
                } else {
                    entry.target.classList.remove("show");
                }
            });
        },
        { threshold: 0.3 }
    );

    prizes.forEach((prize) => observer.observe(prize));
});
document.addEventListener("DOMContentLoaded", function () {
    const organizerCards = document.querySelectorAll(".organizer-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 }); // Adjust if needed

    organizerCards.forEach((card) => observer.observe(card));
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".animated-section");

    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) { 
                setTimeout(() => {
                    section.classList.add("show");
                }, 200);
            } else {
                section.classList.remove("show"); // Removes animation when out of view
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Run on page load
});
document.addEventListener("DOMContentLoaded", function () {
    const mediaSection = document.querySelector("#media-gallery");

    function revealMedia() {
        const rect = mediaSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            mediaSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealMedia);
    revealMedia();
});
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    let genderInputs = document.querySelectorAll("input[name='gender']");
    let hasFemale = false;

    genderInputs.forEach(input => {
        if (input.checked && input.value.toLowerCase() === "female") {
            hasFemale = true;
        }
    });

    if (!hasFemale) {
        event.preventDefault(); // Prevent form submission
        alert("At least one female must be in the team!");
    }
});




