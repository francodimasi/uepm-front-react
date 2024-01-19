import { PropsWithClassName } from 'ui/types/core';

type DocumentProps = PropsWithClassName & {
  content: any;
};

export const Document = ({ content }: DocumentProps) => {
  return (
    <div
      className="container document"
      dangerouslySetInnerHTML={{ __html: content.html_text }}
    />
  );
};
