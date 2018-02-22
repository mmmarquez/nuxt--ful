<template>
  <nav id="top__navigation" class="fixed w-full pin-t pin-l pin-r z-40 bg-white">
    <div class="md:ml-side max-w-full flex items-center justify-between flex-wrap pt-6 pb-6">
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-3 hover:text-black-medium hover:border-white" @click.prevent="mobileState">
          <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:inline">
        <MenuItems />
      </div>
      <div class="flex items-center flex-no-shrink text-white">
        <MenuBrand />
      </div>
    </div>
  </nav>
</template>
<script>
import MenuItems from '@/components/navigation/modules/menuItems';
import MenuBrand from '@/components/navigation/modules/MenuBrand';

export default {
	name: 'top-navigation',
	components: {
		MenuItems,
		MenuBrand
	},
	data: () => ({}),
	mounted() {},
	methods: {
		mobileState() {
			console.log('open!');
			this.$store.commit('mobileState', true);
		}
	}
};
</script>
<style lang="scss" scoped>
</style>
