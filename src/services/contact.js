import * as faker from "faker";

export const getContacts = () => {
  let contacts = [];
  for (let i = 0; i < 37; i++) {
    contacts.push({
      jobTitle: faker.name.jobTitle(),
      jobDescriptor: faker.name.jobDescriptor(),
      title: faker.name.title(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      avatar: faker.internet.avatar(),
    });
  }
  return contacts;
};
