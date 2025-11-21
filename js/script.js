      // Initialize theme from localStorage or system preference
      document.addEventListener("DOMContentLoaded", function () {
        // Set current year in footer
        document.getElementById("current-year").textContent =
          new Date().getFullYear();

        // Theme toggle functionality
        const isDarkMode =
          localStorage.getItem("theme") === "dark" ||
          (!localStorage.getItem("theme") &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);

        if (isDarkMode) {
          document.documentElement.classList.add("dark");
          toggleThemeIcons(true);
        } else {
          document.documentElement.classList.remove("dark");
          toggleThemeIcons(false);
        }

        // Toggle theme buttons
        document
          .getElementById("theme-toggle")
          .addEventListener("click", toggleTheme);
        document
          .getElementById("theme-toggle-mobile")
          .addEventListener("click", toggleTheme);

        // Mobile menu toggle
        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");
        const menuIcon = document.getElementById("menu-icon");
        const closeIcon = document.getElementById("close-icon");
        const header = document.getElementById("header");

        // Sticky header logic
        window.addEventListener("scroll", () => {
          if (window.scrollY > 10) {
            header.classList.add(
              "bg-white/90",
              "dark:bg-gray-900/90",
              "backdrop-blur-md",
              "shadow-sm"
            );
          } else {
            header.classList.remove(
              "bg-white/90",
              "dark:bg-gray-900/90",
              "backdrop-blur-md",
              "shadow-sm"
            );
            header.classList.remove("scrolled"); // Cleanup old class if present
          }
        });

        mobileMenuButton.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
          menuIcon.classList.toggle("hidden");
          closeIcon.classList.toggle("hidden");
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll("#mobile-menu a").forEach((link) => {
          link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            menuIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");
          });
        });

        // FAQ Accordion
        const faqQuestions = document.querySelectorAll(".faq-question");
        faqQuestions.forEach((question) => {
          question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const chevronDown = question.querySelector(".chevron-down");
            const chevronUp = question.querySelector(".chevron-up");

            // Toggle current answer
            answer.classList.toggle("hidden");
            chevronDown.classList.toggle("hidden");
            chevronUp.classList.toggle("hidden");
          });
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed header
                behavior: "smooth",
              });
            }
          });
        });

        // Active link highlighting on scroll
        window.addEventListener("scroll", () => {
          let currentSectionId = "";
          const sections = document.querySelectorAll("section");
          const scrollPosition = window.scrollY + 100; // Offset

          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
              scrollPosition >= sectionTop &&
              scrollPosition < sectionTop + sectionHeight
            ) {
              currentSectionId = section.getAttribute("id");
            }
          });

          // Update desktop nav links
          document.querySelectorAll("nav a").forEach((link) => {
            const href = link.getAttribute("href").substring(1);
            if (href === currentSectionId) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });

          // Update mobile nav links
          document.querySelectorAll("#mobile-menu a").forEach((link) => {
            const href = link.getAttribute("href").substring(1);
            if (href === currentSectionId) {
              link.classList.add(
                "text-accent-600",
                "dark:text-accent-300",
                "bg-accent-50",
                "dark:bg-gray-800"
              );
              link.classList.remove(
                "text-gray-700",
                "dark:text-gray-200",
                "hover:bg-gray-100",
                "dark:hover:bg-gray-800"
              );
            } else {
              link.classList.remove(
                "text-accent-600",
                "dark:text-accent-300",
                "bg-accent-50",
                "dark:bg-gray-800"
              );
              link.classList.add(
                "text-gray-700",
                "dark:text-gray-200",
                "hover:bg-gray-100",
                "dark:hover:bg-gray-800"
              );
            }
          });
        });

        // Trigger scroll event to initialize the header state
        window.dispatchEvent(new Event("scroll"));
      });

      // Toggle theme function
      function toggleTheme() {
        const isDarkMode = document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");

        toggleThemeIcons(isDarkMode);
      }

      function toggleThemeIcons(isDarkMode) {
        // Update desktop theme toggle icons
        document
          .getElementById("moon-icon")
          .classList.toggle("hidden", isDarkMode);
        document
          .getElementById("sun-icon")
          .classList.toggle("hidden", !isDarkMode);

        // Update mobile theme toggle icons
        document
          .getElementById("moon-icon-mobile")
          .classList.toggle("hidden", isDarkMode);
        document
          .getElementById("sun-icon-mobile")
          .classList.toggle("hidden", !isDarkMode);
      }
