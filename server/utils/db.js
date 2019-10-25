import mongoose from 'mongoose';
import * as config from '../config';

function connect() {
  mongoose.connect(config.DB, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('mongodb connected success!!');
  });
}

export {
  connect,
};
