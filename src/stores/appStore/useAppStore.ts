import { User } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light" | "system";

type Store = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    token: string | null;
    setToken: (valueToken: string | null) => void;
    user: User | null;
    setUser: (user: User | null) => void;
};

export const useAppStore = create<Store>()(
    persist(
        (set) => ({
            theme: "dark",
            token: null,
            user: null,
            setTheme: (theme: Theme) => set({ theme }),
            setToken: (valueToken: string | null) => set({ token: valueToken }),
            setUser: (user: User | null) => set({ user }),
        }),
        {
            name: "app-store-giveaways",
        }
    )
);
