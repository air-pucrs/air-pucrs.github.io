const filter1 = document.getElementById("filters").getAttribute("data-filter1");
const filter2 = document.getElementById("filters").getAttribute("data-filter2");
const filters = [filter1, filter2];

function applyFilters() {
  let query = "";
  let shouldHidePosDoc = false;

  for (const filter of filters) {
    let checked = "";
    $(`input[name="${filter}"]:checked`).each(function () {
      checked += `${$(this).val()}, `;
    });


    checked = checked.trim().slice(0, -1);

    if (checked !== '') {
      if (checked === 'doc' && !shouldHidePosDoc) {
        shouldHidePosDoc = true;
      }

      query += `[data-${filter}*="${checked}"]`;
    }
  }

  $(`div.filter-card:not(${query})`).hide();
  $(`div.filter-card${query}`).show();

  if (shouldHidePosDoc) {
    $(`div.filter-card[data-nivel*="pos-doc"]`).hide();
  }

  const visibleCards = $('div.filter-card:visible').length;

  const emptyCard = $('div.filter-card-empty')[0];
  if (emptyCard) {
    emptyCard.style.display = visibleCards === 0 ? '' : 'none';
  }
}

const input = $('input.filter');

applyFilters();

input.change(() => {
  applyFilters();
});