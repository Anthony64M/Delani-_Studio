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
    $("#job1").mouseover(function(){
      $("#on-img1").show();
    }).mouseout(function(){
      $("#on-img1").hide();
    });
  });
  $(document).ready(function(){
    $("#job2").mouseover(function(){
      $("#on-img2").show();
    }).mouseout(function(){
      $("#on-img2").hide();
    });
  });
  $(document).ready(function(){
    $("#job3").mouseover(function(){
      $("#on-img3").show();
    }).mouseout(function(){
      $("#on-img3").hide();
    });
  });
  $(document).ready(function(){
    $("#job4").mouseover(function(){
      $("#on-img4").show();
    }).mouseout(function(){
      $("#on-img4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#job5").mouseover(function(){
      $("#on-img5").show();
    }).mouseout(function(){
      $("#on-img5").hide();
    });
    $("#job6").mouseover(function(){
      $("#on-img6").show();
    }).mouseout(function(){
      $("#on-img6").hide();
    });
    $("#job7").mouseover(function(){
      $("#on-img7").show();
    }).mouseout(function(){
      $("#on-img7").hide();
    });
    $("#job8").mouseover(function(){
      $("#on-img8").show();
    }).mouseout(function(){
      $("#on-img8").hide();
    });
  });
  
  $(document).ready(function(){
    $("form#formDe").submit(function(event){
      // event.preventDefault();
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }

    });

  });