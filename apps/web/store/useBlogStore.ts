'use client';

import { create } from 'zustand';

type BlogState = {
  category: number;
};

type BlogActions = {
  setCategory: (category: number) => void;
};

export type BlogStore = BlogActions & BlogState;

const initialState: BlogState = {
  category: undefined,
};


export const useBlogStore = create<BlogStore, any>((set) => ({
  ...initialState,
  setCategory: (category) => {
    set(() => ({ category }));
  },
  reset: () => {
    set(initialState);
  },
}));
