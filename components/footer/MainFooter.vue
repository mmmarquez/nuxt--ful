<template>
  <div id="main-footer" class="w-full block mt-section">
    <TopFooter />
    <MiddleFooter />
    <BottomFooter />
  </div>
</template>
<script>
import BottomFooter from '@/components/footer/modules/BottomFooter';
import TopFooter from '@/components/footer/modules/TopFooter';
import MiddleFooter from '@/components/footer/modules/MiddleFooter';

export default {
	name: 'main-footer',
	components: {
		BottomFooter,
		TopFooter,
		MiddleFooter
	},
	data: () => ({})
};
</script>
<style lang="scss" scoped>

#main-footer {
  z-index: -1;
}

</style>
