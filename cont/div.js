$(function() {

$('.drop').click().draggable();

$( ".drop_cn" ).droppable({
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" )
          .css('border-radius', '30px');
    }
  });
 }); 