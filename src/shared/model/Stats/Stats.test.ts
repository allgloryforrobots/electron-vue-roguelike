import { describe, it, expect } from 'vitest';
import { Constitution } from './Stats';

describe('Constitution', () => {
  it('should create an instance with correct static properties', () => {
    const constitution = new Constitution();

    expect(constitution.name).toBe('Телосложение');
    expect(constitution.codename).toBe('constitution');
    expect(constitution.icon).toBe('fa-heart-pulse');
  });
});