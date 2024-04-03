import {
  UserType,
  UserWithBooksType,
  UserWithLapTopType,
  addNewBooksToUser,
  makeHairStyle,
  moveUser,
  moveUserToOtherHouse,
  updateBook,
  upgradeUserLaptop,
} from "./10_01";

test("change address test", () => {
  let user: UserType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
  };

  const awesomeUser = makeHairStyle(user, 2);

  expect(user.hair).toBe(32);
  expect(awesomeUser.hair).toBe(16);

  expect(awesomeUser.address).toBe(user.address);
});

test("reference type test", () => {
  let user: UserWithLapTopType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
    },
  };

  const movedUser = moveUser(user, "Kiev");

  expect(user).not.toBe(movedUser);
  expect(movedUser.address.city).toBe("Kiev");
  expect(user.laptop).toBe(movedUser.laptop);

  expect(user.address.city).not.toBe(movedUser.address.city);
});

test("upgrade laptop to macbook", () => {
  let user: UserWithLapTopType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
    },
  };

  const upgradedUser = upgradeUserLaptop(user, "Macbook");

  expect(user).not.toBe(upgradedUser);
  expect(upgradedUser.laptop.title).toBe("Macbook");
  expect(user.laptop).not.toBe(upgradedUser.laptop);
  expect(user.laptop.title).toBe("ZenBook");
  expect(user.address).toBe(upgradedUser.address);
});

test("upgrade house number", () => {
  let user: UserWithLapTopType & UserWithBooksType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
    },
    books: ["css", "html", "js", "react"],
  };

  const userCopy = moveUserToOtherHouse(user, 8);

  expect(user).not.toBe(userCopy);
  expect(user.laptop.title).toBe(userCopy.laptop.title);
  expect(user.address).not.toBe(userCopy.address);
  expect(user.laptop.title).toBe("ZenBook");
  expect(user.address.city).toBe(userCopy.address.city);
  expect(userCopy.address.house).toBe(8);
  expect(user.address.house).not.toBe(userCopy.address.house);
});

test("add new books to user", () => {
  let user: UserWithLapTopType & UserWithBooksType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
    },
    books: ["css", "html", "js", "react"],
  };

  const userCopy = addNewBooksToUser(user, ["ts", "angular"]);

  expect(user).not.toBe(userCopy);
  expect(user.laptop.title).toBe(userCopy.laptop.title);
  expect(user.address).toBe(userCopy.address);
  expect(userCopy.address.house).toBe(12);
  expect(user.books).not.toBe(userCopy.books);
  expect(user.books.length).toBe(4);
  expect(userCopy.books.length).toBe(6);
  expect(userCopy.books[4]).toBe("ts");
  expect(userCopy.books[5]).toBe("angular");
});

test("update book", () => {
  let user: UserWithLapTopType & UserWithBooksType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
    },
    books: ["css", "html", "js", "react"],
  };

  const userCopy = updateBook(user, "js", "ts");

  expect(user).not.toBe(userCopy);
  expect(user.laptop.title).toBe(userCopy.laptop.title);
  expect(user.address).toBe(userCopy.address);
  expect(userCopy.address.house).toBe(12);
  expect(user.books).not.toBe(userCopy.books);
  expect(user.books.length).toBe(4);
  expect(userCopy.books.length).toBe(4);
  expect(userCopy.books[2]).toBe("ts");
});
