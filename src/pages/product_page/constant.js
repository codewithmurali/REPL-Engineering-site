// ----------banner images------------
import steamGasTurbineBannerImage from "./images/banner_images/steamGabTurbineBannerImage.jpeg";
import precisionBannerImage from "./images/banner_images/precisionBannerImage.jpeg";
import heavyFabrication from "./images/banner_images/heavyFabrication.jpeg";
import dieTools from "./images/banner_images/dieTools.jpeg";
import aeroSubAssemblies from "./images/banner_images/aeroSubAssembly.jpeg";

// ----------steam & gas turbines------------
import steamImg1 from "./images/product_images/steam_gas_turbine/img1.jpg";
import steamImg2 from "./images/product_images/steam_gas_turbine/img2.jpg";
import steamImg3 from "./images/product_images/steam_gas_turbine/img3.jpg";
import steamImg4 from "./images/product_images/steam_gas_turbine/img4.jpg";
import steamImg5 from "./images/product_images/steam_gas_turbine/img5.jpg";
import steamImg6 from "./images/product_images/steam_gas_turbine/img6.jpg";

// ----------precision components------------
import precisionImg1 from "./images/product_images/precision_components/img1.jpg";
import precisionImg2 from "./images/product_images/precision_components/img2.jpg";
import precisionImg3 from "./images/product_images/precision_components/img3.jpg";
import precisionImg4 from "./images/product_images/precision_components/img4.jpg";
import precisionImg5 from "./images/product_images/precision_components/img5.jpg";
import precisionImg6 from "./images/product_images/precision_components/img6.jpg";
import precisionImg7 from "./images/product_images/precision_components/img7.jpg";
import precisionImg8 from "./images/product_images/precision_components/img8.jpg";

// ----------aero sub assemblies components------------
import aeroSubAssembliesImg1 from "./images/product_images/aero_sub_assemblies/img1.png";
import aeroSubAssembliesImg2 from "./images/product_images/aero_sub_assemblies/img2.jpg";
import aeroSubAssembliesImg3 from "./images/product_images/aero_sub_assemblies/img3.jpg";
import aeroSubAssembliesImg4 from "./images/product_images/aero_sub_assemblies/img4.png";
import aeroSubAssembliesImg5 from "./images/product_images/aero_sub_assemblies/img5.png";
import aeroSubAssembliesImg6 from "./images/product_images/aero_sub_assemblies/img6.png";
import aeroSubAssembliesImg7 from "./images/product_images/aero_sub_assemblies/img7.png";
import aeroSubAssembliesImg8 from "./images/product_images/aero_sub_assemblies/img8.png";
import aeroSubAssembliesImg9 from "./images/product_images/aero_sub_assemblies/img9.png";
import aeroSubAssembliesImg10 from "./images/product_images/aero_sub_assemblies/img10.png";

// ----------dies adn tools components------------
import diesAndToolsImg1 from "./images/product_images/die_and_tools/img1.jpg";
import diesAndToolsImg2 from "./images/product_images/die_and_tools/img2.jpg";
import diesAndToolsImg3 from "./images/product_images/die_and_tools/img3.jpg";
import diesAndToolsImg4 from "./images/product_images/die_and_tools/img4.jpg";

// ----------heavy fabrication components------------
import heavyFabricationImg1 from "./images/product_images/heavy_fabrication/img1.jpg";
import heavyFabricationImg2 from "./images/product_images/heavy_fabrication/img2.jpg";
import heavyFabricationImg3 from "./images/product_images/heavy_fabrication/img3.jpg";
import heavyFabricationImg4 from "./images/product_images/heavy_fabrication/img4.jpg";

export const PRODUCT_PAGE_URL = {
  STEAM_GAS: "/products/steam-gas-turbine-blades",
  PRECISION_COMPONENTS: "/products/precision-components",
  HEAVY_FABRICATION: "/products/heavy-fabrication",
  DIES_TOOLS: "/products/dies-tools",
  AERO_SUB_ASSEBLIES: "/products/aero-sub-assemblies",
};

export const PRODUCT_PAGE_DATA = {
  [PRODUCT_PAGE_URL.STEAM_GAS]: {
    bannerBgImage: steamGasTurbineBannerImage,
    bannerContent: "PRODUCTS",
    title: "Steam and Gas Turbine Blades",
    data: [
      {
        name: "Gas Turbine Blades",
        image: steamImg1,
      },
      {
        name: "Gas Turbine Locking Blades",
        image: steamImg2,
      },
      {
        name: "LP Moving Blades",
        image: steamImg3,
      },
      {
        name: "Gas Turbine Blades with 45Deg Twist Profile",
        image: steamImg4,
      },
      {
        name: "Investment Casting Dies for Gas Turbine Blade",
        image: steamImg5,
      },
      {
        name: "120 mw Steam Turbine Blade Assembly",
        image: steamImg6,
      },
    ],
  },
  [PRODUCT_PAGE_URL.PRECISION_COMPONENTS]: {
    bannerBgImage: precisionBannerImage,
    bannerContent: "PRODUCTS",
    title: "Precision Components",
    data: [
      {
        name: "Aluminum Casting for Aero application",
        image: precisionImg1,
      },
      {
        name: "Ring for Compressor Blade Assembly Material Titanium",
        image: precisionImg2,
      },
      {
        name: "Precision Component for Missile Wing Material - MDN 138",
        image: precisionImg3,
      },
      {
        name: "Diffuser Vane Material Inconel 718",
        image: precisionImg4,
      },
      {
        name: "RSP High Precision Component for Helicopter",
        image: precisionImg5,
      },
      {
        name: "NRSP High Precision Component for Helicopter",
        image: precisionImg6,
      },

      {
        name: "Beam for Aircraft Engine Material Titanium",
        image: precisionImg7,
      },
      {
        name: " Impeller for Power Generation",
        image: precisionImg8,
      },
      // {
      //   name:
      //     "Precision Machined Component for areonautical spares Material Inconel 718",
      //   image: precisionImg7,
      // },
    ],
  },
  [PRODUCT_PAGE_URL.HEAVY_FABRICATION]: {
    bannerBgImage: heavyFabrication,
    bannerContent: "PRODUCTS",
    title: "Heavy Fabrication",
    data: [
      {
        name: "Mockup for Agnl 3",
        image: heavyFabricationImg1,
      },
      {
        name: "Mockup for Agnl 3",
        image: heavyFabricationImg2,
      },
      {
        name: "Assembly Jig For Agnl 2",
        image: heavyFabricationImg3,
      },
      {
        name: "Load Test Rig for Agnl 2",
        image: heavyFabricationImg4,
      },
    ],
  },
  [PRODUCT_PAGE_URL.DIES_TOOLS]: {
    bannerBgImage: dieTools,
    bannerContent: "PRODUCTS",
    title: "Dies and Tools",
    data: [
      {
        name: "1600 Ton Press Tool",
        image: diesAndToolsImg1,
      },
      {
        name: "650 Ton Press Tool",
        image: diesAndToolsImg2,
      },
      {
        name: "Investment Casting Tool for HAL",
        image: diesAndToolsImg3,
      },
      {
        name: "Turbine Exhaust Casting Mould for HAl Koraput",
        image: diesAndToolsImg4,
      },
    ],
  },
  [PRODUCT_PAGE_URL.AERO_SUB_ASSEBLIES]: {
    bannerBgImage: aeroSubAssemblies,
    bannerContent: "PRODUCTS",
    title: "Aero Sub Assemblies",
    data: [
      {
        name: "Stabilizer Fins",
        image: aeroSubAssembliesImg5,
      },
      {
        name: "Folding Type Control Surface",
        image: aeroSubAssembliesImg4,
      },
      {
        name: "Stabilizer Fins",
        image: aeroSubAssembliesImg6,
      },
      {
        name: "Fin Assembly For Missiles",
        image: aeroSubAssembliesImg1,
      },
      {
        name: "Foldable Stabilizer Fins for TORPEDO",
        image: aeroSubAssembliesImg7,
      },
      {
        name: "Air Diverter ASSLY",
        image: aeroSubAssembliesImg8,
      },
      {
        name: "Control Surface Assesmbly for K-4 Missiles",
        image: aeroSubAssembliesImg2,
      },

      {
        name: "Seeker Mounting Frame ASSLY",
        image: aeroSubAssembliesImg9,
      },

      {
        name: "Seeker Mounting Frame ASSLY",
        image: aeroSubAssembliesImg10,
      },
      {
        name: "Nose Cone Assesmbly",
        image: aeroSubAssembliesImg3,
      },
    ],
  },
};
