import {Card, CardHeader, Image, Button } from "@nextui-org/react";
import IframeLogo from '../assets/iframequicklink-logo.png';
import WhiteboardLogo from '../assets/whiteboard-logo.png';
import QueryLogo from '../assets/queryparameter-logo.png';

function Projects(){
    return (
        <div className="py-20">
            <div className="pb-10">
                <h1 className="font-bold text-3xl text-center pb-2">Projects</h1>
                <h1 className="text-xl text-center text-gray-400">See what I've been working on 👀</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src={IframeLogo}
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">Iframe Quicklink</p>
                            <p className="text-small text-default-500">Chrome extension</p>
                        </div>
                    </CardHeader>
                </Card>

                <Card>
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src={WhiteboardLogo}
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">Whiteboards</p>
                            <p className="text-small text-default-500">Trello powerup</p>
                        </div>
                    </CardHeader>
                </Card>

                <Card>
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src={QueryLogo}
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">Query Parameter Editor</p>
                            <p className="text-small text-default-500">Chrome extension</p>
                        </div>
                    </CardHeader>
                </Card>
            </div>

            <div className="pt-5 flex justify-center">
                <Button color="primary" variant="flat">See all</Button>
            </div>
        </div>
    );
}

export default Projects