import React from "react";

import Modal from './modal/modal';

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SignupFormContainer from './session/signup_form_container';

import LoginFormContainer from './session/login_form_container';

import LogoutFormContainer from './session/logout_form_container';

import AccountFormsContainer from './session/account_forms_container';

import NavBarContainer from './navbar/navbar_container';

import Main from './main/main';

import AboutMain from './main/about_main';

import MaterialsMain from './main/materials_main';

import AccessoriesMain from './main/accessories_main';

import Materials from './materials/materials';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import AboutMaterials from "./materials/about_materials";

// import AboutMaterialsSub from './materials/about_materials_sub';

// import MoreMaterialsMain from './materials/more_materials_main';

import Tree from './materials/tree/tree';

import AboutTreeMaterial from './materials/tree/about_tree_material';

import AboutTreeSub from './materials/tree/about_tree_sub';

import MoreTreeMain from './materials/tree/more_tree_main';

import Sugar from './materials/sugar/sugar';

import AboutSugarMaterial from './materials/sugar/about_sugar_material';

import AboutSugarSub from './materials/sugar/about_sugar_sub';

import MoreSugarMain from './materials/sugar/more_sugar_main';

import Trino from './materials/trino/trino';

import AboutTrinoMaterial from './materials/trino/about_trino_material';

import AboutTrinoSub from './materials/trino/about_trino_sub';

import MoreTrinoMain from './materials/trino/more_trino_main';

import ShoeIndexContainer from './shoes/shoe_index_container';

import About from './about/about';

import Footer from './footer/footer_container';


const App = () => (
    <div>
        <div>
            <Modal />
            {/* <div>
                <Link to="/shoes" className="nest-link">
                    <h1>You're $50 away from free shipping</h1>
                </Link>
            </div>    */}
            <Route path="/" component={NavBarContainer}/> 
        </div>
        <Switch>
            <Route exact path="/" component={Main}/> 
            <Route exact path="/account" component={AccountFormsContainer}/> 
            <Route exact path="/materials" component={Materials} />
            <Route exact path="/materials/tree" component={Tree} /> 
            <Route exact path="/materials/sugar" component={Sugar} /> 
            <Route exact path="/materials/trino" component={Trino} /> 
            <Route exact path="/shoes/:gender" component={ShoeIndexContainer} />
            {/* <Route exact path="/about" component={About} /> */}

        </Switch>
        <Route exact path="/" component={AboutMain} /> 
        <Route exact path="/" component={MaterialsMain} />

        <div className='footer'>
            <Footer />
        </div>
        {/* <Route exact path="/" component={AccessoriesMain} /> */}

        <Route exact path="/materials" component={AboutMaterials} />
        {/* <Route exact path="/materials" component={AboutMaterialsSub} />
        <Route exact path="/materials" component={MoreMaterialsMain} /> */}

        <Route exact path="/materials/tree" component={AboutTreeMaterial} />
        {/* <Route exact path="/materials/tree" component={AboutTreeSub} />
        <Route exact path="/materials/tree" component={MoreTreeMain} />  */}

        <Route exact path="/materials/sugar" component={AboutSugarMaterial} />
        {/* <Route exact path="/materials/sugar" component={AboutSugarSub} />
        <Route exact path="/materials/sugar" component={MoreSugarMain} />    */}

        <Route exact path="/materials/trino" component={AboutTrinoMaterial} />
        {/* <Route exact path="/materials/trino" component={AboutTrinoSub} />
        <Route exact path="/materials/trino" component={MoreTrinoMain} />    */}
    </div>

);

export default App;