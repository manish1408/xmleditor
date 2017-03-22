$.getJSON("js/data.json", function (data) {
  var items = [];
  
  var navbar = "";
  
  
  /*<ul>
    <li><a onclick="add();"><i class="fa fa-facebook"></i> Facebook</a></li>
  </ul>*/
  
                            
  $.each(data.node, function (key, val) {
    navbar += '<li><a onclick="add();"><i class="fa fa-share-alt"></i><span>'+ val.name +'</span><span class="fa fa-angle-right" style="float: right"></span></a>';
    navbar += '</li>';
  });
  
  console.log(navbar);

  var nav = $("<ul/>", {
    "class": "my-new-list",
    html: items.join("")
  });
  console.log(nav);
  // $('.nav').html(nav[0].innerHTML)
});