import Facebook from "./platforms/Facebook";
import IPlatform from "./platforms/IPlatform";
import Twitch from "./platforms/Twitch";
import Youtube from "./platforms/Youtube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startAdvancedLive(platform : IPlatform){
    console.log("Aguarde...");
    const live = new AdvancedLive(platform);
    live.broadcasting();
    live.result();
    live.subtitles();
    live.comments();
}

function startLive(platform : IPlatform){
    console.log("Aguarde...");
    const live = new Live(platform);
    live.broadcasting();
    live.result();
}

startAdvancedLive(new Youtube());
startLive(new Twitch());
startAdvancedLive(new Facebook());