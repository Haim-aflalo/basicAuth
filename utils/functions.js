import bcrypt from 'bcrypt';

async function hashPassword(plainPassword, saltRounds = 10) {
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}

async function verifyPassword(plainPassword, hashedPassword) {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
}

function checkMessage(message) {
  for (let i = 0; i < message.length; i++) {
    if (message[i] > message[i + 1]) {
      return -1;
    }
  }
  return 1;
}

function messageSum(message) {
  let sum = 0;
  for (let num of message) {
    sum += num;
  }
  return sum;
}

export { hashPassword, verifyPassword, checkMessage, messageSum };
