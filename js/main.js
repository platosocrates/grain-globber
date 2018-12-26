

grains.forEach(grain => {
    var $li = $('<li>');
    var $img = $('<img>').attr('src', 'images/' + grain.img);
    var $h2 = $('<h2>').text(grain.name);
    var $p = $('<p>').text(grain.desc); 
    
    $($img).appendTo($li);
    $($h2).appendTo($li);
    $($p).appendTo($li);
    
    $($li).appendTo('ul.grains');

});