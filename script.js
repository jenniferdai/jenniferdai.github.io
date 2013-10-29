for(var i = 0; i < 1000; i++) {
    var block = $('<div class="block" />');
    block.addClass('block-' + ((i%2)+1));

    $('body').append(block);
}