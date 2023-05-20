var sindex = 0;
var cycle = false;
var sengine = "https://www.google.com/search?q="; // Default search engine

function start() {
    var query = getParameterByName('q');
    if (query) search(query.replaceAll("+", "%2B"));

    document.getElementById('keywords').focus();

    window.setInterval(function () {
        updatetime();
    }, 200);
}

function handleKeyPress(e) {
    var key = e.keyCode || e.which;
    var text = document.getElementById("keywords").value.replaceAll("+", "%2B");
    var option = text.substr(1, text.indexOf(' ') - 1) || text.substr(1);
    var subtext = text.substr(2 + option.length);
    if (key == 13) { // Search functions
        search(text);
    }
    if (key == 9) { // Tab Completion Functions
        e.preventDefault();
        e.stopPropagation();
        if (text[0] === ';') {
            switch (option) {
                case 't':
                    var streamers = ['admiralbahroo', 'moonmoon_ow', 'witwix'];
                    if (!subtext || cycle) {
                        cycle = true;
                        if (sindex > streamers.length - 1) sindex = 0;
                        document.getElementById("keywords").value = ';t ' + streamers[sindex++];
                        return;
                    }
                    for (var streamer of streamers) {
                        if (subtext === streamer.substr(0, subtext.length)) {
                            document.getElementById("keywords").value = ';t ' + streamer;
                            return;
                        }
                    }
                    break;
            }
        }
    }
    if(key == 32){ //Space to go to search
        document.getElementById("keywords").focus();
    }
    sindex = 0;
    cycle = false;
}

function search(text) {
    var option = text.substr(1, text.indexOf(' ') - 1) || text.substr(1);
    var subtext = text.substr(2 + option.length);
    if (text[0] === '/') {
        if (text.indexOf(' ') > -1) {
            switch (option) {
                case "g":
                    window.location = "https://www.google.com/search?q=" + subtext;
                    break;
                case "bd":
                    window.location = "https://www.baidu.com/s?wd=" + subtext;
                    break;
                case "bi":
                    window.location = "https://www.bing.com/search?q=" + subtext;
                    break;
                case "gh":
                    window.location = "https://github.com/search?q=" + subtext;
                    break;
                case "y":
                    window.location = "https://www.youtube.com/results?search_query=" + subtext;
                    break;
            }
        } else {
            var option = text.substr(1);
            switch (option) {
                case "g":
                    window.location = "https://www.google.com";
                    break;
                case "bd":
                    window.location = "https://www.baidu.com";
                    break;
                case "bi":
                    window.location = "https://www.bing.com";
                    break;
                case "gh":
                    window.location = "https://github.com/";y
                    break;
                case "y":
                    window.location = "https://www.youtube.com";
                    break;
            }
        }
    } 
    // else if (validURL(text)) {
    //     if (containsProtocol(text))
    //         window.location = text;
    //     else
    //         window.location = "http://" + text;
    // } 
    else {
        window.location = sengine + text;
    }
}

// Source: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

function containsProtocol(str) {
    var pattern = new RegExp('^(https?:\\/\\/){1}.*', 'i');
    return !!pattern.test(str);
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
