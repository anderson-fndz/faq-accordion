function clickAccordion(t) {
    var title = document.querySelectorAll('h2')
    var parent = document.querySelectorAll('.accordion-header')[t].parentElement;
    var img = document.querySelectorAll('.image-arrow')
    var content = parent.lastElementChild.classList.contains('hide');

    if (content == true) {
        parent.lastElementChild.className = "show";
        title.style.fontWeight = 'bold'
    } else {
        parent.lastElementChild.classList = "hide";
    }
}