import React from 'react';
import { cn } from '@/utils/utils';
import { TMessage } from '@/types';
import { Bot, User } from 'lucide-react';

interface IMessageProps {
  content: string;
  isUserMessage: boolean;
}

export const Message = ({ content, isUserMessage }: IMessageProps) => {
  return (
    <div
      className={cn({
        "bg-zinc-800": isUserMessage,
        "bg-zinc-900/25": !isUserMessage,
      })}
    >
      <div className="p-6">
        <div className="max-w-3xl mx-auto flex items-start gap-2.5">
          <div
            className={cn(
              'size-10 shrink-0 aspect-square rounded-full border border-zinc-700 flex justify-center items-center',
              {
                'bg-blue-950 border-blue-700 text-zinc-200': isUserMessage,
              }
            )}
          >
            {isUserMessage ? (
              <User className="size-5" />
            ) : (
              <Bot className="size-5 text-white" />
            )}
          </div>
          <div className="flex flex-col ml-6 w-full">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {isUserMessage ? 'You' : 'Bot'}
              </span>
              <p className='text-sm font-normal py-2.5 text-gray-900 dark:text-white'>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
