import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Contact from './ContactComponent';

import { CAMPSITES } from '../shared/campsites';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

    onCampsiteSelect(campsiteId) {
        this.setState({ selectedCampsite: campsiteId });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">NuCamp</NavbarBrand>
                    </div>
                </Navbar>
                <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)} />
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
                <CampsiteInfo campsite={this.state.selectedCampsite} />
                <Route exact path='/contactus' component={Contact} />
                <Route path='/directory/:campsiteId' component={CampsiteWithId} />

            </div>
        );
    };
}
const HomePage = () => {
    return (
        <Home
            campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
            promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
            partner={this.state.partners.filter(partner => partner.featured)[0]}
        />
    );
};
const CampsiteWithId = ({ match }) => {
    return (
        <CampsiteInfo
            campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
            comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
        />
    );
};
export default Main;