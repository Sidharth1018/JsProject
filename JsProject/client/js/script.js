document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const countButton = document.getElementById('countButton');
    const wordCountResult = document.getElementById('wordCountResult');
    const historyList = document.getElementById('historyList');
  
    countButton.addEventListener('click', async () => {
      const url = urlInput.value;
      const response = await fetch('/api/wordcount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
  
      const data = await response.json();
      wordCountResult.innerText = `Word Count: ${data.wordCount}`;
      addToHistory(url, data.wordCount);
    });
  
    // Function to add to the history list
    function addToHistory(url, wordCount) {
      const listItem = document.createElement('li');
      listItem.textContent = `${url} - Word Count: ${wordCount}`;
      historyList.appendChild(listItem);
    }
  });
  