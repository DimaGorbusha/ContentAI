import { Configuration, OpenAIApi } from 'openai';
import OPENAI_API_KEY from '@shared/openaiapi';

export const generatePrompts = async (role, prompt) => {
	const configuration = new Configuration({
		apiKey: OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(configuration);

	const completion = openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [{ role: role, content: prompt }],
	});
	return(completion.data.choices[0].message);
};
