
const startLogger = (inputSelector, inputType = 'id', callback) => {
    let inputElement;

    switch (inputType) {
        case 'id':
            inputElement = document.querySelector('#' + inputSelector);
            break;
        case 'class':
            inputElement = document.querySelector('.' + inputSelector);
            break;

        default:
            throw new Error('Incorrect input type. Please enter either an ID or a class.');
    }

    if (inputElement) {
        let currentText = '';
        let wordArray = [];

        inputElement.addEventListener('input', (event) => {
            const newText = event.target.value;
            if (event.inputType === 'insertText' && event.data === ' ' && newText.trim() !== '') {
                wordArray.push(newText.trim());
                event.target.value = '';

                if (typeof callback == 'function') {
                    callback(wordArray);
                }
            }
            currentText = newText;
        });

        inputElement.addEventListener('blur', () => {
            if (currentText.trim() !== '') {
                wordArray.push(currentText.trim());
                inputElement.value = '';

                if (typeof callback === 'function') {
                    callback(wordArray);
                }
            }
        });

        inputElement.addEventListener('keypress', (event) => {
            if (event.key === 'Enter' && currentText.trim() !== '') {
                wordArray.push(currentText.trim());
                inputElement.value = '';

                if (typeof callback === 'function') {
                    callback(wordArray);
                }
            }
        });
    }
};


 
const updateTextArea = (arr) => {
    const textArea = document.querySelector('#logTextarea');
    textArea.value = arr.join('\n');
    textArea.style.height = '5em';
};




startLogger('myInput', 'id', (data) => {
    updateTextArea(data);
});