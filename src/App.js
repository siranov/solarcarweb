import { useState } from 'react';
import Header from "./components/header";
import Divider from './components/divider';
import CarSassy from './components/homeComponents/carSassy';
import insta from "./assets/insta.png";
import MeshComponent from './components/spinner';
import { Canvas } from "@react-three/fiber";
import AutomaticCarousel from './components/carousel';
import logo from './assets/logo512.png';

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className="bg-gradient-to-br from-black to-[#5D3E9F] fixed h-full w-full overflow-y-scroll no-scrollbar">
      <Header page={page} setPage={(val) => { setPage(val); }} />
      <HomePage />
    </div>
  );

  function HomePage() {
    return <div className="flex flex-col justfy-center items-center">
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
        <div className="h-[300px] w-[400px] relative  bg-[#515151] rounded-md">
          <AutomaticCarousel />
        </div>
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
      <div className="flex flex-col p-[20px] w-[900px] self-center left-auto right-auto">
        <div className="text-xl">Meet our Leads</div>
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">EXECUTIVES</h2>
          <div className="grid grid-cols-3 gap-6">
            <ExecWidget name="Aleksei Macatuno" position="Founder & President" />
            <ExecWidget name="Ariana Desai" position="Co-Founder & VP/Treasurer" />
            <ExecWidget name="Simran Pravin" position="Secretary" />
          </div>
        </div>

        <div className="w-[900px] left-0 right-0">
          <h2 className="text-xl font-semibold mb-6">TECHNICAL LEADS</h2>
          <div className="grid grid-cols-6 gap-6">
            <MemberWidget name="Aleksei Macatuno" position="Chassis Lead"/>
            <MemberWidget name="Ariana Desai" position="Aerodynamics Lead"/>
            <MemberWidget name="Simran Pravin" position="Driver Ops Lead"/>
            <MemberWidget name="Ashton Beattie" position="Electrical Systems Lead"/>
            <MemberWidget name="Pranav Jayakumar" position="Sys. and Controls Lead"/>
            <MemberWidget name="Zhangir Siranov" position="Sys. and Controls Lead"/>
          </div>
        </div>
      </div>
      <div className="w-full bg-black flex items-center justify-center">
        <div className="h-[450px] bg-black w-[900px] flex flex-row p-[20px] self-center">
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
                <img className='h-[30px] w-[30px]' src={insta} />
              </div>
              <div className="w-[10px]"></div>
              <div className="h-[30px] pl-[20px] pr-[20px] rounded-md flex items-center bg-[#450696]">@pacific.solarcar</div>
            </div>
          </div>
          <div className="w-[20px]"></div>
          <div className="h-[200px] w-[200px] self-center">
            <img src={logo}></img>
          </div>
        </div>
      </div>
    </div>;
  }

  function ExecWidget(props) {
    return <div className="space-y-4">
      <div className="bg-gradient-to-r from-purple-300 to-purple-600 w-24 h-24 rounded-full mx-auto"></div>
      <div className="flex flex-col items items-center">
        <h3 className="font-bold">{props.name}</h3>
        <div className="h-[10px]"></div>
        <p className="self-center">{props.position}</p>
      </div>
    </div>;
  }

  function MemberWidget(props) {
    return <div className="space-y-4">
      <div className="bg-gradient-to-r from-orange-300 to-orange-600 w-24 h-24 rounded-full mx-auto"></div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-bold items-center text-center">{props.name}</h3>
        <div className="h-[10px]"></div>
        <p className="text-center ">{props.position}</p>
      </div>
    </div>;
  }


}

export default App;
