//import { Button } from "@nextui-org/react";
import IframeLogo from "../assets/iframequicklink-logo.png";
import WhiteboardLogo from "../assets/whiteboard-logo.png";
import QueryLogo from "../assets/queryparameter-logo.png";
import BeaconLogo from "../assets/beacon-logo.png";
import AOSyncLogo from "../assets/aosync-logo.svg";
import LinkCard from "./linkcard";

function Projects() {
  return (
    <div className="py-28">
      <div className="pb-10">
        <h1 className="font-bold text-3xl text-center pb-2">My projects</h1>
        <h1 className="text-xl text-center text-gray-400">
          See what I've been working on 👀
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <LinkCard
          imageUrl={BeaconLogo}
          title={"Beacon DeFi"}
          subtitle={"iOS app"}
          link={"https://getbeaconapp.com/"}
        ></LinkCard>

        <LinkCard
          imageUrl={AOSyncLogo}
          title={"AO Sync"}
          subtitle={"React SDK"}
          link={"https://github.com/vela-ventures/ao-sync-sdk"}
        ></LinkCard>

        <LinkCard
          imageUrl={IframeLogo}
          title={"Iframe Quicklink"}
          subtitle={"Chrome extension"}
          link={
            "https://chromewebstore.google.com/detail/iframe-quicklink-open-ifr/nfjhbjdckjldofelpokknfmbaaflfobm"
          }
        ></LinkCard>

        <LinkCard
          imageUrl={WhiteboardLogo}
          title={"Whiteboards"}
          subtitle={"Trello powerup"}
          link={"https://trello.com/power-ups/657d870cac9ff5f8af13b518/"}
        ></LinkCard>

        <LinkCard
          imageUrl={QueryLogo}
          title={"Query Parameter Editor"}
          subtitle={"Chrome extension"}
          link={
            "https://chromewebstore.google.com/detail/query-parameter-editor/kpdhkjadlkaflemjhhbfafmjaapfbfjb"
          }
        ></LinkCard>
      </div>

      {/* <div className="pt-5 flex justify-center">
                <Button color="primary" variant="flat">See all</Button>
            </div> */}
    </div>
  );
}

export default Projects;
