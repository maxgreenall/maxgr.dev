import {Card, CardHeader, Image} from "@nextui-org/react";

function Links(){
    return(
        <div className="py-20">
            <div className="pb-10">
                <h1 className="font-bold text-3xl text-center pb-2">Links</h1>
                <h1 className="text-xl text-center text-gray-400">Feel free to reach out 👏</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="flex gap-3">
                        <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={40}
                        />
                        <div className="flex flex-col">
                        <p className="text-md">GitHub</p>
                        <p className="text-small text-default-500">github.com</p>
                        </div>
                    </CardHeader>
                </Card>

                <Card>
                    <CardHeader className="flex gap-3">
                        <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={40}
                        />
                        <div className="flex flex-col">
                        <p className="text-md">Linkedin</p>
                        <p className="text-small text-default-500">linkedin.com</p>
                        </div>
                    </CardHeader>
                </Card>

                <Card>
                    <CardHeader className="flex gap-3">
                        <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={40}
                        />
                        <div className="flex flex-col">
                        <p className="text-md">Email</p>
                        <p className="text-small text-default-500">maxgreenall@gmail.com</p>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}

export default Links