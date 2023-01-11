import axios from "axios";
const state = {
  profileData:{},
  tweets: [],
  id: "",
  email: "",
  image: "",
  name:"",
  handle:"",
  whoToFollow:[],
  noOfFollowers: "",
  noOfFollowing: "",
  myTweets:[],
  followings: [],
  followers: [],
  trends: [
    {
      top: "Technology.Live",
      title: "#MATIC",
      bottom: "12.7k Tweets",
    },
    {
      top: "Business & finance. Trending",
      title: "#RBLbank",
      bottom: "1.3k Tweets ",
    },
    {
      top: "Technology.Live",
      title: "#MATIC",
      bottom: "12.7k Tweets",
    },
    {
      top: "Business & finance. Trending",
      title: "#RBLbank",
      bottom: "1.3k Tweets ",
    },
    {
      top: "Technology.Live",
      title: "#MATIC",
      bottom: "12.7k Tweets",
    },
    {
      top: "Business & finance. Trending",
      title: "#RBLbank",
      bottom: "1.3k Tweets ",
    },
  ]
};
const getters = {
  profileData:state=>state.profileData,
  tweets: state => state.tweets,
  id: state => state.id,
  email: state => state.email,
  name: state => state.name,
  image: state => state.image,
  handle: state => state.handle,
  whoToFollow:state=>state.whoToFollow,
  trends:state=>state.trends,
  noOfFollowers:state=>state.noOfFollowers,
  noOfFollowing:state=>state.noOfFollowing,
  myTweets:state=>state.myTweets,
  followings:state=>state.followings,
  followers:state=>state.followers
};
const actions = {
  async getTweets({commit}) {
    const user = await JSON.parse(localStorage.getItem("userDetails"));
    const id = user[0].id;
    const allTweets = await axios.get(`/userData/homepageTweets?id=${id}`);
    commit("getTweets", allTweets.data);
  },
  async user({commit}) {
    const user = await JSON.parse(localStorage.getItem("userDetails"));
    commit("user", user);
  },
  async addNewTweet(myTweet) {
    const user = await JSON.parse(localStorage.getItem("userDetails"));
    const id = user[0].id;
    if (myTweet == "") {
      return;
    }
    const myTweets = await axios.post(`/userData/tweet?id=${id}`, {
      tweet: myTweet,
    });
    console.log(myTweets.data, "My tweets");
  },
  async getWhoToFollowData({commit}) {
    const user = await JSON.parse(localStorage.getItem("userDetails"));
   const id=user[0].id
   const peopleToFollow = await axios.get(`/userData/whoToFollow?id=${id}`);
   commit("getWhoToFollowData", peopleToFollow.data);
 },
 async countFollowers({commit},id) {
      
  const request = await axios.get(`/userData/userFollowers?id=${id}`);

  commit("countFollowers", request);
},
async countFollowing({commit},id) {
  const request = await axios.get(`/userData/userFollowings?id=${id}`);
  commit("countFollowing", request);
},
async getMyTweets({commit},id){
  const tweets = await axios.get(`/userData/mytweets?id=${id}`);
    console.log(tweets, "My tweets");
    commit("getMyTweets", tweets.data);

},
async getAllFollowings({commit},id) {
  const followings = await axios.get(`/userData/userFollowings?id=${id}`);
  commit("getAllFollowings", followings.data);
},
async getAllFollowers({commit},id) {
  const followers = await axios.get(`/userData/userFollowers?id=${id}`);
  commit("getAllFollowers", followers.data);
},
async details({commit}){
  const user = await JSON.parse(localStorage.getItem("userDetails"));
    const email=user[0].email
    const Profile = await axios.get(`/userData/me?email=${email}`);
    commit("details", Profile.data[0]);
}



};
const mutations = {
  getTweets(state, allTweets) {
    state.tweets = allTweets;
  },
  user(state, user) {
    state.email = user[0].email;
    state.id = user[0].id;
    state.image = user[0].image;
    state.handle = user[0].handle;
    state.name = user[0].name;
  },
  getWhoToFollowData(state,data){
    state.whoToFollow=data

  },
  countFollowers(state,result){
    state.noOfFollowers=result['data'].length
  },
  countFollowing(state,result){
    state.noOfFollowing=result['data'].length

  },
  getMyTweets(state, allTweets){
    state.myTweets = allTweets

  },
  getAllFollowings(state,result){
    state.followings=result

  },
  getAllFollowers(state,result){
    state.followers=result
  },
  details(state,result){
    state.profileData=result
  }


};
export default {
  state,
  getters,
  actions,
  mutations,
};
