// 手动显示modal的方法，参数modal：目标modal的选择器，例如： #cp-result
function showModal(modal) {
    $('.modal').hide();
    $('.overlayer').hide();
    $(modal).show();
    $('.overlayer').show();
}
function hideModal(modal) {
    $(modal).hide();
    $('.overlayer').hide();
}
$('[data-target]')
    .click(function () {
        var target = $(this).data('target');
        showModal(target);
    })
$('.modal-header span').click(function () {
    $('.modal').hide();
    $('.overlayer').hide();

})

$('.have-child .title').click(function () {
    if ($(this).next()) {
        if ($(this).hasClass('unfold')) {
            $(this).removeClass('unfold')
        } else {;
            $(this).addClass('unfold')
        }
        $(this)
            .next()
            .animate({
                'height': 'toggle'
            }, '');
    }
})



$('.tabs-content .content-container')
    .eq(0)
    .show();
$('.tabs li').click(function () {
    var index = $(this).index();
    $(this)
        .siblings()
        .removeClass('active');
    $(this).addClass('active');
    $('.tabs-content .content-container').hide();
    $('.tabs-content .content-container')
        .eq(index)
        .show();
})

$('.clear').click(function(){
    $(this).parent().find('input').val('');
    $(this).parent().removeClass('input-error');
    $(this).parent().next().remove();
})

    $('.input-radio').click(function () {
        $(this).find('input').prop('checked', !$(this).find('input').prop('checked'));
    })