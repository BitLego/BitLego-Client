<template>
  <div id="mypage" class="container">
    <h1>{{title}}</h1>
    <div class="content">
      <button v-on:click="setProfile">set profile photo</button>
      <img src="" alt="">
      <button v-on:click="getFollowers">{{data.followersTotal}}followers</button>
      <!-- Modal로 ? -->
      <p>{{data.followers}}</p>
      <button v-on:click="getFollowing">{{data.followingTotal}}following</button>
      <p>{{data.following}}</p>

      <button v-on:click="getMyBit">my biy</button>
      <p>{{data.myBit}}</p>
      <button v-on:click="getLikeBit">like</button>
      <p>{{data.likeBit}}</p>
      <button v-on:click="getShareBit">share</button>
      <p>{{data.shareBit}}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'MyPage',
    data() {
      return {
        title: 'My Page',
        data: {
          followersTotal: 0,
          followingTotal: 0,
          followers: [],
          following: [],
          myBit: [],
          likeBit: [],
          shareBit: []
        }
      }
    },
    beforeCreate() {
      const nickname = localStorage.getItem('nick') || sessionStorage.getItem('nick')

      axios.get(`http://virtual.silnex.kr:9949/follow/follow_count/${nickname}`)
        .then(response => {
          this.followersTotal = response.data
        })
        .catch(function (err) {
          console.log('mypage error: ' + err)
        })
      axios.get(`http://virtual.silnex.kr:9949/follow/follower_count/${nickname}`)
        .then(response => {
          this.followersTotal = response.data
        })
        .catch(function (err) {
          console.log('mypage error: ' + err)
        })
    },
    methods: {
      setProfile(e) {
        return axios({
          method: 'post',
          url: `http://virtual.silnex.kr:9949/user/profile`,
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          params: {
            session: 'session',
            file: 'url?'
          }
        }).then(response => {
          this.followers = response.data
        }).catch(err => {
          console.log('mypage error: ' + err)
        })
      },
      getFollowers(e) {
        const nickname = localStorage.getItem('nick') || sessionStorage.getItem('nick')
        axios.get(`http://virtual.silnex.kr:9949/follow/follow/${nickname}`)
          .then(response => {
            this.followers = response.data
          })
          .catch(e => {
            console.log('mypage error: ' + e)
          })
      },
      getFollowing(e) {
        const nickname = localStorage.getItem('nick') || sessionStorage.getItem('nick')
        axios.get(`http://virtual.silnex.kr:9949/follow/follower/${nickname}`)
          .then(response => {
            this.following = response.data
          })
          .catch(e => {
            console.log('mypage error: ' + e)
          })
      },
      getMyBit(e) {
        const nickname = localStorage.getItem('nick') || sessionStorage.getItem('nick')
        axios.get(`http://virtual.silnex.kr:9949/follow/follower/${nickname}`)
          .then(response => {
            this.myBit = response.data
          })
          .catch(e => {
            console.log('mypage error: ' + e)
          })
      },
      getLikeBit(e) {
        const nickname = localStorage.getItem('nick') || sessionStorage.getItem('nick')
        axios.get(`http://virtual.silnex.kr:9949/follow/follower/${nickname}`)
          .then(response => {
            this.likeBit = response.data
          })
          .catch(e => {
            console.log('mypage error: ' + e)
          })
      },
      getShareBit(e) {
        const nickname = localStorage.getItem('nick') || sessionStorage.getItem('nick')
        axios.get(`http://virtual.silnex.kr:9949/follow/follower/${nickname}`)
          .then(response => {
            this.shareBit = response.data
          })
          .catch(e => {
            console.log('mypage error: ' + e)
          })
      },
    }
  }
</script>
