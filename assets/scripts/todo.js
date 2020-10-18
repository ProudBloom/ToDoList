$(document).ready(function(){

    $('.todolist-form').on('submit', function(){
  
        let taskName = $('#task-name');
        let taskPriority = $('#task-priority');
        let todo = {taskName: taskName.val(), taskPriority: taskPriority.val()};
    
        $.ajax({type: 'POST', url: '/todolist', data: todo, success: function(data){
            location.reload();
          }
        });
        return false;
    });
  
    $('.delete-btn').on('click', function(){
        let item = $(this).attr('id').replace(/ /g, '-');
        console.log(item);
        $.ajax({ type: 'DELETE', url: '/todolist/' + item,
          success: function(data){
            location.reload();
          }
        });
    });
  
  });