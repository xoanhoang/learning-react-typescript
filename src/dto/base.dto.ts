import { ResponseType } from 'axios';
import { HTTP_METHOD } from 'src/constants/api';

export abstract class DTO {
	public abstract param: object | undefined;
	public abstract query: unknown;
	public abstract body: unknown;
	public abstract readonly url: string;
	public abstract readonly method: HTTP_METHOD;
	public responseType?: ResponseType;
	public headers?: object;
}

export abstract class ResponseDTO<T> {
	public readonly responseKey?: string;
	public readonly timestamp?: string;
	public abstract readonly data: T | undefined;
}
