export const getMessages = async () => {
  const data = await fetch('/api/messages');
  const jsonData = await data.json();
  return jsonData;
};