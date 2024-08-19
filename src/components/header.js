

function Header(mProps){
    return <Desktop/>;
    function Desktop(){
        return <div className="h-[60px] bg-black flex flex-row pl-[20px] pr-[20px] items-center">
            <div className="flex flex-col grow items-start">
                <div className="font-zen font-normal text-sm">PACIFIC</div>
                <div className="font-zen font-normal text-md text-[#FF5C02]">SOLAR CAR PROJECT</div>
            </div>
            <HeaderButton page="Home"/>
            <HeaderButton page="Mission"/>
            <HeaderButton page="Teams"/>
            <HeaderButton page="Sponsors"/>
            <DonateNow/>
        </div>;
    }

    function HeaderButton(pr){
        return <div onClick={()=>{mProps.setPage(pr.page)}} className={`h-[60px] hover:bg-[#FF5C02] cursor-pointer flex items-center pl-[20px] pr-[20px] ${mProps.page==pr.page?"bg-[#2E0C77]/[0.75]":"bg-transparent"}`}>{pr.page}</div>;
    }

    function DonateNow(){
        return <div className="h-[45px] ml-[20px] pl-[10px] flex items-center pr-[10px] rounded-md text-black bg-[#C1E288]">DONATE NOW</div>;
    }

    
}

export default Header;