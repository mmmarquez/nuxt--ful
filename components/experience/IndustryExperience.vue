<template>
  <div id="industry-experience" class="w-full">
    <div class="_content max-w-96 md:max-w-full md:ml-side mx-auto">
      <IndustryNavigation />
      <IndustryGrid />
    </div>
  </div>
</template>
<script>
import IndustryNavigation from './modules/navigation/IndustryNavigation.vue';
import IndustryGrid from './modules/grid/IndustryGrid.vue';
export default {
	name: 'industry-experience',
	data: () => ({}),
	components: {
		IndustryNavigation,
		IndustryGrid
	}
};
</script>
<style lang="scss" scoped>
</style>
