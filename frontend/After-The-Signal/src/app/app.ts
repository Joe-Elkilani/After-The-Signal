import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar/navbar';
import { Footer } from './shared/components/footer/footer/footer';
import { AiAssistant } from './features/ai-assistant/ai-assistant/ai-assistant';
import { ThemeService } from './core/services/theme-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, AiAssistant],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private theme = inject(ThemeService);
}
