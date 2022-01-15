export interface BlogSectionData {
  header: string;
  content: JSX.Element;
}

export interface BlogData {
  sections: Array<BlogSection>;
}
