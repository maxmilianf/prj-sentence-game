import { MutableRefObject, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { createContext, Dispatch, SetStateAction } from 'react';

type stringSetState = Dispatch<SetStateAction<string>>;
type inputRef = MutableRefObject<TextInput | null> | null;

interface SentenceContext {
  whoSentence: string;
  whatSentence: string;
  whenSentence: string;
  whereSentence: string;
  fullSentence: string;
  setWhoSentence: stringSetState;
  setWhatSentence: stringSetState;
  setWhenSentence: stringSetState;
  setWhereSentence: stringSetState;
  whoInputRef: inputRef;
  whatInputRef: inputRef;
  whenInputRef: inputRef;
  whereInputRef: inputRef;
  displaySentence: boolean | string;
}

type SentenceContextProviderProps = {
  children: React.ReactNode;
};

const contextDefaults = {
  whoSentence: '',
  whatSentence: '',
  whenSentence: '',
  whereSentence: '',
  fullSentence: '',
  setWhoSentence: () => {},
  setWhatSentence: () => {},
  setWhenSentence: () => {},
  setWhereSentence: () => {},
  whoInputRef: null,
  whatInputRef: null,
  whenInputRef: null,
  whereInputRef: null,
  displaySentence: true,
};

export const SentenceContext = createContext<SentenceContext>(contextDefaults);

export const SentenceContextProvider = ({
  children,
}: SentenceContextProviderProps) => {
  const [whoSentence, setWhoSentence] = useState(contextDefaults.whoSentence);
  const [whatSentence, setWhatSentence] = useState(
    contextDefaults.whatSentence
  );
  const [whenSentence, setWhenSentence] = useState(
    contextDefaults.whenSentence
  );
  const [whereSentence, setWhereSentence] = useState(
    contextDefaults.whereSentence
  );
  const fullSentence = `"${whoSentence} ${whatSentence} ${whereSentence} ${whenSentence}"`;
  const whoInputRef = useRef(contextDefaults.whatInputRef);
  const whatInputRef = useRef(contextDefaults.whatInputRef);
  const whenInputRef = useRef(contextDefaults.whatInputRef);
  const whereInputRef = useRef(contextDefaults.whatInputRef);
  const displaySentence =
    whoSentence && whatSentence && whenSentence && whereSentence !== '';

  console.log('DISPLAY?', displaySentence);

  const providerValues = {
    whoSentence,
    whatSentence,
    whenSentence,
    whereSentence,
    fullSentence,
    setWhoSentence,
    setWhatSentence,
    setWhenSentence,
    setWhereSentence,
    whoInputRef,
    whatInputRef,
    whenInputRef,
    whereInputRef,
    displaySentence,
  };
  return (
    <SentenceContext.Provider value={providerValues}>
      {children}
    </SentenceContext.Provider>
  );
};
