import React from "react";
import { IUser } from "../types";
import { Github } from "react-bootstrap-icons"

interface IUserList {
  userList: Array<IUser>,
  onMoreInfo: Function
}
export default function UserList({ userList, onMoreInfo }: IUserList) {
  return (
    <div>
      {
        userList.map((user, index) => {
          return (
            <div 
              key={index} 
              className="userCardSummary cursor-pointer d-flex align-items-center mb-3 border p-3"
              onClick={() => { onMoreInfo(user.login) }}
            >
              <div className="avatar">
                <img src={user.avatar_url} className="w-100 h-auto" />
              </div>
              <span className="mx-4">{user.login}</span>
              <div>
                <Github size={30} />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}