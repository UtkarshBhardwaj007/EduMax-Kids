export const getImagePath = (path: string): string => {
  const basePath = process.env.NODE_ENV === "production" ? "/EduMax-Kids" : "";
  return `${basePath}${path}`;
};

