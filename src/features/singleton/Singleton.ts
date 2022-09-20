export class Singleton {
	private static _instance: Singleton | null = null;
	private data: string[] = [];

	constructor() {
		if (Singleton._instance && Singleton._instance !== this) {
			console.warn("Note: This class is supposed to be used as a Singleton!");
		}
	}

	public static getInstance() {
		return this._instance || (this._instance = new this());
	}

	private async funcB(data: string) {
		this.data.push(data);

		switch (data) {
			case "increment": {
				if (this.data.length % 2 !== 1 || this.data[this.data.length - 1] !== "increment") {
					console.error(this.data);
					throw new Error("RACE CONDITION IS POSSIBLE");
				}
				break;
			}
			case "decrement": {
				if (this.data.length % 2 !== 0 || this.data[this.data.length - 1] !== "decrement") {
					console.error(this.data);
					throw new Error("RACE CONDITION IS POSSIBLE");
				}
				break;
			}
			default: {
				break;
			}
		}
	}

	public async funcA(data: string) {
		console.log("data", data);
		await this.funcB(data);
		console.log(data + " finished");
	}
}
