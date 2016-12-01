(function(){
    var todo  = document.querySelector('#todo-list'),
        form  = document.querySelector('form'),
        field = document.querySelector('#new-item');
    
    form.addEventListener('submit', function(ev) {
        todo.innerHTML += '<li>' + field.value + '</li>';
        field.value = '';
        field.focus();
        storeState();
        ev.preventDefault();
    }, false);

    todo.addEventListener('click', function(ev) {
        var t = ev.target;
        if (t.tagName === 'LI') {
            if (t.classList.contains('done')) {
            t.parentNode.removeChild(t);
        } else {  
            t.classList.add('done');
        }
            storeState();
        };
        
        ev.preventDefault();
    }, false);

    document.addEventListener('DOMContentLoaded', retrieveState, false);
  
    function storeState() {
        localStorage.todolist = todo.innerHTML;
    };

    function retrieveState() {
        if (localStorage.todolist) {
            todo.innerHTML = localStorage.todolist;
        }
    };
})();
