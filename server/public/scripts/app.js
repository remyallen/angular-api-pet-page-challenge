$(document).ready(function() {
    petFinder();
});

function petFinder() {
    // API Key
    var key = 'ca1607e0f626bb23c9566c746a9bfa27';

    var baseURL = 'http://api.petfinder.com/';
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=dog';
    query += '&output=basic';
    query += '&format=json';
    query += '&callback=?';

    var request = baseURL + query;
    console.log(request);

    $.ajax({
        type: "GET",
        url: encodeURI(request),
        dataType: "jsonp",
        crossDomain: true,
        //jsonp: 'json_callback',
        success: function(data) {
            console.log(data.petfinder.pet);
        }
    });
}


function gameSearch() {
    var apikey = "ca1607e0f626bb23c9566c746a9bfa27";
    var baseUrl = "http://www.giantbomb.com/api";

    // construct our URL
    var gameSearchURL = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&limit=50';
    var query = 'Batman & Robin';

    var q = gameSearchURL + '&query=' + encodeURI(query);
    console.log(q);

    $.ajax({
        type: "GET",
        url: gameSearchURL + '&query=' + encodeURI(query),
        dataType: "jsonp",
        crossDomain: true,
        jsonp: 'json_callback',
        success: function(data) {
            console.log(data);
        }
    });

}

function searchCallback(data) {
    console.log(data);
}