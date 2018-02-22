<template>
  <div id="basic__hero" class="w-full min-h-s60 lg:min-h-s80 flex flex-row justify-center items-center content-center bg-white pb-8 pt-8">
    <BasicContent />
  </div>
</template>
<script>
import BasicContent from '@/components/hero/modules/basic/BasicContent';

export default {
	name: 'basic-hero',
	components: {
		BasicContent
	},
	data: () => ({
		currentSlide: '',
		slideCounter: 0,
		textSlides: [
			{
				slide: 'modern marketing.'
			},
			{
				slide: 'data-driven results.'
			},
			{
				slide: 'content creation.'
			},
			{
				slide: 'media buying.'
			},
			{
				slide: 'creative magic.'
			},
			{
				slide: ' your brand.'
			}
		]
	}),
	mounted() {
		this.textSlider();
	},
	methods: {
		textSlider() {
			//let's get the slider and the length of it.
			let slides = this.textSlides;
			let slidesLength = slides.length;
			this.slideCounter = 0;
			// this.currentSlide = slides[slideCounter].slide;
			setInterval(x => {
				if (this.slideCounter >= slidesLength - 1) {
					this.slideCounter = 0;
				}
				this.slideCounter = this.slideCounter + 1;
			}, 4000);
		}
	}
};
</script>
<style lang="scss" scoped>

</style>
