export type StoryProp = {
  patientName: string;
  videoLink?: string;
  description?: string;
  title: string;
  image: string;
  tag: string;
};

export type StoriesProps = {
  stories: StoryProp[];
};
