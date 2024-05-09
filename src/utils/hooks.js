export const useFormatTime = time => {
  const formatedTime = time / 1000;
  const hours = Math.floor(formatedTime / 3600);
  const minutes = Math.floor((formatedTime % 3600) / 60);
  const seconds = Math.floor(formatedTime % 60);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
