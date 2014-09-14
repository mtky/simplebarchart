
function drawGraph(tableId, animationTime) {
    var $table = document.getElementById(tableId);
    var $thead = $($table).find('thead');
    var $tbody = $($table).find('tbody');

    var height = $($table).attr('data-height');
    var width = $($table).attr('data-width');
    var border = $($table).attr('data-border');

    var tableHtml = '';

    var sections = [];
    var values = [];
    var colors = [];

    var t = 0;
    var r = 0;
    var h = 0;

    $.each($($tbody).find('tr'), function (i, e) {
        sections.push($(e).find('td').first().html());
        values.push($(e).find('td').eq(1).html());
        colors.push($(e).find('td').eq(1).attr('data-color'));
    });

    tableHtml += '<tbody><tr>';

    $.each(values, function (i, v) {
        var c = colors[i];
        tableHtml += '<td class="gbody"><div style="background-color:' + c + '" class="gbar class' + (i + 1) + '"></div></td>';
        t = t + parseInt(v);
    });

    tableHtml += '</tr><tr>';

    $.each(sections, function (i, s) {
        tableHtml += '<td class="gobj">' + s + '</td>';
    });

    tableHtml += '</tr></tbody>';

    $($table).html(tableHtml);

    $.each(values, function (i, v) {
        r = (v / t);
        h = height * r;
        $(".class" + (i + 1)).animate({ "height": h + "px" }, animationTime);
        $(".class" + (i + 1)).html(v);
    });

    $('.gbody').css({ 'height': height });
    $($table).css({ 'width': width });
    $($table).css({ 'border': border });
    $($table).find('td').css({ 'border-top': border });
}