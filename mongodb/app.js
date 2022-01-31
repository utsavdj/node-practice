const MongoClient =  require('mongodb').MongoClient;
const assert = require('assert');
const circulationRepo = require('./repos/circulationRepo');
const data = require('./circulation.json');

const url = "mongodb://localhost:27017";
const dbName = "circulation";

async function main(){
    const client = new MongoClient(url);
    await client.connect();

    try{
        const results = await circulationRepo.loadData(data);
        assert.strictEqual(data.length, results.insertedCount);
        console.log(results.insertedCount, results.ops);

        const getData = await circulationRepo.get();
        assert.strictEqual(data.length, getData.length);

        const filterData = await circulationRepo.get({Newspaper: getData[4].Newspaper});
        assert.deepStrictEqual(filterData[0], getData[4]);

        const limitData = await circulationRepo.get({}, 3);
        assert.strictEqual(limitData.length, 3);

        const id = getData[4]._id.toString();
        const byId = await circulationRepo.getById(id);
        assert.deepStrictEqual(byId, getData[4]);

        const newItem = {
            "Newspaper": "My Paper",
            "Daily Circulation, 2004": 1,
            "Daily Circulation, 2013": 2,
            "Change in Daily Circulation, 2004-2013": 100,
            "Pulitzer Prize Winners and Finalists, 1990-2003": 0,
            "Pulitzer Prize Winners and Finalists, 2004-2014": 0,
            "Pulitzer Prize Winners and Finalists, 1990-2014": 0
        }
        const addedItem = await circulationRepo.add(newItem);
        assert(addedItem._id);
        const addedItemQuery = await circulationRepo.getById(addedItem._id.toString());
        assert.deepStrictEqual(addedItemQuery, newItem);

        const updateId = addedItem._id.toString();
        const updateItem = await circulationRepo.update(updateId, {
            "Newspaper": "My New Paper",
            "Daily Circulation, 2004": 1,
            "Daily Circulation, 2013": 2,
            "Change in Daily Circulation, 2004-2013": 100,
            "Pulitzer Prize Winners and Finalists, 1990-2003": 0,
            "Pulitzer Prize Winners and Finalists, 2004-2014": 0,
            "Pulitzer Prize Winners and Finalists, 1990-2014": 0
        });
        assert.strictEqual(updateItem.Newspaper, "My New Paper");
        const updatedItem = await circulationRepo.getById(updateId);
        assert.strictEqual(updatedItem.Newspaper, "My New Paper");

        const removeId = addedItem._id.toString();
        const removed = await circulationRepo.remove(removeId);
        assert(removed);
        const deletedItem = await circulationRepo.getById(removeId);
        assert.strictEqual(deletedItem, null);

        const avgFinalists = await circulationRepo.averageFinalists();
        console.log('Average Finalists:', avgFinalists);

        const avgFinalistsByChange = await circulationRepo.averageFinalistsByChange();
        console.log('Average Finalists By Change:', avgFinalistsByChange);
    } catch(err){
        console.log(err);
    }finally{
        const admin =  client.db(dbName).admin();
        // console.dir(await admin.serverStatus(), {depth: 0});
        console.log(await admin.listDatabases());

        client.db(dbName).dropDatabase();
        console.log(await admin.listDatabases());
        client.close();
    }
}

main();