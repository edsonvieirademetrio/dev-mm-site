function reinvestCheckout() {
  var title = jQuery("#confirmar-investimento > h3");
  var i = jQuery("#confirmar-investimento h3 > i").html();
  title.replaceWith("<h3>" + i + "Finalizar</h3>");

  var btn = jQuery("button#place_order");
  btn.attr("value", "Confirmar Reinvestimento");
  btn.attr("data-value", "Confirmar Reinvestimento");
  btn.text("Confirmar Reinvestimento");
}
