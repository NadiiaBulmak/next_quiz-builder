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

export const UserDropdown = ({
  name,
  email,
  opened = false,
  className = '',
  previewMode = false,
}: SidebarBottomType & {
  email?: string;
  className?: string;
  previewMode?: boolean;
}) => {
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
    <div
      className={`flex min-w-0 max-w-[50%] items-center gap-2 ${openedState ? '' : ''} ${className}`}
    >
      <ActionToast state={state} />
      <DropdownMenu>
        <DropdownMenuTrigger
          className={`flex min-w-0 max-w-full items-center gap-2 rounded-md border border-lime-500 bg-black p-2 text-white hover:border-lime-500 hover:shadow-[0_0_0_3px_rgba(132,204,22,0.15)] lg:gap-3 lg:p-1`}
          onClick={() => setOpenedState(!openedState)}
        >
          <Dot
            width={30}
            height={30}
            className="flex-shrink-0 text-lime-500 animate-pulse"
          />
          <div
            className={` flex-1 overflow-hidden transition-[max-width,opacity] duration-300 relative lg:right-3`}
          >
            <div className="flex w-full flex-col items-start gap-0 overflow-hidden">
              <p className="max-w-full truncate text-sm font-semibold">
                {name}
              </p>
              <p className="max-w-full truncate text-xs text-gray-300">
                {email}
              </p>
            </div>
          </div>
          <div
            className={`mr-1 flex-shrink-0 transition-[transform] duration-300 lg:mr-2`}
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
            {previewMode ? (
              <div className="w-full h-full flex items-center gap-1">
                <Settings className="mr-2" width={24} height={24} />
                {CONTENT.shared.user_menu.settings}
              </div>
            ) : (
              <Link
                href={NAV_LINKS.settings}
                className="w-full h-full flex items-center gap-1"
              >
                <Settings className="mr-2" width={24} height={24} />
                {CONTENT.shared.user_menu.settings}
              </Link>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem className="text-base p-2 cursor-pointer">
            <form action={previewMode ? undefined : action} className="w-full">
              {previewMode ? (
                <div className="w-full flex items-center disabled:opacity-50">
                  <LogOut
                    className="mr-2 text-red-700 hover:text-red-500"
                    width={24}
                    height={24}
                  />
                  {CONTENT.shared.user_menu.log_out}
                </div>
              ) : (
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
              )}
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
