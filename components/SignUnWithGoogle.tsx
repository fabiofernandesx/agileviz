'use client'

import { Button } from '@/components/ui/button'
import { ArrowRightCircle } from 'lucide-react'
import { signIn } from 'next-auth/react'

export default function SigninWithGoogle() {
  return (
    <Button
      onClick={() =>
        signIn('google', {
          callbackUrl: `${window.location.origin}`,
        })
      }
      className='mt-6'
      variant='secondary'
    >
      Login with Google <ArrowRightCircle className='w-4 h-4 ml-4' />
    </Button>
  )
}
