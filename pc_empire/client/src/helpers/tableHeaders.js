const CPU_HEADERS = [
    "CPU",
    "Speed",
    "Cores",
    "TDP",
    "Rating",
    "Price"
];

const SEARCH_CPU_HEADERS = [
    "Name",
    "Clock",
    "Cores",
    "Power",
    "Rating",
    "Price"
];
const MOBO_HEADERS = [
    "Motherboard",
    "Manufacturer",
    "CPU Socket",
    "Form Factor",
    "Rating",
    "Price"
];
const SEARCH_MOBO_HEADERS = [
    "Name",
    "Manufacturer",
    "CPU_Socket",
    "Form_Factor",
    "Rating",
    "Price"
];
const GPU_HEADERS = [
    "GPU",
    "Chipset",
    "Manufacturer",
    "Clock",
    "VRAM",
    "Interface",
    "Price"
];
const SEARCH_GPU_HEADERS = [
    "Name",
    "Chipset_Manufacturer",
    "Manufacturer",
    "Clock",
    "VRAM",
    "Interface",
    "Price"
];
const BUILD_HEADERS = [
    "Component",
    "Selection",
    "Price"
];
const PS_HEADERS = [
    "Power Supply",
    "Manufacturer",
    "Power",
    "Efficiency Rating",
    "Price"
];
const SEARCH_PS_HEADERS = [
    "Name",
    "Manufacturer",
    "Power",
    "Efficiency_Rating",
    "Price"
];
const RAM_HEADERS = [
    "RAM",
    "Manufacturer",
    "Type",
    "Speed",
    "Capacity",
    "Slots",
    "Price"
];
const SEARCH_RAM_HEADERS = [
    "Name",
    "Manufacturer",
    "Type",
    "Speed",
    "Capacity",
    "Slots",
    "Price"
];
const STORAGE_HEADERS = [
    "Storage",
    "Manufacturer",
    "Type",
    "Capacity",
    "Speed",
    "Interface",
    "Protocol",
    "Price"
];
const SEARCH_STORAGE_HEADERS = [
    "Name",
    "Manufacturer",
    "Type",
    "Capacity",
    "Speed",
    "Interface",
    "Protocol",
    "Price"
];
const CASE_HEADERS = [
    "Case",
    "Manufacturer",
    "Form Factor",
    "Colour",
    "Price"
];
const SEARCH_CASE_HEADERS = [
    "Name",
    "Manufacturer",
    "Form_Factor",
    "Color",
    "Price"
];
export const HEADERS = {
    "CPU": CPU_HEADERS,
    "Motherboard": MOBO_HEADERS,
    "GPU": GPU_HEADERS,
    "Power Supply": PS_HEADERS,
    "RAM": RAM_HEADERS,
    "Storage": STORAGE_HEADERS,
    "Case": CASE_HEADERS,
    "BUILD": BUILD_HEADERS
};

export const SEARCH_HEADERS = {
    "CPU": SEARCH_CPU_HEADERS,
    "Motherboard": SEARCH_MOBO_HEADERS,
    "GPU": SEARCH_GPU_HEADERS,
    "Power Supply": SEARCH_PS_HEADERS,
    "RAM":SEARCH_RAM_HEADERS,
    "Storage": SEARCH_STORAGE_HEADERS,
    "Case": SEARCH_CASE_HEADERS
};