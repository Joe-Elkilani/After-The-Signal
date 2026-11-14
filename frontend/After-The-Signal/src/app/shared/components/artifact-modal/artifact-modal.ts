import { NgClass } from '@angular/common';
import { Component, effect, ElementRef, HostListener, inject, viewChild } from '@angular/core';
import { TranslatePipe } from '../../pipes/t.pipe';
import { ImgFallbackDirective } from '../../directives/img-fallback.directive';
import { Model } from '../../../core/services/model';
import { accentOf } from '../../../core/services/utils';

@Component({
  imports: [NgClass, TranslatePipe, ImgFallbackDirective],
  selector: 'app-artifact-modal',
  styleUrl: './artifact-modal.css',
  templateUrl: './artifact-modal.html',
})
export class ArtifactModal {
  protected modal = inject(Model);
  protected accentOf = accentOf;

  private closeBtn = viewChild<ElementRef<HTMLButtonElement>>('closeBtn');
  private lastFocus: HTMLElement | null = null;
  private wasOpen = false;

  constructor() {
    effect(() => {
      const isOpen = !!this.modal.artifact();
      if (isOpen === this.wasOpen) return;
      this.wasOpen = isOpen;

      document.body.style.overflow = isOpen ? 'hidden' : '';
      if (isOpen) {
        this.lastFocus = document.activeElement as HTMLElement | null;
        setTimeout(() => this.closeBtn()?.nativeElement.focus());
      } else {
        this.lastFocus?.focus?.();
        this.lastFocus = null;
      }
    });
  }

  @HostListener('document:keydown.escape')
  protected close(): void {
    this.modal.close();
  }

  protected onBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.close();
  }
}
