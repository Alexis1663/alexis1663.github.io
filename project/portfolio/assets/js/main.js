// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuButton = document.getElementById("mobile-menu-button")
    const mobileMenu = document.getElementById("mobile-menu")

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden")
        })
    }

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu?.querySelectorAll("a")
    mobileLinks?.forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden")
        })
    })

    // Sticky Header
    const header = document.querySelector("header")
    const scrollThreshold = 50

    function updateHeader() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add("py-2")
            header.classList.remove("py-4")
            header.classList.add("shadow-md")
        } else {
            header.classList.remove("py-2")
            header.classList.add("py-4")
            header.classList.remove("shadow-md")
        }
    }

    window.addEventListener("scroll", updateHeader)
    updateHeader() // Initial call

    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top")

    function toggleBackToTopButton() {
        if (window.scrollY > 300) {
            backToTopButton.classList.remove("opacity-0", "invisible")
            backToTopButton.classList.add("opacity-100", "visible")
        } else {
            backToTopButton.classList.add("opacity-0", "invisible")
            backToTopButton.classList.remove("opacity-100", "visible")
        }
    }

    window.addEventListener("scroll", toggleBackToTopButton)
    toggleBackToTopButton() // Initial call

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()

            const targetId = this.getAttribute("href")
            if (targetId === "#") return

            const targetElement = document.querySelector(targetId)
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: "smooth",
                })
            }
        })
    })
})
