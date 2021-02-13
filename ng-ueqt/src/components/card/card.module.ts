import { UCardAvatarComponent } from './card-avatar.component';
import { UCardActionsComponent } from './card-actions.component';
import { UCardTitleComponent } from './card-title.component';
import { UCardHeaderComponent } from './card-header.component';
import { UCardComponent } from './card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UCardSubtitleComponent } from './card-subtitle.component';
import { UCardContentComponent } from './card-content.component';
import { UCardImageComponent } from './card-image.component';
import { UCardFooterComponent } from './card-footer.component';

const components = [
  UCardComponent,
  UCardHeaderComponent,
  UCardTitleComponent,
  UCardSubtitleComponent,
  UCardContentComponent,
  UCardImageComponent,
  UCardFooterComponent,
  UCardActionsComponent,
  UCardAvatarComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule],
})
export class UCardModule { }
