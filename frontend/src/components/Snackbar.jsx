import React from 'react';
import { useDispatch } from 'react-redux';
import { closeSnackbar } from '../redux/slices/app';

const Snackbar = ({ message, open, severity }) => {
    const dispatch = useDispatch();    

    return (
        
        <div className={`fixed left-0 right-0 bottom-5 m-auto p-4 z-50 w-fit rounded-md drop-shadow-lg text-white flex items-center gap-2 ${severity === 'success' ? 'bg-green-700' : severity === 'error' ? 'bg-red-500' : 'bg-blue-700'}`}>
            {severity === 'success' && <i class="ph ph-check-circle text-xl"></i>}
            {severity === 'error' && <i class="ph ph-warning-circle text-xl"></i>}
            {severity === 'info' && <i class="ph ph-info text-xl"></i>}
            <p>{message}</p>
            <button
                className="ml-4 text-white font-bold"
                onClick={() => {
                    console.log("This is clicked");
                    dispatch(closeSnackbar());
                }}
            >
                <i className="ph ph-x" />
            </button>
        </div>
        
    );
};

export default Snackbar;
