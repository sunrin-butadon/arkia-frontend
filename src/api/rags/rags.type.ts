export type getRagsListResponse = {
  id: string;
  name: string;
  description: string;
  made_by_user: string;
  created_at: string;
  dataset_ids: string[];
  llm_model: string;
  chunk_size: number;
}[]

