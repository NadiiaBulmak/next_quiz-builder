'use client'
import { useEffect, useRef, useState } from 'react';
import { Textarea } from '../ui/textarea';

export default function AutoResizeTextarea({placeholder}: {placeholder: string}) {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = '0px';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [value]);

  return (
    <Textarea
      placeholder={placeholder}
      ref={textareaRef}
      rows={1}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full resize-none overflow-hidden border-1 p-2 text-sm rounded-md"
    />
  );
}
