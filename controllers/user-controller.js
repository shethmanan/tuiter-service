import users from './users.js'
const userController = (app) => {
    app.get('/api/users',findAllUsers);
    app.get('/api/users/:id',findUserById);
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
export default userController;