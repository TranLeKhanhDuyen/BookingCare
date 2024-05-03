import { IPagination } from './pagination'

export interface GetListResponse<T> {
  items: Array<T>
  pagination: IPagination
}
