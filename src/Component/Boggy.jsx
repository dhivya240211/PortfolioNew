import React from 'react'
import "./boggy.css";
import { CiHeart } from "react-icons/ci";
import { MdTrolley } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import { SiYoutubegaming } from "react-icons/si";
import { BsQrCode } from "react-icons/bs";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";



export default function Boggy() {
    return (
        <div>
            <div className='container-fluid top'>

                <h6 className='top'>Summer Sale For All Swim Suit And Free Express Delivery-Offer 50%!
                    <a href="#">ShopNow</a></h6>
            </div>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'><h3>Exclusive</h3></div>
                    <div className='col-5'>
                        <a href="#" className='p-3 text-black'>Home</a>
                        <a href="#" className='p-3 text-black'>Contact</a>
                        <a href="#" className='p-3 text-black'>About</a>
                        <a href="#" className='p-3 text-black'>Signup</a>

                    </div>
                    <div className='col-4'>
                        <input type="text" className="pholder" placeholder='What are you looking for?' />
                        <CiHeart />
                        <MdTrolley />
                    </div>
                    <hr />
                </div>
                {/* Leftside content top */}
                <div className='row'>
                    <div className='col-2 leftsidect'>
                        <p>Women's Fashion</p>
                        <p>Men's Fashion</p>
                        <p>Electronic</p>
                        <p>Home And Lifestyle</p>
                        <p>Medicine</p>
                        <p>Sports And Outdoor</p>
                        <p>Baby's And Toys</p>
                        <p>Groceries And Pets</p>
                        <p>Health And Beauty</p>

                    </div>

                    {/* center content phone */}

                    <div className='col-10   '>
                        <div className='container iphone'>
                            <div className='row'>
                                <div className='col-5 edit'>
                                    <h6><FaApple className='appleedit' />
                                        iphone 14 series</h6>
                                    <h2>Upto 10%</h2>
                                    <h2>off Voucher</h2>
                                    <a href="#" className='shop'>Shop Now  <FaArrowRight /></a>

                                </div>
                                <div className='col-7'>
                                    <img src="img/hero_endframe__cvklg0xk3w6e_large 2.png"></img>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <br /><br />
                {/* leftside card */}

                <div className='row'>
                    <div className='d-flex'>
                        <div className="smallred">
                            <p className='name'>Today's</p>
                        </div>
                    </div>
                </div>
                <br></br>
                {/* 1stcard top */}
                <div className='row' >
                    <div className='move'>
                        <h6 >Days</h6>
                        <h6  >Hours</h6>
                        <h6   >Minutes</h6>
                        <h6 >Seconds</h6>
                    </div>
                    <h4 >Flash Sales</h4>

                    <h4 className='lin'>33  : 10  : 22  : 00</h4>

                </div>
                {/* card 1 */}
                <div className='row'>
                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src="img/Frame 570.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">HAVIT HV-G92 GAMEPAD</h5>
                                <p className='card-text text-danger'>$120</p>
                                <CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />



                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src="img/Frame 570 (2).png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">IPS LCD Gaming Monitor System </h5>
                                <p className='card-text text-danger'>$900</p>
                                <CiStar className='text-secondary ' /><CiStar className='text-secondary ' /><CiStar className='text-warning' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />



                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src="img/Frame 570 (1).png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">AK-900 WIRED KEYBOARD</h5>
                                <p className='card-text text-danger'>$120</p>
                                <CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />



                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src="img/Frame 570 (3).png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">S-Series Comfort Zone Chairs </h5>
                                <p className='card-text text-danger'>$890</p>
                                <CiStar className='text-warning/text-secondary ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />



                            </div>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
                <div className="category">
                    <button className='ory' >View All Products</button>
                </div>
                <br></br>
                <hr></hr>
                <br></br>
                {/* Category */}

                <div className='row'>
                    <div className='d-flex'>
                        <div className="chotard">
                            <p className='name'>Categorie's</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <h4>Browse By Category
                    <FaArrowLeft className='arrow' /> <FaArrowRight className='arrow' />
                </h4>

                <br></br>
                <div className='row'>
                    <div className='col-2'>
                        <IoIosPhonePortrait className='adj  ' />
                        <p>Phone</p>
                    </div>
                    <div className='col-2'>
                        <HiMiniComputerDesktop className='adj ' />
                        <p>Computer</p>
                    </div>

                    <div className='col-2'>
                        <BsSmartwatch className='adj ' />
                        <p>Watch</p>
                    </div>

                    <div className='col-2'>
                        <FaCamera className='adj ' />
                        <p>Camera</p>
                    </div>

                    <div className='col-2'>
                        <ImHeadphones className='adj ' />
                        <p>Headphones</p>
                    </div>

                    <div className='col-2'>
                        <SiYoutubegaming className='adj ' />
                        <p>Gaming</p>
                    </div>




                </div>


                <br></br>
                <hr></hr>

                <br></br>
                {/* best selling products */}

                <div className='row'>
                    <div className='d-flex'>
                        <div className="chotard">
                            <p className='name'>Month</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <h4>Best Selling Products
                    <button className='allg'>View All</button>
                </h4>

                <div className='row'>
                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src="img/Cart.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">The north coat</h5>
                                <p className='card-text text-danger'>$120</p>
                                <CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />



                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src="img/Cart (1).png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Gucci duffle bag</h5>
                                <p className='card-text text-danger'>$820</p>
                                <CiStar className='text-warning ' /><CiStar className='text-secondary ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />



                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src="img/Cart (2).png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">RGB liquid CPU cooler</h5>
                                <p className='card-text text-danger'>$980</p>
                                <CiStar className='text-secondary' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />



                            </div>
                        </div>
                    </div>


                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src="img/Cart (3).png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Small Book Libary</h5>
                                <p className='card-text text-danger'>$567</p>
                                <CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />



                            </div>
                        </div>
                    </div>
                </div>
                <div className='row radio'>


                    <div className='col-5 vanam'>
                        <h6 className="cat">Categories</h6><br></br>
                        <h4>Enchance your music experience</h4><br></br>
                        <img src="img/Frame 601.png" /><br />

                        <button className='btr'>Buy Now</button>


                    </div>

                    <div className='col-7'>
                        <img src="img/Frame 694.png" />
                    </div>
                </div>
                <br></br><br></br>
                {/* our products */}
                <div className='row'>
                    <div className='d-flex'>
                        <div className="chotard">
                            <p className='name'>Our Products</p>
                        </div>
                    </div>

                </div>
                <br></br>
                <h4>Explore Our Products</h4>
                <div className='row'>
                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src="img/Cart (4).png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Breed Dog DRy Food</h5>
                                <p className='card-text text-danger'>$820</p>
                                <CiStar className='text-warning ' /><CiStar className='text-secondary ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />

                            </div>
                        </div>

                    </div>

                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src="img/Cart (5).png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Canon EOS DSLR</h5>
                                <p className='card-text text-danger'>$820</p>
                                <CiStar className='text-warning ' /><CiStar className='text-secondary ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />

                            </div>
                        </div>

                    </div>
                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src="img/Cart (6).png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">ASUS FHo Gaming </h5>
                                <p className='card-text text-danger'>$820</p>
                                <CiStar className='text-warning ' /><CiStar className='text-secondary ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />

                            </div>
                        </div>

                    </div>
                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src=" img/Frame 570 (3).png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Curology Comfort Sitter</h5>
                                <p className='card-text text-danger'>$820</p>
                                <CiStar className='text-warning ' /><CiStar className='text-secondary ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />


                            </div>
                        </div>

                    </div>

                </div>
                <br></br>

                <div className='row'>

                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src="img/Cart (7).png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Kids Electric Car</h5>
                                <p className='card-text text-danger'>$820</p>
                                <CiStar className='text-warning ' /><CiStar className='text-secondary ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />


                            </div>
                        </div>

                    </div>
                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src=" img/Cart (8).png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Jr.Zoom Soccer Cleats</h5>
                                <p className='card-text text-danger'>$820</p>
                                <CiStar className='text-warning ' /><CiStar className='text-secondary ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />


                            </div>
                        </div>

                    </div>
                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src=" img/Cart (9).png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">GP11 Shooter USB Game</h5>
                                <p className='card-text text-danger'>$820</p>
                                <CiStar className='text-warning ' /><CiStar className='text-secondary ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />


                            </div>
                        </div>

                    </div>
                    <div className='col-3'>
                        <div className="card castyle" >
                            <img src=" img/Cart (10).png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Quited Satin Jacqet</h5>
                                <p className='card-text text-danger'>$820</p>
                                <CiStar className='text-warning ' /><CiStar className='text-secondary ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' /><CiStar className='text-warning ' />


                            </div>
                        </div>

                    </div>
                </div>
                <br></br>
                <div className='category'>
                    <button className='ory' >View All Products</button>
                </div>

                <br></br><br></br>
                <div className='row'>
                    <div className='d-flex'>
                        <div className="chotard">
                            <p className='name'>Featured</p>
                        </div>
                    </div>

                </div>
                <br></br>
                <h4>New Arrival</h4>
                <br></br>

                <div className='row'>
                    <div className='col-6'>
                        <div className='cardstyle'>
                            <img src="img/Frame 684.png " className="card-img-top loud" alt="..." />/

                        </div>
                    </div>


                    <div className='col-6'>

                        <div className='card castyle'>
                            <img src="img/Frame 685.png" className="card-img-top" alt="..." />/


                        </div>


                        <div className='col-12'>
                            <div className='container'>
                                <div className='row' >
                                    <div className='col-6'>

                                        <div className='card castyle'>
                                            <img src="img/Frame 686.png" className="card-img-top" alt="..." />
                                        </div>

                                    </div>


                                    <div className='col-6'>

                                        <div className='card castyle'>
                                            <img src="img/Frame 687.png" className="card-img-top" alt="..." />
                                        </div>

                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>

                <br></br><br></br>
                <div className='row justify-content-around'>
                    <div className='col-2  '>
                        <div className='card castyle'>
                            <img src="img/Services.png" className="card-img-top" alt="..." /></div>
                        <div className='lol'>
                            <h6>FREE AND FAST DELIVERY</h6>
                            <p>free delivery for all orders over $124</p>

                        </div>

                    </div>
                    <div className='col-2 '>
                        <div className='card castyle'>
                            <img src="img/Services (1).png" className="card-img-top" alt="..." />   </div>
                        <div className='lol'>
                            <h6>24/7 CUSTOMER SERVICE</h6>
                            <p>friendly 24/7 customer support</p>
                        </div>
                    </div>


                    <div className='col-2 '>
                        <div className='card castyle'>
                            <img src="img/Services (2).png " className="card-img-top" alt="..." /></div>
                        <div className='lol'>
                            <h6>MONEY BACK GUARANTEE</h6>
                            <p>we return money with 30 days</p>

                        </div>
                    </div>
                </div>
                <br></br><br></br>
                <div className='row mint' >

                    <div className='col-2'>

                        <h5>Exclusive</h5>
                        <h6>Subscribe</h6>
                        <p>100% off your first order</p>
                        <button>Enter your mail</button>
                    </div>

                    <div className='col-2'>
                        <h5>Support</h5>
                        <p>111 Bijay saranai,Dhaka,<br></br>Bangaladesh</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88014-98765-5555</p>
                    </div>
                    <div className='col-2'>
                        <h6>MY ACCOUNT</h6>
                        <p>Login/Register</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                    </div>
                    <div className='col-2'>

                        <h6>QUICK LINK</h6>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>


                    </div>

                    <div className='col-4'>
                        <h6>DOWNLOAD APP</h6>
                        <p>Save $3 with App New User Only</p>
                        <BsQrCode className='adj' />
                        <div className='tops'>
                            <button className='rad'> <FaArrowAltCircleRight />Get in on Google play</button> </div>
                        <div className='row pl-4'>
                            <div className='bottom'>
                                <button className='rad' ><FaApple />Download on site App </button> </div>
                        </div>

                        <FaSquareFacebook className='fir' /><FaTwitterSquare className='fir' /><FaInstagram className='fir' /><FaWhatsapp className='fir' />

                    </div>
                    <hr></hr>
                    <p className='para'><FaRegCopyright /> Copyright Rimel 2024. All rights reserved</p>
                </div>


                <br></br><br></br><br></br>

                <div className='container-fluid top'>

                    <h6 className='top'>Summer Sale For All Swim Suit And Free Express Delivery-Offer 50%!
                        <a href="#">ShopNow</a></h6>
                </div>
                <br></br>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'><h3>Exclusive</h3></div>
                        <div className='col-5'>
                            <a href="#" className='p-3 text-black'>Home</a>
                            <a href="#" className='p-3 text-black'>Contact</a>
                            <a href="#" className='p-3 text-black'>About</a>
                            <a href="#" className='p-3 text-black'>Signup</a>

                        </div>
                        <div className='col-6'>
                            <input type="text" className="pholder" placeholder='What are you looking for?' />
                            <CiHeart />
                            <MdTrolley />
                        </div>
                        <hr />
                        <br></br>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='card castyle'>
                                    <img src="src/assets/Side Image.png" className="card-img-top" alt="..." />   </div>


                            </div>

                            <div className='col-5'>

                                <form action='/' method='POST'>
                                    <h1>Create Your Account</h1>
                                    <p>Enter Your Details Below</p>
                                    <div className='form-group'>

                                        <input type="text" placeholder='Name' className='form-control' /><br></br>
                                        <input type="text" placeholder="E-mail" className="form-control" /><br></br>
                                        <input type="password" placeholder="Password" className="form-control" /><br></br>
                                        <button className='btn btn-danger btn-block form-control'>Create Account</button><br></br>
                                        <button className='btn-block form-control'>Signup with Google</button><br></br>
                                        <p className='text'>Already have a account?
                                            <a href="#">Login</a>
                                        </p>

                                    </div>



                                </form>
                            </div>

                        </div>


                    </div>

                    <div className='row mint' >

                        <div className='col-2'>

                            <h5>Exclusive</h5>
                            <h6>Subscribe</h6>
                            <p>100% off your first order</p>
                            <button>Enter your mail</button>
                        </div>

                        <div className='col-2'>
                            <h5>Support</h5>
                            <p>111 Bijay saranai,Dhaka,<br></br>Bangaladesh</p>
                            <p>exclusive@gmail.com</p>
                            <p>+88014-98765-5555</p>
                        </div>
                        <div className='col-2'>
                            <h6>MY ACCOUNT</h6>
                            <p>Login/Register</p>
                            <p>Cart</p>
                            <p>Wishlist</p>
                            <p>Shop</p>
                        </div>
                        <div className='col-2'>

                            <h6>QUICK LINK</h6>
                            <p>Privacy Policy</p>
                            <p>Terms of Use</p>
                            <p>FAQ</p>
                            <p>Contact</p>


                        </div>

                        <div className='col-4'>
                            <h6>DOWNLOAD APP</h6>
                            <p>Save $3 with App New User Only</p>
                            <BsQrCode className='adj' />
                            <div className='tops'>
                                <button className='rad'> <FaArrowAltCircleRight />Get in on Google play</button> </div>
                            <div className='row pl-4'>
                                <div className='bottom'>
                                    <button className='rad' ><FaApple />Download on site App </button> </div>
                            </div>

                            <FaSquareFacebook className='fir' /><FaTwitterSquare className='fir' /><FaInstagram className='fir' /><FaWhatsapp className='fir' />

                        </div>
                        <hr></hr>
                        <p className='para'><FaRegCopyright /> Copyright Rimel 2024. All rights reserved</p>
                    </div>





                </div>
















                <br></br><br></br><br></br>

                <div className='container-fluid top'>

                    <h6 className='top'>Summer Sale For All Swim Suit And Free Express Delivery-Offer 50%!
                        <a href="#">ShopNow</a></h6>
                </div>
                <br></br>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'><h3>Exclusive</h3></div>
                        <div className='col-5'>
                            <a href="#" className='p-3 text-black'>Home</a>
                            <a href="#" className='p-3 text-black'>Contact</a>
                            <a href="#" className='p-3 text-black'>About</a>
                            <a href="#" className='p-3 text-black'>Signup</a>

                        </div>
                        <div className='col-6'>
                            <input type="text" className="pholder" placeholder='What are you looking for?' />
                            <CiHeart />
                            <MdTrolley />
                        </div>
                        <hr />
                        <br></br>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='card castyle'>
                                    <img src="src/assets/Side Image.png" className="card-img-top" alt="..." />   </div>


                            </div>

                            <div className='col-5'>

                                <form action='/' method='POST'>
                                    <h1>Login into Exclusive</h1>
                                    <p>Enter Your Details Below</p>
                                    <div className='form-group'>

                                        
                                        <input type="text" placeholder="E-mail or Phone no" className="form-control" /><br></br>
                                        <input type="password" placeholder="Password" className="form-control" /><br></br>
                                        <button className='btn btn-danger '>Login 
                                        </button><br></br>
                                        <p className='for'>Forget Password?</p>
                                    </div>



                                </form>
                            </div>

                        </div>


                    </div>
 <br></br><br></br>
                    <div className='row mint' >

                        <div className='col-2'>

                            <h5>Exclusive</h5>
                            <h6>Subscribe</h6>
                            <p>100% off your first order</p>
                            <button>Enter your mail</button>
                        </div>

                        <div className='col-2'>
                            <h5>Support</h5>
                            <p>111 Bijay saranai,Dhaka,<br></br>Bangaladesh</p>
                            <p>exclusive@gmail.com</p>
                            <p>+88014-98765-5555</p>
                        </div>
                        <div className='col-2'>
                            <h6>MY ACCOUNT</h6>
                            <p>Login/Register</p>
                            <p>Cart</p>
                            <p>Wishlist</p>
                            <p>Shop</p>
                        </div>
                        <div className='col-2'>

                            <h6>QUICK LINK</h6>
                            <p>Privacy Policy</p>
                            <p>Terms of Use</p>
                            <p>FAQ</p>
                            <p>Contact</p>


                        </div>

                        <div className='col-4'>
                            <h6>DOWNLOAD APP</h6>
                            <p>Save $3 with App New User Only</p>
                            <BsQrCode className='adj' />
                            <div className='tops'>
                                <button className='rad'> <FaArrowAltCircleRight />Get in on Google play</button> </div>
                            <div className='row pl-4'>
                                <div className='bottom'>
                                    <button className='rad' ><FaApple />Download on site App </button> </div>
                            </div>

                            <FaSquareFacebook className='fir' /><FaTwitterSquare className='fir' /><FaInstagram className='fir' /><FaWhatsapp className='fir' />

                        </div>
                        <hr></hr>
                        <p className='para'><FaRegCopyright /> Copyright Rimel 2024. All rights reserved</p>
                    </div>





                </div>

















            </div>
        </div>
    )
}
