const sections = document.querySelectorAll('section');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, options);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});


function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var arrow = event.target.querySelector('.arrow');

    if (section.style.maxHeight) {
        section.style.maxHeight = null;
        arrow.classList.remove('arrow-up');
        arrow.classList.add('arrow-down');
    } else {
        section.style.maxHeight = section.scrollHeight + "px";
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-up');
    }
}
  