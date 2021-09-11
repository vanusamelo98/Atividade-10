import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']//,
  //outputs: ['mudouvalor']
})
export class OutputPropertyComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput')
  campoValorInput!: ElementRef;

  incrementa(){
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }


}
