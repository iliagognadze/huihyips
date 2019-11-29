$( document ).ready(function() {
    
    var dabalShemosavlianiSection = $('#dabalShemosavlianiSection');
    var sashualoShemosavlianiSection = $('#sashualoShemosavlianiSection');
    var magalShemosavlianiSection = $('#magalShemosavlianiSection');

    $('#dabalShemosavlianiBtn').on('click', function(){
        dabalShemosavlianiSection.addClass('d-block');
        sashualoShemosavlianiSection.addClass('d-none');
        magalShemosavlianiSection.addClass('d-none');

        dabalShemosavlianiSection.removeClass('d-none');
        sashualoShemosavlianiSection.removeClass('d-block');
        magalShemosavlianiSection.removeClass('d-block');
    });

    $('#sashualoShemosavlianiBtn').on('click', function(){
        dabalShemosavlianiSection.addClass('d-none');
        sashualoShemosavlianiSection.addClass('d-block');
        magalShemosavlianiSection.addClass('d-none');

        dabalShemosavlianiSection.removeClass('d-block');
        sashualoShemosavlianiSection.removeClass('d-none');
        magalShemosavlianiSection.removeClass('d-block');
    });

    $('#magalShemosavlianiBtn').on('click', function(){
        dabalShemosavlianiSection.addClass('d-none');
        sashualoShemosavlianiSection.addClass('d-none');
        magalShemosavlianiSection.addClass('d-block');

        dabalShemosavlianiSection.removeClass('d-block');
        sashualoShemosavlianiSection.removeClass('d-block');
        magalShemosavlianiSection.removeClass('d-none');
    });

    function dabalShemosavlianiShow() {
        dabalShemosavlianiSection.addClass('d-none');
    }

});