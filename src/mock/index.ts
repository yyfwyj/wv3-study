import { lazyLoadingAPI } from "./LazyLoading/LazyLoading.ts";
import { MockMethod } from 'vite-plugin-mock';

export default [...lazyLoadingAPI] as MockMethod[]