
$(function(){
  $('.drag').draggable({
    containment:'#drag-area',
    cursor: 'move',
    opacity:0.6,
    scroll:true,
    zIndex:10,

    stop:function(event,ui){
      var myNum  = $(this).data('num');
      var myLeft = (ui.offset.left - $('#drag-area').offset().left);
      var myTop  = (ui.offset.top  - $('#drag-area').offset().top);

      $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      });
      $.ajax({
        type:'POST',
        url: '/update',
        data: {
          id :myNum,
          left :myLeft,
          top :myTop
        }
      }).done(function(){
        console.log('成功');
      }).fail(function(XMLHttpRequest, textStatus, errorThrown){
        console.log(XMLHttpRequest.status);
        console.log(textStatus);
        console.log(errorThrown);
      });

      console.log("左: " + myLeft);
      console.log("上: " + myTop);
    }
  })
});



