const cards = document.querySelectorAll('.mushroom-guide .card');
const seasonalFilter = document.querySelector('#season');
const edibleFilter = document.querySelector('#edible');
const noResultsMessage = document.querySelector('.no-matches');

function enableFiltering() {
  seasonalFilter.removeAttribute('hidden');
  edibleFilter.removeAttribute('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  enableFiltering();
});

cards.forEach((card, index) => {
  const mushroomId = `mushroom-${index + 1}`;
  card.style.viewTransitionName = `mushroom-card-${mushroomId}`;
});

const currentFilters = {
  season: 'all',
  edible: 'all',
};

function updateFilter(e) {
  const filterType = e.target.name;
  currentFilters[filterType] = e.target.value;

  if (!document.startViewTransition) {
    filterCards();
    return;
  }
  document.startViewTransition(() => filterCards());
}

function show(card) {
  card.style.display = 'flex';
}

function hide(card) {
  card.style.display = 'none';
}

function filterCards() {
  let hasVisibleCards = false;

  cards.forEach((card) => {
    const season = card.querySelector('[data-season]').dataset.season;
    const edible = card.querySelector('[data-edible]').dataset.edible;

    if (
      (currentFilters.season === 'all' || currentFilters.season === season) &&
      (currentFilters.edible === 'all' || currentFilters.edible === edible)
    ) {
      hasVisibleCards = true;
      show(card);
    } else {
      hide(card);
    }

    if (hasVisibleCards) {
      noResultsMessage.hidden = true;
    } else {
      noResultsMessage.hidden = false;
    }
  });
}

seasonalFilter.addEventListener('change', updateFilter);
edibleFilter.addEventListener('change', updateFilter);
