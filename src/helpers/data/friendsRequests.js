import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/friends.json`)
    .then((res) => {
      const friends = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          friends.push(res.data[key]);
        });
      }
      resolve(friends);
    })
    .catch(err => reject(err));
});

const deleteFriends = friendId => axios.delete(`${firebaseUrl}/friends/${friendId}.json`);
const postRequest = friend => axios.post(`${firebaseUrl}/friends.json`, friend);


export default {
  getRequest,
  deleteFriends,
  postRequest
};
