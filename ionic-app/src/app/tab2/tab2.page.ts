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
      const result = this.calculatePi();
      const finish = performance.now();
      this.results.push({
        data: result,
        time: finish - start
      });
    }
  }
  calculatePi() {
    let result = 0;
    for (let i = 0; i < 10000; i++) {
        result += this.pi(i);
    }
    return result;
  }

  pi(i) {
      return (1 / Math.pow(16, i)) * (4 / (8 * i + 1) - 2 / (8 * i + 4) - 1 / (8 * i + 5) - 1 / (8 * i + 6));
  }
}
