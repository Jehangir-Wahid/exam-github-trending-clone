import React from "react";
import { RepositoryType } from "../redux/types";

const Repository: React.FC<RepositoryType> = ({
    username,
    repositoryName,
    url,
    description,
    language,
    languageColor,
    totalStars,
    forks,
    starsSince,
    builtBy,
}) => {
    return (
        <div>
            <article className="Box-row parent-article">
                <div className="float-right d-flex">
                    <div className="js-toggler-container js-social-container starring-container BtnGroup d-flex">
                        <div className="starred js-social-form BtnGroup-parent flex-auto">
                            <button
                                aria-label="Unstar this repository"
                                type="button"
                                className="js-toggler-target rounded-left-2 border-right-0 btn-sm btn BtnGroup-item"
                            >
                                <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    className="octicon octicon-star-fill starred-button-icon d-none d-md-inline-block mr-2"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"
                                    ></path>
                                </svg>
                                <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    className="octicon octicon-star-fill starred-button-icon mr-0 d-inline-block d-md-none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"
                                    ></path>
                                </svg>
                                <span className="d-none d-md-inline">
                                    Starred
                                </span>
                            </button>
                        </div>
                        <div className="unstarred js-social-form BtnGroup-parent flex-auto">
                            <button
                                aria-label="Star
                                this
                                repository"
                                type="submit"
                                className="js-toggler-target rounded-left-2 btn-sm btn BtnGroup-item"
                            >
                                <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    className="octicon octicon-star d-none d-md-inline-block mr-2"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                                    ></path>
                                </svg>
                                <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    className="octicon octicon-star mr-0 d-inline-block d-md-none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                                    ></path>
                                </svg>
                                <span className="d-none d-md-inline">Star</span>
                            </button>
                        </div>
                        <details
                            id="details-6a4320"
                            className="details-reset details-overlay BtnGroup-parent js-user-list-menu d-inline-block position-relative"
                        >
                            <summary
                                aria-label="Add this repository to a list"
                                className="btn-sm btn BtnGroup-item px-2 float-none"
                                aria-haspopup="menu"
                                role="button"
                            >
                                <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    className="octicon octicon-triangle-down"
                                >
                                    <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                                </svg>
                            </summary>
                        </details>
                    </div>
                </div>

                <h1 className="h3 lh-condensed">
                    <a href={url}>
                        <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            className="octicon octicon-repo mr-1 color-fg-muted"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                            ></path>
                        </svg>
                        <span className="text-normal">{username} /</span>
                        {repositoryName}
                    </a>
                </h1>
                <p className="col-9 color-fg-muted my-1 pr-4">{description}</p>

                <div className="f6 color-fg-muted mt-2">
                    <span className="d-inline-block ml-0 mr-3">
                        <span
                            className="repo-language-color"
                            style={{ backgroundColor: `${languageColor}` }}
                        ></span>
                        <span data-item-prop="programmingLanguage">
                            {language}
                        </span>
                    </span>

                    <a
                        href={url + "/stargazers"}
                        className="Link--muted d-inline-block mr-3"
                    >
                        <svg
                            aria-label="star"
                            role="img"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            className="octicon octicon-star"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                            ></path>
                        </svg>
                        {totalStars}
                    </a>
                    <a
                        href={url + "/network/members." + repositoryName}
                        className="Link--muted d-inline-block mr-3"
                    >
                        <svg
                            aria-label="fork"
                            role="img"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            className="octicon octicon-repo-forked"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            ></path>
                        </svg>
                        {forks}
                    </a>
                    <span className="d-inline-block mr-3">
                        Built by
                        {builtBy.map((developer, index) => (
                            <a
                                className="d-inline-block"
                                key={index}
                                href={developer.url}
                            >
                                <img
                                    className="avatar mb-1 avatar-user"
                                    src={developer.avatar}
                                    width="20"
                                    height="20"
                                    alt={developer.username}
                                />
                            </a>
                        ))}
                    </span>
                    <span className="d-inline-block float-sm-right">
                        <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            className="octicon octicon-star"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                            ></path>
                        </svg>
                        {starsSince} stars today
                    </span>
                </div>
            </article>
        </div>
    );
};

export default Repository;
