(function ( $ ) {

  init();

  function init() {
    remove_swiss_content();
    detect_url_change();
  }

  function remove_swiss_content() {
    const swiss_content = [
      "",
      "Der Bestatter",
      "Wolkenbruchs wunderliche Reise in die Arme einer Schickse",
      "Giulias Verschwinden",
      "Pietra tenera",
      "Neumatt",
      "Golden Age",
      "Die Geschichte der FIFA Fußball-Weltmeisterschaft"
    ];
    //console.log( swiss_content );
    $( '.slider-item' ).each( function() { 
      let current_slide = $( this );
      let title = current_slide.text();
      if( $.inArray( title, swiss_content ) > 0 ) {
        current_slide.hide().remove();
        //console.log( 'Element wurde gefunden: ' + title );
      }
      //console.log( title );
    } );
  }

  function detect_url_change() {
    let lastUrl = location.href; 
    new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        remove_swiss_content();
      }
    }).observe(document, {subtree: true, childList: true});
  }

})( jQuery );