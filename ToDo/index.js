const input_box = document.getElementById("input-box");
const add_btn = document.getElementById("add");

const task_container = document.getElementById("tasks");

add_btn.addEventListener("click", () => {

    var input_value = input_box.value;

    //creating div with class task
    const task_div = document.createElement('div');
    task_div.classList.add("task");

    //creating div with class name
    const task_name = document.createElement("div");
    task_name.classList.add("name");

    //creating partial complete to task name
    task_name.addEventListener("click", () => {
        if (task_name.classList.contains("partial")) {
            task_name.classList.remove("partial");
        } else {
            task_name.classList.add("partial");
        }
    });

    //creating div with class delete
    const task_delete = document.createElement("div");
    task_delete.classList.add("delete");

    //creating event listner for delete button
    task_delete.addEventListener("click", () => {
        task_container.removeChild(task_div);
    });

    task_name.innerHTML = input_value;
    task_delete.innerHTML = "Del";

    task_div.appendChild(task_name);
    task_div.appendChild(task_delete);

    if (task_container.firstChild) {
        task_container.insertBefore(task_div, task_container.firstChild);
    } else {
        task_container.appendChild(task_div);
    }

    input_box.value = '';

});