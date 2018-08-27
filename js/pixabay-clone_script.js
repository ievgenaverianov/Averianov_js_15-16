$(function() {
    var sSearchQuery;

    var $searchInput = $('.search-input');
    var $searchBtn = $('.search-button');
    var $searchIcon = $('.search-icon');


    $searchBtn.on('click', showSearchResults);
    $searchIcon.on('click', showSearchResults);
    $searchInput.keypress(function (e) {
        if (e.which === 13) {
            showSearchResults();
            return false;
        }
    });

    function showSearchResults() {
        $('.search-results').remove();
        sSearchQuery = $searchInput.val();
        var API_KEY = '9885853-109e50addfa62f210e0cfc907';
        var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(sSearchQuery)+"&per_page=40";
        if (sSearchQuery.length !== 0) {
            $('.wrapper').append('<div class="search-results"></div>');
            $.getJSON(URL, showPhotos);
            changeInputForm();
        } else {
            console.log('Query is empty')
        }
    }


    function showPhotos(data){
        if (parseInt(data.totalHits) > 0) {
            $.each(data.hits, function(i, hit){
                $('.search-results').append('<div class="item"><a href="' + hit.pageURL + '" target="_blank"><img src="' + hit.webformatURL + '"></a></div>');
            });
            // console.log(sSearchQuery);
        } else {
            $('.search-results').append('<p class="no-hits">No photos were found according to your search query</p>');
        }
    }
    
    function changeInputForm() {
        $('.logo').css({
            display: 'inline-block',
            margin: '10px',
            width: '120px',
            height: '40px',
            background: 'url("./img/sprites.png") no-repeat center',
            backgroundPosition: '4px 4px'
        });
        $('.input-wrap').css({
            display: 'flex',
            margin: '15px 15px'
        });
        $('.search-form').css({
            display: 'inline-flex'
        });
        $('.input-container').css({
            height: '35px',
            margin: '10px 0',
            padding: '5px 9px 0 40px'
        });
        $searchInput.css({
            height: '30px',
        });
        $searchBtn.css({
            display: 'none',
        });
        $searchIcon.css({
            width: '40px',
        });
    }

});
