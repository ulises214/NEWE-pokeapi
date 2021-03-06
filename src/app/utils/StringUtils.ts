export const capitalizeFirstLetter = (name: string): string => {
    return name
        .split(' ')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
};
