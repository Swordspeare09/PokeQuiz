var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
        "x-rapidapi-key": "api-page-endpoints_form-param_mashape-key_default"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});