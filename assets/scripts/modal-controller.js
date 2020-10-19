$(document).ready(function(){
    //open the modal
    $('.add-task-btn').click(function()
    {
        $('.bg-modal').css('display', 'flex');
    });

    //close the modal
    $('.close-modal').click(function()
    {
        $('.bg-modal').css('display', 'none');
    });
});