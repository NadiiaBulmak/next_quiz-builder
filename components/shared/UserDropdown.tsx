'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SidebarBottomType } from '@/types/props';
import { ChevronDown, ChevronUp, Dot, Settings, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { NAV_LINKS } from '@/constants/nav_links';
import { logout } from '@/app/actions/auth/logout';
import { useActionState } from 'react';
import { CONTENT } from '@/constants/content';
import { ActionToast } from './FormFeedback';

export default function UserDropdown({
  name,
  email,
  opened = false,
  className = '',
}: SidebarBottomType & { email?: string; className?: string }) {
  const [openedState, setOpenedState] = useState(opened);
  const router = useRouter();
  const [state, action, isPending] = useActionState(logout, {
    success: false,
    message: '',
  });

  useEffect(() => {
    if (state?.success) {
      router.push(NAV_LINKS.login);
    }
  }, [router, state?.success]);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <ActionToast state={state} />
      <DropdownMenu>
        <DropdownMenuTrigger
          className="p-1 flex items-center gap-3 cursor-pointer items-center border rounded-md border-lime-500 hover:border-lime-500 hover:shadow-[0_0_0_3px_rgba(132,204,22,0.15)] bg-black text-white"
          onClick={() => setOpenedState(!openedState)}
        >
          <Dot
            width={30}
            height={30}
            className="flex-shrink-0 text-lime-500 animate-pulse"
          />
          <div
            className={`overflow-hidden transition-[max-width,opacity] duration-300  relative right-3 ${opened ? 'max-w-full opacity-100' : 'max-w-0 opacity-0'}`}
          >
            <div className="flex flex-col items-start gap-0 ">
              <p className="text-sm font-semibold">{name}</p>
              <p className="text-xs text-gray-300">{email}</p>
            </div>
          </div>
          <div
            className={`flex-shrink-0 transition-[transform] duration-300 mr-2 ${openedState ? 'rotate-0' : 'rotate-180'}`}
          >
            {openedState ? (
              <ChevronDown width={16} height={16} />
            ) : (
              <ChevronUp width={16} height={16} />
            )}
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer text-base p-2">
            <Link
              href={NAV_LINKS.settings}
              className="w-full h-full flex items-center gap-1"
            >
              <Settings className="mr-2" width={24} height={24} />
              {CONTENT.shared.user_menu.settings}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-base p-2 cursor-pointer">
            <form action={action} className="w-full">
              <button
                type="submit"
                disabled={isPending}
                className="w-full flex items-center disabled:opacity-50"
              >
                <LogOut
                  className="mr-2 text-red-700 hover:text-red-500"
                  width={24}
                  height={24}
                />
                {CONTENT.shared.user_menu.log_out}
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
