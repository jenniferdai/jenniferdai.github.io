for(var i = 0; i < 1000; i++) {
    var block = $('<div class="resume-bt" />');
    block.addClass('resume-bt-' + ((i%2)+1));

    $('body').append(block);
}