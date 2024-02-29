document.addEventListener('DOMContentLoaded', function(){

    var readMoreButton = document.getElementById('readmore');
    
    readMoreButton.addEventListener('click', function(){

        var readMoreRows = document.querySelectorAll('.readMoreRows');

        readMoreRows.forEach(function(row){
            if(row.style.display == 'none')
            {
                row.style.display = 'flex';
            }
            else
            {
                row.style.display = 'none';
            }
        });
    });
});

function searchBox(){
    var searchBox = document.getElementById("search");
    searchBox.classList.toggle("hidden");
}

function newsPage(){
    window.location.href = 'news.html';
}
