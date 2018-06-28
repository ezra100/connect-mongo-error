import {resolve} from 'dns';
// import the mongoose module
import * as mongoose from 'mongoose';



let ObjectId = mongoose.Schema.Types.ObjectId;

// set up default mongoose connection
var connectionString: string = 'mongodb://127.0.0.1/shook';
mongoose.connect(connectionString);

// get the default connection
export var mongoConnection: mongoose.Connection = mongoose.connection;