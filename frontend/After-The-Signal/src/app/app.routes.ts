import { Routes } from '@angular/router';
import { AgeSelection } from './features/age-selection/age-selection';
import { inject } from '@angular/core';
import { ArtifactService } from './core/services/artifact-service';

export const routes: Routes = [
  {
    path: '',
    title: 'AFTER THE SIGNAL — Every Explorer Has a Story. Every Signal Leaves a Legacy.',
    loadComponent: () => import('./features/home/home/home').then((m) => m.Home),
  },
  {
    path: 'explore/moon',
    title: 'Explore the Moon | After The Signal',
    loadComponent: () => import('./features/explore/explore/explore').then((m) => m.Explore),
    data: { world: 'moon' },
  },
  {
    path: 'explore/mars',
    title: 'Explore Mars | After The Signal',
    loadComponent: () => import('./features/explore/explore/explore').then((m) => m.Explore),
    data: { world: 'mars' },
  },
  {
    path: 'age-selection',
    component: AgeSelection,
  },
  {
    path: 'archive',
    title: 'Archive | After The Signal',
    loadComponent: () => import('./features/archive/archive').then((m) => m.Archive),
  },
  {
    path: 'artifact/:id',
    title: 'Artifact | After The Signal',
    loadComponent: () => import('./features/archive/archive').then((m) => m.Archive),
  },
  {
    path: 'about',
    title: 'About | After The Signal',
    loadComponent: () => import('./features/about/about/about').then((m) => m.About),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
