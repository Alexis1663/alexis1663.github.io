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

    // Cart Sidebar Toggle
    const cartButton = document.getElementById("cart-button")
    const cartButtonMobile = document.getElementById("cart-button-mobile")
    const cartSidebar = document.getElementById("cart-sidebar")
    const closeCart = document.getElementById("close-cart")
    const cartOverlay = document.getElementById("cart-overlay")

    if ((cartButton || cartButtonMobile) && cartSidebar && closeCart && cartOverlay) {
        const openCart = () => {
            cartSidebar.classList.remove("translate-x-full")
            cartOverlay.classList.remove("hidden")
            document.body.classList.add("overflow-hidden")
        }

        cartButton?.addEventListener("click", openCart)
        cartButtonMobile?.addEventListener("click", openCart)
        closeCart.addEventListener("click", closeCartSidebar)
        cartOverlay.addEventListener("click", closeCartSidebar)

        function closeCartSidebar() {
            cartSidebar.classList.add("translate-x-full")
            cartOverlay.classList.add("hidden")
            document.body.classList.remove("overflow-hidden")
        }
    }

    // Search Functionality
    const searchButton = document.getElementById("search-button")
    const searchButtonMobile = document.getElementById("search-button-mobile")
    const searchOverlay = document.getElementById("search-overlay")
    const closeSearch = document.getElementById("close-search")

    if ((searchButton || searchButtonMobile) && searchOverlay && closeSearch) {
        const openSearch = () => {
            searchOverlay.classList.remove("hidden")
            searchOverlay.classList.add("flex")
            document.body.classList.add("overflow-hidden")
        }

        searchButton?.addEventListener("click", openSearch)
        searchButtonMobile?.addEventListener("click", openSearch)
        closeSearch.addEventListener("click", closeSearchOverlay)

        function closeSearchOverlay() {
            searchOverlay.classList.add("hidden")
            searchOverlay.classList.remove("flex")
            document.body.classList.remove("overflow-hidden")
        }
    }

    // Sticky Header
    const header = document.querySelector("header")
    const scrollThreshold = 50

    function updateHeader() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add("shadow-md")
        } else {
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
            const targetId = this.getAttribute("href")
            if (targetId === "#") return

            e.preventDefault()
            const targetElement = document.querySelector(targetId)
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: "smooth",
                })
            }
        })
    })

    // Quantity buttons in cart
    const quantityButtons = document.querySelectorAll(".cart-item-quantity button")
    quantityButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const isIncrement = this.classList.contains("increment")
            const quantityElement = this.parentElement.querySelector("span")
            let quantity = Number.parseInt(quantityElement.textContent)

            if (isIncrement) {
                quantity++
            } else if (quantity > 1) {
                quantity--
            }

            quantityElement.textContent = quantity
        })
    })
})
