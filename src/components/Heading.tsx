import React from "react";

const Heading = () => {
    return (
        <div className="Box mb-5 text-center page-heading">
            <div className="heading-with-description bg-dark p-3">
                <h1 className="h1">Trending</h1>
                <p className="heading-p">
                    {window.location.pathname == "/"
                        ? "See what the GitHub community is most excited about today."
                        : "These are the developers building the hot tools today."}
                </p>
            </div>
        </div>
    );
};

export default Heading;
