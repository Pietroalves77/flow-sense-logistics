
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddressInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

const AddressInput = ({
  value,
  onChange,
  placeholder = "Digite o endereço",
  label = "Endereço",
}: AddressInputProps) => {
  return (
    <div className="w-full">
      <Label className="block mb-2 text-sm font-medium">
        {label}
      </Label>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white focus:border-trackflow-blue focus:ring-1 focus:ring-trackflow-blue"
      />
    </div>
  );
};

export default AddressInput;
