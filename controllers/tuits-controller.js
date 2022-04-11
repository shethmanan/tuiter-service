import * as tuitsDao from "../database/tuits/tuits-dao.js"



const createTuit = async (req, res) => {
    let newTuit = req.body;
    newTuit = addDefaultValuesToTuit(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}
const addDefaultValuesToTuit = (newTuit) => {
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

const findAllTuits = async (req, res) => {
    const tuitList = await tuitsDao.findAllTuits();
    tuitList.reverse();
    res.json(tuitList);
}

const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitIdToUpdate,updatedTuit);
    console.log(updatedTuit);
    // tuits = tuits.map(t => t._id === tuitIdToUpdate ? updatedTuit : t);
    res.send(status);
}
const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    res.send(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}