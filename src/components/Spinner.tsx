import React from "react";

const Spinner = () => {
    return (
        <div>
            <div className="container d-flex justify-content-center my-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="spinner-border text-secondary"
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
