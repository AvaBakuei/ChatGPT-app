import OpenAI from 'openai';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const isBrowserEnvironment = typeof window !== 'undefined';

const openai = isBrowserEnvironment
    ? new OpenAI({ apiKey, dangerouslyAllowBrowser: true })
    : new OpenAI({ apiKey });

export async function sendMsgToOpenAI(message) {
    try {
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            prompt: message,
            temperature: 0.7,
            max_token: 256,
        });

        return chatCompletion.choices[0].text;
    } catch (e) {
        toast.error(e.message, {
            position: toast.POSITION.TOP_CENTER,
        });
    }
}