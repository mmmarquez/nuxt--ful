<template>
  <div class="w-full h-full px-0 md:px-4 lg:px-6 py-2 md:py-4 lg:py-6">
    <div class="_square-item relative border min-h-full">
      <div class="_industry-overlay absolute pin-b pin-l pin-t pin-r z-20" :style="{ background: itemOv }"></div>
      <div class="_industry-bg absolute pin-b pin-l pin-t pin-r" :style="{ backgroundImage: 'url(' + itemBg + ')' }"></div>
      <div class="absolute pin-b pin-l z-30 max-w-sm">
        <p class="text-white text-xl tracking-content font-alt font-light p-4 leading-normal">
          Donec facilisis tortor ut augue lacinia at viverra est semper en sled sapien.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	name: 'industry-item',
	props: {
		itemBg: undefined,
		itemOv: undefined
	},
	data: () => ({})
};
</script>
<style lang="scss" scoped>

  @mixin aspect-ratio($width, $height) {
  	position: relative;
  	&:before {
  		display: block;
  		content: '';
  		width: 100%;
  		padding-top: ($height / $width) * 100%;
  	}
  	> .content {
  		position: absolute;
  		top: 0;
  		left: 0;
  		right: 0;
  		bottom: 0;
  	}
  }

  ._square-item {
    @include aspect-ratio(1, 1);
    &:hover {
      ._industry-overlay {
        opacity: 0;
        transition: opacity .5s ease;
      }
    }
  }
  ._industry-overlay, ._industry-bg {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.75;
    transition: opacity .5s ease;
  }
</style>
