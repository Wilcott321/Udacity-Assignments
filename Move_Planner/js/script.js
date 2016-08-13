
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

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
