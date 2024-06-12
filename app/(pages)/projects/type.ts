export interface Image {
  public_id: string;
  url: string;
  _id: string;
}

export interface Project {
  title: string;
  description: string;
  images: Image[];
  github: string;
  language: string;
  projectUrl: string;
  _id: string;
}
export interface TreeNodeData {
  _id: string;
  label: string;
  value: string;
  projects: Project[];
  __v: number;
  updatedAt: string;
}
