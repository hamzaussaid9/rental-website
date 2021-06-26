import React from 'react'
import DashHead from './head';
import DashFoot from './foot'
import SideBar from './sideBar';
const Index = () => {
    return (
        <>
            <section className="dashboard">
                <section className="dash-content">                    
                    <DashHead />  
                    <DashFoot />
                </section>
            </section>
        </>
    )
}

export default Index;
