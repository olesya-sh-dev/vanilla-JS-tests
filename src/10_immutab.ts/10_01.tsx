export type UserType = {
  name: string;
  hair: number;
  address: { city: string; house?: number };
};

export type LapTopType = {
  title: string;
};

export type UserWithLapTopType = UserType & {
  laptop: LapTopType;
};
export type UserWithBooksType = UserType & {
  books: string[];
};

export type SkillType = {
  title: string;
  level: number;
};

export type UserWithLapTopAndSkillsType = UserWithLapTopType & {
  skills: SkillType[];
};

export function makeHairStyle(u: UserType, power: number) {
  const copy = { ...u, hair: u.hair / power };
  //copy.hair = u.hair / power;

  return copy;
}

export function moveUser(u: UserWithLapTopType, city: string) {
  return { ...u, address: { ...u.address, city: city } };
  // const copy = { ...u };
  // copy.address = { ...copy.address, city: city };

  // return copy;
}
export function moveUserToOtherHouse(
  u: UserWithLapTopType & UserWithBooksType,
  house: number
) {
  return { ...u, address: { ...u.address, house: house } };
}

export function upgradeUserLaptop(u: UserWithLapTopType, newTitle: string) {
  return { ...u, laptop: { ...u.laptop, title: newTitle } };
}

export function addNewBooksToUser(
  u: UserWithLapTopType & UserWithBooksType,
  newBooks: string[]
) {
  // return { ...u, books: [...u.books, ...newBooks] };
  return { ...u, books: u.books.concat(newBooks) };
}
export function updateBook(
  u: UserWithLapTopType & UserWithBooksType,
  book1: string,
  book2: string
) {
  // return { ...u, books: [...u.books, ...newBooks] };
  return { ...u, books: u.books.map((b) => (b === book1 ? book2 : b)) };
}

export function updateSkillsLevel(
  u: UserWithLapTopAndSkillsType & UserWithBooksType,
  skill: string,
  newLevel: number
) {
  return {
    ...u,
    skills: u.skills.map((item) =>
      item.title === skill ? { ...item, level: newLevel } : item
    ),
  };
}
