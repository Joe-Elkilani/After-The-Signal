import { Component, inject, Input } from '@angular/core';
import { TranslatePipe } from '../../../pipes/t.pipe';
import { ThemeService } from '../../../../core/services/theme-service';

@Component({
  imports: [TranslatePipe],
  selector: 'app-theme-toggle',
  styleUrl: './theme-toggle.css',
  templateUrl: './theme-toggle.html',
})
export class ThemeToggle {
  protected theme = inject(ThemeService);
  @Input() size: 'sm' | 'md' = 'sm';
}
