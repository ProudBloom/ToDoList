$(document).ready(function(){
    $('.add-task-btn').click(function()
    {
        $('.bg-modal').css('display', 'flex');
    });

    $('.close-modal').click(function()
    {
        $('.bg-modal').css('display', 'none');
    });
});