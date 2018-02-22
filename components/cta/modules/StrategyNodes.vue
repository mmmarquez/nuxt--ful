<template>
  <div id="strategy-nodes" class="w-full lg:w-2/3 md:min-h-s60 flex flex-row justify-center items-center content-center">
    <svg id="node-graph" class="" :width="sW" :height="sH"></svg>
  </div>
</template>
<script>
const d3 = Object.assign(
	{},
	require('d3-force'),
	require('d3-selection'),
	require('d3-scale'),
	require('d3-drag'),
	require('d3-request')
);

export default {
	name: 'strategy-nodes',
	data: () => ({
		sW: 0,
		sH: 0
	}),
	mounted() {
		//do something after mounting vue instance
		var element = document.querySelector('.strategy__bg');
		var positionInfo = element.getBoundingClientRect();
		if (positionInfo.width > 768) {
			this.sH = positionInfo.height;
			this.sW = positionInfo.width;
		} else {
			this.sH = positionInfo.height / 1.2;
			this.sW = positionInfo.width;
		}

		this.$nextTick(() => {
			this.nodeGraph();
		});
	},
	methods: {
		nodeGraph() {
			let vm = this;
			let forceCenter;
			let forceCollide;
			if (this.sW > 768) {
				forceCenter = 3;
				forceCollide = 16;
			} else {
				forceCenter = 2;
				forceCollide = 8;
			}

			let svg = d3.select('#node-graph'),
				width = +svg.attr('width'),
				height = +svg.attr('height');

			let simulation = d3
				.forceSimulation()
				.force('charge', d3.forceManyBody().strength(-100))
				.force('center', d3.forceCenter(width / forceCenter, height / 2))
				.force(
					'wrap',
					d3
						.forceCollide(function(d) {
							return width / forceCollide;
						})
						.strength(0.125)
				)
				.force(
					'link',
					d3
						.forceLink()
						.id(function(d) {
							return d.id;
						})
						.distance(20)
				)
				.force('x', d3.forceX(width / 2))
				.force('y', d3.forceY(height / 2))
				.on('tick', ticked);

			let link = svg.selectAll('.link'),
				node = svg.selectAll('.node'),
				text = svg.selectAll('.text'),
				wrap = svg.selectAll('.node-wrap');

			d3.json('graph.json', function(error, graph) {
				if (error) throw error;

				simulation.nodes(graph.nodes);
				simulation.force('link').links(graph.links);
				link = link
					.data(graph.links)
					.enter()
					.append('line')
					.attr('class', 'link');
				wrap = wrap
					.data(graph.nodes)
					.enter()
					.append('g')
					.attr('class', 'node-wrap');

				// text = text
				// 	.data(graph.nodes)
				// 	.append('text')
				// 	.attr('r', 10)
				// 	.attr('dx', function(d) {
				// 		return -20;
				// 	})
				// 	.attr('font-size', '60')
				// 	.attr('fill', 'white');

				wrap
					.append('circle')
					.attr('class', 'node')
					.style('opacity', 0.6)
					.attr('r', function(d) {
						if (d.id === 'red') {
							return 40;
						}
						return 2;
					})
					// .style('fill', function(d) {
					// 	if (d.id === 'red') {
					// 		return 'red';
					// 	}
					// 	return 'white';
					// })
					.attr('id', function(d) {
						if (d.id === 'red') {
							return 'start';
						}
						return d.id;
					});
				wrap
					.append('text')
					.attr('id', function(d) {
						return '__txt-' + d.id;
					})
					.attr('dx', function(d) {
						if (d.id === 'red') {
							return -29;
						}
						return -20;
					})
					.attr('dy', function(d) {
						if (d.id === 'red') {
							return 5;
						}
						return -10;
					})
					.call(
						d3
							.drag()
							.on('start', dragstarted)
							.on('drag', dragged)
							.on('end', dragended)
					)
					.attr(
						'class',
						'text-base text-white font-body leading-normal tracking-content'
					)
					.style('opacity', 0.6)
					.text(function(d) {
						return d.label;
					})
					.on('mouseover', handleMouseOver)
					.on('mouseout', handleMouseOut);
			});
			function ticked() {
				link
					.attr('x1', function(d) {
						return d.source.x;
					})
					.attr('y1', function(d) {
						return d.source.y;
					})
					.attr('x2', function(d) {
						return d.target.x;
					})
					.attr('y2', function(d) {
						return d.target.y;
					});

				node
					.attr('cx', function(d) {
						return d.x;
					})
					.attr('cy', function(d) {
						return d.y;
					});

				wrap.attr('transform', function(d) {
					return 'translate(' + d.x + ',' + d.y + ')';
				});
				// wrap.call(
				// 	d3
				// 		.drag()
				// 		.on('start', dragstarted)
				// 		.on('drag', dragged)
				// 		.on('end', dragended)
				// );
			}

			function dragstarted(d) {
				if (!d3.event.active) simulation.alphaTarget(0.3).restart();
				d.fx = d.x;
				d.fy = d.y;
			}

			function dragged(d) {
				d.fx = d3.event.x;
				d.fy = d3.event.y;
			}

			function dragended(d) {
				if (!d3.event.active) simulation.alphaTarget(0);
				d.fx = null;
				d.fy = null;
			}

			// Create Event Handlers for mouse
			function handleMouseOver(d, i) {
				// Add interactivity
				let n = document.querySelector('#' + d.id);
				let txt = document.querySelector('#__txt-' + d.id);
				d3
					.select(n)
					.transition()
					.duration(300)
					.attr('r', 4.5)
					.style('opacity', 1)
					.style('fill', 'yellow');

				d3
					.select(txt)
					.transition()
					.duration(300)
					.style('fill', 'yellow')
					.style('opacity', 1)
					.style('transform', 'scale(1.2)');
			}

			function handleMouseOut(d, i) {
				let n = document.querySelector('#' + d.id);
				let txt = document.querySelector('#__txt-' + d.id);
				d3
					.select(n)
					.transition()
					.duration(750)
					.attr('r', function(d) {
						return Math.sqrt(d.size) / 10 || 2;
					})
					.style('fill', 'white')
					.style('opacity', 0.6);

				d3
					.select(txt)
					.transition()
					.duration(750)
					.style('fill', 'white')
					.style('opacity', 0.6)
					.style('transform', 'scale(1)');
			}
		}
	}
};
</script>
<style lang="scss">
.node {
  fill: white;
}

.node-wrap {
  &:hover {
    cursor: pointer;
  }
}

.link {
  stroke: white !important;
  stroke-width: 1px !important;
  opacity: 0.1 !important;
}

#start {
  fill: rgba(0, 0, 0, 0.3)!important;
  stroke: white !important;

}

#node-graph {
  // opacity: 0.6;
  overflow: visible;
}
</style>
