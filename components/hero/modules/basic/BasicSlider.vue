<template>
  <span id="basic-slider" class="max-w-sm">
    <span class="block md:inline-block max-w-xs sm:max-w-2xl md:max-w-xl bg-grey-light sm:bg-transparent">
      <span
        class="sm:bg-grey-light font-alt text-5axl md:text-xxl leading-tigth pr-4 pl-0 md:pl-4"
        v-for="(slide, index) in textSlides"
        v-if="index === slideCounter"
        :key="index"
        >
        {{slide.slide}}
      </span>
    </span>
  </span>
</template>
<script>
export default {
	name: 'basic-slider',
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
			}, 1800);
		}
	}
};
</script>
<style lang="scss" scoped>
.list-enter-active, .list-leave-active {
  transition: all 0.25s ease;
  // position: absolute;
  transform: translateY(0px);
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  // position: absolute;
  // transform: translateY(0px);

}
.list-complete-leave-active {
  // position: absolute;
}

._slider {
  left: 0rem;
}

@media (min-width: 768px) {
  ._slider {
    left: 1.6rem;
  }

}

</style>
