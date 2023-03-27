import menu from '../images/menu.png'
const Navbar = () => {
    const handleClick = ()=>{
        const overlayDiv = document.getElementById('overlay');
        if(overlayDiv.classList.contains('-translate-y-[350px]')){
            overlayDiv.classList.remove('-translate-y-[350px]')
        }
        else if(!overlayDiv.classList.contains('-translate-y-[350px]')){
            overlayDiv.classList.add('-translate-y-[350px]')
        }
    }
    return ( 
        <>
        <div className=" z-50  flex md:px-10 px-5 py-3 md:py-6 flex-row justify-between items-center bg-red-800 fixed top-0 left-0 w-full">
            <p className=" text-white font-semibold font-Labrada text-2xl ">New Convenant Church</p>
            <span className="hidden lg:flex flex-row space-x-5 items-center text-white font-medium font-Labrada text-base ">
                <p className=" hover:text-black transition-colors">Home</p>
                <p className=" hover:text-black transition-colors">Worship With Us</p>
                <p className=" hover:text-black transition-colors">Meet Our Pastor</p>
                <p className=" hover:text-black transition-colors">About</p>
                <p className=" hover:text-black transition-colors">Contact Us</p>
            </span>
            <img src={ menu } onClick={ handleClick } className='block lg:hidden w-6 h-6' alt="" />
        </div>
        <div id="overlay" className=" w-full bg-red-800 h-[350px] flex items-center -translate-y-[350px] shadow transition-all absolute z-[40]">
                <div className=" flex flex-col md:px-10 px-5 py-3 md:py-6 space-y-5">
                    <p className=" font-Labrada text-lg hover:text-black text-white font-semibold ">Home</p>
                    <p className=" font-Labrada text-lg hover:text-black text-white font-semibold ">Worship With Us</p>
                    <p className=" font-Labrada text-lg hover:text-black text-white font-semibold ">Meet Our Pastor</p>
                    <p className=" font-Labrada text-lg hover:text-black text-white font-semibold ">About</p>
                    <p className=" font-Labrada text-lg hover:text-black text-white font-semibold ">Contact Us</p>
                </div>
            </div>
        </>
     );
}
 
export default Navbar;