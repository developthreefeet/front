'use client';

import { Button } from '@/shared/ui/ui/button';
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from '@/shared/ui/ui/tooltip';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FaUserLarge } from 'react-icons/fa6';
import { IoIosArrowBack } from 'react-icons/io';

const CommonHeader = () => {
  let pathname = usePathname();

  const getPageName = () => {
    switch (pathname) {
      case '/notice':
        return '공지사항';
      case '/faq':
        return 'FAQ';
      case '/proceeding':
        return '회의록';
      case '/event':
        return '행사';
      case '/transaction':
        return '입/출금 내역';
      case '/profile':
        return '마이 페이지';
      case '/signUp':
        return '회원가입';
      default:
        return ' ';
    }
  };

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="h-[50px] bg-white top-0 border-y sticky z-10 flex justify-between items-center px-2">
      <Button variant="link" onClick={handleGoBack}>
        <IoIosArrowBack
          size="20"
          className="text-gray-200 hover:text-blue-500"
        />
      </Button>
      <p className="text-lg font-bold text-blue-500">{getPageName()}</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/profile">
              <FaUserLarge
                size="16"
                className="text-gray-200 hover:opacity-50 mr-3"
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent className="relative -ml-10">
            <p>마이페이지</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default CommonHeader;
