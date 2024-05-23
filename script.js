document.addEventListener('DOMContentLoaded', function() {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      });
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
      });
    });