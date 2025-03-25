import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrl: './accounting.component.scss'
})
export class AccountingComponent {

  accountingId!: string;

  constructor(private route: ActivatedRoute)
  {
  }
  
  ngOnInit()
  {
    this.route.paramMap.subscribe(params =>
    {
      this.accountingId = params.get('id')!;
      console.log(this.accountingId + " <-- accountId");
    })
  }
}
