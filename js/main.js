$(document).ready(function() {
  $('.button').click(function(e) {
    $(this).toggleClass('selected');

    var bl=0, gr=0, br=0, pu=0, na=0, aq=0, re=0, db=0;
    var sel = $('.selected');
    sel.each(function (i, el) {
      var cl = el.classList,
        ct = parseInt($(el).text(), 10);

      if (cl.contains('black')) { bl += ct; }
      if (cl.contains('grey')) { gr += ct; }
      if (cl.contains('brown')) { br += ct; }
      if (cl.contains('purple')) { pu += ct; }
      if (cl.contains('navy')) { na += ct; }
      if (cl.contains('aqua')) { aq += ct; }
      if (cl.contains('red')) { re += ct; }
      if (cl.contains('dbl')) { db += ct; }
    });

    var bl$=bl, gr$=gr, br$=br*2, pu$=pu*2, na$=na*2, aq$=aq*2, re$=re*3, db$=db*3;
    var ttl$ = bl$+gr$+br$+pu$+na$+aq$+re$+db$;

    $(".total.black .count").text(bl);
    $(".total.black .subtotal").text(bl$);

    $(".total.grey .count").text(gr);
    $(".total.grey .subtotal").text(gr$);

    $(".total.brown .count").text(br);
    $(".total.brown .subtotal").text(br$);

    $(".total.purple .count").text(pu);
    $(".total.purple .subtotal").text(pu$);

    $(".total.navy .count").text(na);
    $(".total.navy .subtotal").text(na$);

    $(".total.aqua .count").text(aq);
    $(".total.aqua .subtotal").text(aq$);

    $(".total.red .count").text(re);
    $(".total.red .subtotal").text(re$);

    $(".total.dbl .count").text(db);
    $(".total.dbl .subtotal").text(db$);

    $(".grand-total .gt").text(ttl$);

  });

  $('.clear').click(function(e) {
    $('.selected').removeClass('selected');
    $('.total .count').text('0');
    $('.total .subtotal').text('0');
    $('.grand-total .gt').text('0');
  });
});
