import tuitList from "./tuits.js";

let tuits = tuitList;

const createTuit = (req, res) => {
    let newTuit = req.body;
    newTuit = addDefaultValuesToTuit(newTuit);
    tuits = [newTuit,...tuits];
    res.json(newTuit);
}
const addDefaultValuesToTuit = (newTuit) => {
    newTuit._id = (new Date()).getTime() + '';
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.topic = "New";
    newTuit.handle = "ReactJS";
    newTuit.time = "now";
    newTuit.postedBy = {
        username: "ReactJS"
    };
    newTuit.stats = {
        comments: 0,
        retuits: 0,
        likes: 0,
        dislikes: 0
    };
    newTuit['logo-image']= "../tuiter/images/react.png";
    newTuit['avatar-image']= "../tuiter/images/react.png";
    return newTuit;
}
const findAllTuits = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}
const deleteTuit = (req, res) => {
    const tuitIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}