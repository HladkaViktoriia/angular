import {environment} from "../../environments/environment";

const baseUrl = environment.API;

export const urls = {
  posts: `${baseUrl}/posts`,
  users: `${baseUrl}/users`,
  user(id: number) {
    return `${baseUrl}/users/${id}`
  },
  userPosts(id: number) {
    return `${baseUrl}/users/${id}/posts`
  },
}
