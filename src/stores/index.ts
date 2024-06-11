import { create } from "zustand";
interface Stores {
    count: number;
    increment: () => void;
    decrement: () => void;
    isLogin: boolean;
    setLogin: (isLogin: boolean) => void;
}
const useStore = create<Stores>((set) => ({
    count: 0,
    isLogin: false, // 是否登录
    increment: () => set((state) => ({
        count: state.count + 1
    })),
    decrement: () => set((state) => ({
        count: state.count - 1
    })),
    setLogin: (isLogin: boolean) => set({ isLogin }),
}))
export default useStore;