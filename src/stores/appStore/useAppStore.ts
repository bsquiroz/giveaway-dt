import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light" | "system";

type Store = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export const useAppStore = create<Store>()(
    persist(
        (set) => ({
            theme: "dark",
            setTheme: (theme: Theme) => set({ theme }),
        }),
        {
            name: "app-store-giveaways",
        }
    )
);
