export type CategoriesProps = {
  link?: string;
  name: string;
};

export const Navbar = ({ link, name }: CategoriesProps) => {
  return (
    <a className="category-navigation-link" href={link}>
      {name}
    </a>
  );
};
