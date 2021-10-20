/* eslint-disable @typescript-eslint/naming-convention */

declare namespace NodeJS {
	export interface ProcessEnv {
		PORT?: number;
		GITHUB_CLIENT_ID: string;
		GITHUB_CLIENT_SECRET: string;
		JWT_SECRET: string;
	}
	interface Process {
		env: ProcessEnv;
	}
}
