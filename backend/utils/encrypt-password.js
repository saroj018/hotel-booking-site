import bcrypt, { hash } from "bcrypt";

export const hashPassword = async (myPassword) => {
  try {
    const password = await bcrypt.hash(myPassword, 10);
    return password;
  } catch (error) {
    console.log("Password Hashed Error: ", error.message);
  }
};

export const checkPassword = async (myPassword, hashedPassword) => {
  try {
    const password = await bcrypt.compare(myPassword, hashedPassword);
    return password;
  } catch (error) {
    console.log("Password is Not checked: ", error.error);
  }
};
