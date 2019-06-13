import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/transactions.json`)
    .then((res) => {
      const transactions = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          transactions.push(res.data[key]);
        });
      }
      resolve(transactions);
    })
    .catch(err => reject(err));
});

export default {
  getRequest,
};