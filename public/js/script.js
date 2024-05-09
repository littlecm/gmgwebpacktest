document.addEventListener('DOMContentLoaded', function() {
    // Fetch the HTML from 'corvettetest.html'
    fetch('path_to/corvettetest.html')
        .then(response => response.text())
        .then(html => {
            // Assume the div with the ID 'target-div-id' is the place where you want to inject the HTML
            const targetDiv = document.getElementById('target-div-id');
            if (targetDiv) {
                targetDiv.innerHTML = html;
            }
        })
        .catch(error => console.error('Failed to load HTML content: ', error));
});
