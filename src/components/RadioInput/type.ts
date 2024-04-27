import { TChild, TExtendChildcare } from "../../pages/ChildcareProfile/type";


type TRadioInput = {
    name: string;
    label: string;
    isChecked?: boolean,
    setForm: React.Dispatch<React.SetStateAction<TExtendChildcare<TChild & {
      location: string;
  }, "_id">>> 
  };

  export type {TRadioInput}