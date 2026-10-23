(() => {
  const root = document.documentElement;
  const tabs = Array.from(document.querySelectorAll('[data-design-choice]'));
  const validDesigns = new Set(tabs.map((tab) => tab.dataset.designChoice));
  const initialHash = window.location.hash.slice(1);
  const initialDesign = validDesigns.has(initialHash) ? initialHash : 'caderno';

  function setDesign(name, updateUrl = true) {
    if (!validDesigns.has(name)) return;
    root.dataset.design = name;
    tabs.forEach((tab) => {
      const selected = tab.dataset.designChoice === name;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      tab.classList.toggle('is-active', selected);
    });
    if (updateUrl && window.location.hash !== `#${name}`) {
      window.history.replaceState(null, '', `#${name}`);
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setDesign(tab.dataset.designChoice));
    tab.addEventListener('keydown', (event) => {
      const directions = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      if (!(event.key in directions)) return;
      event.preventDefault();
      const nextIndex = (index + directions[event.key] + tabs.length) % tabs.length;
      tabs[nextIndex].focus();
      setDesign(tabs[nextIndex].dataset.designChoice);
    });
  });

  window.addEventListener('hashchange', () => setDesign(window.location.hash.slice(1), false));
  setDesign(initialDesign, false);

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('motion-ready');
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  }
})();
