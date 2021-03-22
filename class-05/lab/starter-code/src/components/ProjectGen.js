/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components


import SmlProj from './SmlProj';
import LrgProj from './LrgProj';


class ProjectGen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            big: this.props.size,

        }
    }
   


  render() {
   
    return (
  
        <div class="card-container">
        {
        this.state.big ?            
      this.props.jorp.map((proj) => (<LrgProj class="lrg-prj" title={proj.title} imge={proj.img} desc={proj.lrgtxt} points={proj.points} />))
        :
      this.props.jorp.map((proj) => ( <SmlProj class="sml-prj" title={proj.title} imge={proj.img} desc={proj.smltxt} />))
  }
    </div>
    );

  }
}

export default ProjectGen;
