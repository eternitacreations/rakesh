(function ($) {

// You'd better put the code inside ready() function

  $('#JobTilteDescription').tooltip({
     boundary: 'window'
   })


  $(document).ready(function () {
      // Items to select
      var country = [
          {value: 11, text: 'Apple'},
          {value: 12, text: 'Nokia'},
          {value: 13, text: 'Sony'},
          {value: 14, text: 'LG'},
          {value: 15, text: 'HTC'},
          {value: 16, text: 'Motorola'},
          {value: 17, text: 'Samsung'},
          {value: 18, text: 'ZTE'},
          {value: 19, text: 'Asus'},
          {value: 20, text: 'Alcatel'}
      ];

      var programingLanguage = [
          {value: 21, text: 'Apple'},
          {value: 22, text: 'Nokia'},
          {value: 23, text: 'Sony'},
          {value: 24, text: 'LG'},
          {value: 25, text: 'HTC'},
          {value: 26, text: 'Motorola'},
          {value: 27, text: 'Samsung'},
          {value: 28, text: 'ZTE'},
          {value: 29, text: 'Asus'},
          {value: 30, text: 'Alcatel'}
      ];

      // Initialize paraia-multi-select
      

      // Initialize paraia-multi-select
      var select = $('#skills').paraia_multi_select({
          multi_select: true,
          items: programingLanguage,
          rtl: true
      });

      var select = $('#nationality').paraia_multi_select({
          multi_select: true,
          items: programingLanguage,
          rtl: true
      });

      var select = $('#certifications').paraia_multi_select({
          multi_select: true,
          items: programingLanguage,
          rtl: true
      });

      var select = $('#selectGender').paraia_multi_select({
          multi_select: true,
          items: programingLanguage,
          rtl: true
      });

      var select = $('#programing-language').paraia_multi_select({
          multi_select: true,
          items: programingLanguage,
          rtl: true
      });

       // Initialize paraia-multi-select
      var select = $('#religions').paraia_multi_select({
          multi_select: true,
          items: programingLanguage,
          rtl: true
      });

       // Initialize paraia-multi-select
      var select = $('#sexOrientation').paraia_multi_select({
          multi_select: true,
          items: programingLanguage,
          rtl: true
      });

      var select = $('#country-select').paraia_multi_select({
          multi_select: true,
          items: country,
          defaults: [11, 12, 13],
          rtl: true
      });
      // Get selected items
      $('#show_selected').click(function () {
          alert(select.paraia_multi_select('get_items'))
      });
  });

})(jQuery);