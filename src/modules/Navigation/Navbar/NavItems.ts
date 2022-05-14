import { NavItem } from "@interfaces/NavItem";

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "¿Quién es I&G?",
    href: "/about-us",
  },
  {
    label: "Educación",
    href: "/",
    children: [
      {
        label: "Lorem",
        subLabel: "dolor sit amet",
        href: "#",
      },
      {
        label: "Ipsum",
        subLabel: "consectetur adipiscing elit",
        href: "#",
      },
    ],
  },
  {
    label: "Soluciones de mercado",
    href: "#",
  },
  {
    label: "Productos",
    href: "#",
  },
];

export default NAV_ITEMS;
