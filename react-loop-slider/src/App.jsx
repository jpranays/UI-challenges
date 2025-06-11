import { useEffect, useRef, useState } from "react";
import "./App.css";

const sliderItems = [
	"React",
	"Vue",
	"Angular",
	"Svelte",
	"Next.js",
	"Nuxt.js",
	"Gatsby",
	"Ember.js",
	"Backbone.js",
	"Preact",
	"Lit",
	"Alpine.js",
	"Solid.js",
	"Remix",
	"Astro",
	"Qwik",
	"Blitz.js",
	"Redwood.js",
	"Mithril.js",
	"Stimulus",
	"Vanilla JS",
	"jQuery",
	"Bootstrap",
	"Tailwind CSS",
	"Bulma",
	"Foundation",
];
function App() {
	const sliderRef = useRef(null);

	useEffect(() => {
		function getSliderWidth() {
			if (sliderRef.current) {
				const wholeWidth = sliderRef.current.offsetWidth;

				const itemWidth = wholeWidth / sliderItems.length;

				document.querySelectorAll(".slider-item").forEach((slider) => {
					slider.style.width = `${itemWidth}px`;
				});
			}
		}
		window.addEventListener("resize", getSliderWidth);
		getSliderWidth();
		return () => {
			window.removeEventListener("resize", getSliderWidth);
		};
	}, []);

	return (
		<div className="App">
			<div className="slider-container right" ref={sliderRef}>
				<div className="slider">
					{sliderItems.map((item, index) => (
						<div key={index} className={`slider-item`}>
							{item}
						</div>
					))}
				</div>
				<div className="slider child">
					{sliderItems.map((item, index) => (
						<div key={index} className={`slider-item`}>
							{item}
						</div>
					))}
				</div>
			</div>
			<div className="slider-container left" ref={sliderRef}>
				<div className="slider">
					{sliderItems.map((item, index) => (
						<div key={index} className={`slider-item`}>
							{item}
						</div>
					))}
				</div>
				<div className="slider child">
					{sliderItems.map((item, index) => (
						<div key={index} className={`slider-item`}>
							{item}
						</div>
					))}
				</div>
			</div>
			<div className="slider-container right" ref={sliderRef}>
				<div className="slider">
					{sliderItems.map((item, index) => (
						<div key={index} className={`slider-item`}>
							{item}
						</div>
					))}
				</div>
				<div className="slider child">
					{sliderItems.map((item, index) => (
						<div key={index} className={`slider-item`}>
							{item}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
