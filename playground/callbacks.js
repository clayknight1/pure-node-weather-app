var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Clay'
    };
    setTimeout(() => {
        callback(user)
    }, 3000);
};

getUser(31, (user) => {
    console.log(user);
});