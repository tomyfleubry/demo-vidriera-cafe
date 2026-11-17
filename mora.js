'use strict';

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('#nav-toggle');
const navigation = document.querySelector('#nav-links');
const mobileViewport = window.matchMedia('(max-width: 760px)');

function setMenu(open) {
  const expanded = mobileViewport.matches && open;
  navigation.hidden = mobileViewport.matches && !expanded;
  menuToggle.setAttribute('aria-expanded', String(expanded));
  menuToggle.setAttribute('aria-label', expanded ? 'Cerrar menú' : 'Abrir menú');
}

function adaptMenu() {
  menuToggle.hidden = !mobileViewport.matches;
  setMenu(false);
}

header.classList.add('has-js');
adaptMenu();
mobileViewport.addEventListener('change', adaptMenu);
menuToggle.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});
header.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuToggle.focus();
  }
});

const filters = document.querySelector('.filters');
const products = Array.from(document.querySelectorAll('.product'));
const status = document.querySelector('#filter-status');
const categoryNames = { todo: '', cafe: ' de café', tortitas: ' de tortitas', smoothies: ' de smoothies' };

filters.hidden = false;
filters.addEventListener('click', event => {
  const selected = event.target.closest('button[data-filter]');
  if (!selected) return;

  const category = selected.dataset.filter;
  let visibleCount = 0;
  products.forEach(product => {
    product.hidden = category !== 'todo' && product.dataset.category !== category;
    if (!product.hidden) visibleCount += 1;
  });
  filters.querySelectorAll('button').forEach(button => {
    button.setAttribute('aria-pressed', String(button === selected));
  });
  status.textContent = visibleCount + ' opciones' + categoryNames[category];
});
