// All code goes within this function
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    /* To load streetview in the background, create variables that grab
    the street and city from the form and assign them the input ids for
    street and city. Then create a variable for the address by combining the
    street and city variables. Remember, there should be a comma between
    the street and city in the address. */
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    /* Create a greeting object and assign it a string with a greeting plus
    the address the user has entered in the form. You can do so by using your
    address object with .text() method */
    $greeting.text('So, you want to live at ' + address + '?');

    /* Create a variable for the streetview map url. Use the Google Streetview API,
    and add the address object at the end. Then append the url to <body> element by
    using the .append() method and adding the url variable at the end*/
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    /*Create a NYTimes API ajax request. Use the $getJSON() method
    and use the docs from the jQuery ajax webpage for how to create
    a success handler function.
    Notes: You will need an API key from developer.nytimes.com.
    A counter was created to iterate through the responses and post the article
    within the <li> list.
    For error-handling, chain a .error() method to the end of the request with
    a message that is presented to users if articles can't be loaded. */
    var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=newest&api-key=abb9d7371d9b42dbb45de3ad6087274b'
    $.getJSON(nytimesUrl, function(data){
        $nytHeaderElem.text('New York Times Articles About ' + cityStr);
        articles = data.response.docs;
        for(var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $nytElem.append('<li class="article">' + '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
                '<p>' + article.snippet + '</p>'+'</li>');
        };
    }).error(function(e){
        $nytHeaderElem.text('Sorry, New York Times articles could not be loaded. Please check the API key');
    });

    return false;
};

// Calls the function and places it in the form container
$('#form-container').submit(loadData);
