import { create } from 'zustand';

export type COLORS = {
  color: string[];
};

let colors: string[] = [];
for (let i = 0; i < 200; i++) {
  const getColor = () => {
    const hexa = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexa[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const data = getColor();
  colors.push(data);
}

const useColor = create((set) => ({
  color: colors,
}));

export default useColor;
