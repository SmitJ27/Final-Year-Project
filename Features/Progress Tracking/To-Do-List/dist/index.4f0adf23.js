document.getElementById('add-task').addEventListener('click', function() {
    let taskInput = document.getElementById('new-task');
    let taskDateInput = document.getElementById('task-date');
    let taskText = taskInput.value.trim();
    let taskDate = taskDateInput.value;
    if (taskText !== '') {
        // Create a new task item
        let li = document.createElement('li');
        let formattedDate = formatDate(taskDate);
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            ${formattedDate ? `<span class="task-date">${formattedDate}</span>` : ''}
            <button class="delete">Delete</button>
        `;
        // Append the new task to the list
        document.getElementById('task-list').appendChild(li);
        // Clear the input fields
        taskInput.value = '';
        taskDateInput.value = '';
        // Add event listeners for task completion and deletion
        li.querySelector('.task-text').addEventListener('click', function() {
            li.classList.toggle('completed');
        });
        li.querySelector('.delete').addEventListener('click', function() {
            li.remove();
        });
    }
});
document.getElementById('new-task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') document.getElementById('add-task').click();
});
// Format the date to dd-mm-yy format
function formatDate(date) {
    if (date) {
        const dateObj = new Date(date);
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const year = dateObj.getFullYear().toString().slice(-2);
        return `${day}-${month}-${year}`;
    }
    return '';
}

//# sourceMappingURL=index.4f0adf23.js.map
