import Vue from 'vue';
import {
	Carousel,
	Slide
} from 'vue-carousel';

const ReviewsCarousel = {
	template: "#reviews-widget",
	components: {
		Carousel,
		Slide
	}
};

new Vue({
	el: '.reviews__container',
	components: {
		ReviewsCarousel
	},
	methods: {
		prev() {
			console.log("prev")
			//this.$refs['carousel'][0].prev()
			console.log(this.$refs['carousel'][0])
		},
		next() {
			console.log("next")
			//this.$refs['carousel'][0].next()
		}
	},

});