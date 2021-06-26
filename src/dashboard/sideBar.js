import React from 'react';
import Message from './message/index';
import Admin from './admin';
import Vender from './vender';
import Rent from './rent';
import AdminAll from './adminAll';
import Addnew from './addnew';
import VenderRent from './venderRent';
import './dashboard.css';
const SideBar = ({ show,type, handleHide }) => {
    const [act, setAct] = React.useState({
        main: true,
        msg: false,
        add: false,
        all: false,
        rent: false
    });
    const clearAll = () => {
        setAct({
            main: false,
            msg: false,
            add: false,
            all: false,
            rent: false
        })
    }
    const handleClick = (value) => {
        clearAll();
        setAct(act => {
            let action = act;
            action[value] = true;
            return action;
        })
    }
    return (
        <>
            <section class={`side_bar ${show && 'side_bar-show'}`}>
            <a class="closebtn sidebar-btn"><i onClick={handleHide} class="fas fa-times" ></i></a>

           <div class="dashboard_buttons" id="change_active">
                  {
                    (type === 'renting') ?
                        <a class={`btn non-active ${act.main && 'active'}`} id="dashboard"
                            onClick={()=>handleClick('main')}
                        ><span>
                            Renting History</span></a>
                        :
                        <a class={`btn non-active ${act.main && 'active'}`} id="dashboard"
                            onClick={()=>handleClick('main')}
                        ><span>
                            Dashboard</span></a>
                }
                <a class={`btn non-active ${act.msg && 'active'}`} onClick={()=>handleClick('msg')}><span>Message Window</span></a>
                {
                    (type === 'renting') ? "" :
                        (type === 'vender') ?
                            <a class={`btn non-active ${act.add && 'active'}`}
                                onClick={()=>handleClick('add')}
                            ><span>Add new product</span></a> :
                            <a class={`btn non-active ${act.all && 'active'}`}
                                onClick={()=>handleClick('all')}
                            ><span>All Product</span></a>
                }
                
                {
                    (type === 'vender') ? 
                        <a class={`btn non-active ${act.rent && 'active'}`}
                            onClick={()=>handleClick('rent')}
                        ><span>Renting history</span></a>
                        : ""
                }
                
                </div>
            </section>
            {
                act.main ?
                    type === 'admin' ? <Admin /> :
                        type === 'vender' ? <Vender /> : <Rent />
                    :
                    ''
            }
            {
                act.msg ? <Message /> : ""
            }
            {
                act.all ? <AdminAll handleClick={handleClick} /> : ""
            }
            {
                act.add ? <Addnew /> : ""
            }
            {
                act.rent ? <VenderRent handleClick={handleClick} /> : ""
            }
        </>
    )
}

export default SideBar;
