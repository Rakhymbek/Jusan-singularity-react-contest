import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
  } from 'react-redux'
  import { RootState } from '../redux/reducer'
  
  export const useTypedSelector: TypedUseSelectorHook<RootState> = useReduxSelector