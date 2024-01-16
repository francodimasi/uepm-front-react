'use client';

import { useState } from 'react';
import { FAQsProps } from './FAQs.types';
import { getItems, getTopics } from './helpers';
import { Accordion, Select, Tabs } from 'ui/core';

export const FAQsContent = ({ faqs }: FAQsProps) => {
  const topics = getTopics(faqs);

  const [selected, setSelected] = useState(topics[0].id);
  const [items, setItems] = useState(getItems(faqs, selected));

  const handleChange = (id: string) => {
    setSelected(id);
    setItems(getItems(faqs, id));
  };

  return (
    <div className="w-full">
      <div className="block gap-6 sm:hidden">
        <Select items={topics} selected={selected} onChange={handleChange} />
        <Accordion open={0} items={items} className="mt-6" />
      </div>
      <div className="hidden sm:flex flex-col lg:hidden">
        <Tabs
          items={topics}
          selected={selected}
          onChange={handleChange}
          size="lg"
          className="mb-6"
        />
        <Accordion open={0} items={items} size="lg" className="w-full" />
      </div>
      <div className="hidden lg:grid grid-cols-3">
        <div className="col-span-1">
          <Tabs
            items={topics}
            selected={selected}
            onChange={handleChange}
            orientation="vertical"
            size="lg"
            className="me-12"
          />
        </div>
        <div className="col-span-2">
          <Accordion open={0} items={items} size="lg" className="ms-12" />
        </div>
      </div>
    </div>
  );
};
