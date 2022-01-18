import React from "react";

interface Iprops {
    isRepositoryPage: boolean;
}

const ListingHeader: React.FC<Iprops> = ({ isRepositoryPage }) => {
    return (
        <div className="bg-dark">
            <div className="Box-header d-md-flex flex-items-center flex-justify-between">
                <nav className="subnav mb-0" aria-label="Trending" data-pjax="">
                    <a
                        className={
                            "js-selected-navigation-item subnav-item bg-dark" +
                            (isRepositoryPage ? " current-page" : "")
                        }
                        aria-current="page"
                        href="/"
                    >
                        Repositories
                    </a>
                    <a
                        className={
                            "js-selected-navigation-item subnav-item bg-dark" +
                            (!isRepositoryPage ? " current-page" : "")
                        }
                        href="/developers"
                    >
                        Developers
                    </a>
                </nav>

                <div className="d-sm-flex flex-items-center flex-md-justify-end mt-3 mt-md-0 table-list-header-toggle ml-n2 ml-md-0">
                    {isRepositoryPage ? (
                        <div className="position-relative mb-3 mb-sm-0">
                            <details
                                className="details-reset details-overlay select-menu select-menu-modal-right hx_rsm"
                                id="select-menu-spoken-language"
                            >
                                <summary
                                    data-view-component="true"
                                    className="select-menu-button"
                                    aria-haspopup="menu"
                                    role="button"
                                >
                                    Spoken Language:
                                    <span
                                        data-menu-button=""
                                        data-view-component="true"
                                        className="text-bold"
                                    >
                                        Any
                                    </span>
                                </summary>
                            </details>
                        </div>
                    ) : null}

                    <div className="mb-3 mb-sm-0">
                        <details
                            className="details-reset details-overlay select-menu select-menu-modal-right hx_rsm"
                            id="select-menu-language"
                        >
                            <summary
                                data-view-component="true"
                                className="select-menu-button"
                                aria-haspopup="menu"
                                role="button"
                            >
                                Language:
                                <span
                                    data-menu-button=""
                                    data-view-component="true"
                                    className="text-bold"
                                >
                                    Any
                                </span>
                            </summary>
                        </details>
                    </div>

                    <div>
                        <details
                            className="details-reset details-overlay select-menu select-menu-modal-right hx_rsm hx_rsm--auto-height"
                            id="select-menu-date"
                        >
                            <summary
                                data-view-component="true"
                                className="select-menu-button"
                                aria-haspopup="menu"
                                role="button"
                            >
                                Date range:
                                <span
                                    data-menu-button=""
                                    data-view-component="true"
                                    className="text-bold"
                                >
                                    Today
                                </span>
                            </summary>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingHeader;
