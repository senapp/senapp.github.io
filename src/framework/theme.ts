export enum Theme {
    Light,
    Dark,
}

export const setTheme = (theme: Theme): void => {
    window.localStorage.setItem('theme', theme.toString());
    window.location.reload();
};

export const getTheme = (): Theme => {
    const themeIndex = Number(window.localStorage.getItem('theme') ?? '0');
    return Theme[Theme[themeIndex]];
};

export const switchTheme = (): void => {
    if (getTheme() === Theme.Light) {
        setTheme(Theme.Dark);
    } else {
        setTheme(Theme.Light);
    }
};