<template>
  <div id="page-builder">
    <BasicHero />
    <StrategyCta />
    <ContentBlock />
    <IndustryExperience />
  </div>
</template>
<script>
import BasicHero from '@/components/hero/BasicHero';
import StrategyCta from '@/components/cta/StrategyCta';
import ContentBlock from '@/components/content/ContentBlock';
import IndustryExperience from '@/components/experience/IndustryExperience';

export default {
	name: 'page-builder',
	components: {
		BasicHero,
		StrategyCta,
		ContentBlock,
		IndustryExperience
	},
	data: () => ({})
};
</script>
<style lang="scss" scoped>
</style>
