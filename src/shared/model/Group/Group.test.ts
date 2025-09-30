import { describe, it, expect } from 'vitest';
import { CharacteristicsGroup } from './Group';

describe('CharacteristicsGroup', () => {
  it('should have correct static metadata', () => {
    const group = new CharacteristicsGroup();
    expect(group.name).toBe('Основные характеристики');
    expect(group.codename).toBe('characteristics');
    expect(group.icon).toBe('fa-user');
  });

  it('should return constructors in sorted order by name (sortedConstructors)', () => {
    const group = new CharacteristicsGroup();

    // Проверим, что сортировка работает корректно по русскому алфавиту
    const sorted = group.sortedConstructors;

    const agilityIndex = sorted.findIndex(Ctor => Ctor.codename === 'agility');
    const constitutionIndex = sorted.findIndex(Ctor => Ctor.codename === 'constitution');

    expect(agilityIndex).toBeLessThan(constitutionIndex);
    expect(sorted[0].name).toBe('Внешность'); // или другое значение в зависимости от полного списка
  });

  it('should return instances in sorted order (sortedList)', () => {
    const group = new CharacteristicsGroup();
    const sortedList = group.sortedList;
    expect(sortedList).toHaveLength(Object.keys(CharacteristicsGroup.items).length);
    expect(sortedList[0].codename).toBe('appearance');
    expect(sortedList[0].name).toBe('Внешность');
    for (const prop of sortedList) {
      expect(prop.name).toBeDefined();
      expect(prop.codename).toBeDefined();
    }
  });
});