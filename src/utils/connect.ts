import mongoose from "mongoose";
import config  from 'config';
import logger from './logger';

 function connect() {
    const dbUri = config.get<string>("dbUri");
    try {
         mongoose.connect(dbUri)
        mongoose.set('strictQuery', false);
        logger.info("Connect to DB...");
        
    } catch(err) {
        logger.error("Couldn't connect to db", err);
        process.exit(1);
    }
}

export default connect;