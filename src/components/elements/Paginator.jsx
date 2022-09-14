import React, {useState} from 'react';
import '../../assets/css/styles/Paginator.css'

const Paginator = ({currentPage, totalPage}) => {

    return (
        <div className='paginador-container'>
            <ul className='paginator-row'>
                <li>
                    <button>
                        <span className="material-symbols-outlined">
                            arrow_back_ios
                        </span>
                    </button>
                </li>
                <li>
                    <span>{currentPage}</span>{' / '}
                    <span>{totalPage}</span>
                </li>
                <li>
                    <button>
                        <span className="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </button>
                </li>
            </ul>

        </div>
    );
};

export default Paginator;

