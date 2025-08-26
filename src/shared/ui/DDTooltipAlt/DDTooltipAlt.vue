<template>
  <div class="component-card">
    <h2 class="component-title"><i class="fas fa-comment-alt"></i> Всплывающая подсказка</h2>
    <div class="dd-tooltip-container">
      Наведите на меня
      <div class="dd-tooltip">
        <strong>Магический меч</strong>
        <p>Наносит дополнительный урон огнем. Прочность: 85/100</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dd-tooltip-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding: 10px 15px;
  background: linear-gradient(145deg, rgba(56, 47, 39, 0.5), rgba(25, 21, 20, 0.7));
  border: 1px solid var(--border-color);
  border-radius: 4px;
}

.dd-tooltip {
  visibility: hidden;
  background-color: var(--background-color-medium);
  color: var(--accent-color-2);
  text-align: center;
  border: 1px solid var(--border-color);
  padding: 10px;
  border-radius: 4px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  width: 200px;
}

.dd-tooltip-container:hover .dd-tooltip {
  visibility: visible;
  opacity: 1;
}
</style>