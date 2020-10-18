$(document).ready(function()
{
    $('#max-rows').on('change', function(){
        let rowsNum = 0;
        let maxRows = parseInt($(this).val());
        let rowsTotal = $('.content-table tbody tr').length;
        console.log(rowsTotal);
        $('.content-table tr:gt(0)').each(function(){
            rowsNum++;
            if(rowsNum > maxRows) $(this).hide();
            else if(rowsNum <= maxRows) $(this).show();
        });
        console.log($('#footer').html());
        $('#footer').show();
    });
});