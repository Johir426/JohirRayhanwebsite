

var $projectitems = $(".project-items").isotope({
  itemSelector: ".item",
  percentPosition: true,
  masonry: {
    columnWidth: ".item"
  }
});

$(".project-catagory-select").on("click", "li", function() {
  var filterValue = $(this).attr("data-filter");
  $projectitems.isotope({ filter: filterValue });
});