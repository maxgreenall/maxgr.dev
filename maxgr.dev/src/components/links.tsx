import LinkCard from "./linkcard";

function Links(){
    return(
        <div className="py-20">
            <div className="pb-10">
                <h1 className="font-bold text-3xl text-center pb-2">Links</h1>
                <h1 className="text-xl text-center text-gray-400">Feel free to reach out 👏</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <LinkCard imageUrl="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                title={"GitHub"} subtitle={"github.com"} link={"https://github.com/maxgreenall"}></LinkCard>

                <LinkCard imageUrl="https://www.linkedin.com/favicon.ico" 
                title={"LinkedIn"} subtitle={"linkedin.com"} link={"https://www.linkedin.com/in/maxgreenall/"}></LinkCard>

                <LinkCard imageUrl="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" 
                title={"Email"} subtitle={"maxgreenall@gmail.com"} link={"https://github.com/maxgreenall"}></LinkCard>
            </div>
        </div>
    )
}

export default Links