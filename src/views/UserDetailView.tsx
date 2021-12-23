import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import UserDetail from "../components/UserDetail";
import { getUserReposService, getUserOrganizationsService } from "../providerServices"
import { IUserDetailCompUserParam } from "../components/UserDetail";
import { ArrowLeft } from "react-bootstrap-icons"

async function getComponentData(userLogin: string):Promise<IUserDetailCompUserParam> {
    let data:IUserDetailCompUserParam = {
        repos: [],
        organizations: []
    }
    try {
        let response = await getUserReposService(userLogin)
        data.repos = response
        response = await getUserOrganizationsService(userLogin)
        data.organizations = response
        return data
    } catch (error) {
        console.log(error);
        return data
    }
}

export default function UserDetailView() {
    const params:any = useParams()
    const navigate = useNavigate();
    const [user, setUser] = useState<IUserDetailCompUserParam>({
        repos: [],
        organizations: []
    })

    useEffect(() => {
        getComponentData(params.userLogin).then((data:IUserDetailCompUserParam) => {
            setUser(data)
        })
    }, [params.userLogin])

    return (
        <div className="d-flex flex-column p-3">
            <div className="d-flex justify-content-start">
                <div 
                    className="cursor-pointer"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft size={30} color="#fff" />
                </div>
            </div>
            <UserDetail user={user} />
        </div>
    )
}