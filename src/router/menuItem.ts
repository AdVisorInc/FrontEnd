export type MenuItem = {
  title: string;
  route?: string;
  icon?: React.ReactNode;
  subMenu?: MenuItem[];
};
