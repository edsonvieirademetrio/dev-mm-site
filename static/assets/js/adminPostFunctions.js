jQuery(document).ready(function () {
  var orderQty = jQuery('input[name*="order_item_qty"]');
  if (orderQty) {
    var oldQty = orderQty.attr("value");
    orderQty.attr("value", parseInt(oldQty));
    orderQty.attr("data-qty", parseInt(oldQty));
  }
});
