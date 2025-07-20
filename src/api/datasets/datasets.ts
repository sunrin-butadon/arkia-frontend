import { instance } from '../instance';
import type { getDatasetsListResponse } from './dataset.type';

export async function getDatasetsList() : Promise<getDatasetsListResponse> {
  const response = await instance.get<getDatasetsListResponse>('/datasets/list');
  return response.data;
}