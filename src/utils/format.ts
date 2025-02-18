const formatDate = (date: string | Date) : string => {
  const validDate = date instanceof Date ? date : new Date(date);
  if (isNaN(validDate.getTime())) {
    return String(date);
  }
  return new Intl.DateTimeFormat("de-DE").format(validDate);
};

export const format = {
  date: formatDate,
};
