import React from 'react';
import { Message } from '@/components/Message';
import { TMessage } from '@/types';
import { MessageSquare } from 'lucide-react';

interface IMessagesProps {
  messages: TMessage[];
}

export const Messages = ({ messages }: IMessagesProps) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length ? (
        messages.map((message) => (
          <Message
            key={message.id}
            content={message.content}
            isUserMessage={message.role === 'user'}
          />
        ))
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <MessageSquare className="size-8 text-blue-500" />
          <h3 className="font-semibold text-xl text-white">You're all set!</h3>
          <p>Ask your first question to get started.</p>
        </div>
      )}
    </div>
  );
};
