$(document).ready(function () {
  $(".enabled").click(function () {
    $(".button-add-to-bag").text("ADD TO BAG").css({
      cursor: "pointer",
      opacity: "1",
    });
  });

  $(".disabled").click(function () {
    $(".button-add-to-bag").text("SOLID OUT").css({
      cursor: "not-allowed",
      opacity: "0.7",
    });
  });
});
