  function inputClick(ID){
    var position = jQuery(ID).offset().top;
    jQuery("html,body").animate({
        scrollTop : position - 10 //スクロール位置調整
    }, {
        queue : false
    });
};	