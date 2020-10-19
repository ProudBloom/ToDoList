$(document).ready(function()
{
    function sortTableByColumn(table, column, asc = true)
    {
        const dirModifier = asc ? 1 : -1;
        const tBody = table.tBodies[1];
        const rows = Array.from(tBody.querySelectorAll('tr'));

        const sortedRows = rows.sort(function(a, b)
        {
            const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
            const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

            return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
        });

        //Remove all rows from the table
        while (tBody.firstChild) 
        {
            tBody.removeChild(tBody.firstChild);
        }

        //Re-add the sorted rows
        tBody.append(...sortedRows);

        //Save the current sorting of the column (to toggle the sorting pattern)
        table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
        if(asc === true) table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc");
        else if(asc === false) table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc");
    }

    document.querySelectorAll('.table-sortable th').forEach(headerCell => {
        headerCell.addEventListener('click', () =>
        {
            const tableElement = headerCell.parentElement.parentElement.parentElement;
            const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell); //index of the clicked header cell
            const currentIsAscending = headerCell.classList.contains('th-sort-asc');

            sortTableByColumn(tableElement, headerIndex, !currentIsAscending)
        })
    })
    sortTableByColumn(document.querySelector('.content-table'), 0);
});