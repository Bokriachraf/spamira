import { Visibility } from "@material-ui/icons"
import "./widgetSm.css"
import Achraf from "./img/1.PNG";

function WidgetSm() {
    return (
        <div>
          <div className="widgetSm">
              <span className="widgetSmTitle">
                  New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={Achraf} alt="" className="widgetSmImg" />
                  <div className="widgetSmUser">
                      <span className="widgetSmUsername">Achraf bokri</span>
                      <span className="widgetSmUserTitle">Software Developper</span>

                  </div>
                  <button className="widgetSmButton">
                      <Visibility className="widgetSmIcon"/>
                      Display
                  </button>
                </li>
                 <li className="widgetSmListItem">
                    <img src={Achraf} alt="" className="widgetSmImg" />
                  <div className="widgetSmUser">
                      <span className="widgetSmUsername">Achraf bokri</span>
                      <span className="widgetSmUserTitle">Software Developper</span>

                  </div>
                  <button className="widgetSmButton">
                      <Visibility className="widgetSmIcon"/>
                      Display
                  </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Achraf} alt="" className="widgetSmImg" />
                  <div className="widgetSmUser">
                      <span className="widgetSmUsername">Achraf bokri</span>
                      <span className="widgetSmUserTitle">Software Developper</span>

                  </div>
                  <button className="widgetSmButton">
                      <Visibility className="widgetSmIcon"/>
                      Display
                  </button>
                </li>
                </ul>      
                    
          </div>  
        </div>
    )
}

export default WidgetSm
