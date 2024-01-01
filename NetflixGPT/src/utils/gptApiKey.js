import OpenAI from 'openai';
import { SEARCH_GPT_KEY } from './constant';

const openai = new OpenAI({
  apiKey: SEARCH_GPT_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default openai