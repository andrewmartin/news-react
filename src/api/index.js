import axios from 'axios';

class Fetch {
  constructor() {
    this.api = axios.create();
    this.api.defaults.baseURL = process.env.REACT_APP_API_ROOT;
    this.api.defaults.params = {};
    this.api.defaults.params.apiKey = process.env.REACT_APP_API_KEY;
  }
}

export default new Fetch();
