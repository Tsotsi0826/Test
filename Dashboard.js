// Add a new task to the To-Do List
function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskText = newTaskInput.value.trim();

    if (taskText) {
        const todoList = document.getElementById('todo-list');
        const newTaskItem = document.createElement('li');
        newTaskItem.innerHTML = `<input type="checkbox"> ${taskText}`;
        todoList.appendChild(newTaskItem);
        newTaskInput.value = '';
    }
}

// Add a new reminder
function addReminder() {
    const newReminderInput = document.getElementById('new-reminder');
    const reminderText = newReminderInput.value.trim();

    if (reminderText) {
        const remindersList = document.getElementById('reminders-list');
        const newReminderItem = document.createElement('li');
        newReminderItem.textContent = reminderText;
        remindersList.appendChild(newReminderItem);
        newReminderInput.value = '';
    }
}

// Handle Contact Us form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset();
});
