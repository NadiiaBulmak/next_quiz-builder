'use client';
import { useEffect, useRef, useState } from 'react';
import { Textarea } from '../ui/textarea';
import type { AutoResizeTextareaProps } from '@/types/props';

export default function AutoResizeTextarea({
  placeholder,
  initValue = '',
  value,
  onValueChange,
}: AutoResizeTextareaProps) {
  const [innerValue, setInnerValue] = useState(initValue);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const currentValue = value ?? innerValue;

  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = '0px';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [currentValue]);

  const handleChange = (nextValue: string) => {
    if (value === undefined) {
      setInnerValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  return (
    <Textarea
      placeholder={placeholder}
      ref={textareaRef}
      rows={1}
      value={currentValue}
      onChange={(e) => handleChange(e.target.value)}
      className="w-full resize-none overflow-hidden border-1 p-2 text-sm rounded-md"
    />
  );
}
