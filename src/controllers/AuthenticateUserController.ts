import { Request, Response } from 'express';

import { AuthenticateUserService } from '../services';

import { IController } from './IController';

interface IRequest extends Request {
	body: {
		code: string;
	};
}

export class AuthenticateUserController implements IController {
	async handle(request: IRequest, response: Response) {
		const { code } = request.body;

		const service = new AuthenticateUserService();
		const accessToken = await service.execute(code);

		return response.json(accessToken);
	}
}
