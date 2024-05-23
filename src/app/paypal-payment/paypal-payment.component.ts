import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { PayPalService } from '../paypal.service';

@Component({
  selector: 'app-paypal-payment',
  templateUrl: './paypal-payment.component.html',
  styleUrls: ['./paypal-payment.component.css']
})
export class PayPalPaymentComponent implements OnInit {

  public payPalConfig?: IPayPalConfig;
  public showSuccess: boolean = false;
  public orderDetails: any = {};
  public errorMessage: string = '';

  constructor(private paypalService: PayPalService) { }

  ngOnInit(): void {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'AYaHIsd8tuShlIH2qsGdGoLawx04XCi5pMTFxV_F6sh6eHJaGWHM48mLA4CIjtJ2M25DanAm8ytU1g9u',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: '9.99',
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: '9.99'
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: '9.99',
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
          this.orderDetails = details;
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
        alert('Payment Successful!');
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        alert('Payment Cancelled!');
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    }
  }

 submitForm(): void {
    // Assuming orderDetails contains the required data
    const formData = {
      OrderTime: this.orderDetails.create_time,
      OrderID: this.orderDetails.id,
      Amount: `${this.orderDetails.purchase_units[0].amount.value} ${this.orderDetails.purchase_units[0].amount.currency_code}`
    };
  
    // Call the PayPal service to submit the order data
    this.paypalService.submitOrder(formData).subscribe({
      next: response => {
        console.log('Data submitted successfully', response);
        // Optionally handle success response
        this.showSuccess = true;
        this.errorMessage = '';
      },
      error: error => {
        console.error('Error occurred while submitting data', error);
        
        this.errorMessage = 'Error occurred while processing the response from the server.';
      }
    });
  }
}
