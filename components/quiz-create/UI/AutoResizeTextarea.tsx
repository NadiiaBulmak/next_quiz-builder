'use client';
import { useEffect, useRef, useState } from 'react';
import { Textarea } from '../../ui/textarea';
import type { AutoResizeTextareaProps } from '@/types/props';

export default function AutoResizeTextarea({
  name,
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
      name={name}
      placeholder={placeholder}
      ref={textareaRef}
      rows={1}
      value={currentValue}
      onChange={(e) => handleChange(e.target.value)}
      className="w-full resize-none overflow-hidden border border-gray-300 rounded-md p-2 text-sm focus-visible:border-lime-500 focus-visible:ring-2 focus-visible:ring-lime-500/30 disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
}
