import { ref } from 'vue'
import lightSwitchSound from '@/shared/assets/sfx/light-switch-sound-2.wav'
import hover from '@/shared/assets/sfx/light-switch-sound.wav'
import dramaticRoll from '@/shared/assets/sfx/angelic-drum-roll.wav'

export const audioLibrary = {
  lightSwitch: new Audio(lightSwitchSound),
  hover: new Audio(hover),
  dramaticRoll: new Audio(dramaticRoll)
}

const isPlaying = ref(false)
const audioElement = ref<HTMLAudioElement | null>(null)

const playAudio = (audio: HTMLAudioElement, loop = false) => {
  // Если текущий звук играет, ставим его на паузу
  if (audioElement.value) {
    audioElement.value.pause()
    audioElement.value.currentTime = 0; // Сбрасываем время до начала
  }

  // Устанавливаем новый звук
  audioElement.value = audio
  audioElement.value.loop = loop
  isPlaying.value = true

  audioElement.value.play().catch(() => {
    isPlaying.value = false
  })

  // После завершения воспроизведения, обновляем статус
  audioElement.value.onended = () => {
    isPlaying.value = false
  }
}

export { playAudio }


