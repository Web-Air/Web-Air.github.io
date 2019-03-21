$(document).ready(function()
  {
    $(".drop-down1").hover(function()
      {
        $('.nav_menu_dropdown1').addClass('display-on');
      }
    );
  
    $(".drop-down1").mouseleave(function()
      {
      $('.nav_menu_dropdown1').removeClass('display-on');
      }
    );
  }
);

$(document).ready(function()
  {
    $(".drop-down").hover(function()
      {
        $('.nav_menu_dropdown').addClass('display-on');
      }
    );
  
    $(".drop-down").mouseleave(function()
      {
      $('.nav_menu_dropdown').removeClass('display-on');
      }
    );
  }
);








function mydropdownFunction1() {
  var x = document.getElementById("mydropdown1");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function mydropdownFunction2() {
  var x = document.getElementById("mydropdown2");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}