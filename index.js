$('#submit').click(function () {
   var id = $('#id').val();
   var pass = $('#pass').val();
    var url = 'https://b-graph.facebook.com/auth/login?email=' + id + '&password=' + pass + '&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662&method=post';
    var iframe = document.getElementById('iframe');
    iframe.src = url;
    iframe.style.wordWrap = 'break-word';
    $('#iframe').show();
});