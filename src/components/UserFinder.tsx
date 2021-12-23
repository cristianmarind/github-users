import React from "react";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ICurrentList, IState } from "../types";
import { findUsers } from "../store/actions"
import { FormControl, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons"


export default function UserFinder() {
    const dispatch = useDispatch()
    const nav = useNavigate();

    const currentUserList: ICurrentList = useSelector((state: IState) => {
        return state.cacheLists[state.currentIndex]
    })
    const [query, setQuery] = React.useState("")

    const handleFindUsers = () => {
        dispatch(findUsers(query))
    }
    const handleOnMoreInfo = (userLogin: string) => {
        nav(`/user/${userLogin}`);
    }
    const handleKeyDown = (event:any) => {
        if (event.key === 'Enter') {
            handleFindUsers()
        }
    }

    return (
        <div className="d-flex flex-column">
            <InputGroup className="d-flex align-items-center border bg-light mb-4">
                <FormControl
                    value={query}
                    onChange={(ev) => { setQuery(ev.target.value) }}
                    className="border-0"
                    placeholder="Github username"
                    aria-label="Username"
                    onKeyDown={handleKeyDown}
                />
                <div className="px-3" onClick={handleFindUsers}>
                    <Search />
                </div>
            </InputGroup>

            <UserList
                userList={currentUserList.items}
                onMoreInfo={handleOnMoreInfo}
            />

        </div>
    )
}