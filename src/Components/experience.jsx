import EM from "./../assets/images/e.m.png"
import Root from "./../assets/images/Ellipse1.png"
import Pro from "./../assets/images/pro.png"


export const Experience = () => {
    return (
        <div className="companies">
            <div className="bx-1">
                <div className="company-info">
                    <div className="company-img">
                        <img src={EM} alt="E.M" />
                    </div>
                    <div className="company-role">
                        <h4 className="light">Product Designer</h4>
                        <h4>Freelancer</h4>
                    </div>
                </div>
                <div className="company-date light">
                    <h4>2022-Present</h4>

                </div>
            </div>
            <div className="bx-1">
                <div className="company-info">
                    <div className="company-img">
                        <img src={Root} alt="E.M" />
                    </div>
                    <div className="company-role">
                        <h4 className="light">UI UX Designer</h4>
                        <h4>The Roothub</h4>
                    </div>
                </div>
                <div className="company-date light">
                    <h4>2022-2023</h4>

                </div>
            </div>
            <div className="bx-1">
                <div className="company-info">
                    <div className="company-img">
                        <img src={Pro} alt="E.M" />
                    </div>
                    <div className="company-role">
                        <h4 className="light">UI UX Designer</h4>
                        <h4>Jeediof Pro</h4>
                    </div>
                </div>
                <div className="company-date light">
                    <h4>2020-2022</h4>

                </div>
            </div>

        </div>
    )
}