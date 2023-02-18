    //query
    const list = document.querySelector('ul');
    const input = document.querySelector('#item');
    const btn = document.querySelector('button');

    //click & enter
    btn.addEventListener ('click', buttonClicked);
    input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
     buttonClicked();
    } });

    //main function
    function buttonClicked() {
    const inputChoice = input.value;
    input.value = '';
    
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const deleteBtn = document.createElement('button');
    
    listItem.appendChild(listText);
    listItem.appendChild(deleteBtn);
    listText.textContent = inputChoice;
    deleteBtn.textContent = 'delete';
    list.appendChild(listItem);
   
    deleteBtn.addEventListener('click', () => {
    list.removeChild(listItem);
    });
}
    // optional: focus always on.
    input.addEventListener('blur', () => {
        input.focus();
    })

    input.focus();

