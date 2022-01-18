import React from "react";

const Footer = () => {
    return (
        <div>
            <footer
                className="footer width-full container-lg p-responsive"
                role="contentinfo"
            >
                <div className="footer-container position-relative d-flex flex-items-center pb-2 f6 color-fg-muted border-top color-border-muted flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap mt-6 pt-6">
                    <ul className="list-style-none d-flex flex-wrap col-0 col-lg-2 flex-justify-start flex-lg-justify-between mb-2 mb-lg-0">
                        <li className="mt-2 mt-lg-0 d-flex flex-items-center">
                            <a
                                aria-label="Homepage"
                                title="GitHub"
                                className="footer-octicon mr-2"
                                href="https://github.com"
                            >
                                <svg
                                    aria-hidden="true"
                                    height="24"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="24"
                                    data-view-component="true"
                                    className="octicon octicon-mark-github"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                    ></path>
                                </svg>
                            </a>{" "}
                            <span>© 2022 GitHub, Inc.</span>
                        </li>
                    </ul>
                    <ul className="list-style-none d-flex flex-wrap col-12 col-lg-8 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
                        <li className="mr-3 mr-lg-0">
                            <a
                                href="https://docs.github.com/en/github/site-policy/github-terms-of-service"
                                data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to terms","label":"text:terms","originating_url":"https://github.com/trending","user_id":17316011}}'
                                data-hydro-click-hmac="5ea3e7c8161138ab2b7c5a0ef17e781bcd89e36a10442cc3df6e21626846c466"
                                data-analytics-event='{"category":"Footer","action":"go to terms","label":"text:terms"}'
                            >
                                Terms
                            </a>
                        </li>
                        <li className="mr-3 mr-lg-0">
                            <a
                                href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
                                data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to privacy","label":"text:privacy","originating_url":"https://github.com/trending","user_id":17316011}}'
                                data-hydro-click-hmac="43626ba068b1e5058e3ffe76102c64f5f69b96a5f66a851aba5fc0ba06dd8c80"
                                data-analytics-event='{"category":"Footer","action":"go to privacy","label":"text:privacy"}'
                            >
                                Privacy
                            </a>
                        </li>
                        <li className="mr-3 mr-lg-0">
                            <a
                                data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to security","label":"text:security","originating_url":"https://github.com/trending","user_id":17316011}}'
                                data-hydro-click-hmac="58bce877c60a9416bf873c223ff744f827b9c81f22c5d959f45b13b52052f68b"
                                data-analytics-event='{"category":"Footer","action":"go to security","label":"text:security"}'
                                href="https://github.com/security"
                            >
                                Security
                            </a>
                        </li>
                        <li className="mr-3 mr-lg-0">
                            <a
                                href="https://www.githubstatus.com/"
                                data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to status","label":"text:status","originating_url":"https://github.com/trending","user_id":17316011}}'
                                data-hydro-click-hmac="f7d778a8065e6ea48dbc58fd620632eaa6a208c4b1a17761aaa827cb1bf09a51"
                                data-analytics-event='{"category":"Footer","action":"go to status","label":"text:status"}'
                            >
                                Status
                            </a>
                        </li>
                        <li className="mr-3 mr-lg-0">
                            <a
                                data-ga-click="Footer, go to help, text:Docs"
                                href="https://docs.github.com"
                            >
                                Docs
                            </a>
                        </li>
                        <li className="mr-3 mr-lg-0">
                            <a
                                href="https://support.github.com?tags=dotcom-footer"
                                data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to contact","label":"text:contact","originating_url":"https://github.com/trending","user_id":17316011}}'
                                data-hydro-click-hmac="9a174a4feda5fdae9ae36fca42b203c6e48be8e8ba9b058b541b1e8909afd5b6"
                                data-analytics-event='{"category":"Footer","action":"go to contact","label":"text:contact"}'
                            >
                                Contact GitHub
                            </a>
                        </li>
                        <li className="mr-3 mr-lg-0">
                            <a
                                href="https://github.com/pricing"
                                data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to Pricing","label":"text:Pricing","originating_url":"https://github.com/trending","user_id":17316011}}'
                                data-hydro-click-hmac="d646008fa77ae5587c480fde46abbf0ee204be6260221718dbb852029ffdc0b7"
                                data-analytics-event='{"category":"Footer","action":"go to Pricing","label":"text:Pricing"}'
                            >
                                Pricing
                            </a>
                        </li>
                        <li className="mr-3 mr-lg-0">
                            <a
                                href="https://docs.github.com"
                                data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to api","label":"text:api","originating_url":"https://github.com/trending","user_id":17316011}}'
                                data-hydro-click-hmac="10e59d258a949fce00f90fd064f49c0f9d3b2efb7e439c0b69a67d91be0dffb7"
                                data-analytics-event='{"category":"Footer","action":"go to api","label":"text:api"}'
                            >
                                API
                            </a>
                        </li>
                        <li className="mr-3 mr-lg-0">
                            <a
                                href="https://services.github.com"
                                data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to training","label":"text:training","originating_url":"https://github.com/trending","user_id":17316011}}'
                                data-hydro-click-hmac="34a4c9b5ae6808a1effcc67a271f054d82a63ec2dde872f8094ca39243f640f1"
                                data-analytics-event='{"category":"Footer","action":"go to training","label":"text:training"}'
                            >
                                Training
                            </a>
                        </li>
                        <li className="mr-3 mr-lg-0">
                            <a
                                href="https://github.blog"
                                data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to blog","label":"text:blog","originating_url":"https://github.com/trending","user_id":17316011}}'
                                data-hydro-click-hmac="d42b68d7ed9f54ab53ffb274e7d721fe657b00718b5d18fd0b4f60ac401bbedc"
                                data-analytics-event='{"category":"Footer","action":"go to blog","label":"text:blog"}'
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                data-ga-click="Footer, go to about, text:about"
                                href="https://github.com/about"
                            >
                                About
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex flex-justify-center pb-6">
                    <span className="f6 color-fg-muted"></span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
