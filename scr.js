class Note {
    constructor(title, description) {
      this.title = title;
      this.description = description;
      this.date = new Date(); 
    }
  }
  
  function addNote() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    
    const note = new Note(title, description);
    
    const noteElement = document.createElement('li');
    noteElement.innerHTML = `<h3>${note.title}</h3><p>${note.description}</p><p><em>Создано: ${note.date.toLocaleString()}</em></p>`;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'Удалить';
    
    deleteButton.addEventListener('click', function() {
      noteElement.remove();
    });
    
    noteElement.appendChild(deleteButton);
    
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(noteElement);
    
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
  }