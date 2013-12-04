$(document).ready(function() {
  var isHover = false;

  $('.section').hover(function() {
    isHover = true;
    if (isHover) {
        var selected = $(this);
        window.setTimeout(function() {
            if (isHover) {
                selected.css("z-index", 20);
                selected.css("margin-top", '0px');
                var id = selected.attr('id');
                if (id == 'ul') { $('#navBar').css('background-color', '#44525b'); }
                if (id == 'ur') { $('#navBar').css('background-color', '#57785c'); }
                if (id == 'll') { $('#navBar').css('background-color', '#979565'); }
                if (id == 'lr') { $('#navBar').css('background-color', '#9d534a'); }
                selected.transition({ height:'615px', width:'615px', top:'0px', left:'0px', delay:150 });
            }
        }, 2500);
    }
  },
  function() {
    isHover = false;
    var selected = $(this);
    selected.css("z-index", 10);
    var id = selected.attr('id');
    $('#navBar').css('background-color', '#777777');
    if (id == 'ul') {
        selected.transition({ height:'300px', width:'300px', top:'0px', left:'0px', delay:150 });
    }
    if (id == 'ur') {
        selected.transition({ height:'300px', width:'300px', top:'0px', left:'315px', delay:150 });
    }
    if (id == 'll') {
        selected.css("margin-top", '15px');
        selected.transition({ height:'300px', width:'300px', top:'300px', left:'0px', delay:150 });
    }
    if (id == 'lr') {
        selected.css("margin-top", '15px');
        selected.transition({ height:'300px', width:'300px', top:'300px', left:'315px', delay:150 });
    }
  });
});
