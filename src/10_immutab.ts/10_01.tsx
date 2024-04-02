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

export function upgradeUserLaptop(u: UserWithLapTopType, newTitle: string) {
  return { ...u, laptop: { ...u.laptop, title: newTitle } };
}
