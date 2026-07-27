export function getDynamicExperienceYears(startDateStr: string = '2017-09-03'): string {
  const start = new Date(startDateStr);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  const days = now.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (months === 0) {
    return `${years} years`;
  }
  
  const monthStr = months === 1 ? '1 month' : `${months} months`;
  return `${years} years and ${monthStr}`;
}

export function getDynamicExperienceDetailed(startDateStr: string = '2017-09-03'): string {
  return getDynamicExperienceYears(startDateStr);
}
