import { playerCharacter } from "@/shared/model/Battler";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlayerStore = defineStore("player", () => {

  const player = ref(playerCharacter);

  return { player };
})
