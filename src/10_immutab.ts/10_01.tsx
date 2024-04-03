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
type CompanyType = {
  id: number;
  title: string;
};
export type WithCompaniesType = {
  companies: CompanyType[];
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
export function removeBook(
  u: UserWithLapTopType & UserWithBooksType,
  book: string
) {
  return { ...u, books: u.books.filter((b) => b !== book) };
}

export function addCompany(
  u: UserWithLapTopType & WithCompaniesType,
  newCompany: { id: number; title: string }
) {
  return { ...u, companies: [...u.companies, newCompany] };
}

export function updateCompanyTitle(
  u: WithCompaniesType,
  id: number,
  newTitle: string
) {
  return {
    ...u,
    companies: u.companies.map((c) =>
      c.id === id ? { ...c, title: newTitle } : c
    ),
  };
}
export const updateCompanyTitle2 = (
  companies: { [key: string]: CompanyType[] },
  userName: string,
  companyId: number,
  newTitle: string
) => {
  let companyCopy = { ...companies };

  companyCopy[userName] = companyCopy[userName].map((c) =>
    c.id === companyId ? { ...c, title: newTitle } : c
  );
  return companyCopy;
};
