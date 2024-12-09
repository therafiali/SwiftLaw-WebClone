export const premiumLinks = [
  { montly: 'https://payments.yourmunshi.net/?add-to-cart=138' },
  { yearly: 'https://payments.yourmunshi.net/?add-to-cart=138' }
]

export const plans = {
  basic: [
    { text: 'Case law research (Limited queries)', value: true },
    { text: 'Citation & summaries (Limited Queries)', value: true },
    { text: 'Legal Drafting (No downloading)', value: true },
    { text: 'Judgement copy downloads', value: false },
    { text: 'Case lead forwarding', value: false },
    { text: 'Support', value: false },
    { text: 'Access to LegalERP', value: false },
    { text: 'YM Club Membership', value: false }
  ],
  standard: [
    { text: 'Case Law research', value: true },
    { text: 'Citations & summaries', value: true },
    { text: 'Limited legal drafting', value: true },
    { text: 'Limited judgement copies', value: true },
    { text: 'Email support', value: true },
    { text: 'Case lead forwarding', value: false },
    { text: 'Access to LegalERP', value: false },
    { text: 'YM Club Membership', value: false }
  ],
  premium: [
    { text: 'Unlimited Case law research', value: true },
    { text: 'Unlimited citations & copies', value: true },
    { text: 'Unlimited legal drafting', value: true },
    { text: 'Judgement copy downloads', value: true },
    { text: 'Case lead forwarding', value: true },
    { text: 'In-person support', value: true },
    { text: 'Discounted rates for LegalERP', value: true },
    { text: 'Exclusive YM club membership', value: true }
  ]
}
