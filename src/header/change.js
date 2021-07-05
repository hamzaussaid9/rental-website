import React from 'react';
import { Link } from 'react-router-dom';

const Change = ({ toggle, handleClick }) => {
    const ref = React.useRef(null);
    React.useEffect(() => {
        if (toggle)
            ref.current.style.margin = '0px';
    })
    return (
        <>
            <div className="head-drop">
                <div className={`head-drop-container`} ref={ref}>
                    <div className="head-drop-icon">
                        <i style={{cursor:'pointer'}} onClick={handleClick} className="fas fa-times"></i>
                    </div>
                    <div className="head-drop-content">
                        <Link to='/dashboard/admin'>
                            <button>
                                Admin Dashboard
                            </button>
                        </Link>
                        <Link to='/dashboard/rent'>
                            <button>
                                Renter Dashboard
                            </button>
                        </Link>
                        <Link to='/dashboard/vender'>
                            <button>
                                Vender Dashboard
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Change;
