$(function() {
    $('.moment').each(function(i, e) {
        var time = moment($(e).text());
        $(e).html(time.fromNow());
    });
});

