import { CardProps } from "@/src/widgets/ProductCard/model/types";

export const getLocalStore = (name: string) => {
  if (typeof localStorage !== 'undefined') {
    const ls = localStorage.getItem(name);

    return ls ? JSON.parse(ls) : null;
  }

  return null;
};

export const setLocalStore = (name: string, data: unknown) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const removeLocalStore = (name: string) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(name);
  }
};

