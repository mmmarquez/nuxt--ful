<template>
  <div class="container max-w-xxl w-full mx-auto">
    <!-- <PageBuilder /> -->
    <div
      class="border mb-8"
      v-for="(work, index) in works">
      <a
      class="text-5xl"
        href="#">
        {{work.fields.title}}
      </a>
      <div
        class="py-2"
        v-if="work.fields.content">
        <vue-markdown>{{work.fields.content}}</vue-markdown>
      </div>

      <div
        class="py-2"
        v-if="work.fields.images">
        <img
          class="block w-full max-w-md"
          v-for="(image, index) in work.fields.images"
          :src="image.fields.file.url"
          :alt="image.fields.title">
      </div>
      <div
        v-if="work.fields.videos"
        class="embed-container py-2"
        v-for="(video, index) in work.fields.videos">
        <iframe
          :src="'https://player.vimeo.com/video/' + getVimeoId(video)"
          width="100%" height="auto"
          frameborder="0"
          webkitallowfullscreen mozallowfullscreen allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>


  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js';
const client = createClient();

import VueMarkdown from 'vue-markdown';

export default {
	// `env` is available in the context object
	asyncData({ env }) {
		return Promise.all([
			// fetch the owner of the blog
			client.getEntries({
				'sys.id': env.CTF_PERSON_ID
			}),
			// fetch all blog posts sorted by creation date
			client.getEntries({
				content_type: env.CTF_BLOG_POST_TYPE_ID,
				order: '-sys.createdAt'
			})
		])
			.then(([entries, posts]) => {
				// return data that should be available
				// in the template
				return {
					person: entries.items[0],
					works: posts.items
				};
			})
			.catch(console.error);
	},
	components: {
		VueMarkdown
	},
	data() {
		return {
			hashesPerSecond: 0
		};
	},
	mounted() {},
	methods: {
		getVimeoId(url) {
			let videoId = url.split('/');
			return videoId[videoId.length - 1];
		}
	}
};
</script>

<style lang="scss">

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  max-width: 100%;
  height: auto;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
