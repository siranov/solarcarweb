import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS

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
            <CarItem src="https://today.appstate.edu/_images/_posts/2021/08/sunergy-wins/sunergy-wins-glides.jpg" legend={"Salam"}/>
            <CarItem src="https://www.americansolarchallenge.org/2024/assets/images/team_photos_thumb/2.jpg" legend={"Salam"}/>
            <CarItem src="https://www.americansolarchallenge.org/2024/assets/images/team_photos_thumb/2.jpg" legend={"Salam"}/>
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