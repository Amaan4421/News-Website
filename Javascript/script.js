document.addEventListener('DOMContentLoaded', function() {

    var form = document.getElementById('form');

    form.addEventListener('submit', function(event) {

        event.preventDefault();
        showSuccessDialog();
    });

    function showSuccessDialog() {

        var modal = document.getElementById('alertbox');

        modal.style.display = 'block';

        var backButton = document.getElementById('backToHome');
        backButton.addEventListener('click', function() {
            
            window.location.href = 'index.html';
        });
    }
});
