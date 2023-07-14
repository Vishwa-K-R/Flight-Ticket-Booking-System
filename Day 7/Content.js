import React from "react";
import "../Navbar/cont.css";
import logo from "../Navbar/cont.png";
import logo1 from "../Navbar/ease.png";
import logo2 from "../Navbar/lprice.png";
import logo3 from "../Navbar/support.png";
const Contents = () =>{
    return(
            <div className="inner-wrap">
        <section className="zig-zag">
                <div className="toprflcont">
                    <div className="hdrtxt">
                        Why Book with
                        <span className="blu">&nbsp;us?</span>
                    </div>
                </div>
                <div className="mfflop">
                    <span className="zig-zag"></span>
                    <div className="divbox">
                        <div className="divimg">
                            <img src={logo} ></img>
                        </div>
                        <div className="divttl">Easy Booking</div>
                        <div className="divpara">We offer easy and convenient flight bookings with attractive offers.</div>
                    </div>
                    <div className="divbox">
                        <div className="divimg">
                            <img src={logo1}></img>
                        </div>
                        <div className="divttl">Lowest Price</div>
                        <div className="divpara">"We ensure low rates on hotel reservation, holiday packages and on flight tickets."</div>
                    </div>
                    <div className="divbox">
                        <div className="divimg">
                            <img src={logo2}></img>
                        </div>
                        <div className="divttl">Exciting Deals</div>
                        <div className="divpara">Enjoy exciting eals on flights, hotels, buses, car rental and tour packages.</div>
                    </div>
                    <div className="divbox">
                        <div className="divimg">
                            <img src={logo3}></img>
                        </div>
                        <div className="divttl">24/7 Support</div>
                        <div className="divpara">
                            "Get assistance 24/7 on any kind of travel related query.  We are happy to assist you."
                        </div>
                    </div>
                </div>
        </section>
            </div>
    )
}
export default Contents;