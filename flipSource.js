(function($){
  $.fn.flipSource = function(options) {
    
    // add the html we need 
    jQuery('body').prepend("<a class='viewSource' href=''>View Source</a><div id='view-source'><div class='source-inner'></div></div>");

    $('a.viewSource').toggle( 
      function() {
        // flip the page and show the source
        showSource(this);
      },
      function() {
        // turn the page back around
        hideSource(this);
      }
    )
    
    function showSource(o){
      if( !o.old ){
        o.old = $(o).html();
      }
      $(o).html('Hide Code')

      // download the code of the current page
      $.get (o.href,
        function(code){
          // escape the source
          code=code.replace(/&/mg,'&#38;');
          code=code.replace(/</mg,'&#60;');
          code=code.replace(/>/mg,'&#62;');
          code=code.replace(/\"/mg,'&#34;');
          code=code.replace(/\t/g,'  ');
          code=code.replace(/\r?\n/g,'<br>');
          code=code.replace(/<br><br>/g,'<br>');
          code=code.replace(/ /g,'&nbsp;');
          // insert into the page
          $('#view-source .source-inner').html(code);
          $('#view-source').show();
          $('html').addClass('flip')
        }
      );
    }
    
    function hideSource(o){
      $(o).html(o.old);
      $('#view-source').hide();
      $('html').removeClass('flip');
    }
  };
})(jQuery);