// returns the user if exists otherwise returns -1
function findItem(usernames, target) {
  let user = usernames.find(
    (username) => username.toLowerCase() === target.toLowerCase()
  );
  if (user) {
    return user;
  } else {
    return -1;
  }
}
