<template>
  <div id="basic-content" class="max-w-full md:ml-side block h-auto w-full">
      <h1 class="max-w-90 mx-auto md:max-w-full mb-16 sm:pr-28 md:mr-32 border">
          <span id="header-static" class="text-6xl md:text-xxl font-heading leading-tigth tracking-wide">The art and science
            <br>
            of
            <div class="mobile-title hidden md:inline-block"></div>
          </span>
          <BasicSlider />
        </h1>
      <div class="max-w-36 flex items-center">
        <div id="content-triangle" class="block inline-block mr-4 float-right">
          <svg width="18px" height="37px" viewBox="0 0 18 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Pages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="home_v1-copy-6" transform="translate(-95.000000, -513.000000)" fill="#FFF200">
                      <polygon id="Triangle-2" points="113 531.5 95 550 95 513"></polygon>
                  </g>
              </g>
          </svg>
        </div>
        <p class="text-black text-lg font-body leading-normal tracking-content inline-block mt-4 md:mt-0 pr-8">
          We guide brands through the evolving digital world, bringing ideas from concept to execution to drive real business results.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import BasicSlider from '@/components/hero/modules/basic/BasicSlider';

export default {
	name: 'basic-content',
	components: {
		BasicSlider
	},
	data: () => ({})
};
</script>
<style lang="scss" scoped>

</style>
