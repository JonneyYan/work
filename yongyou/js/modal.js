// showModal('#login'); 手动显示modal的方法，参数modal：目标modal的选择器，例如： #cp-result
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