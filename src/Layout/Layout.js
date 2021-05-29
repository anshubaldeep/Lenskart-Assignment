import React from 'react';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';


const Layout=(props)=>{
        return(
            <>
                <CustomNavbar/>
                {props.children}
                <Footer/>
            </>
        );
}

export default Layout;