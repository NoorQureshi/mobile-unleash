// utils/formatSlug.js
export const formatSlug = (slug) => {
    const formattedSlug = slug.replace(/ /g, '-');
    return formattedSlug;
  };
  