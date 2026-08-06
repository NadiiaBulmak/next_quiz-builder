import { LabelInputAreaType } from '@/types/props';
import { Label } from '../../ui/label';

export const LabelInputArea = ({ label, children }: LabelInputAreaType) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="pl-2">{label}</Label>
      {children}
    </div>
  );
};
