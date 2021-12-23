
export const findUsersService = (query: string, page:number = 1, per_page:number=30) => {
    const params = `q=${query}&page=${page}&per_page=${per_page}`
    return fetch(`${process.env.REACT_APP_HOST}/search/users?${params}`)
            .then(res => res.json())
}

export const getUserReposService = (userLogin:string) => {
    return fetch(`${process.env.REACT_APP_HOST}/users/${userLogin}/repos`)
    .then(res => res.json())
}

export const getUserOrganizationsService = (userLogin:string) => {
    return fetch(`${process.env.REACT_APP_HOST}/users/${userLogin}/orgs`)
    .then(res => res.json())
}