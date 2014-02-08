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
        $.cookie('moodle_username', $("#username").val(), { path: '/', domain: 'matwild.com', expires: 3650});
        $.cookie('moodle_password', $("#password").val(), { path: '/', domain: 'matwild.com', expires: 3650});
    }
);
