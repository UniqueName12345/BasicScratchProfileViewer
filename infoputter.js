function turnJSONIntoHTML(json) {
    $('#about').html(json.status);
    $('#wiwo').html(json.bio);
}
