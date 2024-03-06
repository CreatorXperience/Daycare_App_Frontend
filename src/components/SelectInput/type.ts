type SelectOption = {
    value: string;
    label: string;
  };
  
  type SelectInputProps = {
    name: string;
    id: string;
    placeholder: string;
    options: SelectOption[]; 
  };

  export type {SelectInputProps,SelectOption}