$(document).ready(function()
{   
    var currentPage = 1;
    var pagesTotal = Math.ceil($('.content-table tbody tr').length / $('#max-rows').val());

    paginationDisplay(1, 15, $('.content-table tbody tr').length);
    
    $('#max-rows').on('change', function()
    {
        paginationDisplay(1, parseInt($(this).val()), $('.content-table tbody tr').length);
        pagesTotal = Math.ceil($('.content-table tbody tr').length / $('#max-rows').val());
        currentPage = 1;
        console.log('Pages total : ' + pagesTotal);
    });

    $('tfoot .next-page').on('click', function()
    {
        if(currentPage < pagesTotal)
        {
            let startingRow = 1 +  parseInt($('#max-rows').val()) * currentPage;
            paginationDisplay(startingRow, parseInt($('#max-rows').val()), $('.content-table tbody tr').length);
            currentPage++;
            console.log('Current page : ' + currentPage);
        }
    });

    $('tfoot .prev-page').on('click', function()
    {
        if(currentPage > 1)
        {
            currentPage--;
            let startingRow = currentPage * parseInt($('#max-rows').val()) - (parseInt($('#max-rows').val()) - 1);
            paginationDisplay(startingRow, parseInt($('#max-rows').val()), $('.content-table tbody tr').length);
            console.log('Current page : ' + currentPage);
        }
    });
    

    function paginationDisplay(startingRow, maxRows, rowsTotal)
    {
        console.log('Starting row : ' + startingRow);
        var currentRow = startingRow;

        $('.content-table tbody tr:gt(0)').each(function(){
            currentRow++;
            if(currentRow >= startingRow && currentRow <= currentPage * maxRows) $(this).show();
            else $(this).hide();
        });

        $('.task-no-to').html(maxRows);
        $('.tasks-no').html(rowsTotal);
    }
});