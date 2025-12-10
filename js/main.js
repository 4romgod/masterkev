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
})();
