<template>
  <div id="industry-navigation" class="mb-8 border-l-8 border-yellow max-w-full">
    <div class="pl-8">
      <h3 class="pb-4 text-lg font-heading text-grey leading-normal tracking-content uppercase">Select Industry Experience</h3>
      <NavigationItems />
    </div>
  </div>
</template>
<script>
import NavigationItems from './modules/NavigationItems.vue';

export default {
	name: 'industry-navigation',
	data: () => ({}),
	components: {
		NavigationItems
	}
};
</script>
<style lang="scss" scoped>
</style>
