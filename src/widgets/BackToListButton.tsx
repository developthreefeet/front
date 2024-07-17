'use client';

import { Button } from '@/shared/ui/ui/button';
import Link from 'next/link';
import React from 'react';

const BackToListButton = () => {
  const { pathname } = window.location;
  const listPath = pathname.split('/').slice(0, 2).join('/');

  return (
    <Button variant="secondary" className="w-32">
      <Link href={`${listPath}`}>목록으로 돌아가기</Link>
    </Button>
  );
};

export default BackToListButton;
