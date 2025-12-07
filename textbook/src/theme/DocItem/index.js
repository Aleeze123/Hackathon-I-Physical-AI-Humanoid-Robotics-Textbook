import React from 'react';
import DocItem from '@theme-original/DocItem';
import ChatbotButton from '@site/src/components/ChatbotButton'; // Import ChatbotButton

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <ChatbotButton /> 
      <h1></h1>
    </>
  );
}
