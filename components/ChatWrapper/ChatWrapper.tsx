import React from 'react';
import MessageSendForm from './client/MessageSendForm';
import { TMessage } from '@/types';

interface IChatWrapperProps {
  sessionId: string;
  initialMessages: TMessage[];
}

export const ChatWrapper = ({ sessionId, initialMessages }: IChatWrapperProps) => {
  return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
        <MessageSendForm sessionId={sessionId} initialMessages={initialMessages} />
      </div>
    </div>
  );
};
