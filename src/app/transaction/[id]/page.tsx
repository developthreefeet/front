'use client';

import MonthComponent from '@/views/transaction/MonthComponent';
import TransactionListComponent from '@/views/transaction/TransactionListComponent';
import Title from '@/widgets/Title';
import { usePathname } from 'next/navigation';

const page = () => {
  const transactionItems = [
    {
      trans_id: 'trans1',
      corporate_number: '123435333321',
      bank_account_number: '123-422312',
      trans_direction: 'withdraw',
      deposit: '',
      withdraw: '35,000',
      balance: '500,000,000',
      trans_date: '2024-07-01T12:00:00Z',
      trans: '아마스빈',
    },
    {
      trans_id: 'trans2',
      corporate_number: '123435333321',
      bank_account_number: '123-422312',
      trans_direction: 'deposit',
      deposit: '10,000,000',
      withdraw: '',
      balance: '510,000,000',
      trans_date: '2024-07-01T12:00:00Z',
      trans: '신현진',
    },
  ];

  const pathname = usePathname();
  const id = pathname.split('/')[2];

  return (
    <div className="flex flex-col space-y-10">
      <Title
        text={`${id === 'studentCouncil' ? '총학생회' : id === 'college' ? '단과대' : '학과'} 입/출금 내역`}
      />
      <div className="flex flex-col space-y-12">
        <MonthComponent />
        <div className="flex flex-col space-y-3">
          <p className="text-xl font-bold">총 입/출금액</p>
          <div className="flex flex-col space-y-1 font-bold">
            <p>- 100,000 원</p>
            <p className="text-blue-300">+ 14,300,000 원</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="text-xl font-bold">내역</p>
          <TransactionListComponent list={transactionItems} />
        </div>
      </div>
    </div>
  );
};

export default page;