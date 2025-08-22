import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlayerStore = defineStore("player", () => {
  const playerX = ref(1);
  const playerY = ref(1);

  const setPlayerX = (x: number) => {
    playerX.value = x;
  };

  const setPlayerY = (y: number) => {
    playerY.value = y;
  };

  return { playerX, playerY, setPlayerX, setPlayerY };
})
