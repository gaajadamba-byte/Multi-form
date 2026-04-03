export const TextField = (props) => {
  const {
    label,
    placeholder,
    value,
    onChange,
    error,
    required = false,
    type = "text",
  } = props;
  return (
    <div className="space-y-2">
      <label className="font-semibold text-xs">
        {label} {required && <span className="text-[#E14942]">*</span>}
      </label>
      <input
        className={`w-full h-11 rounded-lg border  p-3 ${error ? "border-[#e14942]" : "border-[#cbd5e1]"}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="{type}"
      />
      {error && <p className=" text-sm text-[#E14942]">{error}</p>}
    </div>
  );
};
