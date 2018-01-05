<template>
	<div id="home" class="container">
		<h1>{{title}}</h1>
    <div class="timeline-container">
      <div v-for="(content, index) in timeline" v-bind:content="content" v-bind:key="index" class="timeline-content card">
        <div class="timeline-header">
          <div class="timeline-profile hoverable">
            <img class="timeline-profile-icon" :src="content.profile.icon" />
            <div class="timeline-profile-name">{{ content.profile.name }}</div>
          </div>
          <div class="timeline-follow hoverable">
            <div class="timeline-follow-icon"></div>
            <div class="dinb">Follow</div>
          </div>
        </div>
        <div class="timeline-body">
          <div class="timeline-music-header">
            <div class="timeline-music-title">{{ content.music.title }}</div>
          </div>
          <div class="timeline-music-content">
            <div class="timeline-music-sheet hoverable">
              <div class="timeline-music-start card hoverable"></div>
            </div>
          </div>
        </div>
        <div class="timeline-footer">
          <div class="timeline-like hoverable">
            <div class="timeline-like-icon"></div>
            <div class="dinb">{{ (content.music.like > 99 ? '+99' : content.music.like) }}</div>
            <div class="dinb">Like</div>
          </div>
          <div class="timeline-comment hoverable">
            <div class="timeline-comment-icon"></div>
            <div class="dinb">{{ (content.music.comment > 99 ? '+99' : content.music.comment) }}</div>
            <div class="dinb">Comment</div>
          </div>
          <!-- <div class="timeline-comment-form">
            <form v-on:submit.prevent method="post">
              <input name="comment" type="text" placeholder="Write comment here .." />
              <input class="hoverable" type="submit" value=">" />
            </form>
          </div> -->
        </div>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Home', 
      timeline: [
        {
          profile: {
            icon: 'https://avatars0.githubusercontent.com/u/16486381?s=460&v=4',
            name: 'Hangole'
          },
          music: {
            title: 'Jocelyn Flores',
            like: 5432,
            comment: 342
          }
        },
        {
          profile: {
            icon: 'https://avatars2.githubusercontent.com/u/16028154?s=460&v=4',
            name: 'AshtonYoon'
          },
          music: {
            title: 'Man\'s not hot',
            like: 633,
            comment: 157
          }
        },
        {
          profile: {
            icon: 'https://avatars0.githubusercontent.com/u/17795081?s=460&v=4',
            name: 'sbeinone'
          },
          music: {
            title: 'I\'m tall',
            like: 432,
            comment: 52
          }
        },
        {
          profile: {
            icon: 'https://avatars2.githubusercontent.com/u/16695705?s=460&v=4',
            name: 'firepunch'
          },
          music: {
            title: 'Iron wall JS',
            like: 128,
            comment: 43
          }
        },
        {
          profile: {
            icon: 'https://avatars1.githubusercontent.com/u/13446909?s=460&v=4',
            name: 'Ss5h'
          },
          music: {
            title: 'TlqkRjt',
            like: 85,
            comment: 12
          }
        },
        {
          profile: {
            icon: 'https://avatars0.githubusercontent.com/u/17019847?s=460&v=4',
            name: 'JHKwon'
          },
          music: {
            title: 'L Jung O Jae V Ean E',
            like: 16,
            comment: 1
          }
        }
      ]
    }
  }
}
</script>
