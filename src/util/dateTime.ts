/**
 * Transforma string de datetime em string de tempo para exibição
 * @param time 
 * @returns Data e hora formatados
 */
export const dateTimeConventionalString = (time: string) => {
  const date = new Date(
    time
  ); 
  const dateString =  date.toLocaleDateString();
  const timeString =  date.toLocaleTimeString();

  return `${dateString} às ${timeString}`
}