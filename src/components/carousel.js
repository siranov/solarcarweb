import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS
import comp from '../assets/comp.jpg';
import carshow from "../assets/carshow.jpg";
import work from "../assets/work.jpg";

function AutomaticCarousel() {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false} // Hide thumbnails if not needed
            showStatus={false} // Hide status if not needed
            showArrows={true} // Show navigation arrows if needed
            swipeable
            emulateTouch // Enable touch emulation for mobile
            interval={3000} // Set the interval for autoPlay in milliseconds
        >
            <CarItem src={comp} legend={"Solar Car Project at Competition!"}/>
            <CarItem src={carshow} legend={"Team showcase at Competition"}/>
            <CarItem src={work} legend={"Working at the competition"}/>
        </Carousel>
    );
}

function CarItem(props){
    return <div>
    <img
        className="object-cover h-[300px] w-[400px]"
        src={props.src}
        alt="Team Photo 1"
    />
    <p className="legend">{props.legend}</p>
</div>;
}

export default AutomaticCarousel;