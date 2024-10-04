var $ = require('jquery')

$(document).ready(function () {

    $("body").on( 'scroll', function(){
        console.log('Event Fired');
    });

    $('#myScrollspy').on('activate.bs.scrollspy', function () {
     console.log("geldii");
    });
});