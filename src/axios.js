import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3200/'
axios.defaults.headers.common['token'] = localStorage.getItem('token')