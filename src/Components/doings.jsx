import web from "./../assets/images/computer.png"
import app from "./../assets/images/phone.png"
import framer from "./../assets/images/framer.png"


export const Doings = () => {
    return (
        <div className="companies">
            <div className="bx-1 ">
                    <div className="company-img img-sp">
                        <img src={web} alt="E.M" />
                    </div>
                    <div className="company-role l-sp">
                        <h4>Full Page Website Design</h4>
                        <p className="light font">Crafting immersive and engaging full-page websites designs that captivate audiences and deliver a seamless user experience.</p>
                        
                    </div>
            </div>
            <div className="bx-1 spacing">
                    <div className="company-img img-sp">
                        <img src={app} alt="E.M" />
                    </div>
                    <div className="company-role l-sp">
                        <h4>Mobile App Designs</h4>
                        <p className="light font">Creating compelling first impression with innovative mobile app designs, Elevating your brands online presence effortlessly.</p>
                        
                    </div>
            </div>
            <div className="bx-1">
                    <div className="company-img img-sp">
                        <img src={framer} alt="E.M" />
                    </div>
                    <div className="company-role l-sp">
                        <h4 >Framer Development</h4>
                        <p className="light font">Transforming designs with captivating digital realities with precision and innovation using design tool called Framer.</p>
                        
                    </div>
            </div>
            
        </div>
    )
}