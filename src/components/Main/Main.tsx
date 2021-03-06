import * as React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/index.scss';
import './Main.scss';

class Main extends React.Component {
    render() {
        return (
            <div className="hero-full-container background-image-container white-text-container">
                <div className="container">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default Main;