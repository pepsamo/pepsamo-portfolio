import * as React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo from '../../assets/images/me.jpg';
const Biography = () => {
      return (<div className="row">
        <div className="col-xs-12">
        <div className="section-container-spacer text-center">
            <h1 className="h2">Su di me</h1>
          </div>

          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="row">
                <div className="col-xs-12 col-md-6">
                <h3>Consectetur adipiscing elit</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus at sem quis varius. 
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultrices hendrerit nisl.</p>
                  <h3>Ut enim ad minim </h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                  <h3>Maecenas luctus at sem quis varius</h3>
                  <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus iaculis magna sagittis elit sagittis, at hendrerit lorem venenatis. Morbi accumsan iaculis blandit. Cras ultrices hendrerit nisl.</p>
                </div>
                <div className="col-xs-12 col-md-6">
                  <img src={photo} className="rounded img-fluid" alt="Immagine profilo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)}

export default Biography;
