$('#moodle-login').easyModal(
    {
        overlay : 0.4,
        overlayClose: false
    }
);

$('#heart').click(
    function(e)
    {
        $('#moodle-login').trigger('openModal');
        e.preventDefault();
    }
);

$('#moodle-login').easyModal(
    {
        overlay : 0.4,
        overlayClose: false
    }
);

$('#login').click(
    function(e)
    {
        $.cookie('moodle_login', 'the_value', { path: '/', domain: 'matwild.com' });
    }
);
