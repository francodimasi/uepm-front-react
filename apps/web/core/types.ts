export type PageResponse<T> = {
  page: T[];
  count: number;
  total_pages: number;
  total_count: number;
  current_page: number;
  previous_page: number;
  next_page: number;
  next_page_url: number;
  previous_page_url: number;
};
