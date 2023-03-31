import Navbar from "./navbar";
import image from '../images/1.jpg';
import link from '../images/link.png';
import convo from '../images/chat.png';
import map from '../images/map.png';
import time from '../images/time.png';
import phone from '../images/phone.png';
import mail from '../images/mail.png';
import whatsapp from '../images/whatsapp.png';
import facebook from '../images/facebook.png';

const Home = () => {

    return ( 
        <>
        <Navbar/>
        <div className=" w-full bg-praise h-[500px] flex flex-col justify-center space-y-8 items-center bg-cover">
            <p className="text-black font-Labrada text-center md:text-4xl text-3xl font-bold">New Convenant Church</p>
            <p className=" text-black text-sm font-Inter font-medium">Raising Happy, Prosperous and Godly Families</p>
            <button className=" px-6 py-4 font-Labrada bg-blue-700 text-white text-base">Join Us Today</button>
        </div>
        <div className=" lg:px-[5%] lg:py-24 p-8 w-full">
            <div className=" flex flex-col justify-center items-center text-center text-white space-y-4">
                <p className=" font-Labrada lg:text-4xl text-3xl font-bold text-[#174b87]">Want<span className=" text-white"> To Worship With Us?</span></p>
                <p className=" text-center text-[#aaaaaa] font-Inter text-sm font-medium">Join us in-person or online for worship this Sunday. In the presence of God, there is<br></br>fullness of Joy</p>
            </div>
            <div className=" w-full flex lg:justify-between items-center justify-center space-y-8 md:space-y-0 flex-col lg:flex-row mt-[64px]">
                <div className=" w-auto flex flex-row items-center space-x-7">
                    <button className=" h-16 w-16 rounded-[50%] bg-[#174b87] flex justify-center items-center hover:bg-white transition-colors">
                        <img src={ link } className="" alt="" />
                    </button>
                    <span className=" flex flex-col space-y-4">
                        <p className=" font-Labrada text-white font-bold lg:text-xl text-base">Join Us Online</p>
                        <p className="w-[300px] font-Labrada text-[#aaaaaa] font-bold lg:text-base text-sm">Experience Jesus Christ's love and teachings<br></br> worldwide. Join our online community for live streams of services, spiritual resources, and connecting with members at New Covenant Church Nigeria.</p>
                    </span>
                </div>
                <div className=" w-auto flex flex-row items-center space-x-7">
                    <button className=" h-16 w-16 rounded-[50%] bg-[#174b87] hover:bg-white flex justify-center items-center transition-colors">
                        <img src={ convo } className="" alt="" />
                    </button>
                    <span className=" flex flex-col space-y-4">
                        <p className=" font-Labrada text-white font-bold lg:text-xl text-base">Talk To Someone</p>
                        <p className="w-[300px] font-Labrada text-[#aaaaaa] font-bold lg:text-base text-sm">Need to Talk? For whatever reason, Reach out to our caring team at New Covenant Church Nigeria for support and encouragement. You're not alone – we're here to help."</p>
                    </span>
                </div>
                <div className=" w-auto flex flex-row items-center space-x-7">
                    <button className=" h-16 w-16 rounded-[50%] bg-[#174b87] flex justify-center items-center hover:bg-white transition-colors">
                        <img src={ map } className="" alt="" />
                    </button>
                    <span className=" flex flex-col space-y-4">
                        <p className=" font-Labrada text-white font-bold lg:text-xl text-base">Our Address</p>
                        <p className="w-[300px] font-Labrada text-[#aaaaaa] font-bold lg:text-base text-sm">Plot 226, 1(R) Cresent, along Sauka &<br></br> Tundun-Wada Road, FHA Lugbe-Abuja</p>
                    </span>
                </div>
            </div>
        </div>
        <div className=" lg:px-[5%] lg:py-24 p-8 w-full bg-white">
            <div className=" flex flex-col justify-center items-center text-white space-y-7">
                <p className=" font-Labrada text-center md:text-4xl text-3xl font-bold text-[#174b87]">God Gives Us<span className=" text-black"> Power To Believe</span></p>
                <p className=" text-[#aaaaaa] text-center font-Inter md:text-base text-sm font-medium">"Matthew 28:19-20. Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you; and lo, I am with you always, even to the end of the age."</p>
                <p className=" text-[#aaaaaa] text-center font-Inter md:text-base text-sm font-medium">In the Great Commission, our Lord commands us to “make disciples of all nations”. To realistically evangelize the world every believer must be equipped and empowered to win souls and bring them to maturity. In other words, it is the duty of each Christian to duplicate himself/herself in a new convert to Christ. Training and materials are provided for each member to carry out one to one follow-up of new converts who can soon become disciples, able to win others to Christ.</p>
            </div>
        </div>
        <div className=" lg:px-[5%] lg:py-24 p-8 w-full ">
            <div className=" w-full flex flex-col justify-center items-center text-white space-y-7">
                <p className=" font-Labrada md:text-4xl text-3xl text-center font-bold text-[#174b87]">About<span className=" text-white"> Our Pastor</span></p>
                <p className=" text-center text-[#aaaaaa] font-Inter md:text-base text-sm font-medium">Meet our passionate pastor at New Covenant Church Lugbe. Learn about their vision for our community<br></br> and how their teachings can transform your life.</p>
                <div className=" w-full flex md:flex-row flex-col justify-center items-center space-x-8">   
                    <img className=" pb-5 md:pb-0" src={ image } alt="" />
                    <span className=' flex flex-col items-center space-y-7'>
                        <p className="text-[#fff] text-center font-Inter md:text-base text-sm font-medium w-[300px]">"Cras egestas consectetur tincidunt. Mauris accumsan euismod purus, quisrutrum est mattis id. Duis lorem ante, luctus a vehicula ut, laoreet non libero.ivamus pharetra purus sodales augue pharetra pulvinar. Donec non vulputateodio. Ut rhoncus accumsan convallis. Sed scelesque tincidunt diam sit ametmollis. Morbi pharetra tortor id odio scelerisque, et egestas it molestie....!! </p>
                    </span>
                </div>
            </div>
        </div>
        <div className=" px-[5%] py-24 w-full bg-white">
            <div className=" flex flex-col justify-center items-center text-white space-y-7">
                <span className=" inline-flex space-x-2 font-Labrada text-4xl font-bold text-[#174b87]"><p>Our</p><p className=" text-black">Vision</p></span>
                <p className=" text-[#aaaaaa] text-center font-Inter text-base font-medium">The New Covenant Church in Nigeria has a vision of empowering individuals to live victorious and fulfilling lives through the teachings of Jesus Christ. The church aims to accomplish this by promoting faith in God, encouraging spiritual growth, and providing opportunities for education and skill development. Additionally, the church places a strong emphasis on the importance of family values and community service, with the goal of creating a positive impact on society. Overall, the New Covenant Church strives to be a source of hope and inspiration for people in Nigeria and beyond, with a focus on promoting God's love and principles in all aspects of life.</p>
            </div>
        </div>
        <div className=" lg:px-[5%] lg:py-24 p-8 w-full ">
            <div className=" flex flex-col justify-center w-full items-center text-white space-y-7">
                <p className="font-Labrada md:text-4xl text-3xl text-center font-bold text-[#174b87]">Get<span className=" text-white"> in Touch</span></p>
                <p className=" text-center text-[#aaaaaa] font-Inter text-sm md:text-base font-medium pb-6">Connect with us at New Covenant Church Nigeria! Contact us with any questions or prayer requests.<br></br> Our team is here to support and respond promptly.</p>
                <div className=" flex lg:flex-row flex-col justify-center lg:justify-between items-center w-full space-y-7 lg:space-y-0"> 
                    <div className=" flex md:flex-row flex-col lg:w-[50%] md:w-[80%] w-full space-y-5 md:space-y-0 justify-between">
                        <div className=" flex flex-col space-y-4">
                            <p className=" font-Labrada text-[#174b87] lg:text-2xl text-xl font-semibold pb-3">Information</p>
                            <span className=" flex flex-row items-center space-x-2">
                                <img src={ map } className=' w-6 h-6' alt="" />
                                <p className=" font-Labrada text-white font-normal text-base">New Convenant Church Airport<br></br> Road, Lugbe, Abuja</p>
                            </span>
                            <span className=" flex flex-row items-center space-x-2">
                                <img src={ time } alt="" />
                                <p className=" font-Labrada text-white font-normal text-base">Sunday Service: 9am</p>
                            </span>
                            <span className=" flex flex-row items-center space-x-2">
                                <img src={ time } alt="" />
                                <p className=" font-Labrada text-white font-normal text-base">Tuesday Bible Study: 5:30pm</p>
                            </span>
                        </div>  
                        <div className=" flex flex-col space-y-4">
                            <p className=" font-Labrada text-[#174b87] lg:text-2xl text-xl font-semibold pb-3">Inquiries</p>
                            <span className=" flex flex-row">
                                <p className=" font-Labrada text-white font-normal text-base">Need answers? Contact us<br></br>via email or phone below</p>
                            </span>
                            <span className=" flex flex-row">
                                <p className=" font-Labrada text-white font-normal text-base">mail@NCC.com</p>
                            </span>
                            <span className=" flex flex-row items-center ">
                                <img src={ phone } alt="" />
                                <p className=" font-Labrada text-white font-normal text-base">+2348035906717</p>
                            </span>
                            <span className=" flex flex-row space-x-2">
                                <img src={ mail } alt="" />
                                <p className=" font-Labrada text-white font-normal text-base">mail@ncc.com</p>
                            </span>
                        </div>
                    </div>
                    <div className=" lg:w-[40%] md:w-[80%] w-full space-y-5">
                        <div className=" flex flex-row justify-between">
                            <input type="text" placeholder="Full Name" className=" w-[48%] h-10 bg-transparent p-2 font-Labrada text-white border border-[#aaaaaa]" name="" id="" />
                            <input type="text" placeholder="Email" className=" w-[48%] h-10 bg-transparent p-2 font-Labrada text-white border text-base border-[#aaaaaa]" name="" id="" />
                        </div>
                        <textarea name="message" className=" h-28 w-full border border-[#aaaaaa] text-base p-2 bg-transparent font-Labrada" placeholder="Message" id="" cols="30" rows="10"></textarea>
                        <button className=" font-Labrada text-base text-white ml-auto block px-6 py-3 bg-[#174b87]">Send</button>
                    </div>
                </div>
            </div>
        </div>
        <div className=" lg:px-[5%] lg:py-12 p-5 w-full bg-red-800 flex justify-center items-center flex-col">
           <span className=" flex flex-row space-x-3">
                <img src={ whatsapp } className=' w-4 h-4' alt="" />
                <img src={ facebook } className=' w-4 h-4' alt="" />
            </span> 
            <p className=" font-Labrada text-base text-center font-semibold text-white">Copyright Ⓒ 2022 NCCLUGBE All rights reserved.</p>
        </div>
        </>
     );
}
 
export default Home;