export const filterPosts = <T>(
  posts: T[],
  value: string,
  field: keyof T,
): T[] => posts.filter((item) => {
    const val = item[field];
    return String(val).toLowerCase().includes(value.toLowerCase());
  });
