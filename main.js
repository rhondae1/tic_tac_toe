$("input[type='radio']").click(function () {
    $(this).prop('checked');
    $(this).addClass('checked');
    $(this).siblings().removeProp('checked') // .sibling or .siblings??
    $(this).siblings().removeClass('checked');
});

$('td').click(function () {
        if ($('[name="blue"]').hasClass('checked')) {
            $(this).toggleClass('blue');
        } else if ($('[name="red"]').hasClass('checked')) {
            $(this).toggleClass('red');
        }
    });

$('td').click(function () {
    if (($('.row1.red').length) === 3) {
        alert("Red Won!");
    }
    if (($('.row2.red').length) === 3) {
        alert("Red Won!");
    } 

    if (($('.row3.red').length) === 3) {
        alert("Red Won!");
    } 

    if (($('.column1.red').length) === 3) {
        alert("Red Won!");
    } 

    if (($('.column2.red').length) === 3) {
        alert("Red Won!");
    } 

    if (($('.column3.red').length) === 3) {
        alert("Red Won!");
    } 

    if (($('.diag1.red').length) === 3) {
        alert("Red Won!");
    } 

    if (($('.diag2.red').length) === 3) {
        alert("Red Won!");
    }
});


