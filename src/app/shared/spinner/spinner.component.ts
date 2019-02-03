import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})

export class SpinnerComponent implements OnChanges {
  private Width;
  private Height;
  @Input() size;
  @Input() overlay;
  ngOnChanges(changes) {
    if (changes.size.currentValue !== undefined) {
      this.Width = this.size + 'px';
      this.Height = this.size + 'px';
    }
  }

}
