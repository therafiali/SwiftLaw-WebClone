import Image from 'next/image'
import React from 'react'
import Easypaisa from '@/assets/payment/easypaisa.svg'
import Jazz from '@/assets/payment/jazzcash.png'
import visa from '@/assets/payment/visa.png'
import unionpay from '@/assets/payment/union.png'
import bank from '@/assets/payment/bank-transfer.png'
import master from '@/assets/payment/mastercard.png'
import paypak from '@/assets/payment/paypak.png'

const PaymentLogos = () => {
  return (
    <div className='flex justify-center items-center space-x-4 sm:space-x-8 my-8 aspect-auto object-contain '>
      <div>
        <Image src={Easypaisa} alt='Payment' className='' width={80} height={80} />
      </div>
      <div>
        <Image src={Jazz} alt='Payment' className='' width={80} height={80} />
      </div>
      <div>
        <Image src={visa} alt='Payment' className='' width={80} height={80} />
      </div>
      <div>
        <Image src={unionpay} alt='Payment' className='' width={80} height={80} />
      </div>
      <div>
        <Image src={master} alt='Payment' className='' width={80} height={80} />
      </div>
      <div>
        <Image src={paypak} alt='Payment' className='' width={100} height={100} />
      </div>
      <div>
        <Image src={bank} alt='Payment' className='' width={100} height={100} />
      </div>
    </div>
  )
}

export default PaymentLogos
