




function Divider(pr){
    let grad = `linear-gradient(to right, #${pr.stops[0]["color"]} ${pr.stops[0]["percent"]}%,`;
    for(let i = 1; i<pr.stops.length; i++){
        var opac = pr.stops[i]["opacity"]??"";
        if(i != pr.stops.length - 1){
            grad = ` ${grad}#${pr.stops[i]["color"]}${opac} ${pr.stops[i]["percent"]}%,`;
        }else{
            grad = ` ${grad}#${pr.stops[i]["color"]}${opac} ${pr.stops[i]["percent"]}%)`;
        }
    }
    console.log(grad);
    // grad = "bg-[linear-gradient(90deg,#000000 0%,rgba(175,170,195,0)22%,rgba(175,170,195,0)78%,rgba(175,170,195,1)100%)]";

    console.log(grad);
    return <div style={{background: grad}} className={`h-[2px] w-full`}></div>;
}

export default Divider;