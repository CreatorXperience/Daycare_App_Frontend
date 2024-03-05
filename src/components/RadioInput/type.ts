import { TChild, TExtendChildcare } from "../../pages/UserInputData/type";

type TRadioInput = {
    name: string;
    label: string;
    isChecked?: boolean,
    setForm: React.Dispatch<React.SetStateAction<TExtendChildcare<TChild & {
      location: string;
  }, "_id">>>
  };

  export type {TRadioInput}