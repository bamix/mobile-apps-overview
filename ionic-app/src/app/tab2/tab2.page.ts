import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public results: {data: number, time: number}[] = [];

  public get average(): number {
    if (this.results.length > 0) {
      return this.results.map(r => r.time).reduce((a, i) => a + i, 0) / this.results.length;
    }
    return 0;
  }

  public run() {
    this.results = [];
    for (let i = 0; i < 20; i++) {
      const start = performance.now();
      const result = this.factorial(100);
      const finish = performance.now();
      this.results.push({
        data: result,
        time: finish - start
      });
    }
  }

  private factorial(value: number): number {
    if (value === 1) {
      return value;
    }
    return value * this.factorial(value - 1);
  }
}
