const express = require('express');
const fs = require('fs');
const datafile = 'server/data/clothing.json';
const router = express.Router();

/* GET all clothing */
router.route('/')
  .get(function(req, res) {

    // let rawData = fs.readFileSync(datafile, 'utf8');
    // let clothingData = JSON.parse(rawData);
    // console.log('Returning clothing data');
    // res.send(clothingData);

    //--------------------------

    // fs.readFile(datafile, {encoding:'utf8'}, (err, data) => {
    //   if(err){
    //     console.log(err);
    //   }
    //   const clothingData = JSON.parse(data);
    //   console.log('Returning clothing data');
    //   res.send(clothingData);
    // });
    
    // const clothingData = getClothingData();
    // console.log('Returning clothing data');
    // res.send(clothingData);

    getClothingData((err, data) => {
      if(err){
        console.log(err);
      }
      console.log('Returning clothing data');
      res.send(data);
    });

    console.log('Doing more work');
  });

  // function getClothingData(){
  //   fs.readFile(datafile, {encoding:'utf8'}, (err, data) => {
  //     if(err){
  //       console.log(err);
  //     }
  //     const clothingData = JSON.parse(data);
  //     return clothingData;
  //   });
  // }

  function getClothingData(callback){
    fs.readFile(datafile, {encoding:'utf8'}, (err, data) => {
      if(err){
        callback(err, null);
      }
      const clothingData = JSON.parse(data);
      callback(null, clothingData);
    });
  }


module.exports = router;
