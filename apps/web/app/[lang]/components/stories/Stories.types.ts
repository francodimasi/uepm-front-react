export type Story = {
  patientName: string;
  videoLink?: string;
  description?: string;
  title: string;
  image: string;
  tag: string;
};

export type StoriesProps = {
  stories: Story[];
};

export type PlayVideoProps = {
  title?: string;
  videoLink: string;
  open: boolean;
  onClose: () => void
}