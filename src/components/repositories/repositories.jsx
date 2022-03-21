import React, { useEffect } from "react";
import {useGithub}  from "../../hooks/userGithub";
import RepositoryItem from "../itemRositorys/itemRositorys";
import * as S from "./repositoriesStyle";

const Repositories = () => {
  const { githubState, getUserRepos } = useGithub();

  useEffect(() => {
    if (githubState.loading) {
      getUserRepos(githubState.user.login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return (
    <>
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                  language={item.language}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
    </>
  );
};

export default Repositories;