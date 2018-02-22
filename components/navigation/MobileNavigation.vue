<template>
  <nav id="mobile-navigation" class="fixed w-full h-full pin-t pin-l pin-r pin-b z-30">
    <div class="h-full w-full flex flex-col items-start content-center bg-white p-6 border mt-section">
      <MenuItems />
    </div>
  </nav>
</template>
<script>
import MenuItems from '@/components/navigation/modules/menuItems';

export default {
	name: 'mobile-navigation',
	components: {
		MenuItems
	},
	data: () => ({}),
	mounted() {}
};
</script>
<style lang="scss" scoped>
</style>
