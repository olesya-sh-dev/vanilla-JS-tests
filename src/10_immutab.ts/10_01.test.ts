import {
  UserType,
  UserWithLapTopType,
  makeHairStyle,
  moveUser,
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
