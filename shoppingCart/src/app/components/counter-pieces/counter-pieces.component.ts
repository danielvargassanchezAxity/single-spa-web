import { Component, Input, EventEmitter, Output } from '@angular/core';
import { BooleanConst, NumberConst } from 'src/app/constants/const';
import { PatternService } from 'src/app/services/pattern.service';

@Component({
  selector: 'axity-counter-pieces',
  templateUrl: './counter-pieces.component.html',
  styleUrls: ['./counter-pieces.component.scss'],
})
export class CounterPiecesComponent {
  @Input() pieceInit: number = NumberConst.one;
  @Input() notActions: boolean = BooleanConst.false;
  @Input() notInclement: boolean = BooleanConst.false;
  @Input() readonly: boolean = BooleanConst.false;
  @Output() newPieceEmitter = new EventEmitter<number>();
  @Output() lockItems = new EventEmitter<number>();

  constructor(public patternService: PatternService) {}

  ngOnInit(): void {}
  decrement(): void {
    if (Number(this.pieceInit) > 1) {
      const piece = Number(this.pieceInit) - 1;
      this.newPieceEmitter.emit(piece);
    }
  }

  inclement(): void {
    if ((this.pieceInit ?? 0) < 999999) {
      const piece = Number(this.pieceInit) + 1;
      this.newPieceEmitter.emit(piece);
    }
  }

  submitPiece(): void {
    const newPrices =
      Number(this.pieceInit) > 0 ? Number(this.pieceInit) : NumberConst.one;
    this.pieceInit =
      Number(this.pieceInit) > 0 ? Number(this.pieceInit) : NumberConst.one;
    this.newPieceEmitter.emit(newPrices);
  }
}
