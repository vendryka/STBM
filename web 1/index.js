document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                // Opsional: hapus 'is-visible' saat tidak terlihat
                // entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // Lewati bagian pertama karena sudah terlihat secara default
        if (section.id !== 'organization-info') { // Sesuaikan ini jika ID bagian pertama berubah
            observer.observe(section);
        } else {
            section.classList.add('is-visible'); // Pastikan bagian pertama selalu terlihat
        }
    });
});