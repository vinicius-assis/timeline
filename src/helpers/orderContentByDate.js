export const orderContentByDate = (events) => {
  events.sort((a, b) => {
    const dateA = new Date(a.start);
    const dateB = new Date(b.start);

    // Compare start dates first
    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;

    // If start dates are the same, compare end dates
    const endDateA = new Date(a.end);
    const endDateB = new Date(b.end);

    // Compare end dates
    if (endDateA < endDateB) return -1;
    if (endDateA > endDateB) return 1;

    return 0; // Dates are identical
  });

  return events;
};
