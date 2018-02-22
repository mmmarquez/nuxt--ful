<template>
  <div id="top-footer" class="block w-full relative overflow-hidden">
    <video loop autoplay muted class="absolute z-0 h-full lg:h-auto w-auto lg:w-full">
      <source src="./media/videos/footer_sample.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="py-40 relative z-10 element">
      <div id="footer-content" class="max-w-90 md:max-w-full md:ml-side mx-auto">
          <h2 class="text-white text-60p inline-block font-heading pb-6 leading-none tracking-content max-w-sm">
            Want to work together?
          </h2>
          <p class="text-white text-large font-base leading-normal tracking-content pb-6 max-w-xs">
            Let's start the conversation.
          </p>
          <button class="bg-yellow hover:bg-yellow-dark text-black text-lg font-heading leading-normal py-3 px-6">
            Get In Touch >
          </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	name: 'top-footer',
	data: () => ({}),
	mounted() {}
};
</script>
<style lang="scss" scoped>
  #top-footer {
    video {
      z-index: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }


    .element {
    	/*
    	 * Use the same CSS variable as specified in our instance.
    	 */
    	opacity: var(--opacity);
    	/*
    	 * The will-change CSS property provides a way for authors to hint browsers about the kind of changes
    	 * to be expected on an element, so that the browser can setup appropriate optimizations ahead of time
    	 * before the element is actually changed.
    	 */
    	will-change: opacity;
    }

  }
</style>
