import {environment} from "../../environments/environment";

const baseUrl = environment.API;

export const urls = {
  posts: `${baseUrl}/posts`,
  users: `${baseUrl}/users`,
  userPosts(id: number) {
    return `${baseUrl}/users/${id}/posts`
  },
}
