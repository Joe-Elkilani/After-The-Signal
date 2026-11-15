import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar/navbar';
import { Footer } from './shared/components/footer/footer/footer';
import { AiAssistant } from './features/ai-assistant/ai-assistant/ai-assistant';
import { ThemeService } from './core/services/theme-service';
import { ArtifactModal } from './shared/components/artifact-modal/artifact-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, AiAssistant, ArtifactModal],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private theme = inject(ThemeService);
}
