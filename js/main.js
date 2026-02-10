"use strict";

(function () {
    var nav = document.querySelector(".nav");
    var navToggle = document.querySelector(".nav-toggle");
    if (nav && navToggle) {
        navToggle.addEventListener("click", function () {
            nav.classList.toggle("open");
            navToggle.classList.toggle("open");
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("open");
                navToggle.classList.remove("open");
            });
        });
    }

    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            var targetId = link.getAttribute("href");
            if (!targetId || targetId.length <= 1) {
                return;
            }
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    var scrollTopBtn = document.querySelector(".scroll-top");
    if (scrollTopBtn) {
        var toggleScrollTop = function () {
            if (window.scrollY > 240) {
                scrollTopBtn.classList.add("show");
            } else {
                scrollTopBtn.classList.remove("show");
            }
        };

        toggleScrollTop();
        window.addEventListener("scroll", toggleScrollTop);
    }

    var form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.textContent = "Request sent";
                submitBtn.disabled = true;
            }
        });
    }

    // Project modal functionality
    var projectCards = document.querySelectorAll(".project-card");
    var modal = document.createElement("div");
    modal.className = "project-modal";
    document.body.appendChild(modal);

    projectCards.forEach(function (card) {
        card.addEventListener("click", function () {
            var image = card.querySelector(".project-image");
            var title = card.querySelector(".project-body h3");
            var description = card.querySelector(".project-body p");
            var overlay = card.querySelector(".project-overlay");
            
            var imageUrl = image.style.backgroundImage.slice(5, -2);
            var projectTitle = title ? title.textContent : "";
            var projectDesc = description ? description.textContent : "";
            var projectType = overlay ? overlay.querySelector("span").textContent : "";
            var projectLocation = overlay ? overlay.querySelector("small").textContent : "";

            modal.innerHTML = `
                <div class="modal-content">
                    <button class="modal-close" aria-label="Close modal">
                        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
                    </button>
                    <div class="modal-image" style="background-image: url('${imageUrl}');"></div>
                    <div class="modal-body">
                        <div class="modal-meta">
                            <span class="pill">${projectType}</span>
                            <span class="pill">${projectLocation}</span>
                        </div>
                        <h2>${projectTitle}</h2>
                        <p>${projectDesc}</p>
                    </div>
                </div>
            `;

            modal.classList.add("active");
            document.body.style.overflow = "hidden";

            var closeBtn = modal.querySelector(".modal-close");
            closeBtn.addEventListener("click", function () {
                modal.classList.remove("active");
                document.body.style.overflow = "";
            });

            modal.addEventListener("click", function (e) {
                if (e.target === modal) {
                    modal.classList.remove("active");
                    document.body.style.overflow = "";
                }
            });
        });
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            modal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
})();
