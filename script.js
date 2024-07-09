function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        
        li.addEventListener('click', function() {
            this.classList.toggle('completed');
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Add a CSS class for completed tasks
const style = document.createElement('style');
style.innerHTML = `
    .completed {
        text-decoration: line-through;
        color: #888;
    }
`;
document.head.appendChild(style);
