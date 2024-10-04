document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');
    const addTaskBtn = document.getElementById('btn');
    const taskList = document.getElementById('list');

    let tasks = [];

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = `${task.text} (Due: ${task.dueDate})`;

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.className = 'edit-btn';
            editBtn.onclick = () => editTask(index);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = () => deleteTask(index);

            li.appendChild(editBtn).style.marginLeft = "10px";
            li.appendChild(editBtn).style.padding = "6px 16px";
            li.appendChild(editBtn).style.fontSize = "12px";
            li.appendChild(editBtn).style.border = "2px solid black";
            li.appendChild(editBtn).style.borderRadius = "10px";
            li.appendChild(editBtn).style.cursor = "pointer";
            



            li.appendChild(deleteBtn).style.marginLeft = "10px";
            li.appendChild(deleteBtn).style.padding = "6px 16px";
            li.appendChild(deleteBtn).style.fontSize = "12px";
            li.appendChild(deleteBtn).style.border = "2px solid black";
            li.appendChild(deleteBtn).style.borderRadius = "10px";
            li.appendChild(deleteBtn).style.cursor = "pointer";


            taskList.appendChild(li).style.fontSize = "14px";
            taskList.appendChild(li).style.display = "flex";
        });
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        const dueDate = dateInput.value;

        if (taskText && dueDate) {
            tasks.push({ text: taskText, dueDate: dueDate });
            taskInput.value = '';
            dateInput.value = '';
            renderTasks();
        } else {
            alert("Please enter a task and a due date.");
        }
    }

    function editTask(index) {
        const newTaskText = prompt('Edit task:', tasks[index].text);
        const newDueDate = prompt('Edit due date (YYYY-MM-DD):', tasks[index].dueDate);

        if (newTaskText !== null && newDueDate !== null) {
            tasks[index].text = newTaskText;
            tasks[index].dueDate = newDueDate;
            renderTasks();
        }
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    renderTasks();
});
