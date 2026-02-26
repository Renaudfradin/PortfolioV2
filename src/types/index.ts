export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  url?: string;
  url_github?: string;
  stack?: string | string[];
}

export interface Experience {
  id: string;
  title: string;
  slug: string;
  company: string;
  description: string;
  start_date: string;
  end_date: string;
  type: string;
}

export type ApiMethod = "GET";

export interface CallApiOptions {
  method?: ApiMethod;
  body?: BodyInit | null;
  headers?: Record<string, string>;
  timeout?: number;
  enableRetry?: boolean;
  enablePerformanceLog?: boolean;
}
