import arm from "./../assets/images/arm.png"
import tool from "./../assets/images/tool.png"


export const Skills = () => {
    return (
        <div className="companies">
            <div className="bx-1 work-sp">
                    <div className="company-img img-sp">
                        <img src={arm} alt="E.M" />
                    </div>
                    <div className="company-role l-sp">
                        <h4>Skills</h4>
                        <div className="light font">
                            <li>Creatitvity</li>
                            <li>User-Centered Design</li>
                            <li>Problem Solving</li>
                            <li>Technical Proficiency</li>
                            <li>Prototyping</li>
                            <li>Communication Skills</li>
                            <li>Collaboration</li>
                            <li>Market Awareness</li>
                        </div>
                        
                    </div>
            </div>
            
            <div className="bx-1 work-sp">
                    <div className="company-img img-sp">
                        <img src={tool} alt="E.M" />
                    </div>
                    <div className="company-role l-sp">
                        <h4 >Tools</h4>
                        <div className="light font">
                            <li>Figma</li>
                            <li>Adobe XD</li>
                            <li>Adobe Photoshop</li>
                            <li>Miro</li>
                            <li>Sketch</li>
                            <li>Framer</li>
                           
                        </div>
                        
                    </div>
            </div>
            
        </div>
    )
}