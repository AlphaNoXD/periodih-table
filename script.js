/**
 * NEON ELEMENTS - Interactive Periodic Table of Elements
 * Complete, accurate dataset for all 118 elements + Interactive logic
 */

// ==========================================================================
// 118 ELEMENTS ACCURATE DATASET
// ==========================================================================
const ELEMENTS_DATA = [
  {
    num: 1, sym: "H", name: "Hydrogen", mass: "1.008", cat: "nonmetal", g: 1, p: 1, b: "s",
    st: "Gas", ec: "1s¹", en: 2.20, mp: "14.01 K (-259.14 °C)", bp: "20.28 K (-252.87 °C)",
    d: "0.08988 g/L", disc: "1766", by: "Henry Cavendish",
    desc: "The lightest and most abundant element in the universe, powering stellar fusion and forming water."
  },
  {
    num: 2, sym: "He", name: "Helium", mass: "4.0026", cat: "noble", g: 18, p: 1, b: "s",
    st: "Gas", ec: "1s²", en: null, mp: "0.95 K (-272.2 °C)", bp: "4.22 K (-268.93 °C)",
    d: "0.1786 g/L", disc: "1868", by: "Pierre Janssen, Norman Lockyer",
    desc: "Second lightest and second most abundant cosmic element, completely inert with the lowest boiling point."
  },
  {
    num: 3, sym: "Li", name: "Lithium", mass: "6.94", cat: "alkali", g: 1, p: 2, b: "s",
    st: "Solid", ec: "[He] 2s¹", en: 0.98, mp: "453.65 K (180.50 °C)", bp: "1603 K (1330 °C)",
    d: "0.534 g/cm³", disc: "1817", by: "Johan August Arfwedson",
    desc: "The least dense solid element and alkali metal, widely prized for rechargeable lithium-ion battery technology."
  },
  {
    num: 4, sym: "Be", name: "Beryllium", mass: "9.0122", cat: "alkaline", g: 2, p: 2, b: "s",
    st: "Solid", ec: "[He] 2s²", en: 1.57, mp: "1560 K (1287 °C)", bp: "2742 K (2469 °C)",
    d: "1.85 g/cm³", disc: "1798", by: "Louis Nicolas Vauquelin",
    desc: "A stiff, lightweight alkaline earth metal used in aerospace optics and high-performance alloys."
  },
  {
    num: 5, sym: "B", name: "Boron", mass: "10.81", cat: "metalloid", g: 13, p: 2, b: "p",
    st: "Solid", ec: "[He] 2s² 2p¹", en: 2.04, mp: "2349 K (2076 °C)", bp: "4200 K (3927 °C)",
    d: "2.34 g/cm³", disc: "1808", by: "Joseph Louis Gay-Lussac, Louis Jacques Thénard",
    desc: "A hard, dark metalloid essential in heat-resistant borosilicate glassware, ceramics, and semiconductors."
  },
  {
    num: 6, sym: "C", name: "Carbon", mass: "12.011", cat: "nonmetal", g: 14, p: 2, b: "p",
    st: "Solid", ec: "[He] 2s² 2p²", en: 2.55, mp: "3823 K (3550 °C)", bp: "5100 K (4827 °C)",
    d: "2.267 g/cm³", disc: "Ancient", by: "Known to antiquity",
    desc: "The fundamental chemical backbone of all organic life, taking forms from soft graphite to ultra-hard diamond."
  },
  {
    num: 7, sym: "N", name: "Nitrogen", mass: "14.007", cat: "nonmetal", g: 15, p: 2, b: "p",
    st: "Gas", ec: "[He] 2s² 2p³", en: 3.04, mp: "63.15 K (-210.00 °C)", bp: "77.36 K (-195.79 °C)",
    d: "1.2506 g/L", disc: "1772", by: "Daniel Rutherford",
    desc: "A colorless, odorless diatomic gas making up ~78% of Earth's atmosphere, essential for amino acids and DNA."
  },
  {
    num: 8, sym: "O", name: "Oxygen", mass: "15.999", cat: "nonmetal", g: 16, p: 2, b: "p",
    st: "Gas", ec: "[He] 2s² 2p⁴", en: 3.44, mp: "54.36 K (-218.79 °C)", bp: "90.20 K (-182.95 °C)",
    d: "1.429 g/L", disc: "1774", by: "Joseph Priestley, Carl Wilhelm Scheele",
    desc: "A highly reactive nonmetal supporting cellular respiration in aerobic life and driving combustion across the world."
  },
  {
    num: 9, sym: "F", name: "Fluorine", mass: "18.998", cat: "halogen", g: 17, p: 2, b: "p",
    st: "Gas", ec: "[He] 2s² 2p⁵", en: 3.98, mp: "53.53 K (-219.62 °C)", bp: "85.03 K (-188.12 °C)",
    d: "1.696 g/L", disc: "1886", by: "Henri Moissan",
    desc: "The most electronegative and chemically reactive halogen, capable of forming compounds with almost all other elements."
  },
  {
    num: 10, sym: "Ne", name: "Neon", mass: "20.180", cat: "noble", g: 18, p: 2, b: "p",
    st: "Gas", ec: "[He] 2s² 2p⁶", en: null, mp: "24.56 K (-248.59 °C)", bp: "27.07 K (-246.08 °C)",
    d: "0.9002 g/L", disc: "1898", by: "William Ramsay, Morris Travers",
    desc: "A noble gas that glows vibrant reddish-orange in high-voltage electrical discharge tubes and signage."
  },
  {
    num: 11, sym: "Na", name: "Sodium", mass: "22.990", cat: "alkali", g: 1, p: 3, b: "s",
    st: "Solid", ec: "[Ne] 3s¹", en: 0.93, mp: "370.87 K (97.72 °C)", bp: "1156 K (883 °C)",
    d: "0.968 g/cm³", disc: "1807", by: "Humphry Davy",
    desc: "A soft, silvery alkali metal that reacts vigorously with water; forms ordinary table salt (NaCl)."
  },
  {
    num: 12, sym: "Mg", name: "Magnesium", mass: "24.305", cat: "alkaline", g: 2, p: 3, b: "s",
    st: "Solid", ec: "[Ne] 3s²", en: 1.31, mp: "923 K (650 °C)", bp: "1363 K (1090 °C)",
    d: "1.738 g/cm³", disc: "1755", by: "Joseph Black",
    desc: "An abundant, shiny gray metal used in lightweight alloys and the core coordinating ion in chlorophyll."
  },
  {
    num: 13, sym: "Al", name: "Aluminium", mass: "26.982", cat: "post-transition", g: 13, p: 3, b: "p",
    st: "Solid", ec: "[Ne] 3s² 3p¹", en: 1.61, mp: "933.47 K (660.32 °C)", bp: "2792 K (2519 °C)",
    d: "2.70 g/cm³", disc: "1825", by: "Hans Christian Ørsted",
    desc: "A low-density, corrosion-resistant metal indispensable in aviation, construction, and food packaging."
  },
  {
    num: 14, sym: "Si", name: "Silicon", mass: "28.085", cat: "metalloid", g: 14, p: 3, b: "p",
    st: "Solid", ec: "[Ne] 3s² 3p²", en: 1.90, mp: "1687 K (1414 °C)", bp: "3538 K (3265 °C)",
    d: "2.329 g/cm³", disc: "1824", by: "Jöns Jacob Berzelius",
    desc: "A crystalline metalloid serving as the foundational semiconductor material for modern microchips and solar cells."
  },
  {
    num: 15, sym: "P", name: "Phosphorus", mass: "30.974", cat: "nonmetal", g: 15, p: 3, b: "p",
    st: "Solid", ec: "[Ne] 3s² 3p³", en: 2.19, mp: "317.30 K (44.15 °C)", bp: "553.6 K (280.5 °C)",
    d: "1.823 g/cm³", disc: "1669", by: "Hennig Brand",
    desc: "Exists in red, white, and black allotropes; crucial for cell membranes (phospholipids) and cellular energy (ATP)."
  },
  {
    num: 16, sym: "S", name: "Sulfur", mass: "32.06", cat: "nonmetal", g: 16, p: 3, b: "p",
    st: "Solid", ec: "[Ne] 3s² 3p⁴", en: 2.58, mp: "388.36 K (115.21 °C)", bp: "717.8 K (444.6 °C)",
    d: "2.07 g/cm³", disc: "Ancient", by: "Known to antiquity",
    desc: "A bright yellow nonmetallic crystal used to manufacture sulfuric acid, vulcanized rubber, and gunpowder."
  },
  {
    num: 17, sym: "Cl", name: "Chlorine", mass: "35.45", cat: "halogen", g: 17, p: 3, b: "p",
    st: "Gas", ec: "[Ne] 3s² 3p⁵", en: 3.16, mp: "171.6 K (-101.5 °C)", bp: "239.11 K (-34.04 °C)",
    d: "3.2 g/L", disc: "1774", by: "Carl Wilhelm Scheele",
    desc: "A yellow-green halogen gas utilized widely for municipal water purification, bleach, and PVC plastics."
  },
  {
    num: 18, sym: "Ar", name: "Argon", mass: "39.948", cat: "noble", g: 18, p: 3, b: "p",
    st: "Gas", ec: "[Ne] 3s² 3p⁶", en: null, mp: "83.80 K (-189.35 °C)", bp: "87.30 K (-185.85 °C)",
    d: "1.784 g/L", disc: "1894", by: "Lord Rayleigh, William Ramsay",
    desc: "The third most abundant atmospheric gas on Earth, used as an inert shielding gas in welding and neon-style lighting."
  },
  {
    num: 19, sym: "K", name: "Potassium", mass: "39.098", cat: "alkali", g: 1, p: 4, b: "s",
    st: "Solid", ec: "[Ar] 4s¹", en: 0.82, mp: "336.53 K (63.38 °C)", bp: "1032 K (759 °C)",
    d: "0.862 g/cm³", disc: "1807", by: "Humphry Davy",
    desc: "A soft, violet-flame alkali metal vital for biological nerve signal transmission and agricultural fertilizers."
  },
  {
    num: 20, sym: "Ca", name: "Calcium", mass: "40.078", cat: "alkaline", g: 2, p: 4, b: "s",
    st: "Solid", ec: "[Ar] 4s²", en: 1.00, mp: "1115 K (842 °C)", bp: "1757 K (1484 °C)",
    d: "1.54 g/cm³", disc: "1808", by: "Humphry Davy",
    desc: "Fifth most abundant element in Earth's crust, essential for bone architecture, teeth, and cellular muscle contractions."
  },
  {
    num: 21, sym: "Sc", name: "Scandium", mass: "44.956", cat: "transition", g: 3, p: 4, b: "d",
    st: "Solid", ec: "[Ar] 3d¹ 4s²", en: 1.36, mp: "1814 K (1541 °C)", bp: "3109 K (2836 °C)",
    d: "2.989 g/cm³", disc: "1879", by: "Lars Fredrik Nilson",
    desc: "A rare transition metal strengthening aluminum alloys for aerospace frames and baseball bats."
  },
  {
    num: 22, sym: "Ti", name: "Titanium", mass: "47.867", cat: "transition", g: 4, p: 4, b: "d",
    st: "Solid", ec: "[Ar] 3d² 4s²", en: 1.54, mp: "1941 K (1668 °C)", bp: "3560 K (3287 °C)",
    d: "4.506 g/cm³", disc: "1791", by: "William Gregor",
    desc: "Exceptional strength-to-weight ratio and corrosion resistance, used in jet turbines, medical implants, and spacecraft."
  },
  {
    num: 23, sym: "V", name: "Vanadium", mass: "50.942", cat: "transition", g: 5, p: 4, b: "d",
    st: "Solid", ec: "[Ar] 3d³ 4s²", en: 1.63, mp: "2183 K (1910 °C)", bp: "3680 K (3407 °C)",
    d: "6.11 g/cm³", disc: "1801", by: "Andrés Manuel del Río",
    desc: "Ductile transition metal added to steel to dramatically increase toughness in tools, armor plate, and redox flow batteries."
  },
  {
    num: 24, sym: "Cr", name: "Chromium", mass: "51.996", cat: "transition", g: 6, p: 4, b: "d",
    st: "Solid", ec: "[Ar] 3d⁵ 4s¹", en: 1.66, mp: "2180 K (1907 °C)", bp: "2944 K (2671 °C)",
    d: "7.19 g/cm³", disc: "1797", by: "Louis Nicolas Vauquelin",
    desc: "Hard, lustrous steel-gray metal providing corrosion resistance in stainless steel and shiny chrome electroplating."
  },
  {
    num: 25, sym: "Mn", name: "Manganese", mass: "54.938", cat: "transition", g: 7, p: 4, b: "d",
    st: "Solid", ec: "[Ar] 3d⁵ 4s²", en: 1.55, mp: "1519 K (1246 °C)", bp: "2334 K (2061 °C)",
    d: "7.21 g/cm³", disc: "1774", by: "Johan Gottlieb Gahn",
    desc: "Essential industrial alloying agent for deoxidizing and strengthening structural steel, and cathode material in batteries."
  },
  {
    num: 26, sym: "Fe", name: "Iron", mass: "55.845", cat: "transition", g: 8, p: 4, b: "d",
    st: "Solid", ec: "[Ar] 3d⁶ 4s²", en: 1.83, mp: "1811 K (1538 °C)", bp: "3134 K (2862 °C)",
    d: "7.874 g/cm³", disc: "Ancient", by: "Known to antiquity",
    desc: "The most common element on Earth by mass, core component of planetary cores and the oxygen carrier in human hemoglobin."
  },
  {
    num: 27, sym: "Co", name: "Cobalt", mass: "58.933", cat: "transition", g: 9, p: 4, b: "d",
    st: "Solid", ec: "[Ar] 3d⁷ 4s²", en: 1.88, mp: "1768 K (1495 °C)", bp: "3200 K (2927 °C)",
    d: "8.90 g/cm³", disc: "1735", by: "Georg Brandt",
    desc: "Magnetic transition metal used in heat-resistant superalloys, vivid blue glass pigments, and lithium-ion batteries."
  },
  {
    num: 28, sym: "Ni", name: "Nickel", mass: "58.693", cat: "transition", g: 10, p: 4, b: "d",
    st: "Solid", ec: "[Ar] 3d⁸ 4s²", en: 1.91, mp: "1728 K (1455 °C)", bp: "3186 K (2913 °C)",
    d: "8.908 g/cm³", disc: "1751", by: "Axel Fredrik Cronstedt",
    desc: "Silvery-white metal with high corrosion resistance, essential in stainless steel, rechargeable batteries, and coinage."
  },
  {
    num: 29, sym: "Cu", name: "Copper", mass: "63.546", cat: "transition", g: 11, p: 4, b: "d",
    st: "Solid", ec: "[Ar] 3d¹⁰ 4s¹", en: 1.90, mp: "1357.77 K (1084.62 °C)", bp: "2835 K (2562 °C)",
    d: "8.96 g/cm³", disc: "Ancient", by: "Known to antiquity",
    desc: "High thermal and electrical conductivity make this reddish metal the primary conductor of the global electric power grid."
  },
  {
    num: 30, sym: "Zn", name: "Zinc", mass: "65.38", cat: "post-transition", g: 12, p: 4, b: "d",
    st: "Solid", ec: "[Ar] 3d¹⁰ 4s²", en: 1.65, mp: "692.68 K (419.53 °C)", bp: "1180 K (907 °C)",
    d: "7.14 g/cm³", disc: "Ancient", by: "Indian and German metallurgists",
    desc: "Galvanizes steel against rust, forms brass alloys with copper, and serves as an essential trace enzyme cofactor in biology."
  },
  {
    num: 31, sym: "Ga", name: "Gallium", mass: "69.723", cat: "post-transition", g: 13, p: 4, b: "p",
    st: "Solid", ec: "[Ar] 3d¹⁰ 4s² 4p¹", en: 1.81, mp: "302.91 K (29.76 °C)", bp: "2477 K (2204 °C)",
    d: "5.91 g/cm³", disc: "1875", by: "Lecoq de Boisbaudran",
    desc: "Melts in the palm of your hand just above room temperature; key semiconductor in LEDs and gallium arsenide circuits."
  },
  {
    num: 32, sym: "Ge", name: "Germanium", mass: "72.630", cat: "metalloid", g: 14, p: 4, b: "p",
    st: "Solid", ec: "[Ar] 3d¹⁰ 4s² 4p²", en: 2.01, mp: "1211.40 K (938.25 °C)", bp: "3106 K (2833 °C)",
    d: "5.323 g/cm³", disc: "1886", by: "Clemens Winkler",
    desc: "Lustrous, hard metalloid predicted by Mendeleev as ekasilicon; critical for infrared optics and fiber optic networks."
  },
  {
    num: 33, sym: "As", name: "Arsenic", mass: "74.922", cat: "metalloid", g: 15, p: 4, b: "p",
    st: "Solid", ec: "[Ar] 3d¹⁰ 4s² 4p³", en: 2.18, mp: "1090 K (817 °C, sublimes)", bp: "887 K (614 °C)",
    d: "5.727 g/cm³", disc: "Ancient", by: "Albertus Magnus (~1250)",
    desc: "Notorious poison in antiquity, today used as an n-type semiconductor dopant and in gallium arsenide high-speed chips."
  },
  {
    num: 34, sym: "Se", name: "Selenium", mass: "78.971", cat: "nonmetal", g: 16, p: 4, b: "p",
    st: "Solid", ec: "[Ar] 3d¹⁰ 4s² 4p⁴", en: 2.55, mp: "494 K (221 °C)", bp: "958 K (685 °C)",
    d: "4.81 g/cm³", disc: "1817", by: "Jöns Jacob Berzelius",
    desc: "Conducts electricity better in light than in darkness (photoconductivity); used in photocells, glass coloring, and nutrition."
  },
  {
    num: 35, sym: "Br", name: "Bromine", mass: "79.904", cat: "halogen", g: 17, p: 4, b: "p",
    st: "Liquid", ec: "[Ar] 3d¹⁰ 4s² 4p⁵", en: 2.96, mp: "265.8 K (-7.2 °C)", bp: "332.0 K (58.8 °C)",
    d: "3.1028 g/cm³", disc: "1826", by: "Antoine Jérôme Balard",
    desc: "The only nonmetallic element that is liquid at standard room conditions, producing dense reddish-brown choking fumes."
  },
  {
    num: 36, sym: "Kr", name: "Krypton", mass: "83.798", cat: "noble", g: 18, p: 4, b: "p",
    st: "Gas", ec: "[Ar] 3d¹⁰ 4s² 4p⁶", en: 3.00, mp: "115.79 K (-157.36 °C)", bp: "119.93 K (-153.22 °C)",
    d: "3.749 g/L", disc: "1898", by: "William Ramsay, Morris Travers",
    desc: "Noble gas used in high-speed photography flashes, fluorescent bulbs, and insulated energy-efficient architectural windows."
  },
  {
    num: 37, sym: "Rb", name: "Rubidium", mass: "85.468", cat: "alkali", g: 1, p: 5, b: "s",
    st: "Solid", ec: "[Kr] 5s¹", en: 0.82, mp: "312.46 K (39.31 °C)", bp: "961 K (688 °C)",
    d: "1.532 g/cm³", disc: "1861", by: "Robert Bunsen, Gustav Kirchhoff",
    desc: "Soft alkali metal that ignites spontaneously in air; used in atomic clocks and quantum Bose-Einstein condensation studies."
  },
  {
    num: 38, sym: "Sr", name: "Strontium", mass: "87.62", cat: "alkaline", g: 2, p: 5, b: "s",
    st: "Solid", ec: "[Kr] 5s²", en: 0.95, mp: "1050 K (777 °C)", bp: "1655 K (1382 °C)",
    d: "2.64 g/cm³", disc: "1790", by: "Adair Crawford",
    desc: "Imparts brilliant crimson-red colors to fireworks and flares, and used in ultra-precise strontium optical lattice atomic clocks."
  },
  {
    num: 39, sym: "Y", name: "Yttrium", mass: "88.906", cat: "transition", g: 3, p: 5, b: "d",
    st: "Solid", ec: "[Kr] 4d¹ 5s²", en: 1.22, mp: "1799 K (1526 °C)", bp: "3609 K (3336 °C)",
    d: "4.472 g/cm³", disc: "1794", by: "Johan Gadolin",
    desc: "Named after Ytterby, Sweden; used in white LED phosphors, YAG lasers, and high-temperature superconductors (YBCO)."
  },
  {
    num: 40, sym: "Zr", name: "Zirconium", mass: "91.224", cat: "transition", g: 4, p: 5, b: "d",
    st: "Solid", ec: "[Kr] 4d² 5s²", en: 1.33, mp: "2128 K (1855 °C)", bp: "4682 K (4409 °C)",
    d: "6.52 g/cm³", disc: "1789", by: "Martin Heinrich Klaproth",
    desc: "Extremely corrosion-resistant with low neutron absorption, making it the ideal cladding material for nuclear reactor fuel."
  },
  {
    num: 41, sym: "Nb", name: "Niobium", mass: "92.906", cat: "transition", g: 5, p: 5, b: "d",
    st: "Solid", ec: "[Kr] 4d⁴ 5s¹", en: 1.6, mp: "2750 K (2477 °C)", bp: "5017 K (4744 °C)",
    d: "8.57 g/cm³", disc: "1801", by: "Charles Hatchett",
    desc: "Superconducting metal alloyed with titanium to generate powerful magnetic fields in MRI machines and particle accelerators."
  },
  {
    num: 42, sym: "Mo", name: "Molybdenum", mass: "95.95", cat: "transition", g: 6, p: 5, b: "d",
    st: "Solid", ec: "[Kr] 4d⁵ 5s¹", en: 2.16, mp: "2896 K (2623 °C)", bp: "4912 K (4639 °C)",
    d: "10.28 g/cm³", disc: "1778", by: "Carl Wilhelm Scheele",
    desc: "Refractory metal with an extremely high melting point, strengthening steel alloys for military engines and petroleum refining."
  },
  {
    num: 43, sym: "Tc", name: "Technetium", mass: "[98]", cat: "transition", g: 7, p: 5, b: "d",
    st: "Solid", ec: "[Kr] 4d⁵ 5s²", en: 1.9, mp: "2430 K (2157 °C)", bp: "4538 K (4265 °C)",
    d: "11.5 g/cm³", disc: "1937", by: "Emilio Segrè, Carlo Perrier",
    desc: "The first predominantly artificially produced element; isotope Tc-99m is the most widely used medical radioisotope in oncology."
  },
  {
    num: 44, sym: "Ru", name: "Ruthenium", mass: "101.07", cat: "transition", g: 8, p: 5, b: "d",
    st: "Solid", ec: "[Kr] 4d⁷ 5s¹", en: 2.2, mp: "2607 K (2334 °C)", bp: "4423 K (4150 °C)",
    d: "12.45 g/cm³", disc: "1844", by: "Karl Ernst Claus",
    desc: "Rare platinum group metal used for wear-resistant electrical contacts, solar dye cells, and organometallic catalysis."
  },
  {
    num: 45, sym: "Rh", name: "Rhodium", mass: "102.91", cat: "transition", g: 9, p: 5, b: "d",
    st: "Solid", ec: "[Kr] 4d⁸ 5s¹", en: 2.28, mp: "2237 K (1964 °C)", bp: "3968 K (3695 °C)",
    d: "12.41 g/cm³", disc: "1803", by: "William Hyde Wollaston",
    desc: "One of the rarest and most valuable precious metals, vital in automotive catalytic converters to curb toxic NOx emissions."
  },
  {
    num: 46, sym: "Pd", name: "Palladium", mass: "106.42", cat: "transition", g: 10, p: 5, b: "d",
    st: "Solid", ec: "[Kr] 4d¹⁰", en: 2.20, mp: "1828.05 K (1554.9 °C)", bp: "3236 K (2963 °C)",
    d: "12.023 g/cm³", disc: "1803", by: "William Hyde Wollaston",
    desc: "Capable of absorbing up to 900 times its own volume of hydrogen gas; ubiquitous in automotive catalytic converters."
  },
  {
    num: 47, sym: "Ag", name: "Silver", mass: "107.87", cat: "transition", g: 11, p: 5, b: "d",
    st: "Solid", ec: "[Kr] 4d¹⁰ 5s¹", en: 1.93, mp: "1234.93 K (961.78 °C)", bp: "2435 K (2162 °C)",
    d: "10.49 g/cm³", disc: "Ancient", by: "Known to antiquity",
    desc: "Highest electrical and thermal conductivity of any known element, as well as the highest optical reflectivity."
  },
  {
    num: 48, sym: "Cd", name: "Cadmium", mass: "112.41", cat: "post-transition", g: 12, p: 5, b: "d",
    st: "Solid", ec: "[Kr] 4d¹⁰ 5s²", en: 1.69, mp: "594.22 K (321.07 °C)", bp: "1040 K (767 °C)",
    d: "8.65 g/cm³", disc: "1817", by: "Karl Samuel Leberecht Hermann, Friedrich Stromeyer",
    desc: "Soft bluish-white metal historically used in rechargeable NiCad batteries and control rods in nuclear reactors."
  },
  {
    num: 49, sym: "In", name: "Indium", mass: "114.82", cat: "post-transition", g: 13, p: 5, b: "p",
    st: "Solid", ec: "[Kr] 4d¹⁰ 5s² 5p¹", en: 1.78, mp: "429.75 K (156.60 °C)", bp: "2345 K (2072 °C)",
    d: "7.31 g/cm³", disc: "1863", by: "Ferdinand Reich, Hieronymous Theodor Richter",
    desc: "Soft post-transition metal; indium tin oxide (ITO) creates the transparent conductive coatings on smartphone touchscreens."
  },
  {
    num: 50, sym: "Sn", name: "Tin", mass: "118.71", cat: "post-transition", g: 14, p: 5, b: "p",
    st: "Solid", ec: "[Kr] 4d¹⁰ 5s² 5p²", en: 1.96, mp: "505.08 K (231.93 °C)", bp: "2875 K (2602 °C)",
    d: "7.287 g/cm³", disc: "Ancient", by: "Known to antiquity (~3000 BC)",
    desc: "Alloyed with copper to initiate the Bronze Age; widely used today in lead-free solder for electronic circuit boards."
  },
  {
    num: 51, sym: "Sb", name: "Antimony", mass: "121.76", cat: "metalloid", g: 15, p: 5, b: "p",
    st: "Solid", ec: "[Kr] 4d¹⁰ 5s² 5p³", en: 2.05, mp: "903.78 K (630.63 °C)", bp: "1908 K (1635 °C)",
    d: "6.697 g/cm³", disc: "Ancient", by: "Known to antiquity",
    desc: "Silvery brittle metalloid used as a flame retardant additive, in lead-acid storage batteries, and in semiconductor diodes."
  },
  {
    num: 52, sym: "Te", name: "Tellurium", mass: "127.60", cat: "metalloid", g: 16, p: 5, b: "p",
    st: "Solid", ec: "[Kr] 4d¹⁰ 5s² 5p⁴", en: 2.1, mp: "722.66 K (449.51 °C)", bp: "1261 K (988 °C)",
    d: "6.24 g/cm³", disc: "1782", by: "Franz-Joseph Müller von Reichenstein",
    desc: "Brittle metalloid alloyed with cadmium (CdTe) to create efficient thin-film solar panels and thermoelectric generators."
  },
  {
    num: 53, sym: "I", name: "Iodine", mass: "126.90", cat: "halogen", g: 17, p: 5, b: "p",
    st: "Solid", ec: "[Kr] 4d¹⁰ 5s² 5p⁵", en: 2.66, mp: "386.85 K (113.7 °C)", bp: "457.4 K (184.3 °C)",
    d: "4.933 g/cm³", disc: "1811", by: "Bernard Courtois",
    desc: "Lustrous purple-black solid that sublimes into violet gas; human nutrient essential for thyroid hormone synthesis."
  },
  {
    num: 54, sym: "Xe", name: "Xenon", mass: "131.29", cat: "noble", g: 18, p: 5, b: "p",
    st: "Gas", ec: "[Kr] 4d¹⁰ 5s² 5p⁶", en: 2.6, mp: "161.40 K (-111.75 °C)", bp: "165.03 K (-108.12 °C)",
    d: "5.894 g/L", disc: "1898", by: "William Ramsay, Morris Travers",
    desc: "Heavy noble gas used in intense camera flashes, medical anesthesia, and propellant for deep-space ion thrusters."
  },
  {
    num: 55, sym: "Cs", name: "Caesium", mass: "132.91", cat: "alkali", g: 1, p: 6, b: "s",
    st: "Solid", ec: "[Xe] 6s¹", en: 0.79, mp: "301.59 K (28.44 °C)", bp: "944 K (671 °C)",
    d: "1.93 g/cm³", disc: "1860", by: "Robert Bunsen, Gustav Kirchhoff",
    desc: "The resonant frequency of the Caesium-133 atom defines the international standard SI unit of time: the second."
  },
  {
    num: 56, sym: "Ba", name: "Barium", mass: "137.33", cat: "alkaline", g: 2, p: 6, b: "s",
    st: "Solid", ec: "[Xe] 6s²", en: 0.89, mp: "1000 K (727 °C)", bp: "2170 K (1897 °C)",
    d: "3.51 g/cm³", disc: "1774", by: "Carl Wilhelm Scheele",
    desc: "Heavy alkaline earth metal used as a radiocontrast agent for gastrointestinal X-rays and in green pyrotechnics."
  },
  {
    num: 57, sym: "La", name: "Lanthanum", mass: "138.91", cat: "lanthanide", g: 3, p: 6, b: "d",
    st: "Solid", ec: "[Xe] 5d¹ 6s²", en: 1.10, mp: "1193 K (920 °C)", bp: "3737 K (3464 °C)",
    d: "6.162 g/cm³", disc: "1839", by: "Carl Gustaf Mosander",
    desc: "Gives its name to the lanthanide series; used in carbon arc studio lighting and high refractive index camera lens glass."
  },
  {
    num: 58, sym: "Ce", name: "Cerium", mass: "140.12", cat: "lanthanide", g: 3, p: 6, b: "f",
    st: "Solid", ec: "[Xe] 4f¹ 5d¹ 6s²", en: 1.12, mp: "1068 K (795 °C)", bp: "3716 K (3443 °C)",
    d: "6.77 g/cm³", disc: "1803", by: "Martin Heinrich Klaproth, Jöns Jacob Berzelius",
    desc: "The most abundant rare earth metal, essential in automotive catalytic converters and precision glass polishing."
  },
  {
    num: 59, sym: "Pr", name: "Praseodymium", mass: "140.91", cat: "lanthanide", g: 3, p: 6, b: "f",
    st: "Solid", ec: "[Xe] 4f³ 6s²", en: 1.13, mp: "1208 K (935 °C)", bp: "3793 K (3520 °C)",
    d: "6.77 g/cm³", disc: "1885", by: "Carl Auer von Welsbach",
    desc: "Alloyed with neodymium to create ultra-strong permanent magnets and protective welder's goggles."
  },
  {
    num: 60, sym: "Nd", name: "Neodymium", mass: "144.24", cat: "lanthanide", g: 3, p: 6, b: "f",
    st: "Solid", ec: "[Xe] 4f⁴ 6s²", en: 1.14, mp: "1297 K (1024 °C)", bp: "3347 K (3074 °C)",
    d: "7.01 g/cm³", disc: "1885", by: "Carl Auer von Welsbach",
    desc: "Famous for NdFeB magnets, the strongest type of permanent magnet, powering EV motors and wind turbine generators."
  },
  {
    num: 61, sym: "Pm", name: "Promethium", mass: "[145]", cat: "lanthanide", g: 3, p: 6, b: "f",
    st: "Solid", ec: "[Xe] 4f⁵ 6s²", en: 1.13, mp: "1315 K (1042 °C)", bp: "3273 K (3000 °C)",
    d: "7.26 g/cm³", disc: "1945", by: "Jacob A. Marinsky et al.",
    desc: "Only radioactive lanthanide; used in atomic batteries for pacemakers and long-life luminous signal paint."
  },
  {
    num: 62, sym: "Sm", name: "Samarium", mass: "150.36", cat: "lanthanide", g: 3, p: 6, b: "f",
    st: "Solid", ec: "[Xe] 4f⁶ 6s²", en: 1.17, mp: "1345 K (1072 °C)", bp: "2067 K (1794 °C)",
    d: "7.52 g/cm³", disc: "1879", by: "Lecoq de Boisbaudran",
    desc: "Forms high-temperature permanent magnets (SmCo) resistant to demagnetization in military radar and aerospace engines."
  },
  {
    num: 63, sym: "Eu", name: "Europium", mass: "151.96", cat: "lanthanide", g: 3, p: 6, b: "f",
    st: "Solid", ec: "[Xe] 4f⁷ 6s²", en: 1.2, mp: "1099 K (826 °C)", bp: "1802 K (1529 °C)",
    d: "5.244 g/cm³", disc: "1901", by: "Eugène-Anatole Demarçay",
    desc: "The most reactive rare earth; acts as a red phosphorescent tag in Euro banknotes to combat counterfeiting."
  },
  {
    num: 64, sym: "Gd", name: "Gadolinium", mass: "157.25", cat: "lanthanide", g: 3, p: 6, b: "f",
    st: "Solid", ec: "[Xe] 4f⁷ 5d¹ 6s²", en: 1.20, mp: "1585 K (1312 °C)", bp: "3546 K (3273 °C)",
    d: "7.90 g/cm³", disc: "1880", by: "Jean Charles Galissard de Marignac",
    desc: "Paramagnetic at room temperature; intravenous gadolinium complexes are premier contrast agents in medical MRI."
  },
  {
    num: 65, sym: "Tb", name: "Terbium", mass: "158.93", cat: "lanthanide", g: 3, p: 6, b: "f",
    st: "Solid", ec: "[Xe] 4f⁹ 6s²", en: 1.2, mp: "1629 K (1356 °C)", bp: "3503 K (3230 °C)",
    d: "8.23 g/cm³", disc: "1843", by: "Carl Gustaf Mosander",
    desc: "Provides brilliant green phosphors in flat panel displays; part of Terfenol-D magnetostrictive sonar transducers."
  },
  {
    num: 66, sym: "Dy", name: "Dysprosium", mass: "162.50", cat: "lanthanide", g: 3, p: 6, b: "f",
    st: "Solid", ec: "[Xe] 4f¹⁰ 6s²", en: 1.22, mp: "1680 K (1407 °C)", bp: "2840 K (2562 °C)",
    d: "8.54 g/cm³", disc: "1886", by: "Paul Émile Lecoq de Boisbaudran",
    desc: "Added to neodymium magnets to prevent thermal demagnetization at high operating temperatures in hybrid vehicles."
  },
  {
    num: 67, sym: "Ho", name: "Holmium", mass: "164.93", cat: "lanthanide", g: 3, p: 6, b: "f",
    st: "Solid", ec: "[Xe] 4f¹¹ 6s²", en: 1.23, mp: "1734 K (1461 °C)", bp: "2993 K (2720 °C)",
    d: "8.79 g/cm³", disc: "1878", by: "Jacques-Louis Soret, Marc Delafontaine",
    desc: "Possesses the highest magnetic moment of any naturally occurring element; used in medical laser surgery (Ho:YAG)."
  },
  {
    num: 68, sym: "Er", name: "Erbium", mass: "167.26", cat: "lanthanide", g: 3, p: 6, b: "f",
    st: "Solid", ec: "[Xe] 4f¹² 6s²", en: 1.24, mp: "1802 K (1529 °C)", bp: "3141 K (2868 °C)",
    d: "9.066 g/cm³", disc: "1843", by: "Carl Gustaf Mosander",
    desc: "Erbium-doped optical fiber amplifiers (EDFAs) directly amplify optical signals carrying global internet traffic."
  },
  {
    num: 69, sym: "Tm", name: "Thulium", mass: "168.93", cat: "lanthanide", g: 3, p: 6, b: "f",
    st: "Solid", ec: "[Xe] 4f¹³ 6s²", en: 1.25, mp: "1818 K (1545 °C)", bp: "2223 K (1950 °C)",
    d: "9.32 g/cm³", disc: "1879", by: "Per Teodor Cleve",
    desc: "Second least abundant rare earth element; used as a radiation source in portable medical X-ray machines."
  },
  {
    num: 70, sym: "Yb", name: "Ytterbium", mass: "173.05", cat: "lanthanide", g: 3, p: 6, b: "f",
    st: "Solid", ec: "[Xe] 4f¹⁴ 6s²", en: 1.1, mp: "1097 K (824 °C)", bp: "1469 K (1196 °C)",
    d: "6.90 g/cm³", disc: "1878", by: "Jean Charles Galissard de Marignac",
    desc: "Used in atomic clocks with stability rivaling caesium standards, and as a doping agent in high-power fiber lasers."
  },
  {
    num: 71, sym: "Lu", name: "Lutetium", mass: "174.97", cat: "lanthanide", g: 3, p: 6, b: "d",
    st: "Solid", ec: "[Xe] 4f¹⁴ 5d¹ 6s²", en: 1.27, mp: "1925 K (1652 °C)", bp: "3675 K (3402 °C)",
    d: "9.841 g/cm³", disc: "1907", by: "Georges Urbain, Carl Auer von Welsbach",
    desc: "The densest and hardest lanthanide metal, used as a catalyst in petroleum cracking and in cancer radiotherapy."
  },
  {
    num: 72, sym: "Hf", name: "Hafnium", mass: "178.49", cat: "transition", g: 4, p: 6, b: "d",
    st: "Solid", ec: "[Xe] 4f¹⁴ 5d² 6s²", en: 1.3, mp: "2506 K (2233 °C)", bp: "4876 K (4603 °C)",
    d: "13.31 g/cm³", disc: "1923", by: "Dirk Coster, George de Hevesy",
    desc: "High neutron absorption coefficient makes it invaluable for nuclear submarine reactor control rods."
  },
  {
    num: 73, sym: "Ta", name: "Tantalum", mass: "180.95", cat: "transition", g: 5, p: 6, b: "d",
    st: "Solid", ec: "[Xe] 4f¹⁴ 5d³ 6s²", en: 1.5, mp: "3290 K (3017 °C)", bp: "5731 K (5458 °C)",
    d: "16.69 g/cm³", disc: "1802", by: "Anders Gustaf Ekeberg",
    desc: "Highly corrosion resistant; miniature tantalum capacitors are central components inside smartphones and laptops."
  },
  {
    num: 74, sym: "W", name: "Tungsten", mass: "183.84", cat: "transition", g: 6, p: 6, b: "d",
    st: "Solid", ec: "[Xe] 4f¹⁴ 5d⁴ 6s²", en: 2.36, mp: "3695 K (3422 °C)", bp: "6203 K (5930 °C)",
    d: "19.25 g/cm³", disc: "1781", by: "Carl Wilhelm Scheele",
    desc: "Boasts the highest melting point of all elements (3422 °C); used in incandescent filaments, rocket nozzles, and armor penetrators."
  },
  {
    num: 75, sym: "Re", name: "Rhenium", mass: "186.21", cat: "transition", g: 7, p: 6, b: "d",
    st: "Solid", ec: "[Xe] 4f¹⁴ 5d⁵ 6s²", en: 1.9, mp: "3459 K (3186 °C)", bp: "5869 K (5596 °C)",
    d: "21.02 g/cm³", disc: "1925", by: "Masataka Ogawa, Walter Noddack, Ida Tacke",
    desc: "Third highest melting point element; alloyed into nickel superalloys for commercial and military jet turbine blades."
  },
  {
    num: 76, sym: "Os", name: "Osmium", mass: "190.23", cat: "transition", g: 8, p: 6, b: "d",
    st: "Solid", ec: "[Xe] 4f¹⁴ 5d⁶ 6s²", en: 2.2, mp: "3306 K (3033 °C)", bp: "5285 K (5012 °C)",
    d: "22.59 g/cm³", disc: "1803", by: "Smithson Tennant",
    desc: "The densest naturally occurring element, twice as dense as lead, used in fountain pen nibs and electrical contacts."
  },
  {
    num: 77, sym: "Ir", name: "Iridium", mass: "192.22", cat: "transition", g: 9, p: 6, b: "d",
    st: "Solid", ec: "[Xe] 4f¹⁴ 5d⁷ 6s²", en: 2.20, mp: "2719 K (2446 °C)", bp: "4701 K (4428 °C)",
    d: "22.56 g/cm³", disc: "1803", by: "Smithson Tennant",
    desc: "The most corrosion-resistant metal known; the thin K-Pg geological layer of iridium marks the asteroid impact that ended the dinosaurs."
  },
  {
    num: 78, sym: "Pt", name: "Platinum", mass: "195.08", cat: "transition", g: 10, p: 6, b: "d",
    st: "Solid", ec: "[Xe] 4f¹⁴ 5d⁹ 6s¹", en: 2.28, mp: "2041.4 K (1768.3 °C)", bp: "4098 K (3825 °C)",
    d: "21.45 g/cm³", disc: "1735", by: "Antonio de Ulloa",
    desc: "Noble precious metal with high unreactivity, serving as a chemical catalyst, fuel cell catalyst, and fine jewelry metal."
  },
  {
    num: 79, sym: "Au", name: "Gold", mass: "196.97", cat: "transition", g: 11, p: 6, b: "d",
    st: "Solid", ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", en: 2.54, mp: "1337.33 K (1064.18 °C)", bp: "3129 K (2856 °C)",
    d: "19.30 g/cm³", disc: "Ancient", by: "Known to antiquity",
    desc: "The most malleable and ductile metal known; chemically inert and prized throughout human history for currency and electronics."
  },
  {
    num: 80, sym: "Hg", name: "Mercury", mass: "200.59", cat: "post-transition", g: 12, p: 6, b: "d",
    st: "Liquid", ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", en: 2.00, mp: "234.32 K (-38.83 °C)", bp: "629.88 K (356.73 °C)",
    d: "13.534 g/cm³", disc: "Ancient", by: "Known to antiquity",
    desc: "The only metallic element liquid at standard room conditions, historically nicknamed 'quicksilver'."
  },
  {
    num: 81, sym: "Tl", name: "Thallium", mass: "204.38", cat: "post-transition", g: 13, p: 6, b: "p",
    st: "Solid", ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", en: 1.62, mp: "577 K (304 °C)", bp: "1746 K (1473 °C)",
    d: "11.85 g/cm³", disc: "1861", by: "William Crookes",
    desc: "Soft gray metal; thallium salts are notoriously toxic and used historically as rat poison and optical lenses."
  },
  {
    num: 82, sym: "Pb", name: "Lead", mass: "207.2", cat: "post-transition", g: 14, p: 6, b: "p",
    st: "Solid", ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", en: 2.33, mp: "600.61 K (327.46 °C)", bp: "2022 K (1749 °C)",
    d: "11.34 g/cm³", disc: "Ancient", by: "Known to antiquity (~7000 BC)",
    desc: "Dense, malleable post-transition metal used for radiation shielding in hospitals and in lead-acid automotive starter batteries."
  },
  {
    num: 83, sym: "Bi", name: "Bismuth", mass: "208.98", cat: "post-transition", g: 15, p: 6, b: "p",
    st: "Solid", ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", en: 2.02, mp: "544.7 K (271.5 °C)", bp: "1837 K (1564 °C)",
    d: "9.78 g/cm³", disc: "1753", by: "Claude François Geoffroy",
    desc: "Forms iridescent hopper crystals due to thin oxide layers; non-toxic heavy metal used in stomach medicines like Pepto-Bismol."
  },
  {
    num: 84, sym: "Po", name: "Polonium", mass: "[209]", cat: "post-transition", g: 16, p: 6, b: "p",
    st: "Solid", ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", en: 2.0, mp: "527 K (254 °C)", bp: "1235 K (962 °C)",
    d: "9.196 g/cm³", disc: "1898", by: "Marie Curie, Pierre Curie",
    desc: "Intensely radioactive alpha emitter named in honor of Marie Curie's native Poland, used in antistatic brushes and thermoelectric heat."
  },
  {
    num: 85, sym: "At", name: "Astatine", mass: "[210]", cat: "halogen", g: 17, p: 6, b: "p",
    st: "Solid", ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", en: 2.2, mp: "575 K (302 °C)", bp: "610 K (337 °C)",
    d: "6.35 g/cm³ (est.)", disc: "1940", by: "Dale R. Corson, Kenneth Ross MacKenzie, Emilio Segrè",
    desc: "The rarest naturally occurring element in Earth's crust (less than 30 grams at any moment), studied for targeted alpha tumor therapy."
  },
  {
    num: 86, sym: "Rn", name: "Radon", mass: "[222]", cat: "noble", g: 18, p: 6, b: "p",
    st: "Gas", ec: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", en: 2.2, mp: "202 K (-71 °C)", bp: "211.3 K (-61.7 °C)",
    d: "9.73 g/L", disc: "1900", by: "Friedrich Ernst Dorn",
    desc: "Radioactive noble gas produced by the radioactive decay of radium; can accumulate inside basement structures."
  },
  {
    num: 87, sym: "Fr", name: "Francium", mass: "[223]", cat: "alkali", g: 1, p: 7, b: "s",
    st: "Solid", ec: "[Rn] 7s¹", en: 0.7, mp: "300 K (27 °C)", bp: "950 K (677 °C)",
    d: "1.87 g/cm³ (est.)", disc: "1939", by: "Marguerite Perey",
    desc: "The second-rarest element in the crust; extremely radioactive alkali metal with a half-life of only 22 minutes."
  },
  {
    num: 88, sym: "Ra", name: "Radium", mass: "[226]", cat: "alkaline", g: 2, p: 7, b: "s",
    st: "Solid", ec: "[Rn] 7s²", en: 0.9, mp: "973 K (700 °C)", bp: "2010 K (1737 °C)",
    d: "5.5 g/cm³", disc: "1898", by: "Marie Curie, Pierre Curie",
    desc: "Discovered by the Curies in pitchblende; historical glow-in-the-dark watch paint before its radiation hazard was recognized."
  },
  {
    num: 89, sym: "Ac", name: "Actinium", mass: "[227]", cat: "actinide", g: 3, p: 7, b: "d",
    st: "Solid", ec: "[Rn] 6d¹ 7s²", en: 1.1, mp: "1323 K (1050 °C)", bp: "3471 K (3198 °C)",
    d: "10.07 g/cm³", disc: "1899", by: "André-Louis Debierne",
    desc: "Intensely radioactive element glowing with an ethereal pale blue light due to ionization of surrounding air."
  },
  {
    num: 90, sym: "Th", name: "Thorium", mass: "232.04", cat: "actinide", g: 3, p: 7, b: "f",
    st: "Solid", ec: "[Rn] 6d² 7s²", en: 1.3, mp: "2115 K (1842 °C)", bp: "5061 K (4788 °C)",
    d: "11.72 g/cm³", disc: "1829", by: "Jöns Jacob Berzelius",
    desc: "Naturally occurring actinide three times more abundant than uranium, researched as an alternative nuclear fuel cycle."
  },
  {
    num: 91, sym: "Pa", name: "Protactinium", mass: "231.04", cat: "actinide", g: 3, p: 7, b: "f",
    st: "Solid", ec: "[Rn] 5f² 6d¹ 7s²", en: 1.5, mp: "1841 K (1568 °C)", bp: "4300 K (4027 °C)",
    d: "15.37 g/cm³", disc: "1913", by: "Kasimir Fajans, Oswald Helmuth Göhring",
    desc: "Dense, radioactive metal formed during uranium decay; highly toxic and used primarily for fundamental nuclear physics research."
  },
  {
    num: 92, sym: "U", name: "Uranium", mass: "238.03", cat: "actinide", g: 3, p: 7, b: "f",
    st: "Solid", ec: "[Rn] 5f³ 6d¹ 7s²", en: 1.38, mp: "1405.3 K (1132.2 °C)", bp: "4404 K (4131 °C)",
    d: "19.1 g/cm³", disc: "1789", by: "Martin Heinrich Klaproth",
    desc: "The primary fissile fuel for commercial nuclear reactors; decay of uranium and thorium generates geothermal heat in Earth's mantle."
  },
  {
    num: 93, sym: "Np", name: "Neptunium", mass: "[237]", cat: "actinide", g: 3, p: 7, b: "f",
    st: "Solid", ec: "[Rn] 5f⁴ 6d¹ 7s²", en: 1.36, mp: "917 K (644 °C)", bp: "4273 K (4000 °C)",
    d: "20.45 g/cm³", disc: "1940", by: "Edwin McMillan, Philip H. Abelson",
    desc: "The first transuranic synthetic actinide created, named after the planet Neptune as uranium is named after Uranus."
  },
  {
    num: 94, sym: "Pu", name: "Plutonium", mass: "[244]", cat: "actinide", g: 3, p: 7, b: "f",
    st: "Solid", ec: "[Rn] 5f⁶ 7s²", en: 1.28, mp: "912.5 K (639.4 °C)", bp: "3501 K (3228 °C)",
    d: "19.84 g/cm³", disc: "1940", by: "Glenn T. Seaborg et al.",
    desc: "Key fissile material in nuclear energy and weapons; Pu-238 heat powers the radioisotope thermoelectric generators on NASA's Voyager and Curiosity."
  },
  {
    num: 95, sym: "Am", name: "Americium", mass: "[243]", cat: "actinide", g: 3, p: 7, b: "f",
    st: "Solid", ec: "[Rn] 5f⁷ 7s²", en: 1.3, mp: "1449 K (1176 °C)", bp: "2880 K (2607 °C)",
    d: "12 g/cm³", disc: "1944", by: "Glenn T. Seaborg et al.",
    desc: "Synthetic element; tiny microgram traces of Americium-241 ionize smoke chambers in millions of household smoke detectors."
  },
  {
    num: 96, sym: "Cm", name: "Curium", mass: "[247]", cat: "actinide", g: 3, p: 7, b: "f",
    st: "Solid", ec: "[Rn] 5f⁷ 6d¹ 7s²", en: 1.3, mp: "1613 K (1340 °C)", bp: "3383 K (3110 °C)",
    d: "13.51 g/cm³", disc: "1944", by: "Glenn T. Seaborg et al.",
    desc: "Named in honor of Marie and Pierre Curie; potent alpha radiation source used on Mars rovers for Alpha Particle X-ray Spectrometry."
  },
  {
    num: 97, sym: "Bk", name: "Berkelium", mass: "[247]", cat: "actinide", g: 3, p: 7, b: "f",
    st: "Solid", ec: "[Rn] 5f⁹ 7s²", en: 1.3, mp: "1259 K (986 °C)", bp: "2900 K (2627 °C)",
    d: "14.78 g/cm³", disc: "1949", by: "Stanley G. Thompson, Albert Ghiorso, Glenn T. Seaborg",
    desc: "Synthesized at UC Berkeley by alpha particle bombardment of americium; used as target material to discover heavier elements."
  },
  {
    num: 98, sym: "Cf", name: "Californium", mass: "[251]", cat: "actinide", g: 3, p: 7, b: "f",
    st: "Solid", ec: "[Rn] 5f¹⁰ 7s²", en: 1.3, mp: "1173 K (900 °C)", bp: "1743 K (1470 °C)",
    d: "15.1 g/cm³", disc: "1950", by: "Stanley G. Thompson, Albert Ghiorso, Glenn T. Seaborg",
    desc: "One of the heaviest elements produced in weighable quantities; Californium-252 is a prodigious neutron emitter used in oil well logging."
  },
  {
    num: 99, sym: "Es", name: "Einsteinium", mass: "[252]", cat: "actinide", g: 3, p: 7, b: "f",
    st: "Solid", ec: "[Rn] 5f¹¹ 7s²", en: 1.3, mp: "1133 K (860 °C)", bp: "1269 K (996 °C)",
    d: "8.84 g/cm³", disc: "1952", by: "Albert Ghiorso et al.",
    desc: "Discovered in the radioactive debris of the 'Ivy Mike' thermonuclear bomb test; named in honor of Albert Einstein."
  },
  {
    num: 100, sym: "Fm", name: "Fermium", mass: "[257]", cat: "actinide", g: 3, p: 7, b: "f",
    st: "Solid", ec: "[Rn] 5f¹² 7s²", en: 1.3, mp: "1800 K (1527 °C)", bp: "N/A",
    d: "N/A", disc: "1952", by: "Albert Ghiorso et al.",
    desc: "Named after Enrico Fermi; the heaviest element that can be produced by neutron bombardment of lighter elements."
  },
  {
    num: 101, sym: "Md", name: "Mendelevium", mass: "[258]", cat: "actinide", g: 3, p: 7, b: "f",
    st: "Solid", ec: "[Rn] 5f¹³ 7s²", en: 1.3, mp: "1100 K (827 °C)", bp: "N/A",
    d: "N/A", disc: "1955", by: "Albert Ghiorso, Glenn T. Seaborg et al.",
    desc: "First synthesized one atom at a time; named in honor of Dmitri Mendeleev, the father of the periodic table."
  },
  {
    num: 102, sym: "No", name: "Nobelium", mass: "[259]", cat: "actinide", g: 3, p: 7, b: "f",
    st: "Solid", ec: "[Rn] 5f¹⁴ 7s²", en: 1.3, mp: "1100 K (827 °C)", bp: "N/A",
    d: "N/A", disc: "1966", by: "Joint Institute for Nuclear Research (Dubna)",
    desc: "Named in honor of Alfred Nobel, inventor of dynamite; synthetic radioelement studied in heavy-ion collision experiments."
  },
  {
    num: 103, sym: "Lr", name: "Lawrencium", mass: "[266]", cat: "actinide", g: 3, p: 7, b: "d",
    st: "Solid", ec: "[Rn] 5f¹⁴ 7s² 7p¹", en: 1.3, mp: "1900 K (1627 °C)", bp: "N/A",
    d: "N/A", disc: "1961", by: "Albert Ghiorso et al.",
    desc: "Terminal member of the actinide series, named after Ernest O. Lawrence, inventor of the cyclotron accelerator."
  },
  {
    num: 104, sym: "Rf", name: "Rutherfordium", mass: "[267]", cat: "transition", g: 4, p: 7, b: "d",
    st: "Synthetic", ec: "[Rn] 5f¹⁴ 6d² 7s²", en: null, mp: "2400 K (2100 °C)", bp: "5800 K (5500 °C)",
    d: "23.2 g/cm³ (est.)", disc: "1969", by: "JINR (Dubna) & UC Berkeley",
    desc: "The first transactinide super-heavy element, confirming the continuation of transition group 4 chemistry."
  },
  {
    num: 105, sym: "Db", name: "Dubnium", mass: "[268]", cat: "transition", g: 5, p: 7, b: "d",
    st: "Synthetic", ec: "[Rn] 5f¹⁴ 6d³ 7s²", en: null, mp: "N/A", bp: "N/A",
    d: "29.3 g/cm³ (est.)", disc: "1970", by: "JINR (Dubna) & UC Berkeley",
    desc: "Super-heavy transactinide element named after the Russian science city of Dubna, home to the Joint Institute for Nuclear Research."
  },
  {
    num: 106, sym: "Sg", name: "Seaborgium", mass: "[269]", cat: "transition", g: 6, p: 7, b: "d",
    st: "Synthetic", ec: "[Rn] 5f¹⁴ 6d⁴ 7s²", en: null, mp: "N/A", bp: "N/A",
    d: "35.0 g/cm³ (est.)", disc: "1974", by: "Lawrence Berkeley Laboratory",
    desc: "First chemical element named after a living person (Glenn T. Seaborg), proving complex hexavalent coordination compounds."
  },
  {
    num: 107, sym: "Bh", name: "Bohrium", mass: "[270]", cat: "transition", g: 7, p: 7, b: "d",
    st: "Synthetic", ec: "[Rn] 5f¹⁴ 6d⁵ 7s²", en: null, mp: "N/A", bp: "N/A",
    d: "37.1 g/cm³ (est.)", disc: "1981", by: "GSI Darmstadt, Germany",
    desc: "Named in honor of Danish quantum pioneer Niels Bohr; synthesized by bombarding bismuth targets with chromium ions."
  },
  {
    num: 108, sym: "Hs", name: "Hassium", mass: "[269]", cat: "transition", g: 8, p: 7, b: "d",
    st: "Synthetic", ec: "[Rn] 5f¹⁴ 6d⁶ 7s²", en: null, mp: "N/A", bp: "N/A",
    d: "40.7 g/cm³ (est.)", disc: "1984", by: "GSI Darmstadt, Germany",
    desc: "Group 8 super-heavy element, named after the German state of Hesse (Hassia); forms volatile tetroxides similar to osmium."
  },
  {
    num: 109, sym: "Mt", name: "Meitnerium", mass: "[278]", cat: "transition", g: 9, p: 7, b: "d",
    st: "Synthetic", ec: "[Rn] 5f¹⁴ 6d⁷ 7s²", en: null, mp: "N/A", bp: "N/A",
    d: "37.4 g/cm³ (est.)", disc: "1982", by: "GSI Darmstadt, Germany",
    desc: "Named in honor of Austrian-Swedish physicist Lise Meitner, one of the discoverers of nuclear fission."
  },
  {
    num: 110, sym: "Ds", name: "Darmstadtium", mass: "[281]", cat: "transition", g: 10, p: 7, b: "d",
    st: "Synthetic", ec: "[Rn] 5f¹⁴ 6d⁸ 7s²", en: null, mp: "N/A", bp: "N/A",
    d: "34.8 g/cm³ (est.)", disc: "1994", by: "GSI Darmstadt, Germany",
    desc: "Created by fusing lead and nickel atoms; named after the German city of Darmstadt where it was discovered."
  },
  {
    num: 111, sym: "Rg", name: "Roentgenium", mass: "[282]", cat: "transition", g: 11, p: 7, b: "d",
    st: "Synthetic", ec: "[Rn] 5f¹⁴ 6d⁹ 7s²", en: null, mp: "N/A", bp: "N/A",
    d: "28.7 g/cm³ (est.)", disc: "1994", by: "GSI Darmstadt, Germany",
    desc: "Group 11 super-heavy element named in honor of Wilhelm Röntgen, discoverer of X-rays."
  },
  {
    num: 112, sym: "Cn", name: "Copernicium", mass: "[285]", cat: "post-transition", g: 12, p: 7, b: "d",
    st: "Synthetic", ec: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", en: null, mp: "283 K (10 °C, est.)", bp: "340 K (67 °C, est.)",
    d: "23.7 g/cm³ (est.)", disc: "1996", by: "GSI Darmstadt, Germany",
    desc: "Named in honor of astronomer Nicolaus Copernicus; relativistic quantum effects make it exceptionally volatile, possibly gaseous."
  },
  {
    num: 113, sym: "Nh", name: "Nihonium", mass: "[286]", cat: "post-transition", g: 13, p: 7, b: "p",
    st: "Synthetic", ec: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", en: null, mp: "700 K (430 °C, est.)", bp: "1400 K (1130 °C, est.)",
    d: "16 g/cm³ (est.)", disc: "2004", by: "RIKEN, Japan",
    desc: "The first chemical element discovered in Asia, named after 'Nihon', one of the traditional Japanese names for Japan."
  },
  {
    num: 114, sym: "Fl", name: "Flerovium", mass: "[289]", cat: "post-transition", g: 14, p: 7, b: "p",
    st: "Synthetic", ec: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", en: null, mp: "200 K (-73 °C, est.)", bp: "380 K (107 °C, est.)",
    d: "14 g/cm³ (est.)", disc: "1998", by: "JINR (Dubna) & LLNL",
    desc: "Named in honor of Soviet nuclear physicist Georgy Flerov; situated near the predicted 'Island of Stability' of super-heavy nuclei."
  },
  {
    num: 115, sym: "Mc", name: "Moscovium", mass: "[290]", cat: "post-transition", g: 15, p: 7, b: "p",
    st: "Synthetic", ec: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", en: null, mp: "670 K (400 °C, est.)", bp: "1400 K (1100 °C, est.)",
    d: "13.5 g/cm³ (est.)", disc: "2003", by: "JINR (Dubna), LLNL, ORNL",
    desc: "Super-heavy synthetic element named after Moscow Oblast, the historic region hosting the Dubna synthesis facilities."
  },
  {
    num: 116, sym: "Lv", name: "Livermorium", mass: "[293]", cat: "post-transition", g: 16, p: 7, b: "p",
    st: "Synthetic", ec: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", en: null, mp: "709 K (436 °C, est.)", bp: "1085 K (812 °C, est.)",
    d: "12.9 g/cm³ (est.)", disc: "2000", by: "JINR (Dubna) & LLNL",
    desc: "Named in honor of Lawrence Livermore National Laboratory in California, celebrating decades of nuclear synthesis collaboration."
  },
  {
    num: 117, sym: "Ts", name: "Tennessine", mass: "[294]", cat: "halogen", g: 17, p: 7, b: "p",
    st: "Synthetic", ec: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", en: null, mp: "723 K (450 °C, est.)", bp: "883 K (610 °C, est.)",
    d: "7.2 g/cm³ (est.)", disc: "2010", by: "JINR, ORNL, LLNL, Vanderbilt",
    desc: "Named in recognition of the state of Tennessee and Oak Ridge National Laboratory; the second heaviest known element."
  },
  {
    num: 118, sym: "Og", name: "Oganesson", mass: "[294]", cat: "noble", g: 18, p: 7, b: "p",
    st: "Synthetic", ec: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", en: null, mp: "325 K (52 °C, est.)", bp: "450 K (177 °C, est.)",
    d: "5.0 g/cm³ (est.)", disc: "2002", by: "JINR (Dubna) & LLNL",
    desc: "Highest atomic number and highest atomic mass of all recognized elements; named in honor of nuclear physicist Yuri Oganessian."
  }
];

// Human-friendly category display names
const CATEGORY_NAMES = {
  "alkali": "Alkali Metal",
  "alkaline": "Alkaline Earth Metal",
  "transition": "Transition Metal",
  "post-transition": "Post-Transition Metal",
  "metalloid": "Metalloid",
  "nonmetal": "Nonmetal",
  "halogen": "Halogen",
  "noble": "Noble Gas",
  "lanthanide": "Lanthanide",
  "actinide": "Actinide"
};

// IUPAC / CAS Group labels
const GROUP_LABELS = [
  { num: 1, iupac: "IA" },
  { num: 2, iupac: "IIA" },
  { num: 3, iupac: "IIIB" },
  { num: 4, iupac: "IVB" },
  { num: 5, iupac: "VB" },
  { num: 6, iupac: "VIB" },
  { num: 7, iupac: "VIIB" },
  { num: 8, iupac: "VIIIB" },
  { num: 9, iupac: "VIIIB" },
  { num: 10, iupac: "VIIIB" },
  { num: 11, iupac: "IB" },
  { num: 12, iupac: "IIB" },
  { num: 13, iupac: "IIIA" },
  { num: 14, iupac: "IVA" },
  { num: 15, iupac: "VA" },
  { num: 16, iupac: "VIA" },
  { num: 17, iupac: "VIIA" },
  { num: 18, iupac: "VIIIA" }
];

// Period shell labels
const PERIOD_SHELLS = ["K", "L", "M", "N", "O", "P", "Q"];

// Global App State
const state = {
  selectedElement: null,
  activeFilter: "all",
  activeStateFilter: "all",
  searchQuery: "",
  theme: "dark",
  atomAnimationId: null,
  atomAngle: 0
};

// ==========================================================================
// DOM ELEMENT REFERENCES
// ==========================================================================
const elementsGrid = document.getElementById("periodic-table-grid");
const searchInput = document.getElementById("search-input");
const searchClearBtn = document.getElementById("search-clear-btn");
const searchMatchBadge = document.getElementById("search-match-badge");
const randomBtn = document.getElementById("random-element-btn");
const resetBtn = document.getElementById("reset-view-btn");
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const helpBtn = document.getElementById("help-btn");
const helpModal = document.getElementById("help-modal");
const helpModalClose = document.getElementById("help-modal-close");
const filterTabs = document.querySelectorAll(".cat-tab, .filter-tab");
const stateFilterBtns = document.querySelectorAll(".state-filter-btn");
const tooltip = document.getElementById("element-tooltip");
const prevElementBtn = document.getElementById("prev-element-btn");
const nextElementBtn = document.getElementById("next-element-btn");
const atomCanvas = document.getElementById("atom-canvas");
const copyJsonBtn = document.getElementById("btn-copy-json");
const cardHeaderNum = document.getElementById("card-header-num");
const toastEl = document.getElementById("app-toast");
let toastTimer = null;

// ==========================================================================
// TOAST NOTIFICATION
// ==========================================================================
function showToast(message) {
  if (!toastEl) return;
  const textNode = toastEl.querySelector(".toast-text");
  if (textNode) textNode.textContent = message;
  toastEl.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2400);
}

// ==========================================================================
// RENDER PERIODIC TABLE
// ==========================================================================
function renderPeriodicTable() {
  if (!elementsGrid) return;
  elementsGrid.innerHTML = "";

  // 1. Top-Left Corner Label (Group / Period coordinates)
  const cornerLabel = document.createElement("div");
  cornerLabel.className = "coord-cell corner-coord";
  cornerLabel.innerHTML = `<span>G↓</span><span>P→</span>`;
  elementsGrid.appendChild(cornerLabel);

  // 2. Group Number Headers (1 to 18)
  GROUP_LABELS.forEach(grpInfo => {
    const grp = document.createElement("div");
    grp.className = "coord-cell group-coord";
    grp.style.gridColumn = (grpInfo.num + 1).toString();
    grp.style.gridRow = "1";
    grp.innerHTML = `
      <span class="group-main-num">${grpInfo.num}</span>
      <span class="group-iupac-sub">${grpInfo.iupac}</span>
    `;
    elementsGrid.appendChild(grp);
  });

  // 3. Period Number Headers (1 to 7)
  for (let p = 1; p <= 7; p++) {
    const per = document.createElement("div");
    per.className = "coord-cell period-coord";
    per.style.gridColumn = "1";
    per.style.gridRow = (p + 1).toString();
    per.innerHTML = `
      <span class="period-main-num">${p}</span>
      <span class="period-shell-sub">${PERIOD_SHELLS[p - 1]}</span>
    `;
    elementsGrid.appendChild(per);
  }

  // 4. Placeholders for Lanthanide (57-71) and Actinide (89-103) slots in row 6 & 7 (Group 3)
  const lanthPlaceholder = document.createElement("div");
  lanthPlaceholder.className = "series-slot";
  lanthPlaceholder.style.gridColumn = "4"; // column 3 in table (offset by 1)
  lanthPlaceholder.style.gridRow = "7";    // period 6 (offset by 1)
  lanthPlaceholder.id = "slot-lanthanides";
  lanthPlaceholder.innerHTML = `
    <span class="slot-range">57–71</span>
    <span class="slot-name">La–Lu</span>
  `;
  lanthPlaceholder.title = "View Lanthanides series (57-71)";
  lanthPlaceholder.addEventListener("click", () => setCategoryFilter("lanthanide"));
  elementsGrid.appendChild(lanthPlaceholder);

  const actPlaceholder = document.createElement("div");
  actPlaceholder.className = "series-slot";
  actPlaceholder.style.gridColumn = "4";
  actPlaceholder.style.gridRow = "8";    // period 7
  actPlaceholder.id = "slot-actinides";
  actPlaceholder.innerHTML = `
    <span class="slot-range">89–103</span>
    <span class="slot-name">Ac–Lr</span>
  `;
  actPlaceholder.title = "View Actinides series (89-103)";
  actPlaceholder.addEventListener("click", () => setCategoryFilter("actinide"));
  elementsGrid.appendChild(actPlaceholder);

  // 5. Spacer Row before bottom series with glowing divider line
  const spacer = document.createElement("div");
  spacer.className = "series-gap-row";
  spacer.style.gridColumn = "1 / span 19";
  spacer.style.gridRow = "9";
  spacer.innerHTML = `<div class="glowing-divider-line"></div>`;
  elementsGrid.appendChild(spacer);

  // 6. Series Row Labels for Lanthanides & Actinides
  const lanthLabel = document.createElement("div");
  lanthLabel.className = "series-title-cell";
  lanthLabel.style.gridColumn = "1 / span 3";
  lanthLabel.style.gridRow = "10";
  lanthLabel.innerHTML = `<span>Lanthanides</span>`;
  elementsGrid.appendChild(lanthLabel);

  const actLabel = document.createElement("div");
  actLabel.className = "series-title-cell";
  actLabel.style.gridColumn = "1 / span 3";
  actLabel.style.gridRow = "11";
  actLabel.innerHTML = `<span>Actinides</span>`;
  elementsGrid.appendChild(actLabel);

  // 7. Render All 118 Elements
  ELEMENTS_DATA.forEach(el => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = `element-tile cat-${el.cat}`;
    tile.id = `element-tile-${el.num}`;
    tile.setAttribute("data-num", el.num.toString());
    tile.setAttribute("data-sym", el.sym.toLowerCase());
    tile.setAttribute("data-name", el.name.toLowerCase());
    tile.setAttribute("data-cat", el.cat);
    tile.setAttribute("data-state", el.st.toLowerCase());
    tile.setAttribute("role", "gridcell");
    tile.setAttribute("aria-label", `${el.name}, atomic number ${el.num}, symbol ${el.sym}, ${CATEGORY_NAMES[el.cat] || el.cat}`);
    tile.tabIndex = 0;

    // Grid placement calculation
    let col = el.g + 1; // offset by 1 for period labels
    let row = el.p + 1; // offset by 1 for group headers

    // Special placement for Lanthanides (57 to 71)
    if (el.num >= 57 && el.num <= 71) {
      row = 10;
      col = (el.num - 57) + 4; // Spans columns 4 through 18
    }
    // Special placement for Actinides (89 to 103)
    else if (el.num >= 89 && el.num <= 103) {
      row = 11;
      col = (el.num - 89) + 4; // Spans columns 4 through 18
    }

    tile.style.gridColumn = col.toString();
    tile.style.gridRow = row.toString();

    // State dot color helper
    let stateDotColor = "var(--state-solid)";
    if (el.st.toLowerCase().includes("gas")) stateDotColor = "var(--state-gas)";
    else if (el.st.toLowerCase().includes("liquid")) stateDotColor = "var(--state-liquid)";
    else if (el.st.toLowerCase().includes("synthetic") || el.num >= 95) stateDotColor = "var(--state-synthetic)";

    tile.innerHTML = `
      <div class="tile-head-row">
        <span class="tile-z-num">${el.num}</span>
        <span class="tile-state-dot" style="background: ${stateDotColor};" title="State: ${el.st}"></span>
      </div>
      <div class="tile-sym-block">${el.sym}</div>
      <div class="tile-foot-row">
        <span class="tile-name-label">${el.name}</span>
        <span class="tile-mass-label">${el.mass}</span>
      </div>
    `;

    // Click to select
    tile.addEventListener("click", () => selectElement(el, true));

    // Hover tooltip
    tile.addEventListener("mouseenter", (e) => showTooltip(el, e));
    tile.addEventListener("mouseleave", hideTooltip);
    tile.addEventListener("mousemove", (e) => updateTooltipPosition(e));

    // Keyboard navigation (Enter / Space / Arrows)
    tile.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectElement(el, true);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        focusAdjacentElement(el.num + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        focusAdjacentElement(el.num - 1);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        navigateGridVertical(el, 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        navigateGridVertical(el, -1);
      }
    });

    elementsGrid.appendChild(tile);
  });
}

// ==========================================================================
// ELEMENT SELECTION & DETAILS PANEL UPDATE
// ==========================================================================
function selectElement(el, shouldScroll = false) {
  if (!el) return;
  state.selectedElement = el;

  // Update tile active state
  document.querySelectorAll(".element-tile").forEach(tile => {
    tile.classList.remove("selected");
  });

  const selectedTile = document.getElementById(`element-tile-${el.num}`);
  if (selectedTile) {
    selectedTile.classList.add("selected");
    if (shouldScroll) {
      selectedTile.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  }

  // Update Card Header Z Number
  if (cardHeaderNum) {
    cardHeaderNum.textContent = `#${el.num}`;
  }

  // Update Hero Element Card in inspector
  const heroCard = document.getElementById("element-hero-card");
  if (heroCard) {
    heroCard.className = `element-hero-card slow-rgb-glow cat-${el.cat}`;
  }

  const elNumStr = el.num.toString().padStart(2, "0");
  const heroNum = document.getElementById("hero-atomic-num");
  if (heroNum) heroNum.textContent = elNumStr;

  const heroSym = document.getElementById("hero-symbol");
  if (heroSym) heroSym.textContent = el.sym;

  const heroName = document.getElementById("hero-name");
  if (heroName) heroName.textContent = el.name;

  const heroMass = document.getElementById("hero-atomic-mass");
  if (heroMass) heroMass.textContent = `${el.mass} u`;

  const catPill = document.getElementById("hero-category-pill");
  if (catPill) {
    catPill.textContent = CATEGORY_NAMES[el.cat] || el.cat;
    catPill.className = `hero-category-pill cat-${el.cat}`;
  }

  // Update Properties Matrix
  const setElText = (id, val) => {
    const node = document.getElementById(id);
    if (node) node.textContent = val;
  };

  setElText("prop-category", CATEGORY_NAMES[el.cat] || el.cat);
  setElText("prop-period-group", `Period ${el.p} · Group ${el.g || "N/A"} (${el.b}-block)`);
  setElText("prop-state", el.st);
  setElText("prop-electron-config", el.ec);
  setElText("prop-electronegativity", el.en !== null ? el.en.toString() : "N/A");
  setElText("prop-melting", el.mp);
  setElText("prop-boiling", el.bp);
  setElText("prop-density", el.d);
  setElText("prop-discovered", el.disc);
  setElText("prop-discoverer", el.by);

  // Educational Description
  setElText("prop-description", el.desc);

  // Atom Model Canvas
  initAtomVisualizer(el);
}

// ==========================================================================
// ATOM ORBITAL / BOHR MODEL VISUALIZER (HTML5 Canvas with Dynamic Tilt)
// ==========================================================================
function getElectronShells(z) {
  // Standard Bohr orbital distribution for 1-118
  const capacity = [2, 8, 18, 32, 32, 18, 8];
  let remaining = z;
  const shells = [];
  for (let cap of capacity) {
    if (remaining <= 0) break;
    const count = Math.min(remaining, cap);
    shells.push(count);
    remaining -= count;
  }
  return shells;
}

function initAtomVisualizer(el) {
  if (!atomCanvas) return;
  const ctx = atomCanvas.getContext("2d");
  const shells = getElectronShells(el.num);

  const shellsSummary = document.getElementById("electron-shells-summary");
  if (shellsSummary) {
    shellsSummary.textContent = shells.join(" · ");
  }

  if (state.atomAnimationId) {
    cancelAnimationFrame(state.atomAnimationId);
  }

  const dpr = window.devicePixelRatio || 1;
  const width = 170;
  const height = 170;
  atomCanvas.width = width * dpr;
  atomCanvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  const centerX = width / 2;
  const centerY = height / 2;
  const maxRadius = 72;
  const minRadius = 20;

  function renderAtom() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute("data-theme") === "light";

    // Dynamic Pulsing Nucleus Halo
    const pulse = 1 + Math.sin(state.atomAngle * 0.05) * 0.12;
    const grad = ctx.createRadialGradient(centerX, centerY, 2, centerX, centerY, 16 * pulse);
    if (isLight) {
      grad.addColorStop(0, "#0369a1");
      grad.addColorStop(0.3, "#0284c7");
      grad.addColorStop(0.7, "rgba(2, 132, 199, 0.25)");
      grad.addColorStop(1, "transparent");
    } else {
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.3, "#00f0ff");
      grad.addColorStop(0.7, "rgba(0, 240, 255, 0.25)");
      grad.addColorStop(1, "transparent");
    }
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 16 * pulse, 0, Math.PI * 2);
    ctx.fill();

    // Nucleus Core Proton Cluster
    ctx.fillStyle = isLight ? "#0284c7" : "#ffffff";
    ctx.beginPath();
    ctx.arc(centerX, centerY, 4.5, 0, Math.PI * 2);
    ctx.fill();

    // Concentric Electron Shells with subtle elliptical inclination
    const shellCount = shells.length;
    shells.forEach((electrons, sIdx) => {
      const radius = minRadius + (sIdx / Math.max(shellCount - 1, 1)) * (maxRadius - minRadius);

      // Orbital Path Ring
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate((sIdx * Math.PI) / shellCount);
      ctx.scale(1, 0.72); // 3D perspective ellipse

      ctx.strokeStyle = isLight ? "rgba(2, 132, 199, 0.22)" : "rgba(56, 189, 248, 0.22)";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 4]);
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Revolving Electrons
      const speed = (sIdx % 2 === 0 ? 1 : -1) * (0.018 - sIdx * 0.0014);
      for (let i = 0; i < electrons; i++) {
        const angle = state.atomAngle * speed + (i * (Math.PI * 2 / electrons));
        const ex = Math.cos(angle) * radius;
        const ey = Math.sin(angle) * radius;

        // Electron Glow & Particle
        ctx.fillStyle = isLight ? "#0284c7" : "#00f0ff";
        ctx.shadowColor = isLight ? "rgba(2, 132, 199, 0.5)" : "#00f0ff";
        ctx.shadowBlur = isLight ? 3 : 5;
        ctx.beginPath();
        ctx.arc(ex, ey, 2.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.restore();
    });

    state.atomAngle += 1;
    state.atomAnimationId = requestAnimationFrame(renderAtom);
  }

  renderAtom();
}

// ==========================================================================
// SEARCH ENGINE
// ==========================================================================
function handleSearch(query) {
  state.searchQuery = query.trim().toLowerCase();
  const tiles = document.querySelectorAll(".element-tile");

  if (!state.searchQuery) {
    if (searchClearBtn) searchClearBtn.classList.remove("visible");
    if (searchMatchBadge) searchMatchBadge.classList.remove("visible");
    applyFilterAndSearch();
    return;
  }

  if (searchClearBtn) searchClearBtn.classList.add("visible");

  let matchCount = 0;
  let firstMatch = null;

  tiles.forEach(tile => {
    const num = tile.getAttribute("data-num");
    const sym = tile.getAttribute("data-sym");
    const name = tile.getAttribute("data-name");

    const matches = num === state.searchQuery ||
                    sym === state.searchQuery ||
                    name.includes(state.searchQuery) ||
                    sym.startsWith(state.searchQuery);

    if (matches) {
      matchCount++;
      tile.classList.remove("dimmed");
      tile.classList.add("highlighted");
      if (!firstMatch) {
        const elNum = parseInt(num, 10);
        firstMatch = ELEMENTS_DATA.find(e => e.num === elNum);
      }
    } else {
      tile.classList.remove("highlighted");
      tile.classList.add("dimmed");
    }
  });

  if (searchMatchBadge) {
    searchMatchBadge.textContent = `${matchCount} MATCH${matchCount === 1 ? '' : 'ES'}`;
    searchMatchBadge.classList.add("visible");
  }

  return firstMatch;
}

function clearSearch() {
  if (searchInput) searchInput.value = "";
  state.searchQuery = "";
  if (searchClearBtn) searchClearBtn.classList.remove("visible");
  if (searchMatchBadge) searchMatchBadge.classList.remove("visible");
  applyFilterAndSearch();
  if (searchInput) searchInput.focus();
}

// ==========================================================================
// CATEGORY & STATE FILTERING SYSTEM
// ==========================================================================
function setCategoryFilter(category) {
  state.activeFilter = category;

  document.querySelectorAll(".cat-tab, .filter-tab").forEach(tab => {
    const cat = tab.getAttribute("data-filter");
    if (cat === category) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  applyFilterAndSearch();
}

function setStateFilter(stateVal) {
  state.activeStateFilter = stateVal;

  stateFilterBtns.forEach(btn => {
    const val = btn.getAttribute("data-state-filter");
    if (val === stateVal) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  applyFilterAndSearch();
}

function applyFilterAndSearch() {
  const tiles = document.querySelectorAll(".element-tile");
  const query = state.searchQuery;
  const catFilter = state.activeFilter;
  const stateFilter = state.activeStateFilter;

  tiles.forEach(tile => {
    const num = tile.getAttribute("data-num");
    const sym = tile.getAttribute("data-sym");
    const name = tile.getAttribute("data-name");
    const cat = tile.getAttribute("data-cat");
    const elState = (tile.getAttribute("data-state") || "").toLowerCase();

    const matchesCat = catFilter === "all" || cat === catFilter;
    const matchesState = stateFilter === "all" || elState.includes(stateFilter);
    const matchesQuery = !query ||
                         num === query ||
                         sym === query ||
                         name.includes(query) ||
                         sym.startsWith(query);

    if (matchesCat && matchesState && matchesQuery) {
      tile.classList.remove("dimmed");
      if (query) {
        tile.classList.add("highlighted");
      } else {
        tile.classList.remove("highlighted");
      }
    } else {
      tile.classList.add("dimmed");
      tile.classList.remove("highlighted");
    }
  });
}

// ==========================================================================
// RANDOM ELEMENT & RESET
// ==========================================================================
function selectRandomElement() {
  const randomIndex = Math.floor(Math.random() * ELEMENTS_DATA.length);
  const randomEl = ELEMENTS_DATA[randomIndex];
  selectElement(randomEl, true);
  showToast(`Loaded ${randomEl.name} (Z=${randomEl.num})`);
}

function resetView() {
  clearSearch();
  setCategoryFilter("all");
  setStateFilter("all");
  selectElement(ELEMENTS_DATA[0], true); // Return to Hydrogen
  showToast("Periodic table view reset");
}

// ==========================================================================
// COPY ELEMENT DATA AS JSON (Developer feature)
// ==========================================================================
// SCIENTIFIC DATA COPY FUNCTION
// ==========================================================================
function copyElementData() {
  if (!state.selectedElement) return;
  const el = state.selectedElement;
  const payload = {
    atomicNumber: el.num,
    symbol: el.sym,
    name: el.name,
    atomicMass: `${el.mass} u`,
    category: CATEGORY_NAMES[el.cat] || el.cat,
    period: el.p,
    group: el.g || null,
    block: `${el.b}-block`,
    standardState: el.st,
    electronConfiguration: el.ec,
    electronegativityPauling: el.en,
    meltingPoint: el.mp,
    boilingPoint: el.bp,
    density: el.d,
    discovered: el.disc,
    discoverer: el.by,
    overview: el.desc
  };

  const formatted = JSON.stringify(payload, null, 2);
  navigator.clipboard.writeText(formatted).then(() => {
    showToast(`✓ Copied ${el.name} (${el.sym}) data to clipboard`);
  }).catch(() => {
    showToast("Clipboard copy failed");
  });
}

// ==========================================================================
// THEME SYSTEM (Dark / Light Modes with Persistence & System Preference)
// ==========================================================================
function getInitialTheme() {
  const stored = localStorage.getItem("neon_elements_theme");
  if (stored === "light" || stored === "dark") return stored;
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  if (theme === "light") {
    document.body.classList.add("theme-light");
    document.body.classList.remove("theme-dark");
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = `
        <svg class="theme-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
        <span class="theme-label">Light</span>
      `;
      themeToggleBtn.title = "Switch to Dark Mode";
      themeToggleBtn.setAttribute("aria-label", "Switch to Dark Mode");
    }
  } else {
    document.body.classList.add("theme-dark");
    document.body.classList.remove("theme-light");
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = `
        <svg class="theme-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
        <span class="theme-label">Dark</span>
      `;
      themeToggleBtn.title = "Switch to Light Mode";
      themeToggleBtn.setAttribute("aria-label", "Switch to Light Mode");
    }
  }

  localStorage.setItem("neon_elements_theme", theme);

  // Redraw active atom model with newly applied theme colors
  if (state.selectedElement) {
    initAtomVisualizer(state.selectedElement);
  }
}

function toggleTheme() {
  const nextTheme = state.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  showToast(nextTheme === "light" ? "Switched to Light Mode" : "Switched to Dark Mode");
}

function initTheme() {
  const initial = getInitialTheme();
  setTheme(initial);

  // Listen to OS scheme changes if user hasn't explicitly set preference
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
      if (!localStorage.getItem("neon_elements_theme")) {
        setTheme(e.matches ? "light" : "dark");
      }
    });
  }
}

// ==========================================================================
// TOOLTIP CONTROLLER
// ==========================================================================
function showTooltip(el, e) {
  if (!tooltip) return;
  const symEl = document.getElementById("tooltip-symbol");
  const numEl = document.getElementById("tooltip-num");
  const nameEl = document.getElementById("tooltip-name");
  const catEl = document.getElementById("tooltip-category");

  if (symEl) symEl.textContent = el.sym;
  if (numEl) numEl.textContent = `Z=${el.num}`;
  if (nameEl) nameEl.textContent = el.name;
  if (catEl) catEl.textContent = CATEGORY_NAMES[el.cat] || el.cat;

  tooltip.classList.add("visible");
  updateTooltipPosition(e);
}

function hideTooltip() {
  if (tooltip) tooltip.classList.remove("visible");
}

function updateTooltipPosition(e) {
  if (!tooltip) return;
  tooltip.style.left = `${e.clientX}px`;
  tooltip.style.top = `${e.clientY - 14}px`;
}

// ==========================================================================
// KEYBOARD ACCESSIBILITY NAVIGATION
// ==========================================================================
function focusAdjacentElement(targetNum) {
  if (targetNum < 1) targetNum = 118;
  if (targetNum > 118) targetNum = 1;
  const tile = document.getElementById(`element-tile-${targetNum}`);
  if (tile) {
    tile.focus();
    const el = ELEMENTS_DATA.find(item => item.num === targetNum);
    if (el) selectElement(el, false);
  }
}

function navigateGridVertical(currentEl, direction) {
  const targetPeriod = currentEl.p + direction;
  const candidate = ELEMENTS_DATA.find(e => e.g === currentEl.g && e.p === targetPeriod);
  if (candidate) {
    focusAdjacentElement(candidate.num);
  } else {
    focusAdjacentElement(currentEl.num + (direction * 18));
  }
}

// ==========================================================================
// INITIALIZATION & EVENT LISTENERS
// ==========================================================================
function init() {
  // 1. Initialize Theme
  initTheme();

  // 2. Render Periodic Table Grid
  renderPeriodicTable();

  // 3. Default selection: Iron (Fe, 26)
  const defaultElement = ELEMENTS_DATA.find(e => e.num === 26) || ELEMENTS_DATA[0];
  selectElement(defaultElement, false);

  // 4. Search Input Listeners
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      handleSearch(e.target.value);
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const bestMatch = handleSearch(searchInput.value);
        if (bestMatch) {
          selectElement(bestMatch, true);
        }
      } else if (e.key === "Escape") {
        clearSearch();
      }
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", clearSearch);
  }

  // 5. Category Filter Buttons
  document.querySelectorAll(".cat-tab, .filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const category = tab.getAttribute("data-filter");
      setCategoryFilter(category);
    });
  });

  // 6. State Filter Buttons
  stateFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const stateVal = btn.getAttribute("data-state-filter");
      setStateFilter(stateVal);
    });
  });

  // 7. Action Buttons
  if (randomBtn) randomBtn.addEventListener("click", selectRandomElement);
  if (resetBtn) resetBtn.addEventListener("click", resetView);
  if (copyJsonBtn) copyJsonBtn.addEventListener("click", copyElementData);

  // 8. Navigation Stepper Buttons in panel
  if (prevElementBtn) {
    prevElementBtn.addEventListener("click", () => {
      const curNum = state.selectedElement ? state.selectedElement.num : 1;
      const targetNum = curNum > 1 ? curNum - 1 : 118;
      const prevEl = ELEMENTS_DATA.find(e => e.num === targetNum);
      selectElement(prevEl, true);
    });
  }

  if (nextElementBtn) {
    nextElementBtn.addEventListener("click", () => {
      const curNum = state.selectedElement ? state.selectedElement.num : 1;
      const targetNum = curNum < 118 ? curNum + 1 : 1;
      const nextEl = ELEMENTS_DATA.find(e => e.num === targetNum);
      selectElement(nextEl, true);
    });
  }

  // 9. Theme Toggle Button
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }

  // 10. Help / Guide Modal
  if (helpBtn && helpModal) {
    helpBtn.addEventListener("click", () => {
      helpModal.classList.add("open");
    });
  }

  if (helpModalClose && helpModal) {
    helpModalClose.addEventListener("click", () => {
      helpModal.classList.remove("open");
    });
  }

  if (helpModal) {
    helpModal.addEventListener("click", (e) => {
      if (e.target === helpModal) {
        helpModal.classList.remove("open");
      }
    });
  }

  // 11. Global Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    if ((e.key === "/" || (e.ctrlKey && e.key === "k") || (e.metaKey && e.key === "k")) && document.activeElement !== searchInput) {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    } else if (e.key === "Escape") {
      if (helpModal && helpModal.classList.contains("open")) {
        helpModal.classList.remove("open");
      } else if (state.searchQuery) {
        clearSearch();
      }
    } else if (e.key === "r" && (e.ctrlKey || e.altKey)) {
      e.preventDefault();
      selectRandomElement();
    }
  });

  // 12. Legend Item Click to Filter
  document.querySelectorAll(".legend-btn, .legend-item").forEach(item => {
    item.addEventListener("click", () => {
      const cat = item.getAttribute("data-cat");
      if (cat) setCategoryFilter(cat);
    });
  });
}

// Boot up once DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
