const notepad = document.getElementById('noteInput');
        const addButton = document.getElementById('addNote');
        const deleteButton = document.getElementById('DeleteNote');

        // Load saved text from localStorage when the page loads
        noteInput.value = localStorage.getItem('savedText') || '';

        // Save text to localStorage when the Save button is clicked
        addButton.addEventListener('click', () => {
            const textToSave = noteInput.value;
            localStorage.setItem('savedText', textToSave);
        });

        // Clear the notepad and remove saved text from localStorage when the Clear button is clicked
        deleteButton.addEventListener('click', () => {
            noteInput.value = '';
            localStorage.removeItem('savedText');
        });