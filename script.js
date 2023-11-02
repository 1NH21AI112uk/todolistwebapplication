window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");


    form.addEventListener('submit',(e) => {
        e.preventDefault();

        console.log("Submit form");

        if (!task) {
            alert("please fill out the task");
            return;

        }
        const task_el=document.createElement("div");
        task_el.classList.add("task");

        const task_content_el =document.createElement("div");
        task_content_el.classList.add("content");
        

        task_el.appendChild(task_content_el);
        const task_input_el = document.createElement("input");
        task_input_e1.classList.add("text");
        task_input_e1.type="text";
        task_input_el.value=task;
        task_input_el.setAttribute("readonly","readonly");

        task_content_el.appendChild(task_input_el);

        list_el.appendChild(task_el);


        
    })
})


