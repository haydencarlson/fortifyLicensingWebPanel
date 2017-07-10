import React, {Component} from 'react';
import NavBar from '../partials/NavBar_Partial.js'
import SubNavBar from '../partials/SubNavBar_Partial.js';
import DocumentLoader from '../partials/DocumentLoader_Partial.js';
import DocumentPreview from '../partials/PreviewDocument_Partial.js';
import TemplateLoader from '../partials/TemplateLoader_Partial.js';
class Main extends Component {
  render() {
    return (
    	<div>
        <div id="BannerBar">
          <span id="BannerBarLogo"> EcoBind </span>
        </div>
    		<div id="NavBarContainer">
    			<NavBar id="NavBar"/>
    		</div>
    		<SubNavBar/>
        <div id="DocumentManager">
        	<TemplateLoader/>
          <DocumentLoader/>
        </div>
    	   <DocumentPreview/>
    	</div>
    );
  };
};


export default Main;
