const notepad = document.getElementById('noteInput');
        const addButton = document.getElementById('addNote');
        const deleteButton = document.getElementById('deleteNote');

        
        noteInput.value = localStorage.getItem('savedText') || '';

        
        addButton.addEventListener('click', () => {
            const textToSave = noteInput.value;
            localStorage.setItem('savedText', textToSave);
        });

        
        deleteButton.addEventListener('click', () => {
            noteInput.value = '';
            localStorage.removeItem('savedText');
        });
