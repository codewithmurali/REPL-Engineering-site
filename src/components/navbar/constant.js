export const MENU_LIST = [
  { menuItem: { label: "HOME", path: "/" } },
  { menuItem: { label: "PROFILE", path: "/profile" } },
  {
    menuItem: {
      label: "PRODUCTS",
      subMenuList: [
        {
          container: [
            {
              label: "Steam & Gas Turbine Blades",
              path: "/products/steam-gas-turbine-blades",
            },
            { label: "Precision Components", path: "/products/precision-components" },
          ],
        },
        {
          container: [
            { label: "Heavy Fabrication", path: "/products/heavy-fabrication" },
            { label: "Dies & Tools", path: "/products/dies-tools" },
          ],
        },
        {
          container: [
            { label: "Aero Sub Assemblies", path: "/products/aero-sub-assemblies" },
          ],
        },
      ],
    },
  },
  { menuItem: { label: "CLIENTS", path: "/clients" } },
  { menuItem: { label: "QUALITY", path: "/quality" } },
  { menuItem: { label: "CAREERS", path: "/careers" } },
];
