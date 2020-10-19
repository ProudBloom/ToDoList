$(document).ready(function()
{
    let currentPage = 1;
    let pagesTotal = 1;
    
    rowsPerPageHandler(15);
    footerDisplayHandler(1, 15, $('.content-table tbody tr').length);

    //On rows per page selection
    $('#max-rows').on('change', function(){
        rowsPerPageHandler(parseInt($(this).val()));
        pagesTotal = Math.ceil($('.content-table tbody tr').length / $('#max-rows').val());
        footerDisplayHandler(1, parseInt($(this).val()), $('.content-table tbody tr').length);
    });

    //On next page button click
    $('tfoot .next-page').on('click', function()
    {
        if(currentPage < pagesTotal)
        {
            let startingRow = 1 +  parseInt($('#max-rows').val()) * currentPage;
            currentPage++;
            pagingHandler(startingRow, currentPage, parseInt($('#max-rows').val()));
            footerDisplayHandler(startingRow, parseInt($('#max-rows').val()) * currentPage, $('.content-table tbody tr').length);
        }
    });

    //On prevoius page button click
    $('tfoot .prev-page').on('click', function()
    {
        if(currentPage > 1)
        {
            currentPage--;
            let startingRow = currentPage * parseInt($('#max-rows').val()) - (parseInt($('#max-rows').val()) - 1);
            pagingHandler(startingRow, currentPage, parseInt($('#max-rows').val()));
            footerDisplayHandler(startingRow, parseInt($('#max-rows').val()) * currentPage, $('.content-table tbody tr').length);
        }
    });

    /**
     * Handles how many rows to display basing on selected value (inside select element)
     * @param {number} maxRows maximum number of rows to be displayed at once
     */
    function rowsPerPageHandler(maxRows)
    {
        let rowsNum = 1;
        $('.content-table tbody tr:gt(0)').each(function(){	
            rowsNum++;	
            if(rowsNum > maxRows) $(this).hide();	
            else if(rowsNum <= maxRows) $(this).show();	
        });
    }

    /**
     * Handles which rows should be displayed on which page of the list
     * @param {number} startingRow first row of the page selected
     * @param {number} currentPage page that is currently selected
     * @param {number} maxRows maximum number of rows to be displayed at once 
     */
    function pagingHandler(startingRow, currentPage, maxRows)
    {
        $('.content-table tbody tr').each(function(currentRow = 0){
            $(this).hide();
            currentRow++;
            if(currentRow >= startingRow && currentRow <= currentPage * maxRows)
            {
                $(this).show();
            }
        });
    }

    /**
     * Handles the data displayed in the footer
     * @param {number} taskFrom first task to be displayed on a given page
     * @param {number} taskTo last task to be displayed on a given page
     * @param {number} tasksTotal total amount of tasks
     */
    function footerDisplayHandler(taskFrom, taskTo, tasksTotal)
    {
        $('.task-no-from').html(taskFrom);
        $('.task-no-to').html(taskTo);
        $('.tasks-no').html(tasksTotal);
    }
}); 