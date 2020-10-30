const filter1 = document.getElementById("filters").getAttribute("data-filter1");
const filter2 = document.getElementById("filters").getAttribute("data-filter2");
const filters = [filter1, filter2];

function applyFilters() {
  let checked = "";
  let query = "";

  for (const filter of filters) {
    $(`input[name="${filter}"]:checked`).each(function() {
      checked += `${$(this).val()}, `;
    });
    
    checked = checked.trim().slice(0, -1);

    if (checked !== '') {        
      query += `[data-${filter}*="${checked}"]`;
    }
  }

  $(`div.filter-card${query}`).show();

  $(`div.filter-card:not(${query})`).hide();
  if (checked === 'doc') {
    $(`div.filter-card[data-nivel*="pos-doc"]`).hide();
  }

  const visibleCards = $('div.filter-card:visible').length;

  $('div.filter-card-empty')[0].style.display = visibleCards === 0 ? '' : 'none';
}

const input = $('input.filter');

input.change(() => {
  applyFilters();
});