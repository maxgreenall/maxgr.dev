import LinkCard from "./linkcard";

function Links(){
    return(
        <div className="py-28" id="links">
            <div className="pb-10">
                <h1 className="font-bold text-3xl text-center pb-2">Links</h1>
                <h1 className="text-xl text-center text-gray-400">Feel free to reach out 👏</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <LinkCard imageUrl="/github.png" 
                title={"GitHub"} subtitle={"github.com"} link={"https://github.com/maxgreenall"}></LinkCard>

                <LinkCard imageUrl="/linkedin.ico" 
                title={"LinkedIn"} subtitle={"linkedin.com"} link={"https://www.linkedin.com/in/maxgreenall/"}></LinkCard>

                <LinkCard imageUrl="/mg.png" 
                title={"Email"} subtitle={"maxgreenall@gmail.com"} link={"mailto:maxgreenall@gmail.com"}></LinkCard>
            </div>
        </div>
    )
}

export default Links