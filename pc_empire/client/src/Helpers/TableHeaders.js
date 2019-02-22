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
    "CPU Socket",
    "Form Factor",
    "Rating",
    "Price"
];
const BUILD_HEADERS = [
    "Component",
    "Selection",
    "Price"
];

export const HEADERS = {
    "CPU": CPU_HEADERS,
    "Motherboard": MOBO_HEADERS,
    "BUILD": BUILD_HEADERS
};

export const SEARCH_HEADERS = {
    "CPU": SEARCH_CPU_HEADERS,
    "Motherboard": SEARCH_MOBO_HEADERS
};