import { Github } from "react-bootstrap-icons";
import { IOrganization, IRepo } from "../types";

export interface IUserDetailCompUserParam {
    repos: Array<IRepo>,
    organizations: Array<IOrganization>,
}
interface IUserDetailParams {
    user: IUserDetailCompUserParam
}
export default function UserDetail({ user }: IUserDetailParams) {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                    <span className="text-light font-weight-bold font-size-xx-large">
                        Repositorios
                    </span>
                    {
                        user.repos.map((repo, index) => {
                            return (
                                <div
                                    key={index}
                                    className="userCardSummary d-flex flex-column mb-3 border p-3"
                                >
                                    <h5>{repo.name}</h5>
                                    <span>{repo.full_name}</span>
                                    <div>
                                        <span>
                                            {repo.language}
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center mt-2">
                                        <div className="avatar">
                                            <img src={repo.owner.avatar_url} className="w-100 h-auto" />
                                        </div>
                                        <span className="mx-4">{repo.owner.login}</span>
                                        <div>
                                            <Github size={30} />
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-12 col-md-6 col-lg-5 col-xl-4 d-flex flex-column">
                    <span className="text-light font-weight-bold font-size-xx-large">Organizaciones</span>
                    {
                        user.organizations.map((org, index) => {
                            return (
                                <div
                                    key={index}
                                    className="userCardSummary d-flex flex-column mb-3 border p-3"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="avatar">
                                            <img src={org.avatar_url} className="w-100 h-auto" />
                                        </div>
                                        <span className="mx-4">{org.login}</span>
                                        <div>
                                            <Github size={30} />
                                        </div>
                                    </div>
                                    <p>
                                        { org.description }
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}