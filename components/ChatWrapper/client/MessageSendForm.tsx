'use client';

import React from 'react';
import { useChat } from 'ai/react';
import { Messages } from '@/components/Messages';
import { ChatInput } from '@/components/ChatInput';
import { TMessage } from '@/types';

interface IMessageSendFormProps {
  sessionId: string;
  initialMessages: TMessage[];
}

const MessageSendForm = ({
  sessionId,
  initialMessages,
}: IMessageSendFormProps) => {
  const {
    messages,
    handleInputChange,
    input: AIinput,
    handleSubmit,
    setInput,
  } = useChat({
    api: '/api/chat-stream',
    body: { sessionId },
    initialMessages,
  });
  return (
    <>
      <Messages messages={messages} />
      <ChatInput
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={AIinput}
        setInput={setInput}
      />
    </>
  );
};

export default MessageSendForm;
