document.addEventListener('DOMContentLoaded', function() {
    const reportButton = document.getElementById('report-button');
    const reportForm = document.getElementById('report-form');
    const reportList = document.getElementById('report-list');

    reportButton.addEventListener('click', function() {
        reportForm.classList.toggle('hidden');
    });

    reportForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const reportInput = document.getElementById('report-input');
        const reportText = reportInput.value;

        if (reportText) {
            const listItem = document.createElement('li');
            listItem.textContent = reportText;
            reportList.appendChild(listItem);
            reportInput.value = '';
            reportForm.classList.add('hidden');
        }
    });
});