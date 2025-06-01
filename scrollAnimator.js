function animateOnScroll(elements, showAnim, hideAnim) {
    const options = {
        threshold: .5 // 50% do elemento deve estar visível para disparar
    }

    // Executado a cada mudança na observação
    const callback = (entries) => { // O parâmetro 'observer' não será usado nesse caso
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(showAnim);
                entry.target.classList.remove(hideAnim);
            } else {
                entry.target.classList.remove(showAnim);
                entry.target.classList.add(hideAnim);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    elements.forEach((element) => observer.observe(element));
}