<template>
  <!-- See https://tailwindcss.com/docs/container -->
  <!-- <div> -->
    <!-- <TopNavigation />
    <transition
      name="mobile-slide"
      enter-active-class="slideInLeft"
      leave-active-class="slideOutRight"
      > -->
      <!-- <MobileNavigation v-if="mobileState"/> -->
    <!-- </transition> -->
    <div class="block w-full mx-auto mt-24">
      <nuxt/>
      <!-- <nuxt :style=" { marginBottom: footerHeight + 'px' } " /> -->
    </div>
  <!-- </div> -->

</template>

<script>
import TopNavigation from '@/components/navigation/TopNavigation';
import MobileNavigation from '@/components/navigation/MobileNavigation';

export default {
	name: 'default-layout',
	components: {
		TopNavigation,
		MobileNavigation
	},
	data: () => ({
		footerHeight: 0
	}),
	mounted() {
		//do something after mounting vue instance
		// this.footerHeight = document.querySelector('#main-footer').offsetHeight;
	},
	computed: {
		mobileState() {
			return this.$store.state.mobileState;
		},
		selectedIndustry() {
			this.$store.state.selectedIndustry;
		}
	}
};
</script>

<style lang="scss">

html, body {
  height: 100%;
}

#__nuxt {
    // margin-bottom: 40vh;
    // min-height: 100%;
    background: white;
}

/*
*
* MOBILE MENU TRANSITION
*
*/

@keyframes slideOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes slideInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
    opacity: 1;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideLeft-enter-active,
.slideInLeft,
.slideLeft-leave-active,
.slideOutLeft {
  animation-duration: 0.4s;
  animation-fill-mode: both;
}
.slideLeft-enter-active,
.slideInLeft {
  animation-name: slideInLeft;
}
.slideRight-enter-active,
.slideInRight,
.slideRight-leave-active,
.slideOutRight {
  animation-duration: 0.4s;
  animation-fill-mode: both;
}
.slideRight-leave-active,
.slideOutRight {
  animation-name: slideOutRight;
}

</style>
