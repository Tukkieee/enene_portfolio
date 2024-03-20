import { FaBehance } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import Calnita from "./../assets/images/Rectangle7.png";
import Osuma from "./../assets/images/Rectangle8.png";
import Learna from "./../assets/images/learna.png";
import Shape from "./../assets/images/shape.png";
import Commerce from "./../assets/images/e-com.png";
import Education from "./../assets/images/edu.png";
export const Works = () => {
    return (
        <div className="project-list">
            <div className="project-box">
                <div className="project-img">
                    <a href="*"><img src={Calnita} alt="calnita" /></a>
                </div>
                <div className="project-name">
                    <h3>Calnita</h3>
                    <div className="project-name action">
                        <div className="state"></div>
                        <h4>Live</h4>
                    </div>
                </div>
                <div className="project-about">
                    <p>A product discovery platform offering hyper-personalised beauty experiences, empower brands and consumer in the beauty industry.</p>
                </div>
            </div>
            <div className="project-box">
                <div className="project-img">
                    <a href="*"><img src={Osuma} alt="osuma" /></a>
                </div>
                <div className="project-name">
                    <h3>Osuma Suya</h3>
                    <div className="project-name action">
                        <div className="state"></div>
                        <h4>Live</h4>
                    </div>
                </div>
                <div className="project-about">
                    <p>Nigerian cuisine to the forefront of mainstream dining, allowing our customers to immerse themselves in the richness of our heritage. </p>
                </div>
            </div>
            <div className="project-box">
                <div className="project-img">
                    <a href="*"><img src={Learna} alt="learna" /></a>
                </div>
                <div className="project-name">
                    <h3>Learna</h3>
                    <div className="project-name action">
                        <FaMedium style={{ marginRight: ".3rem" }} />
                        <h4>Medium</h4>
                    </div>
                </div>
                <div className="project-about">
                    <p>An innovative eLearning platform, is transforming the landscape of tech education.  keen on enhancing users technical skills.</p>
                </div>
            </div>
            <div className="project-box">
                <div className="project-img">
                    <a href="*"><img src={Shape} alt="shapesend" /></a>
                </div>
                <div className="project-name">
                    <h3>Shapesend</h3>
                    <div className="project-name action">
                        <FaMedium style={{ marginRight: ".3rem" }} />
                        <h4>Medium</h4>
                    </div>
                </div>
                <div className="project-about">
                    <p>A Fintech application, is reshaping the way people use money. With focus on cross-border transactions and investment opportunities.</p>
                </div>
            </div>
            <div className="project-box">
                <div className="project-img">
                    <a href="*"><img src={Commerce} alt="e-commerce" /></a>
                </div>
                <div className="project-name">
                    <h3>E-commerce</h3>
                    <div className="project-name action">
                        <FaBehance style={{ marginRight: ".3rem" }} />
                        <h4>Behance</h4>
                    </div>
                </div>
                <div className="project-about">
                    <p>Shoe store landing page to drive proper customer experience and ease product checkout.</p>
                </div>
            </div>
            <div className="project-box">
                <div className="project-img">
                    <a href="*"><img src={Education} alt="education" /></a>
                </div>
                <div className="project-name">
                    <h3>Calnita</h3>
                    <div className="project-name action">
                        <FaBehance style={{ marginRight: ".3rem" }} />
                        <h4>Behance</h4>
                    </div>
                </div>
                <div className="project-about">
                    <p>An international student culsultancy that helps prospective international achieve their study abroad dream.</p>
                </div>
            </div>

        </div>
    )
}