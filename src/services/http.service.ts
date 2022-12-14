

import axios from "axios";
import { DTO, ResponseDTO } from "src/dto/base.dto";

export class HttpService {
	private token: string | undefined;

	constructor() {
		axios.interceptors.response.use((response) => {
			// TODO: handle token;
			return response;
		})
	}

	public get tokenInfo(): string {
		// return this.token && jwtDecode(this.token);
		return '';
	}

	public async request<T extends DTO>(dto: T): Promise<ResponseDTO<InstanceType<T['responseClass']>>> {
		try {
        const response = await axios({
			method: dto.method,
			headers: {
                Authorization: this.token ? 'Bearer ' + this.token : '',
                'X-Frame-Options': 'DENY',
                'Content-Security-Policy': "frame-ancestors 'self';",
                ...dto.headers
            },
			url: dto.url,
			data: dto.body,
			params: dto.query,
            responseType: dto.responseType
		});
        const data = response.data || response.data.data;
			return { ...data };
    }
    catch(error :any) {
        return {
            data: undefined,
            responseKey: 'unknown'
        };
    }
		
	}
}
