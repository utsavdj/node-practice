const express = require('express');
const fs = require('fs');
const fsPromises = require('fs').promises;
const datafile = 'server/data/clothing.json';
const router = express.Router();

/* GET all clothing */
router.route('/')
  .get(async function(req, res) {

    // getClothingData()
    // .then(data => {
    //   console.log('Returning clothing data');
    //   res.send(data);
    // })
    // .catch(err => res.sendStatus(500))
    // .finally(() => console.log('All done processing promise.'));

    try{
      const data =  await getClothingData();
      console.log('Returning clothing data');
      res.send(data);
    } catch(err){
      res.status(500).send(err);
    }

    console.log('Doing more work');
  });

  async function getClothingData(){
    // let clothingPromise = fsPromises.readFile(datafile, {encoding:'utf8'})
    // .then(data => JSON.parse(data));
    // console.log(clothingPromise);
    let rawData = await fsPromises.readFile(datafile, {encoding:'utf8'});
    let clothingData = JSON.parse(rawData);

    console.log(clothingData);

    return clothingData;
    // return new Promise((resolve, reject) =>{
    //   fs.readFile(datafile, {encoding:'utf8'}, (err, data) => {
    //     if(err){
    //       reject(err);
    //       return;
    //     }
    //     const clothingData = JSON.parse(data);
    //     resolve(clothingData);
    //   });
    // })
  }


module.exports = router;
