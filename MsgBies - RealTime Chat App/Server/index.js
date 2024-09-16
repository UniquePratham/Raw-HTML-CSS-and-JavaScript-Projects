// Node Server which will handle Socket.io Connections
const io = require('socket.io')(8000)
const users = {};
const genders = {};
io.on('connection', socket => {
    // Genders Decide
    socket.on('genderDecide', finalGender => {
        // console.log("User gender is ", finalGender);
        genders[socket.id] = finalGender;
        // socket.broadcast.emit('showGender', finalGender);
    });
    socket.on('newuserJoined', Name => {
        // console.log("New User", Name);
        users[socket.id] = Name;
        // console.log(genders[socket.id]);
        socket.broadcast.emit('userJoined', { Name: Name, finalgender: genders[socket.id] });
    });
    socket.on('messageSend', Message => {
        socket.broadcast.emit('messageReceived', { Message: Message, Name: users[socket.id] });
    });
    socket.on('disconnect', Name => {
        socket.broadcast.emit('lefttheChat', { Name: users[socket.id], Gender: genders[socket.id] });
        delete users[socket.id];
        delete genders[socket.id];
    });
})