document.addEventListener('DOMContentLoaded', function(){
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    loadTasks();

    addBtn.addEventListener('click', addTask);

    function addTask(){
        const taskText = taskInput.value.trim();
        if (taskText !== ''){
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = function(){
                taskList.removeChild(li);
                saveTasks();
            };

            li.appendChild(deleteBtn);
            taskList.appendChild(li);

            taskInput.value = '';
            saveTasks();

        }
    }
    function saveTasks(){

    }

    function loadTasks(){
        
    }


});