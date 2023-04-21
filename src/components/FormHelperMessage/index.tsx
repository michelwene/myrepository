interface FormHelperMessageProps {
  message: string;
}

export function FormHelperMessage({ message }: FormHelperMessageProps) {
  return (
    <div className="my-2">
      <p className="text-[14px] text-left text-red-500 font-bold">{message}</p>
    </div>
  );
}
