    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          fontFamily: {
            outfit: ["Outfit", "sans-serif"],
            amiri: ["Amiri", "serif"],
          },
          colors: {
            // Primary Brand Color (Brown/Earth) - Removed as per request

            // Accent Color (Official Green) - Used for Buttons/Icons
            accent: {
              DEFAULT: "#008B5B",
              50: "#E6F4F0",
              100: "#C2E3D3",
              200: "#8FCDB0",
              300: "#5CA68A",
              400: "#2F7D63",
              500: "#008B5B",
              600: "#006F4A",
              700: "#00533A",
              800: "#003A2B",
              900: "#00241D",
            },
            gold: {
              DEFAULT: "#D4AF37",
              light: "#F8EFD4",
              dark: "#A08429",
            },
          },
          animation: {
            "fade-in": "fadeIn 0.4s ease-out",
            "fade-in-up": "fadeInUp 0.5s ease-out",
            "scale-in": "scaleIn 0.3s ease-out",
          },
          keyframes: {
            fadeIn: {
              "0%": {
                opacity: "0"
              },
              "100%": {
                opacity: "1"
              },
            },
            fadeInUp: {
              "0%": {
                opacity: "0",
                transform: "translateY(10px)"
              },
              "100%": {
                opacity: "1",
                transform: "translateY(0)"
              },
            },
            scaleIn: {
              "0%": {
                opacity: "0",
                transform: "scale(0.95)"
              },
              "100%": {
                opacity: "1",
                transform: "scale(1)"
              },
            },
          },
        },
      },
    };
