export * from './types';
import type { GameModule } from './types';

import { mainSequenceModule } from './games/main-sequence';
import { gta6Module } from './games/gta-6';
import { weMarchAsOneModule } from './games/we-march-as-one';
import { belowTheStoneModule } from './games/below-the-stone';
import { nobleFatesModule } from './games/noble-fates';
import { marvelRivalsModule } from './games/marvel-rivals';
import { noAsteroidsModule } from './games/no-asteroids';

export const gamesRegistry: GameModule[] = [
  mainSequenceModule,
  gta6Module,
  weMarchAsOneModule,
  belowTheStoneModule,
  nobleFatesModule,
  marvelRivalsModule,
  noAsteroidsModule,
];

export function getGameBySlug(slug: string): GameModule | undefined {
  return gamesRegistry.find((g) => g.slug === slug);
}
