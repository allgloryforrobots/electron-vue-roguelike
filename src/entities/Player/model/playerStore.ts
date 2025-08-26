import { playerCharacter } from "@/entities/Battler";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlayerStore = defineStore("player", () => {

  const player = ref(playerCharacter);

  const setPlayerX = (x: number) => {
    player.value.position.x = x;
  };

  const setPlayerY = (y: number) => {
    player.value.position.y = y;
  };

  return { player, setPlayerX, setPlayerY };
})
