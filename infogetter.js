function getInfo(username) {
    // gets the information (like the PFP, about me and WIWO) from the scratch API
    return $.getJSON(`https://api.scratch.mit.edu/users/${username}`);
}

function getUsernameFromUsernameField() {
    return $('#usernameInput').val();
}

function useUsernameToGetInfo(username) {
    return getInfo(username);
}