import userJson from './users.js'
let users = userJson;
const userController = (app) => {
    app.get('/api/users',findAllUsers);
    app.get('/api/users/:id',findUserById);
    app.post('/api/users',createUser);
    app.delete('/api/users/:id',deleteUser);
    app.put('/api/users/:id',updateUser);
}

const findAllUsers = (req,res) => {
    const type = req.query.type;
    if(type) {
        res.json(users.filter(user => user.type === type));
        return;
    }

    res.json(users);
}
const findUserById = (req,res) => {
    const userId = req.params.id;
    const user = users.find(u => u._id === userId);
    res.json(user);
}
const createUser = (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    newUser._id = new Date().getTime() + "";
    users.push(newUser);
    res.json(newUser);
}
const deleteUser = (req, res) => {
    const userId = req.params.id;
    users = users.filter((user) => user._id !== userId);
    res.sendStatus(200);
}
const updateUser = (req,res) => {
    const updatedUser = req.body;
    users = users.map(user => {
        if(user._id === updatedUser._id) return updatedUser;
        else return user;
    });
    res.sendStatus(200);
}

export default userController;