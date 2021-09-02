import * as faker from "faker";

export const getContacts = () => {
  let contacts = [];
  for (let i = 0; i < 50; i++) {
    contacts.push({
      ...faker.name,
      email: faker.internet.email,
      avatar: faker.internet.avatar,
    });
  }
  return contacts;
};
