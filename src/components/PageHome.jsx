import React from 'react';
import Logo from './Logo'
import Nav from '../components/Nav';
import { Button } from 'reactstrap';

class PageHome extends React.Component {

    render() {
        return (
            <div className="startPage">
                <Logo />
                <Nav />
                <Button color="secondary">Start</Button>
            </div>
        )
    }
}

export default PageHome;