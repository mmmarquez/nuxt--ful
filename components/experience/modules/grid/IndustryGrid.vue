<template>
  <div id="__industry-grid" class="max-w-full md:max-w-90 block py-6 md:py-10 lg:py-12">
      <transition-group name="list-item" tag="div" class="flex flex-wrap">
        <IndustryItem v-for="(industry, index) in filterBy(industries, currentIndustry, 'industryTag')"
          class="_industry-item w-full sm:w-1/2 xxl:w-1/3"
          :key="index"
          :itemBg="industry.itemBackground"
          :itemOv="industry.itemOverlay"
          v-in-viewport.once='-100'
        />
      </transition-group>
  </div>
</template>
<script>
import IndustryItem from './modules/IndustryItem.vue';
export default {
	name: 'industry-grid',
	data: () => ({
		industry: 'more',
		industries: [
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(233,106,31,1)',
				industryTag: 'education'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(51,197,182,1)',
				industryTag: 'education'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(219,189,8,1)',
				industryTag: 'education'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(197,39,56,1)',
				industryTag: 'education'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(38,108,179,1)',
				industryTag: 'education'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(49,48,48,1)',
				industryTag: 'education'
			},

			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(51,197,182,1)',
				industryTag: 'tourism-associations'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(51,197,182,1)',
				industryTag: 'tourism-associations'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(219,189,8,1)',
				industryTag: 'consumer-packaged-goods'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(197,39,56,1)',
				industryTag: 'casinos-gaming'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(197,39,56,1)',
				industryTag: 'casinos-gaming'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(197,39,56,1)',
				industryTag: 'casinos-gaming'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(197,39,56,1)',
				industryTag: 'casinos-gaming'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(197,39,56,1)',
				industryTag: 'casinos-gaming'
			},

			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(49,48,48,1)',
				industryTag: 'energy'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(49,48,48,1)',
				industryTag: 'energy'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(49,48,48,1)',
				industryTag: 'energy'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(49,48,48,1)',
				industryTag: 'energy'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(49,48,48,1)',
				industryTag: 'energy'
			},

			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(233,106,31,1)',
				industryTag: 'more'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(233,106,31,1)',
				industryTag: 'more'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(233,106,31,1)',
				industryTag: 'more'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(233,106,31,1)',
				industryTag: 'more'
			},
			{
				itemBackground: './media/grid/industry_item_bg.png',
				itemOverlay: 'rgba(233,106,31,1)',
				industryTag: 'more'
			}
		]
	}),
	components: {
		IndustryItem
	},
	computed: {
		currentIndustry() {
			return this.$store.state.selectedIndustry;
		}
	}
};
</script>
<style lang="scss" scoped>

.list-item {
  display: inline-block;
  // margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s;
}

.list-item-move {
  transition: all 1s;
}

._industry-item {
 opacity: 0;
 transform: translateY(50px);
 transition: all .75s ease;
  &.in-viewport {
   opacity: 1;
   transform: translateY(0);
  }
  &:nth-child(even) {
    margin-top: 0rem;
  }
  &:nth-child(odd) {
    margin-top: 0rem;
  }
  &:hover {
    transform: translateY(-15px);
    cursor: pointer;
    ._industry-overlay {
      opacity: 0;
    }
  }
}

@media (min-width: 768px) {
  ._industry-item {
    &:nth-child(even) {
      margin-top: 1rem;
    }
    &:nth-child(odd) {
      margin-top: -1rem;
    }
    &:hover {
      transform: translateY(-25px);
      cursor: pointer;
      ._industry-overlay {
        opacity: 0;
      }
    }

  }

}

@media (min-width: 1024px) {
  ._industry-item {
    &:nth-child(even) {
      margin-top: 1.5rem;
    }
    &:nth-child(odd) {
      margin-top: -1.5rem;
    }
    &:hover {
      transform: translateY(-25px);
      cursor: pointer;
      ._industry-overlay {
        opacity: 0;
      }
    }

  }

}


</style>
