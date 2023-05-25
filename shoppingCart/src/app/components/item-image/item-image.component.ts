import { Component, Input } from '@angular/core';
import { StringConst } from 'src/app/constants/const';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'axity-item-image',
  templateUrl: './item-image.component.html',
  styleUrls: ['./item-image.component.scss'],
})
export class ItemImageComponent {
  @Input() image: string = StringConst.empty;
  @Input() className: string = StringConst.empty;
  @Input() altImg: string = StringConst.empty;
  srcImg = environment.baseImg;
  defaultImg = environment.defaultImg;
}
