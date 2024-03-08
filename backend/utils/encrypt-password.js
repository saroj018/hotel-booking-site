import bcrypt from "bcrypt";

export const hashPassword = async (myPassword) => {
  try {
    const password = await bcrypt.hash(myPassword, 10);
    return password;
  } catch (error) {
  }
};

export const checkPassword = async (myPassword, hashedPassword) => {
  try {
    const password = await bcrypt.compare(myPassword, hashedPassword);
    return password;
  } catch (error) {
  }
};
