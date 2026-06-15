export type User = {
  id: number;
  userName: string;
  pass: string;
  role: Roles["admin"] | Roles["user"];
};

export type Roles = {
  admin: {
    permissions: Actions;
  };
  user: {
    permissions: Actions;
  };
};

export type Actions = {
  create: boolean;
  delete: boolean;
  read: boolean;
  update: boolean;
};
