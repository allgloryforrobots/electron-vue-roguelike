import { Battler } from "@/shared/model/Battler/Battler";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlayerStore = defineStore("player", () => {

  const player = ref(new Battler());

  return { player };
})
