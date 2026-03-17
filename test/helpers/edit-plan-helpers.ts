import type { MonthlyGivingCircle } from '../../src/monthly-giving-circle';
import type { MGCButton } from '../../src/presentational/mgc-button';
import { MonthlyPlan } from '../../src/models/plan';

export function makePlan(): MonthlyPlan {
  return new MonthlyPlan({
    token: 'test-token-123',
    amount: 10,
    currency: 'USD',
    start_date: '2024-07-01 00:00:00',
    is_test: true,
    btdata: {
      billingDayOfMonth: 15,
      nextBillingDate: {
        date: '2024-08-15 00:00:00.000000',
        timezone_type: 3,
        timezone: 'UTC',
      },
      lastBillingDate: {
        date: '2024-07-15 00:00:00.000000',
        timezone_type: 3,
        timezone: 'UTC',
      },
      status: 'Active',
      paymentMethodType: 'creditCard',
      last4: '1234',
      cardType: 'Visa',
      expirationMonth: '12',
      expirationYear: '2025',
    },
  });
}

export async function navigateToEditView(
  el: MonthlyGivingCircle,
): Promise<void> {
  const mgcPlans = el.querySelector('ia-mgc-plans');
  const editButton = mgcPlans!.shadowRoot?.querySelector(
    'ia-mgc-button.edit-donation',
  ) as MGCButton;
  const innerButton = editButton.shadowRoot?.querySelector('button');
  innerButton!.click();
  await el.updateComplete;
}
