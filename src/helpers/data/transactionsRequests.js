import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getRequest = uid => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/transactions.json?orderBy="uid"&equalTo="${uid}"`)
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

const postRequest = payment => axios.post(`${firebaseUrl}/transactions.json`, payment);

export default {
  getRequest,
  postRequest,
};