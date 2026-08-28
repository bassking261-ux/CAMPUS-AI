function showPage(pageName) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active-page");
    });


    // Show selected page
    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    // Remove active navigation
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(function(item) {
        item.classList.remove("active");
    });


    // Find clicked navigation button
    navItems.forEach(function(item) {

        if (item.innerText.toLowerCase().includes(pageName)) {
            item.classList.add("active");
        }

    });

}


function logout() {

    alert("Logout system will be connected after authentication is added.");

}
