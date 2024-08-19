import car from '../../assets/car.png';
import circle from '../../assets/circle.png';
import cornerCircle from '../../assets/corner circle.png';


function CarSassy() {
    return <div className="h-[510px] w-full relative">

        <img src={cornerCircle} className="w-[40%] absolute top-0 left-0 object-cover"></img>
        <div className="w-full flex items-top justify-center  absolute top-[0px] left-0 right-0">
            <img src={circle} className="w-[900px] ml-[40px] object-cover"></img>
        </div>
        <div className="w-full flex items-top justify-center h-[300px] absolute top-[125px]">
            <img src={car} className="w-[600px] h-[260px] object-cover"></img>
        </div>
        <div className="flex flex-col items-center justify-center absolute top-[40px] left-0 right-0">
            <h className="text-2xl">They said we couldn't.</h>
            <h className="text-2xl">So we did.</h>
        </div>
        <div className="flex flex-col  bottom-0 w-full absolute">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col items-center w-[100px]">
                    <div className="text-3xl text-center text-[#FF5C02]">47</div>
                    <div className="text-md text-center">ACTIVE MEMBERS</div>
                </div>
                <div className="flex flex-col items-center w-[150px] mr-[40px] ml-[40px]">
                    <div className="text-3xl text-center text-[#FF5C02]">17</div>
                    <div className="text-md text-center">SPONSORSHIPS ACQUIRED</div>
                </div>
                <div className="flex flex-col items-center w-[100px]">
                    <div className="text-3xl text-center text-[#FF5C02]">3</div>
                    <div className="text-md text-center">COMPETITIONS ATTENDED</div>
                </div>
            </div>
            <div className="h-[20px]"></div>
            <div className="self-center text-sm">University of the Pacific's first student-led solar car team.</div>
        </div>


    </div>;
}

export default CarSassy;