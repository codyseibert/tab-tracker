<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>

        <v-btn
          dark
          class="cyan"
          :to="{
            name: 'song-edit', 
            params () {
              return {
                songId: song.id
              }
            }
          }">
          Edit
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark
          class="cyan"
          @click="setAsBookmark">
          Set As Bookmark
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          class="cyan"
          @click="unsetAsBookmark">
          Unset Bookmark
        </v-btn>
      </v-flex>

      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: false
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  watch: {
    async song (value) {
      if (!this.isUserLoggedIn) {
        return
      }

      try {
        const query = {
          songId: this.song.id,
          userId: this.$store.state.user.id
        }
        this.bookmark = (await BookmarksService.index(query)).data
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        const bookmark = {
          songId: this.song.id,
          userId: this.$store.state.user.id
        }
        this.bookmark = (await BookmarksService.post(bookmark)).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
