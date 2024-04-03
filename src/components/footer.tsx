function Footer(){
    const currentYear = new Date().getFullYear();

    return (
        <div className="py-10">
            <div className="text-center text-gray-400">
                <p>© {currentYear} Max Greenall</p>
            </div>
        </div>
    )
}
export default Footer;