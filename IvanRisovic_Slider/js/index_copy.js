var gallery1 = $('#row1'),
    gallery2 = $('#row2'),
    items1 = gallery1.find('img'),
    items2 = gallery2.find('img'),
    trigger1 = $('.btn1'),
    trigger2 = $('.btn2');



trigger1.on('click', function(){             
    $('#row1 img:last').prependTo($('#row1 img:last').parent());        
    $('#row2 img:last').prependTo($('#row2 img:last').parent());    
});
trigger2.on('click', function(){
    $('#row1 img:first').appendTo($('#row1 img:first').parent());
    $('#row2 img:first').appendTo($('#row2 img:first').parent()); 
});