import { instance } from '../instance';
import type { getRagsListResponse } from './rags.type';

export async function getRagsList() : Promise<getRagsListResponse> {
  const response = await instance.get<getRagsListResponse>('/rags/list');
  return response.data;
}