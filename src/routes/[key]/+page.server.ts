import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from '@db';
import { page } from '$app/stores';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index.js';
import sanitize from 'sanitize-html';
import sodium from 'libsodium-wrappers';

/** @type {PageServerLoad} */
export async function load({ params }) {
	const { key } = params;

	const data = await prisma.paste.findUnique({
		where: { key }
	});

	if (!data) throw error(404, 'Not found');

	let { content, language, encrypted } = data;

	let contentHtml: string;

	try {
		if (!encrypted && language !== 'plaintext') {
			loadLanguages([language]);
			contentHtml = Prism.highlight(content, Prism.languages[language], language);
		} else {
			contentHtml = sanitize(content, { disallowedTagsMode: 'escape' });
		}
	} catch (e) {
		console.error(e);
		contentHtml = sanitize(content, { disallowedTagsMode: 'escape' });
	}

	return {
		content,
		contentHtml,
		encrypted,
		language
	};
}