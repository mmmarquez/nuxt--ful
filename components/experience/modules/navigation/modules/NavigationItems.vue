<template>
  <div id="industry-navigation-items max-w-full">
    <ul class="list-reset flex-row hidden lg:flex">
      <li class="mr-6 pb-1 border-b-4 border-white hover:border-yellow active:border-yellow">
        <a class="text-black font-heading text-lg leading-normal tracking-content no-underline hover:text-blue-darker" href="#" @click.prevent="selectIndustry('')">All</a>
      </li>
      <li class="mr-6 pb-1 border-b-4 border-white hover:border-yellow active:border-yellow">
        <a class="text-black font-heading text-lg leading-normal tracking-content no-underline hover:text-blue-darker" href="#" @click.prevent="selectIndustry('education')">Education</a>
      </li>
      <li class="mr-6 pb-1 border-b-4 border-white hover:border-yellow active:border-yellow">
        <a class="text-black font-heading text-lg leading-normal tracking-content no-underline  hover:text-blue-darker" href="#"  @click.prevent="selectIndustry('tourism-associations')">Tourism & Associations</a>
      </li>
      <li class="mr-6 pb-1 border-b-4 border-white hover:border-yellow active:border-yellow">
        <a class="text-black font-heading text-lg leading-normal tracking-content no-underline  hover:text-blue-darker" href="#" @click.prevent="selectIndustry('consumer-packaged-goods')">Consumer Packaged Goods</a>
      </li>
      <li class="mr-6 pb-1 border-b-4 border-white hover:border-yellow active:border-yellow">
        <a class="text-black font-heading text-lg leading-normal tracking-content no-underline  hover:text-blue-darker" href="#" @click.prevent="selectIndustry('casinos-gaming')">Casinos & Gaming</a>
      </li>
      <li class="mr-6 pb-1 border-b-4 border-white hover:border-yellow active:border-yellow">
        <a class="text-black font-heading text-lg leading-normal tracking-content no-underline  hover:text-blue-darker" href="#" @click.prevent="selectIndustry('energy')">Energy</a>
      </li>
      <li class="mr-6 pb-1 border-b-4 border-white hover:border-yellow active:border-yellow">
        <a class="text-black font-heading text-lg leading-normal tracking-content no-underline hover:text-blue-darker" href="#" @click.prevent="selectIndustry('more')">More</a>
      </li>
    </ul>
    <div class="inline-block relative max-w-full lg:hidden">
      <select class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow" v-model="selectedIndustry" @change="selectIndustry('')">
        <option class="text-black font-heading text-lg leading-normal tracking-content" value="" selected>All</option>
        <option class="text-black font-heading text-lg leading-normal tracking-content" value="education">Education</option>
        <option class="text-black font-heading text-lg leading-normal tracking-content" value="tourism-associations">Tourism & Associations</option>
        <option class="text-black font-heading text-lg leading-normal tracking-content" value="consumer-packaged-goods">Consumer Packaged Goods</option>
        <option class="text-black font-heading text-lg leading-normal tracking-content" value="casinos-gaming">Casinos & Gaming</option>
        <option class="text-black font-heading text-lg leading-normal tracking-content" value="energy">Energy</option>
        <option class="text-black font-heading text-lg leading-normal tracking-content" value="more">More</option>
      </select>
      <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	name: 'industry-navigation-items',
	data: () => ({
		selectedIndustry: ''
	}),
	methods: {
		selectIndustry(industry) {
			let experienceIndustry = industry || this.selectedIndustry;
			this.$store.commit('industryState', { data: experienceIndustry });
		}
	}
};
</script>
<style lang="scss" scoped>
</style>
