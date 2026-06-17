"use strict";

(function () {
    var EMAILJS_PUBLIC_KEY = "d1LZ6ZARetgVcPw1n";
    var EMAILJS_SERVICE_ID = "service_q9drsdh";
    var EMAILJS_TEMPLATE_ID = "template_53qgq4k";

    if (!window.emailjs) {
        return;
    }

    emailjs.init(EMAILJS_PUBLIC_KEY);

    var form = document.querySelector(".contact-form");
    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var submitBtn = form.querySelector('button[type="submit"]');
        var originalBtnText = submitBtn ? submitBtn.textContent : "";

        var emailParams = {
            from_name: (document.getElementById("name") || {}).value || "",
            from_email: (document.getElementById("email") || {}).value || "",
            phone: (document.getElementById("phone") || {}).value || "",
            subject: "Master Kev website enquiry",
            message: (document.getElementById("scope") || {}).value || ""
        };

        if (submitBtn) {
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;
        }

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailParams)
            .then(function () {
                if (submitBtn) {
                    submitBtn.textContent = "Request sent";
                }
                form.reset();
            })
            .catch(function () {
                if (submitBtn) {
                    submitBtn.textContent = "Try again";
                    submitBtn.disabled = false;
                }
            })
            .finally(function () {
                if (submitBtn && submitBtn.textContent !== "Request sent") {
                    submitBtn.textContent = originalBtnText || "Send request";
                }
            });
    });
})();
