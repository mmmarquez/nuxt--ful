<template>
  <div id="strategy-cta" class="w-full h-full block relative mb-offset mt-36 md:mt-0">
    <div class="strategy__offset bg-grey-lightest absolute pin-r pint-t pin-b w-full min-h-full z-0"></div>
    <div class="strategy__bg w-full md:w-90 min-h-full flex flex-col lg:flex-row justify-center items-center content-center bg-white relative z-10">
      <StrategyNodes />
      <StrategyContent />
    </div>
  </div>
</template>
<script>
import StrategyNodes from '@/components/cta/modules/StrategyNodes';
import StrategyContent from '@/components/cta/modules/StrategyContent';

export default {
	name: 'strategy-cta',
	components: {
		StrategyNodes,
		StrategyContent
	},
	data: () => ({})
};
</script>
<style lang="scss" scoped>
.strategy__offset {
  top: 55px;
}
.strategy__bg {
  background-image: url('~/media/cta/node_cta_bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
