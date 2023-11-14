$(document).ready(function(){
    var corPadrao; 

    $(".caixa").on({
      mouseover: function(){
        var backgroundColor = $(this).css("background-color");
        $("body").css("background-color", backgroundColor);
        $("#preview").css({
          "background-color": backgroundColor,
          "display": "block"
        });
      },
      mouseout: function(){
        $("body").css("background-color", corPadrao);
        $("#preview").css("display", "none");
      },
      click: function(){
        corPadrao = $(this).css("background-color");
      }
    });
    
    $("#resetCorPadrao").click(function(){
        corPadrao = 'white';
        $("body").css("background-color", corPadrao);
      });
  });

