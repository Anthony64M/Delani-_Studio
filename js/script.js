$(document).ready(function(){
    $("#dev-img").click(function(){
      $("#dev-img").slideDown('1500').hide('1000');
      $("#dev").show('1500');
    });
    $("#dev").click(function(){
      $("#dev").slideUp('1500');
      $("#dev-img").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#des-img").click(function(){
      $("#des-img").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#des-img").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#prod-img").click(function(){
      $("#prod-img").slideDown('1500').hide('1000');
      $("#prod").show('1500');
    });
    $("#prod").click(function(){
      $("#prod").slideUp('1500');
      $("#prod-img").slideDown('1500');
    });
  });

$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#overlay").show();
  }).mouseout(function(){
    $("#overlay").hide();
  });
});
$(document).ready(function(){
  $("#work2").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
});
$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });
});
$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });
});

$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#overlay5").show();
  }).mouseout(function(){
    $("#overlay5").hide();
  });
  $("#work6").mouseover(function(){
    $("#overlay6").show();
  }).mouseout(function(){
    $("#overlay6").hide();
  });
  $("#work7").mouseover(function(){
    $("#overlay7").show();
  }).mouseout(function(){
    $("#overlay7").hide();
  });
  $("#work8").mouseover(function(){
    $("#overlay8").show();
  }).mouseout(function(){
    $("#overlay8").hide();
  });
});

$(document).ready(function(){
  $("form").submit(function(event){
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#comment").val();
    if ($("#name").val() && $("#email").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your Name and a valid Email or Subscribe if you are not suscribed!!");
    } 
  });
});
