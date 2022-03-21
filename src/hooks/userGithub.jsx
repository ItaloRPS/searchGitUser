import React, { createContext, useCallback, useState ,useContext} from "react";
import api from "../services/api";

const GithubContext = createContext({ 
                                    user: {}, 
                                    repositories: []
                                        });
                                            
export const GithubProvider = ({ children }) => {

    const [githubState,setGithubState] = useState({
        loading: false,
        user: {
          id: undefined,
          avatar: undefined,
          login: undefined,
          name: undefined,
          html_url: undefined,
          blog: undefined,
          company: undefined,
          location: undefined,
          followers: 0,
          following: 0,
          public_gists: 0,
          public_repos: 0,
        },
        repositories: [],
        starred: [],
    })

    const getUser = (username) => {
      

        api.get(`users/${username}`) 
            .then(({ data }) => {
                setGithubState((prevState) => ({
                    ...prevState,
                    loading: true,
                    user: {
                        id: data.id,
                        avatar: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        html_url: data.html_url,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        followers: data.followers,
                        following: data.following,
                        public_gists: data.public_gists,
                        public_repos: data.public_repos,
                    },
                })); })
       };

    const getUserRepos = (username) => {

        api.get(`users/${username}/repos`).then(({ data }) => {
            console.log("data: " + JSON.stringify(data));
            setGithubState((prevState) => ({
            ...prevState,
            repositories: data,
            }));
        });
    };
    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),//useCallback: informa que so será criada em memoria uma vez 
        getUserRepos: useCallback((username) => getUserRepos(username), []),//useCallback: informa que so será criada em memoria uma vez 
      };

      return (
        <GithubContext.Provider value={contextValue}>
          {children}
        </GithubContext.Provider>
      );
      
} 
                      
export const useGithub =()=>{ // criando hooks
    const {githubState,getUser,getUserRepos} = useContext(GithubContext)
   return {githubState,getUser,getUserRepos}
}

