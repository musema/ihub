import axios from 'axios';
import { IComment } from '../models/comment';
import { IIdea } from '../models/idea';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  req.headers.Authorization = 'Bearer xxxx'
  return req;
});

interface IIdeaApiResponse {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
export const fetchIdeas = async (): Promise<IIdea[]> => {
  const { data } = await API.get<IIdeaApiResponse[]>(`/ideas`);
  return data.map((d: IIdeaApiResponse) => {
    return {
        id: d._id,
        title: d.title,
        description: d.description,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt,
        comments: [],
        likes: 0,
        disLikes: 0,
        tags: [],
        images: []
      };
  });
};
export const fetchIdeaById = async (id: number) => API.get(`/ideas/${id}`);
export const fetchIdeasByPage = async (page: number) => API.get(`/ideas?page=${page}`);
export const fetchIdeasByUser = async (userId: string) => API.get(`/ideas/user?userId=${userId}`);
export const searchIdeas = async (query: string) => API.get(`/ideas/search?query=${query}`);
export const createIdea = async (newIdea: IIdea) => API.post('/ideas', newIdea);
export const likeIdea = async (userId: string, ideaId: string) => API.patch(`/ideas/${ideaId}/likes`);
export const commentOnIdea = async (comment: IComment, ideaId: string) => API.post(`/idea/${ideaId}/comments`, { comment });
export const updateIdea = async (updatedIdea: IIdea) => API.patch(`/ideas`, updatedIdea);
export const deleteIdea = async (ideaId: string) => API.delete(`/ideas/${ideaId}`);
