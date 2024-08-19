import { useState } from 'react';
import Header from "./components/header";
import Divider from './components/divider';
import CarSassy from './components/homeComponents/carSassy';
import insta from "./assets/insta.png";
import MeshComponent from './components/spinner';
import { Canvas } from "@react-three/fiber";

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className="bg-gradient-to-br from-black to-[#5D3E9F] fixed h-full w-full overflow-y-scroll no-scrollbar">
      <Header page={page} setPage={(val) => { setPage(val); }} />
      <HomePage />
    </div>
  );

  function HomePage() {
    return <>
      <Divider stops={[
        {
          "color": "FF5C02",
          "percent": 0,
        },
        {
          "color": "000000",
          "percent": 22,
        },
        {
          "color": "000000",
          "percent": 32,
        },
        {
          "color": "FF5C02",
          "percent": 78,
        },
        {
          "color": "C1E288",
          "percent": 100,
        },
      ]} />
      <CarSassy />
      <div className="h-[20px]"></div>
      <Divider stops={[
        {
          "color": "FF5C02",
          "percent": 0,
        },
        {
          "color": "000000",
          "percent": 37,
          "opacity": "00",
        },
        {
          "color": "000000",
          "percent": 63,
          "opacity": "00",
        },
        {
          "color": "FF5C02",
          "percent": 100,
        },
      ]} />
      <div className="flex flex-row p-[20px] justify-center">
        <div className="flex flex-col">
          <div className="text-xl">Latest Progress</div>
          <div className="text-sm whitespace-pre-line mt-[20px] ml-[40px]">{`Our team is constantly pushing for\n improvements.
\nCheck out our latest advances and even\n our timeline on the right.`}</div>
        </div>
        <div className="w-[40px]"></div>
        <div className="h-[300px] w-[400px] mr-[40px] whitespace-pre-line text-center flex justify-center items-center text-sm bg-[#515151]">{`4 Progress Photos/Major Milestones:
Aero shell
Chassis construction
Battery box finished
team goes to first competition`}</div>
      </div>
      <Divider stops={[
        {
          "color": "FF5C02",
          "percent": 0,
        },
        {
          "color": "000000",
          "percent": 37,
          "opacity": "00",
        },
        {
          "color": "000000",
          "percent": 63,
          "opacity": "00",
        },
        {
          "color": "FF5C02",
          "percent": 100,
        },
      ]} />
      <div className="flex flex-col p-[20px]">
        <div className="text-xl">Meat our Leads</div>

      </div>

      <div className="h-[450px] bg-black w-[100%] flex flex-row p-[20px]">
        <div className="w-[345px] flex-col">
          <div className="font-bold">Team email: </div>
          <div className="font-normal">uopsolarcar@gmail.com</div>
          <div className="h-[20px]"></div>
          <div className="font-bold">Located at: </div>
          <div className="font-normal whitespace-pre-line">{`School of Engineering and Computer Science
ATTN: Pacific Solar Car Club
3601 Pacific Ave
Stockton, CA 95211`}</div>
          <div className="h-[20px]"></div>
          <div className="font-bold">Telephone:</div>
          <div className="font-normal whitespace-pre-line">{`+1 ***-***-****`}</div>
          <div className="h-[20px]"></div>
          <div className="font-bold">Faculty Advisor:</div>
          <div className="font-normal whitespace-pre-line">{`Dongbin Lee`}</div>
          <div className="font-normal underline whitespace-pre-line">{`dlee4@pacific.edu`}</div>
          <div className="h-[20px]"></div>
          <div className="font-normal underline whitespace-pre-line">{`More contact information`}</div>
        </div>
        <div className="w-[20px]"></div>
        <div className="grow flex-col h-full flex justify-center">
          <div className="text-normal">FOLLOW US ON SOCIAL MEDIA</div>
          <div className="h-[20px]"></div>
          <div className="flex flex-row items-center">
            <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#450696]">
                <img className='h-[30px] w-[30px]' src={insta}/>
            </div>
            <div className="w-[10px]"></div>
            <div className="h-[30px] pl-[20px] pr-[20px] rounded-md flex items-center bg-[#450696]">@pacific.solarcar</div>
          </div>
        </div>
        <div className="w-[20px]"></div>
        {/* <Canvas>
        <MeshComponent/>
        </Canvas> */}
      </div>
    </>;
  }


}

export default App;
