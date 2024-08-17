import React from 'react';

const Header = () => {
    return (
        <div className="d-flex col-12 header ">
            <div className="col-2 text-center">Java Name</div>
            <div className="col-2 text-center">Column Name</div>
            <div className="col-1 text-center">ID</div>
            <div className="col-1 text-center">Type</div>
            <div className="col-2 text-center">Data type SQL</div>
            <div className="col-2 text-center">Validate</div>
            <div className="col-2 text-center">Regex</div>
        </div>
    );
};

export default Header;
