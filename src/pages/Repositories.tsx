import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/reducers";
import { getRepositories } from "../redux/action-creators";
import Repository from "../components/Repository";
import ListingHeader from "../components/ListingHeader";
import Spinner from "../components/Spinner";

const Repositories = () => {
    const repositories = useSelector((state: State) => state.repositories.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRepositories());
    }, []);

    return (
        <div className="Box position-relative container-lg p-responsive pt-6">
            <ListingHeader isRepositoryPage={true} />
            {repositories.length <= 1 ? (
                <Spinner />
            ) : (
                repositories.map(
                    (
                        {
                            rank,
                            username,
                            repositoryName,
                            url,
                            description,
                            language,
                            languageColor,
                            totalStars,
                            forks,
                            starsSince,
                            since,
                            builtBy,
                        },
                        index
                    ) => (
                        <Repository
                            key={index}
                            rank={rank}
                            username={username}
                            repositoryName={repositoryName}
                            url={url}
                            description={description}
                            language={language}
                            languageColor={languageColor}
                            totalStars={totalStars}
                            forks={forks}
                            starsSince={starsSince}
                            since={since}
                            builtBy={builtBy}
                        />
                    )
                )
            )}
        </div>
    );
};

export default Repositories;
