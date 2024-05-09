document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const prioritySelect = document.getElementById('priority');
    const taskList = document.getElementById('task-list');

    // Function to create a new task item
    function createTaskItem(taskContent, dueDate, priority) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span>${taskContent}</span>
            <span class="due-date">${dueDate}</span>
            <span class="priority ${priority}">${priority}</span>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;
        return li;
    }

    // Add task event
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const taskContent = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        const priority = prioritySelect.value;
        if (taskContent !== '') {
            const taskItem = createTaskItem(taskContent, dueDate, priority);
            taskList.appendChild(taskItem);
            taskInput.value = '';
            dueDateInput.value = '';
            prioritySelect.value = 'low';
        }
    });

    // Delete task event
    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            const taskItem = e.target.closest('.task-item');
            taskItem.remove();
        }
    });

    // Mark task as complete event
    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('complete-btn')) {
            const taskItem = e.target.closest('.task-item');
            taskItem.classList.toggle('completed');
        }
    });
});
