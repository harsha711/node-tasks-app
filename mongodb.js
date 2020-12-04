// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error)
    {
        return console.log('Unable to connect the database');
    }
    const db = client.db(databaseName);
    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectID("5fc71f44fccabd1c189f9d12")
    }, {
        $set:{
            name: "Mike"
        }
    })

    updatePromise.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
});