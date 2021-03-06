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
		clickPrev() {
			document.querySelector('.VueCarousel-navigation-prev').click();
		},
		clickNext() {
			document.querySelector('.VueCarousel-navigation-next').click()
		}
	},

});