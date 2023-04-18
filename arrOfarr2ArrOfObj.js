function arrayOfArray(users) {
  return users.map(([firstName, lastName, id]) => {
    return { firstName, lastName, id };
  });
}
