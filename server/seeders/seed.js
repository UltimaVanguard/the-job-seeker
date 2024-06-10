const mongoose = require('mongoose');
const db = require('../config/connection');
//const { db } = require('../models/Job');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jobSeeker_db');
//db.once('open', async () => {

const start = async () => {
    const { User, Job } = require('../models');
    const userSeeds = require('./userSeeds.json');
    const companySeeds = require('./companySeeds.json');
    const cleanDB = require('./cleanDB');
  try {
   // db.dropCollection(User)
    //User.deleteMany({})
    
    
    await User.deleteOne(userSeeds);
    // await cleanDB('employerProfile', 'g');
    
    // await cleanDB('User', 'getUser');
    await User.create(userSeeds);


    for (let i = 0; i < companySeeds.length; i++) {
      const { _id, companyName } = await Job.create(companySeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: companyName },
        {
          $addToSet: {
            companies: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
}
//});

start()
