import { computed, Service, signal } from '@angular/core';
import { AgeMode } from './models';
import { storage } from './utils';

const AGE_KEY = 'age-mode';
export const AGE_MODES: AgeMode[] = ['cadet', 'all', 'telemetry'];
@Service()
export class AgeModelService {
  readonly mode = signal<AgeMode>(this.initial());
  readonly labelKey = computed(() => `age.${this.mode()}.short`);

  set(mode: AgeMode): void {
    this.mode.set(AGE_MODES.includes(mode) ? mode : 'all');
    storage.set(AGE_KEY, this.mode());
  }

  private initial(): AgeMode {
    const saved = storage.get(AGE_KEY) as AgeMode | null;
    return saved && AGE_MODES.includes(saved) ? saved : 'all';
  }
}
