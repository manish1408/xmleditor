$.getJSON("js/data.json", function (data) {
  var items = [];
  $.each(data, function (key, val) {
    items.push("<li id='" + key + "'>" + val + "</li>");
  });

  var nav = $("<ul/>", {
    "class": "my-new-list",
    html: items.join("")
  });
  console.log(nav);
  $('.nav').html(nav[0].innerHTML)
});