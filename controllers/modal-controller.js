
document.querySelector('.add-task-btn').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
})

document.querySelector('.close-modal').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
})

module.exports = 
{
    openModalFunc: openModal,
    closeModalFunc: closeModal,
};