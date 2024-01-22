import { FAQsTopic } from './FAQs.types';

export const getTopics = (faqs: FAQsTopic[]) => {
  return faqs.map((topic) => ({ id: topic.id, name: topic.name }));
};

export const getItems = (faqs: FAQsTopic[], id: string) => {
  const topic = faqs.find((topic) => topic.id === id);
  return topic?.items.map((item) => ({
    title: item.question,
    content: item.answer,
  }));
};
