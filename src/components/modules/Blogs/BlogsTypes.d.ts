export interface BlogSectionData {
  header: string;
  content: JSX.Element;
}

export interface BlogData {
  sections: Array<BlogSection>;
}

export interface BlogButton {
  text: string;
  linkTo: string;
  iconType: string;
}
